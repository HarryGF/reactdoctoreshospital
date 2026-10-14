import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {

    urlDoctores = Global.urlApiDoctores

    state = {
        detalles: {}
    }

    loadDetalles = () => {
        let id = this.props.id
        console.log('Cargando detalles del doctor' + id)
        let request = '/api/Doctores/' + id
        axios.get(this.urlDoctores + request).then((response) => {
            this.setState({
                detalles: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDetalles()
    }

    render() {
        return (
            <div>
                <h3>Detalles del doctor {this.props.id}</h3>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.detalles.apellido}</td>
                            <td>{this.state.detalles.especialidad}</td>
                            <td>{this.state.detalles.salario}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
