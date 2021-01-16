import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Navbar from './navbar/Navbar'
import { Link } from 'react-router-dom'
import '../styles/Inicio.css'
import * as BiIcons from "react-icons/bi";
const tablaLugares =[
  { pais:"peru", ciudad:"cusco",ver: <Link to="/Buscar/cusco" className='btn btn-primary' style={{ textDecoration: 'none' }} title="Inicio">Mas Info</Link>},
  { pais:"peru", ciudad:"arequipa",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"puno",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"lima",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"tacna",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"ayacucho",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"trujillo",ver:<button className='btn btn-primary'>Mas Info</button>},
  { pais:"peru", ciudad:"ica",ver:<button className='btn btn-primary'>Mas Info</button>},
];
const paginacionOpciones={
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}
class Buscar extends Component {
  state={
    busqueda: '',
    lugares: [],
    columnas:[]
  }
  onChange=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    this.filtrarElementos();
  }
  asignarColumnas=()=>{

    const columnas = [
      {
        name: 'ID',
        selector: 'id',
        sortable: true
      },
      {
        name: 'Pais',
        selector: 'pais',
        sortable: true
      },
      {
        name: 'Ciudad',
        selector: 'ciudad',
        sortable: true
      },
      {
        name: 'Ver',
        selector: 'ver',
        sortable: true,
        right:true
      }
    ];

    this.setState({columnas: columnas});
  }

  filtrarElementos=()=>{
    var search=tablaLugares.filter(item=>{
      if(item.pais.toString().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.ciudad.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
      ){
        return item;
      }
    });
    this.setState({lugares: search});
  }

  crearIndex=()=>{
    var contador=1;
    tablaLugares.map(elemento=>{
      elemento["id"]=contador;
      contador++;
    })
  }

  componentDidMount(){
    this.crearIndex();
    this.asignarColumnas();
this.setState({lugares: tablaLugares});
  }
  
render(){
  return (
    <div className="fondo">
        <Navbar/>
       
        <div className="container ">
        <div className="table-responsive">
            <div className="barraBusqueda">
                    <input
                    type="text"
                    placeholder="Buscar"
                    className="textField"
                    name="busqueda"
                    value={this.state.busqueda}
                    onChange={this.onChange}
                    />
                    <button type="button" className="btnBuscar btn-primary" /*onClick={onClear}*/>
                    {" "}
                    <BiIcons.BiSearchAlt/>
                    </button>
                </div>
            <hr/>
            <DataTable 
                columns={this.state.columnas}
                data={this.state.lugares}
                title="Lugares"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                width="600px"
                noDataComponent={<span>No se encontró ningún elemento</span>}
            />
            <hr/>
        </div>
        </div>
    </div>
  );
}
}
export default Buscar;