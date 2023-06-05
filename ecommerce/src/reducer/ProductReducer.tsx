import Product from "../model/Product"
import  {ProductActionTypes,PRODUCTS_LOADING,PRODUCTS_LOADING_SUCCESS,PRODUCTS_LOADING_FAIL} from "../types/ProductActionTypes";

interface IState {
    loading: boolean;
    products : Product[];
    error : string;
    
}

const intialState : IState = {
    loading: false,
    products : [],
    error : ""
}
const ProductReducer = (state=intialState,action:ProductActionTypes):IState =>{
   switch(action.type){
       case PRODUCTS_LOADING :
       case PRODUCTS_LOADING_SUCCESS : 
       case PRODUCTS_LOADING_FAIL : 
       return {
           ...state,
           loading:action.loading,
           products:action.products,
           error: action.error 
           
       }
       break;
       default :
       return state;
   }
};

export default ProductReducer;