import { GET_ALL_PRODUCTS, SET_CURRENT_HOME_PAGE} from "../actions";

const initialState = {
    products : [],
    currentPageHome: 1, 
  }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CURRENT_HOME_PAGE:
      return {
        ...state,
        currentPageHome: action.payload,
      };
    default:
      return state;
  
  }
} 
  
export default rootReducer;