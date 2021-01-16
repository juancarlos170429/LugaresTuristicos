
import './App.css';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import Inicio from './components/Inicio'
import Buscar from './components/Buscar'
import Ayudenos from './components/Ayudenos'
import Cusco from './Lugares/Cusco'

function App() {
  return (
    <div className="fondo">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio}/>    
        <Route exact path="/Inicio" component={Inicio}/>      
        <Route exact path="/Buscar" component={Buscar}/>   
        <Route exact path="/Buscar/cusco" component={Cusco}/>         
        <Route exact path="/Ayudenos" component={Ayudenos}/>             
      </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
