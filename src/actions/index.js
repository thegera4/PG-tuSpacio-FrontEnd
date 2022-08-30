import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_CURRENT_HOME_PAGE = "SET_CURRENT_HOME_PAGE";
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SEARCH_BY_CATEGORIE = 'SEARCH_BY_CATEGORIE';
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS';
export const SEARCH_BY_BRAND = 'SEARCH_BY_BRAND';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';

const API = 'http://localhost:3001/api';

export function getAllProducts() {
    return async function(dispatch) {
    try {
        var json = 
        await axios.get(`${API}/products`);
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function getAllBrands() {
    return async function(dispatch) {
    try {
        return dispatch({
            type: GET_ALL_BRANDS,
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function orderByAbc() {
    return async function(dispatch) {
    try {
        return dispatch({
            type: ORDER_BY_NAME,
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function getCategories() {
    return function(dispatch) {
        return axios.get(`${API}/categories`) // http://localhost:3001/api/categories
        .then(c => {
            dispatch({
                type: GET_CATEGORIES,
                payload: c.data.allCategories
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function filterByBrand(brand) {
    return async function(dispatch) {
    try {
        var jsonB;
        if (brand) jsonB = await axios.get(`${API}/products/brand/?brand=${brand}`); 
        else jsonB = await axios.get(`${API}/products`);
        return dispatch({
            type: SEARCH_BY_BRAND,
            payload: jsonB.data
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function filterByCategory(categorie) {
    return async function(dispatch) {
    try {
        let jsonC
        if (categorie) jsonC = await axios.get(`${API}/categorie/?categorie=${categorie}`); 
        else jsonC = await axios.get(`${API}/products`);
        return dispatch({
            type: SEARCH_BY_CATEGORIE,
            payload: jsonC.data
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function orderByPrice(order) {
    return async function(dispatch) {
    try {
        let jsonOP
        if (order) jsonOP = await axios.get(`${API}/products/price/?orderby=${order}`); 
        else jsonOP = await axios.get(`${API}/products`);
        return dispatch({
            type: ORDER_BY_PRICE,
            payload: jsonOP.data
        });
    } catch(error){
        console.error(error);
    }
    }
}

export function setCurrentHomePage(page) {
    return {
        type: SET_CURRENT_HOME_PAGE,
        payload: page
    }
}

export function getDetail(id){
        return async function(dispatch){
            try {
            var json = await axios.get(`${API}/product/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
            } catch (error) {
                console.log(error);
            }
        }
    }


export function getName(name){
    return async function(dispatch){
        try {
        var json = await axios.get('http://localhost:3001/api/products/search/?name=' + name);
        return dispatch({
            type: "GET_NAME",
            payload: json.data
        });
        } catch (error) {
            alert('No se encontro el producto');
        }
    }   
}