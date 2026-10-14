import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink, Navigate } from 'react-router-dom'
export default class CrearHospital extends Component {

    urlHospitales = Global.urlApiHospitales
    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaDireccion = React.createRef()
    cajaTelefono = React.createRef()
    cajaCamas = React.createRef()

    state = {
        mensaje: "",
        status: false
    }

    insertHospital = (event) => {
        event.preventDefault()
        let request = "api/hospitales"
        let hospital = {
            idHospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        }
        axios.post(this.urlHospitales + request, hospital).then((response) => {
            console.log("Insertado")
            this.setState({
                mensaje: "Hospital insertado: " + hospital.nombre,
                status: true
            })
        })
        
    }

    render() {
        return (
            <div>
                <h1> Crear hospital </h1>
                <h3>{this.state.mensaje}</h3>
                <form>
                    <label>Id Hospital</label>
                    <input type="number" ref={this.cajaId} className="form-control"/>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} className="form-control"/>
                    <label>Direccion: </label>
                    <input type="text" ref={this.cajaDireccion} className="form-control"/>
                    <label>Telefono: </label>
                    <input type="text" ref={this.cajaTelefono} className="form-control"/>
                    <label>Camas: </label>
                    <input type="number" ref={this.cajaCamas} className="form-control"/>
                    <button onClick={this.insertHospital} className="btn btn-warning">
                        Crear
                    </button>
                </form>
                {
                    this.state.mensaje &&
                    <Navigate to="/hospitales"/>
                }
            </div>
        )
    }
}
