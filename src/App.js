//import logo from './logo.svg';
//import './App.css';
import React from "react";

//import Favorites from "./components/Favorites/Favorites.jsx";//
import Home from "./componentes/Home/Home.jsx";//
import NavBar from "./componentes/NavBar/NavBar.jsx";//
import { Route} from "react-router-dom";
import FactAPOD from "./componentes/FactAPOD/FactAPOD.jsx";
import CreateMartianPhotos from "./componentes/MartianPhoto/CreateMartianPhotos.jsx";
import Favorites from "./componentes/Favorites/Favortes.jsx";




function App() {
    return (
        <div style={{position:"absolute", height:'100%', width:'100%'}}>
           <NavBar />
        

        <Route  path='/apod' component={FactAPOD} />
        <Route path="/" exact component={Home} />
       <Route path ="/CreateMartianPhotos" component={CreateMartianPhotos}/>
       <Route path='/favorites'component={Favorites}/>   
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
  