import { GET_CATEGORIES, GET_ALL_PRODUCTS, SET_CURRENT_HOME_PAGE, GET_DETAIL, SEARCH_BY_CATEGORIE, 
  GET_ALL_BRANDS, SEARCH_BY_BRAND, ORDER_BY_PRICE, ORDER_BY_NAME, POST_PRODUCT, GET_NAME, ORDER_BY_RATING } from "../actions";

const initialState = {
  products: [],
  currentPageHome: 1,
  productDetail: {},
  categories: [],
  brands: [],
  search: []
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_ALL_BRANDS:
      // const allBrands = state.products.map((p) => p.brand);  // mapea todos las brands
      // const brands = [...new Set(allBrands)]; // elimina las repetidas
      const brands = ['dior', 'moov', 'anna sui', "l'oreal", 'misa', 'salon perfect', 'orly', 'wet n wild',
        'maybelline', 'pacifica', 'china glaze', 'essie', 'revlon', 'sante', 'pure anada', 'butter london',
        'suncoat', 'sinful colours', 'mineral fusion', 'covergirl', 'piggy paint', 'nyx', 'benefit', 'smashbox',
        'zorah', 'physicians formula', 'almay', 'marcelle', 'e.l.f.', 'dr. hauschka', 'fenty', 'clinique',
        'cargo cosmetics', 'dalish', "burt's bees", 'milani', 'colourpop', 'annabelle', 'deciem', 'stila',
        'mistura'];
      return {
        ...state,
        brands: brands
      }
    case SEARCH_BY_CATEGORIE:
      return {
        ...state,
        products: action.payload
      }
    case SEARCH_BY_BRAND:
      return {
        ...state,
        products: action.payload
      }
    case ORDER_BY_PRICE:
      return {
        ...state,
        products: action.payload
      }
    case ORDER_BY_RATING:
      return {
        ...state,
        products: action.payload
      }
    case ORDER_BY_NAME:
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


      case GET_NAME:
        return {
          ...state,
          products: action.payload
        }

    case POST_PRODUCT:
      return {
          ...state,
      }

    default:
      return state;
  }
}

export default rootReducer;