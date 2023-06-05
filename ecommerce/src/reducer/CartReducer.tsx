import Cart from "../model/Cart";
import { ADD_ITEM,REMOVE_ITEM, CartActionTypes } from "../types/CartActionTypes";

interface IState{
    finalArray:Cart[];
};


//access the result from local storage.
const initialState:IState = {
    finalArray : window.localStorage.getItem("cart") ? (JSON.parse(window.localStorage.getItem("cart") || '{}')) : []
};


const CartReducer = (state=initialState,action:CartActionTypes):IState=>{
    switch(action.type){
        case ADD_ITEM:
            const item = action.selectedItem;
             if(item._id ==="" || item.qty ===0){
                 return {...state}
             }
            const existedItem = state.finalArray.find((obj)=>{ return obj._id === item._id});

            if(existedItem){
                return{
                    ...state,
                    finalArray : state.finalArray.map((obj)=>{ return obj._id === item._id ? item : obj})
                }
            }else{
                return{
                    ...state,
                    finalArray : [...state.finalArray, item]
                }
            }

            break;

        case REMOVE_ITEM : 
          const id = action.id
          return{
              ...state,
              finalArray : state.finalArray.filter((element)=>{return element._id != id})
          }

        default:
            return state;
    }
};

export default CartReducer;