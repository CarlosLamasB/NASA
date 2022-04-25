import { ADD_FAV_FACT,CLEAR_STATE,REMOVE_FAV_FACT,SEARCH_APOD } from "./actionTYPES";
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

  export function removeFavFACT(payload){ // EL PAYLOAD VA A SER LA MOVIE QUE QUEREMOS FAVEAR
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