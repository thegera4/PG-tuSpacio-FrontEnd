import { GET_PRODUCTS } from "../actions";

//defino mis estados globales
const initialState = {
  products: [],
  productsInitial: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsInitial: action.payload
      }

    default:
      return state;

  }
}

export default rootReducer;