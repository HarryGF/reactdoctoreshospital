import React, { Component } from 'react'
import ServiceEjemplo from './services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {
    service = new ServiceEjemplo()
    state = {
        mensaje1: "",
        mensaje2: ""
    }

    loadData = () => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2: this.service.getDia('Harry')
        })
    }

    componentDidMount = () => {
        this.loadData()
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Service Component</h1>
                <h3>{this.state.mensaje1}</h3>
                <h3>{this.state.mensaje2}</h3>
            </div>
        )
    }
}
