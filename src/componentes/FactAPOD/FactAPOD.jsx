import React from 'react';
import { connect } from 'react-redux';
import './FactAPOD.css'
//import img5 from '../../img/pilares.jpg'; 
//debere importar aca la busqueda del APOD? yo creo que no

let FactAPOD = (props) =>{

 return(<div className='apod'>
   
   <img src={props.imagen.url} alt="" className='img5'/>

<h2 className='h2-apod'>{props.imagen.title}</h2>

{/*<img src={img5} alt="" />*/}

 </div>)

    
}

function mapStateToProps(state){
    return {
      imagen: state.imagen
    }
  }

  export default connect(mapStateToProps)(FactAPOD);