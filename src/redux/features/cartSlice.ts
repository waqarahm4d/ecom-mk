import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../../../iterfaces";

interface CartState {
    items: Array<CartProduct>;
    totalAmount: number;
    totalQty: number;
} 
const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalQty:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addtoCart(state: CartState, action: PayloadAction<{product: CartProduct; qty: number}>){
            const newItem = action.payload.product
            const existingItem = state.items.find((items) => items._id === newItem._id)
            state.totalQty = state.totalQty + action.payload.qty
            state.totalAmount = state.totalAmount + action.payload.qty * action.payload.product.price

            if(!existingItem){
                const totalPrice = newItem.price * action.payload.qty
                state.items.push({
                    ...newItem,
                    quantity: action.payload.qty,
                    totalPrice,
                })
            }else {
                const totalPrice = existingItem.totalPrice + existingItem.price * action.payload.qty
                existingItem.quantity += action.payload.qty
                existingItem.totalPrice += totalPrice
            }
            
        },
        removeProduct(state: CartState, action: PayloadAction<string>){
            const productID = action.payload
            state.items = state.items.filter((item) => item._id !== productID)
            state.totalQty = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)


        },
        decreaseQty(state: CartState, action: PayloadAction<string>){
            const productID = action.payload
            const existingItem = state.items.find((item) => item._id === productID)
            state.totalQty--
            state.totalAmount = state.totalAmount - existingItem?.price!
            if(existingItem?.quantity === 1){
                state.items = state.items.filter((item) => item._id == productID)
            } else {
                existingItem!.quantity--
                existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!
            }
                
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer