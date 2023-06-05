import {Dispatch} from "redux";
import {DetailsLoadingAction, DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../types/DetailActionTypes"
import axios from "axios";
const getDetails = (id:any)=>{
   return async (dispatch:Dispatch<DetailsLoadingAction>)=>{
       dispatch({
        type:DETAILS_LOADING,
        loading:false,
        error : "",
        product:{
           
            "_id":"",
            "brand":"",
            "countInStock":0,
            "description":"",
            "image":"",
            "name":"",
            "price":0,
            "qty":0,
            "rating":0
        }
       });

       try{
        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`);
        dispatch({
            type : DETAILS_LOADING_SUCCESS,
            loading:true,
            error:"",
            product:data
        })
    }catch(err){
        dispatch({
            type:DETAILS_LOADING_FAIL,
            loading:true,
            error : err.message,
            product:{
                "_id":"",
                "brand":"",
                "countInStock":0,
                "description":"",
                "image":"",
                "name":"",
                "price":0,
                "qty":0,
                "rating":0
            }
        }); 
    }
   }
}

export default getDetails;