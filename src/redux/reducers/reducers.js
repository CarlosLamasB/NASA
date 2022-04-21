import { ADD_FAV_FACT,CLEAR_STATE,REMOVE_FAV_FACT,SEARCH_APOD } from "../actions/actionTYPES";


const initialState = {
  facts: [],
  imagen: {},
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type
    // Acá va tu código:
  ) {

   case ADD_FAV_FACT:
   return {
    ...state,
    facts: action.payload,
  };
case SEARCH_APOD :
  return {
    ...state,
    imagen: action.payload
  };
 // case CREATE_PRODUCT:
   // return {
     // ...state,
      //products: state.products.concat(action.payload)
    //}
case REMOVE_FAV_FACT:
  return {
    ...state,
    facts: state.facts.filter(cosa => cosa.id !== action.payload)

  }


    default: return state;
  }
};

export default rootReducer;
