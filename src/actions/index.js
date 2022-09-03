import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_CURRENT_HOME_PAGE = "SET_CURRENT_HOME_PAGE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_BY_CATEGORIE = "SEARCH_BY_CATEGORIE";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const SEARCH_BY_BRAND = "SEARCH_BY_BRAND";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_NAME = "GET NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_ADMIN_OPTION = "SET_ADMIN_OPTION";
export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

// const API = 'http://localhost:3001/api';//API LOCAL

export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/products`);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getAllBrands() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GET_ALL_BRANDS,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function orderByAbc(order) {
  return async function (dispatch) {
    try {
      let jsonAZ;
      if (order)
        jsonAZ = await axios.get(`/products/ordername/?orderby=${order}`);
      // http://localhost:3001/api/products/ordername/?orderby=a-to-z
      else jsonAZ = await axios.get(`/products`);
      return dispatch({
        type: ORDER_BY_NAME,
        payload: jsonAZ.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getCategories() {
  return function (dispatch) {
    return axios
      .get(`/categories`) // http://localhost:3001/api/categories
      .then((c) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: c.data.allCategories,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function filterByBrand(brand) {
  return async function (dispatch) {
    try {
      var jsonB;
      if (brand) jsonB = await axios.get(`/products/brand/?brand=${brand}`);
      else jsonB = await axios.get(`/products`);
      return dispatch({
        type: SEARCH_BY_BRAND,
        payload: jsonB.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function filterByCategory(categorie) {
  return async function (dispatch) {
    try {
      let jsonC;
      if (categorie)
        jsonC = await axios.get(`/categorie/?categorie=${categorie}`);
      else jsonC = await axios.get(`/products`);
      return dispatch({
        type: SEARCH_BY_CATEGORIE,
        payload: jsonC.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function orderByPrice(order) {
  return async function (dispatch) {
    try {
      let jsonOP;
      if (order) jsonOP = await axios.get(`/products/price/?orderby=${order}`);
      else jsonOP = await axios.get(`/products`);
      return dispatch({
        type: ORDER_BY_PRICE,
        payload: jsonOP.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function setCurrentHomePage(page) {
  return {
    type: SET_CURRENT_HOME_PAGE,
    payload: page,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/product/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("/products/search/?name=" + name);
      return dispatch({
        type: GET_NAME,
        payload: json.data,
      });
    } catch (error) {
      alert("No se encontro el producto");
    }
  };
}

export function postNewProduct(payload) {
  return function (dispatch) {
    const newProdResult = axios.post(`/products`, payload);
    dispatch({
      type: POST_PRODUCT,
      payload,
    });
    return newProdResult;
  };
}

export function OrderByRating(order) {
  return async function (dispatch) {
    try {
      let jsonR;
      if (order) jsonR = await axios.get(`/products/rating/?ratingBy=${order}`);
      else jsonR = await axios.get(`/products`);
      return dispatch({
        type: ORDER_BY_RATING,
        payload: jsonR.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function addToWishlist(product) {
  return { type: ADD_TO_WISHLIST, payload: product };
}

export function removeFromWishlist(product) {
  return { type: REMOVE_FROM_WISHLIST, payload: product };
}

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product };
}

export function setAdminOption(value) {
  return {
    type: SET_ADMIN_OPTION,
    payload: value,
  };
}

export function addNotification() {
  return { type: ADD_NOTIFICATION };
}

export function deleteNotification() {
  return { type: DELETE_NOTIFICATION };
}
