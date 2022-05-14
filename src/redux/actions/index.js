import { ADD_FAV_FACT,CLEAR_STATE,REMOVE_FAV_FACT,SEARCH_APOD,GET_MARS_PHOTO,GET_MANIFEST_ROVER} from "./actionTYPES";
import axios from "axios";
let API_KEY='IwQMnvW3SAfLZZbBpqpziqdhfbkV5Sokf7bXpitz';


export function addFavFACT(payload){ 
    return {
      type: ADD_FAV_FACT, 
      payload
    }
  }


  export function clearState(){
    return {
      type: CLEAR_STATE
    }
  }

  export function removeFavFACT(payload){  
    return {
      type: REMOVE_FAV_FACT, 
      payload
    }
  }
  export function searchAPOD(){
    return dispatch => {
      return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => dispatch({type: SEARCH_APOD , payload: res.data }))
    }
  }

  export function getManifest(rover){
    return dispatch => {
      return axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${API_KEY}`)
        .then(res => dispatch({type: GET_MANIFEST_ROVER, payload: res.data }))
    }
  }

  
  //Debo refactorizar getManifest para que sea una funcion async con 
  // Try y catch... 
  export function getMarsPhoto(rover,sol){
    return dispatch =>
     {try{
      return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}`)
        .then(res => dispatch({type: GET_MARS_PHOTO, payload: res.data }))
    } catch(err){console.log(err)}}
  }// Try-catch.... urgenteee