import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light back">
            <div class="container-fluid">
                <img className="logo" src="../logo.png" alt=""/>
                <img className="nom" src="../Turista.png" alt=""/>
                <div class="menu-bars" >
                    <ul class="navbar-nav ">

                        <li class="nav-item ">
                            <Link to="/Inicio" class="nav-link active " ><span>Inicio</span></Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="/Buscar"class="nav-link active  " ><span>Mas Lugares</span></Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="/Ayudenos" class="nav-link active  " ><span>Ayudanos</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar