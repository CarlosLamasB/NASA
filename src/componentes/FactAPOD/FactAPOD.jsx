import React from 'react';
import { connect } from 'react-redux';

//debere importar aca la busqueda del APOD? yo creo que no

let FactAPOD = (props) =>{

 return(<div>
<img src={props.url} alt=""/>
<h2>{props.copyright}</h2>



 </div>)

    
}

function mapStateToProps(state){
    return {
      imagen: state.imagen
    }
  }

  export default connect(mapStateToProps)(FactAPOD);