import Cart from "../model/Cart";

export const  ADD_ITEM = "ADD_ITEM"
export const  REMOVE_ITEM = "REMOVE_ITEM"

interface CartAsync{
    selectedItem : Cart;
    id : any 
}

export interface CartAddItem extends CartAsync{
    type :  typeof ADD_ITEM;
};

export interface CartRemoveItem extends CartAsync{
    type : typeof REMOVE_ITEM
}
export type CartActionTypes = CartAddItem | CartRemoveItem;