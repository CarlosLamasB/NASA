//import logo from './logo.svg';
//import './App.css';
import React from "react";

//import Favorites from "./components/Favorites/Favorites.jsx";//
import Home from "./componentes/Home/Home.jsx";//
import NavBar from "./componentes/NavBar/NavBar.jsx";//
import { Route,Switch} from "react-router-dom";
import FactAPOD from "./componentes/FactAPOD/FactAPOD.jsx";




function App() {
    return (
        <div>
           <NavBar />
        

        <Route  path='/apod' component={FactAPOD} />


            <Route path="/" exact component={Home} />
            
           {/*<Route exact path='/'>
               <Home/>
    </Route>*/}
           {/*<Route path="/apod">
                    <FactAPOD/>
    </Route>*/}       

            
            
              
        </div>
    );
  }
  
  export default App;
  