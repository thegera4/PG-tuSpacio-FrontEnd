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
export const ORDERS_FILTERS = 'ORDERS_FILTERS';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_ONE = 'REMOVE_ONE';

// const API = 'http://localhost:3001/api';//API LOCAL
const API = 'http://localhost:3001/api'

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

export function clearCart() {
  return { type: CLEAR_CART }
}

export function removeOne(product) {
  return { type: REMOVE_ONE, payload: product}
}

export function orderCombine(filters) {
    const {alpha,brand,category,rating,price}=filters
    let filtersArray = []
    if (alpha) filtersArray.push(`alpha=${alpha}`);
    if (brand) filtersArray.push(`brand=${brand}`);
    if (category) filtersArray.push(`category=${category}`);
    if (rating) filtersArray.push(`rating=${rating}`);
    if (price) filtersArray.push(`price=${price}`);
    let order = '?'
    for (let i=0;i<filtersArray.length;i++) {
        if (i===0) {order = order + filtersArray[i]}
        else {order = order + '&' + filtersArray[i]}
    }
    return async function(dispatch) {
        try {
            let jsonOC;
            if (alpha||brand||category||rating||price) {
                jsonOC = await axios.get(`${API}/products/orderCombine${order}`);
            } else {
                jsonOC = await axios.get(`${API}/products`); }
            console.log(jsonOC)
            return dispatch({
                type: ORDERS_FILTERS,
                payload: jsonOC.data
            });
        } catch(error){
            console.error(error);
        }
    }
}