import { ADD_FAV_FACT,CLEAR_STATE,REMOVE_FAV_FACT,SEARCH_APOD,GET_MANIFEST_ROVER,GET_MARS_PHOTO,CLEAR_ALL} from "../actions/actionTYPES";


const initialState = {
  facts: [],
  imagen: {},
  roverManifest:{},
  marsPhoto:{}
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type
    // Acá va tu código:
  ) {

   case ADD_FAV_FACT:
   return {
    ...state,
    facts: [...state.facts, action.payload]//aqui es donde debo usar el concat :3
  };
case SEARCH_APOD :
  return {
    ...state,
    imagen: action.payload
  };
 case GET_MARS_PHOTO:
   return {
     ...state,
     // marsPhoto: state.marsPhoto.concat(action.payload.photos)
     marsPhoto: action.payload   
    }
case REMOVE_FAV_FACT:
  return {
    ...state,
    facts: state.facts.filter(cosa => cosa.id !== action.payload)

  };
  case GET_MANIFEST_ROVER:
    return {
     ...state,
     roverManifest: action.payload,
   };
case CLEAR_ALL:
  return{
    ...state,
  marsPhoto: {},
  }


    default: return state;
  }
};

export default rootReducer;
