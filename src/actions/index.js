import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS"

const api = "http://localhost:3001/api";

export function getProducts() {
    return function(dispatch) {
        return axios.get(`${api}/products`)
        .then(products => {
            dispatch({
                type: GET_PRODUCTS,
                payload: products.data 
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}