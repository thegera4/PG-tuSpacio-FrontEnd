import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_CURRENT_HOME_PAGE = "SET_CURRENT_HOME_PAGE";
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SEARCH_BY_CATEGORIE = 'SEARCH_BY_CATEGORIE';

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

export function filterByCategory(categorie) {
    return async function(dispatch) {
    try {
        var json = 
        await axios.get(`${API}/products/search/?categorie=${categorie}`);
        return dispatch({
            type: SEARCH_BY_CATEGORIE,
            payload: json.data
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
            var json = await axios.get(`${API}/products/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
            } catch (error) {
                console.log(error);
            }
        }
    }