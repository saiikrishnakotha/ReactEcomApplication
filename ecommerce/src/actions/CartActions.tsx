import axios from "axios";
import { Dispatch } from "react";
import { ADD_ITEM, REMOVE_ITEM, CartActionTypes } from "../types/CartActionTypes";

export const removeItem = (id:any)=>{
  return  (dispatch:Dispatch<CartActionTypes>, getState:()=> any)=>{
    dispatch({
      type : REMOVE_ITEM ,
      id : id,
      selectedItem : {
        "_id" : "",
        "name": "",
        "brand" : "",
        "price": 0,
        "countInstock" : 0,
        "rating" : 0,
        "description": "",
        "numReviews" : 0,
        "qty" : 0

      }
    })
    window.localStorage.setItem("cart", JSON.stringify(getState().cart.finalArray) );

  }
}


const addCartItem = (id:string,qty:number)=>{
  return async (dispatch:Dispatch<CartActionTypes>, getState:()=>any)=>{
    try{
      const res = await axios.get(`http://localhost:8000/api/products/${id}`);
      const {data} = res;
      data["qty"] = qty;
      dispatch({
          type : ADD_ITEM,
          selectedItem : data,
          id: ""
      })
      window.localStorage.setItem("cart", JSON.stringify(getState().cart.finalArray) );

    }
    catch(err){
      dispatch({
          type : ADD_ITEM,
          id:"",
          selectedItem : {
            "_id" : "",
            "name": "",
            "brand" : "",
            "price": 0,
            "countInstock" : 0,
            "rating" : 0,
            "description": "",
            "numReviews" : 0,
            "qty" : 0

          }
      })
    }
  }

}

export default addCartItem;