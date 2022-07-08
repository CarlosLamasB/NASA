import React from 'react';
import { connect } from 'react-redux';
import { removeFavFACT } from '../../redux/actions';
import './Favorites.css';
const Favorites = (props) => {
  console.log(props.favChars)
return(
<div className='div-all'>
  <div className='Favphotos'>
{props.favChars.length > 0 ? (
        
            props.favChars.map((char) => (
              <div
                key= {char.id} className='casita3'>
              <img src={char.imagen} alt="" className='img-dog2'/>
              <h4 className='h2-button'>{char.name}</h4>
               <button onClick={()=>{props.removeFavFACT(char.id)}} className='button-photo2'>ELIMINAR</button>



                </div>
               
            
            ))
          
        
      ) : (
        <h1>Pon algo, lo que sea :( </h1>
      )}
    
</div>  


</div>

)

}
function mapStateToProps(state) {
    return {
      favChars: state.facts,
    };
  }



export default connect(mapStateToProps, {removeFavFACT})( Favorites);