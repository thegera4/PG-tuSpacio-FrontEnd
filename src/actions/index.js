import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_CURRENT_HOME_PAGE = "SET_CURRENT_HOME_PAGE";

export function getAllProducts() {
    return async function(dispatch) {
    try {
        var json = 
        await axios.get('http://localhost:3001/api/products');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data
        });
    }catch(error){
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
