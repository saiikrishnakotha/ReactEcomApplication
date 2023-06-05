import  {ProductActionTypes,PRODUCTS_LOADING,PRODUCTS_LOADING_SUCCESS,PRODUCTS_LOADING_FAIL} from "../types/ProductActionTypes";
import {Dispatch} from 'redux'
import axios from "axios"

const getProducts = ()=>{
   return async (dipatch:Dispatch<ProductActionTypes>)=>{
       dipatch({
           type : PRODUCTS_LOADING,
           loading : false,
           products : [],
           error :""
       })
       try{
           const res = await axios.get(`http://localhost:8000/api/products`);
           const {data} = res;
           dipatch({
               type : PRODUCTS_LOADING_SUCCESS,
               loading : true,
               products : data,
               error : ""
           })
    
       }
       catch(err){
           dipatch({
               type : PRODUCTS_LOADING_FAIL,
               loading : true,
               products : [],
               error : err.message
           })
       }
   }
}

export default getProducts;