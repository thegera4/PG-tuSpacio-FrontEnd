import { GET_CATEGORIES, GET_ALL_PRODUCTS, SET_CURRENT_HOME_PAGE, GET_DETAIL, SEARCH_BY_CATEGORIE, 
  GET_ALL_BRANDS, SEARCH_BY_BRAND, ORDER_BY_PRICE, ORDER_BY_NAME, POST_PRODUCT, GET_NAME, ORDER_BY_RATING, 

  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART, SET_ADMIN_OPTION, CLEAR_CART, REMOVE_ONE} from "../actions";


const initialState = {
  products: [],
  currentPageHome: 1,
  productDetail: {},
  categories: [],
  brands: [],
  search: [],
  favorites: [],
  cart: [],
  adminOption: 0,
  notification: 0,
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
    case ADD_TO_WISHLIST:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        favorites: state.favorites.filter(
          (el) => el.id !== action.payload)
      }
      
      case ADD_TO_CART:
        let newItem = state.products.find ((product) => product.id === action.payload)
        let itemCart = state.cart.find((item) => item.id === newItem.id) // busco si ya esta en el carrito y lo guardo
        return itemCart ? 
        {...state, 
        cart: state.cart.map(i => 
          i.id === newItem.id 
          ? {...i, quantity: i.quantity + 1} : i),}
          : {...state, cart: [...state.cart, {...newItem, quantity: 1}]}



        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(
              (el) => el.id !== action.payload)
          }

          case SET_ADMIN_OPTION:
            return {
              ...state,
              adminOption: action.payload
          }
          case REMOVE_ONE:
          let itemToRemove = state.cart.find(ele => ele.id === action.payload)
          return itemToRemove.quantity > 1 ? {
            ...state,
            cart: state.cart.map(item => 
              item.id === action.payload ? 
              {...item, quantity: item.quantity - 1} 
              : item),
              } 
              : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
              }

            case CLEAR_CART:
            return {
              ...state,
              cart: [],
            }
      default:
      return state;
  }
}

export default rootReducer;