import axios from "axios";

    export function getDetail(id){
        return async function(dispatch){
            try {
            var json = await axios.get('http://localhost:3001/api/product/'+id);
            return dispatch({
                type: "GET_DETAIL",
                payload: json.data
            });
            } catch (error) {
                console.log(error);
            }
        }
    }

 
