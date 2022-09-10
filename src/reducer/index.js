import {
  GET_CATEGORIES,
  GET_ALL_PRODUCTS,
  SET_CURRENT_HOME_PAGE,
  GET_DETAIL,
  SEARCH_BY_CATEGORIE,
  GET_ALL_BRANDS,
  SEARCH_BY_BRAND,
  ORDER_BY_PRICE,
  ORDER_BY_NAME,
  POST_PRODUCT,
  GET_NAME,
  ORDER_BY_RATING,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADMIN_OPTION,
  //ADD_NOTIFICATION,
  //DELETE_NOTIFICATION,
  ORDERS_FILTERS,
  CLEAR_CART,
  REMOVE_ONE,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
  UPDATE_ORDER_STATUS,
  CLEAN_ORDER_DETAIL,
  CREATE_CART,
} from "../actions";

/* LOCALSTORAGE FAVORITES */
function getLocalFavorites() {
  let productsFav = window.localStorage.getItem("productsFav");
  if (productsFav) productsFav = JSON.parse(productsFav);
  return productsFav;
}

function setLocalFavorites(productsFav) {
  window.localStorage.setItem("productsFav", JSON.stringify(productsFav));
}

/* LOCALSTORAGE CART */
// function getLocalCart() {
//   let productsCart = window.localStorage.getItem("productsCart");
//   if (productsCart) productsCart = JSON.parse(productsCart);
//   return productsCart;
// }

// function setLocalCart(productsCart) {
//   window.localStorage.setItem("productsCart", JSON.stringify(productsCart));
// }

const initialState = {
  products: [],
  orders: [],
  orderDetail: [],
  productsCopy:[],
  currentPageHome: 1,
  productDetail: {},
  categories: [],
  brands: [],
  search: [],
  favorites: getLocalFavorites(),
  cart: [],
  adminOption: 0,
  notification: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ALL_BRANDS:
      // const allBrands = state.products.map((p) => p.brand);  // mapea todos las brands
      // const brands = [...new Set(allBrands)]; // elimina las repetidas
      const brands = [
        "dior",
        "moov",
        "anna sui",
        "l'oreal",
        "misa",
        "salon perfect",
        "orly",
        "wet n wild",
        "maybelline",
        "pacifica",
        "china glaze",
        "essie",
        "revlon",
        "sante",
        "pure anada",
        "butter london",
        "suncoat",
        "sinful colours",
        "mineral fusion",
        "covergirl",
        "piggy paint",
        "nyx",
        "benefit",
        "smashbox",
        "zorah",
        "physicians formula",
        "almay",
        "marcelle",
        "e.l.f.",
        "dr. hauschka",
        "fenty",
        "clinique",
        "cargo cosmetics",
        "dalish",
        "burt's bees",
        "milani",
        "colourpop",
        "annabelle",
        "deciem",
        "stila",
        "mistura",
      ];
      return {
        ...state,
        brands: brands,
      };
    case ORDERS_FILTERS:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_BY_CATEGORIE:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_BY_BRAND:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_RATING:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsCopy: action.payload
      };
    case SET_CURRENT_HOME_PAGE:
      return {
        ...state,
        currentPageHome: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
      };
    case ADD_TO_WISHLIST: {
      let newState;
      if (state.favorites) {
        if (state.favorites.find((p) => p.id === action.payload.id))
          newState = state;
        else {
          newState = {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }
      } else {
        newState = {
          ...state,
          favorites: [action.payload],
        };
      }
      setLocalFavorites(newState.favorites);
      return newState;
    }
    case REMOVE_FROM_WISHLIST: {
      let newState;
      if (state.favorites) {
        newState = {
          ...state,
          favorites: state.favorites.filter((p) => p.id !== action.payload),
        };
      } else {
        newState = state;
      }
      setLocalFavorites(newState.favorites);
      return newState;
    }
    case ADD_TO_CART:
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemCart = state.cart.find((item) => item.id === newItem.id); // busco si ya esta en el carrito y lo guardo
      return itemCart
        ? {
            ...state,
            cart: state.cart.map((i) =>
              i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };
    case SET_ADMIN_OPTION:
      return {
        ...state,
        adminOption: action.payload,
      };
    case REMOVE_ONE:
      let itemToRemove = state.cart.find((ele) => ele.id === action.payload);
      return itemToRemove.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER_BY_ID:
      return {
        ...state,
        orderDetail: action.payload,
      };
    case UPDATE_ORDER_STATUS:
      return {
        ...state,
        orders: state.orders
      };
    case CLEAN_ORDER_DETAIL:
        return {
          ...state,
          orderDetail: []
        }
    case CREATE_CART:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default rootReducer;
