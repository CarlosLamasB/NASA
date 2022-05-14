import React from 'react';
import { connect } from 'react-redux';
import { removeFavFACT } from '../../redux/actions';
const Favorites = (props) => {
  console.log(props.favChars)
return(
<div>Favorites
{props.favChars.length > 0 ? (
        
            props.favChars.map((char) => (
              <div
                key= {char.id}>
              <img src={char.imagen} alt="" />
              <h4>{char.name}</h4>
               <button onClick={()=>{props.removeFavFACT(char.id)}}>ELIMINAR</button>



                </div>
               
            
            ))
          
        
      ) : (
        <h1>Pon algo, lo que sea :( </h1>
      )}
    
  


</div>

)

}
function mapStateToProps(state) {
    return {
      favChars: state.facts,
    };
  }



export default connect(mapStateToProps, {removeFavFACT})( Favorites);