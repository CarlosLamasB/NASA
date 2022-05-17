import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { getManifest,getMarsPhoto} from "../../redux/actions";
import MartianPhoto from "./MartianPhoto.jsx"
import img4 from '../../img/rover-curiosity-de-la-nasa.jpg';
import './CMPhoto.css'

const CreateMartianPhotos = () => {
//Hay que usar el useState y el SetsTATE
//componentDidMount o componentDidUpdate
//getManifest (debe estar adentro de una de las funciones del ciclo de vida)
//definir funciones que que alteren mi estado o props el cual he de usar 
//como entrada para la funcion del ciclo de vida
const [rover, setRover]= React.useState('');
const[sol, setSol]= React.useState(0);
const dispatch = useDispatch();
//const rovercitu = useSelector(state => state.roverManifest);//lo usraremos en la version 2.0 
const fotos = useSelector(state => state.marsPhoto)
function Roverizar(e){
///Debo aqui definir en funcion del evento y setRover, 
//al rover para el query
setRover(rover => e.target.name )
//Luego,debo aplicar el dispatch con getManifest

};

//React.useEffect(()=>{dispatch(getManifest(rover))},[rover,dispatch]);// Esto funciona 
//como el componentDidUpdate
//componentDidUpdate(rover){
  //   console.log(rover)
  //};
//console.log(rovercitu.photo_manifest);

function handleChange(e) {
  setSol(prevsol =>
     e.target.value
  );
}
  
  function handleSubmit(e) {
     e.preventDefault();
   dispatch(getMarsPhoto(rover,sol))
  
   }


let galeria = fotos.photos
let primerasDiez;
if(galeria){
primerasDiez=galeria.slice(0,9);


}

return (
<div className="rover">
  <img src={img4} alt="" className="img4" />
<form onSubmit={(e) => handleSubmit(e)}>
<button name="Opportunity" onClick={(e)=>Roverizar(e)}>Opportunity</button>
<button name=" Spirit"  onClick={(e)=>Roverizar(e)}>Spirit</button>
<button name="Curiosity" onClick={(e)=>Roverizar(e)}> Curiosity</button>

<label>Sol: </label>
<input type="number" onChange={(e) => handleChange(e)}></input>
    
<button type='submit'>Get Mars Photo</button>
      </form>

      {
      primerasDiez?.map(producto=>(
        
          <MartianPhoto 
          key={producto.id}
          id={producto.id}
          name={producto.camera.full_name}
          imagen={producto.img_src}
          />

          
        ))
      
        
        
      }


</div>



);
  
};

export default CreateMartianPhotos;