//defino mis estados globales
const initialState = {
    products : [],
    productDetail: {}
    
  }
  
  
  function rootReducer(state = initialState, action) {
   switch (action.type) {
  
            case "GET_PRODUCTS":
              return {
                ...state,
                products: action.payload,
              }
              case "GET_DETAIL":
                return {
                  ...state,
                  productDetail: action.payload
                }


  
                default:
                return state;
  
    }
  } 
  
  export default rootReducer;