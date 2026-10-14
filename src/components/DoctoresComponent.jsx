import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import DetallesDoctor from './DetallesDoctor'

export default class DoctoresComponent extends Component {

    selectDoctor = React.createRef()
    urlDoctores = Global.urlApiDoctores

    state = {
        doctores: [],
        idDoctor: null
    }

    loadDoctores = () => {
        console.log('Cargando doctores del hospital ' + this.props.idHospital)
        let request = '/api/Doctores/DoctoresHospital/' + this.props.idHospital 
        axios.get(this.urlDoctores + request).then((response) => {
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctores()
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idHospital != this.props.idHospital) {
            this.loadDoctores()
        }
    }

    mostrarDetalles = (event) => {
        event.preventDefault()
        console.log(this.selectDoctor.current.value)
        let id = this.selectDoctor.current.value
        this.setState({
            idDoctor: id
        })
    }

    render() {
        return (
            <div>
                <h1>Doctores del hospital {this.props.idHospital}</h1>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor, index) => {
                                return(<tr key={index}>
                                    <td>{doctor.idDoctor}</td>
                                    <td>{doctor.apellido}</td>
                                    <td>
                                        <button onClick={this.mostrarDetalles} 
                                        ref={this.selectDoctor} value={doctor.idDoctor}>
                                            Mostrar detalles
                                        </button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.idDoctor &&
                    <DetallesDoctor id={this.state.idDoctor} />
                }
            </div>
        )
    }
}
