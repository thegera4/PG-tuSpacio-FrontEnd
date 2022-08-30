import { GET_CATEGORIES, GET_ALL_PRODUCTS, SET_CURRENT_HOME_PAGE, GET_DETAIL, SEARCH_BY_CATEGORIE} from "../actions";

const initialState = {
    products : [],
    currentPageHome: 1, 
    productDetail: {},
    categories: []
}
  

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case SEARCH_BY_CATEGORIE:
      return {
        ...state,
        products: action.payload
      }
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
    case GET_DETAIL:
      return {
         ...state,
         productDetail: action.payload
      };
    default:
        return state;
  }
} 

export default rootReducer;