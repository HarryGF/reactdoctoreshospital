import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menucomponent from './Menucomponent'
import HomeComponent from './HomeComponent'
import DoctoresComponent from './DoctoresComponent'
import CrearHospital from './CrearHospital'
import HospitalesComponent from './HospitalesComponent'
import EjemploServiceComponent from './EjemploServiceComponent'

export default class Router extends Component {
    render() {

        function DoctoresElement() {
            let { idHospital } = useParams()
            return (<DoctoresComponent idHospital={idHospital}/>)
        }

        return (
            <BrowserRouter>
                <Menucomponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent/>}/>
                    <Route path='/doctores/:idHospital' element={<DoctoresElement/>}/>
                    <Route path='/crearhospital' element={<CrearHospital/>}/>
                    <Route path='/hospitales' element={<HospitalesComponent/>}/>
                    <Route path="/ejemplo" element={<EjemploServiceComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
