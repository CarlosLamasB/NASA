//import logo from './logo.svg';
//import './App.css';
import React from "react";

//import Favorites from "./components/Favorites/Favorites.jsx";//
import Home from "./galga/components/Home/Home.jsx";//
import NavBar from "./galga/components/NavBar/NavBar.jsx";//
import { Route } from "react-router-dom";
import FactAPOD from "./galga/components/FactAPOD/FactAPOD.jsx";




function App() {
    return (
        <div>
           <NavBar />
            <Route exact path="/" component={Home} />
            
            {/*<Route path="/favs" component={Favorites} />*/}
            <Route path="/apod" component={FactAPOD} />
            
        </div>
    );
  }
  
  export default App;
  