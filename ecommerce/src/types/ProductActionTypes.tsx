
import Product from '../model/Product';
export const PRODUCTS_LOADING: string = "PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS : string = "PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL : string = "PRODUCTS_LOADING_FAIL";

interface ProductAsync{
    loading:boolean;
    products:Product[];
    error : string;

}

interface ProductsLoading extends ProductAsync {
    type : typeof  PRODUCTS_LOADING
}

interface ProductsLoadingSuccess extends ProductAsync {
    type : typeof  PRODUCTS_LOADING_SUCCESS
}

interface ProductsLoadingFail extends ProductAsync {
    type : typeof  PRODUCTS_LOADING_FAIL
}

export type ProductActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;