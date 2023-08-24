import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action){
      let uuid = Math.floor(1000+Math.random()*9000)
      let newObj = {...action.payload, uuid}
      state.push(newObj)
      
    },
    deleteCartItem(state, {payload}){
      
      return state.filter(item => item.uuid !== payload)
    },
    addQty(state, action){
      let obj = state.find(
        (item) => 
         item.id == action.payload.id && 
         item.color == action.payload.color && 
         item.uuid == action.payload.uuid && 
         item.size == action.payload.size 
      )
      if (obj) {
        ++obj.qty
        let newState = state.filter(item => item.uuid !== obj?.uuid)
        state = [...newState, obj]
        return
      }
    },
    minusQty(state, action){
      let obj = state.find(
        (item) => 
         item.id == action.payload.id && 
         item.uuid == action.payload.uuid && 
         item.color == action.payload.color && 
         item.size == action.payload.size 
      )
      if (obj !== undefined) {
        if (obj.qty > 1) {
          --obj.qty
          let newState = state.filter(item => item.uuid !== obj?.uuid)
          state = [...newState, obj]
          return
        }
        return state.filter(item => item.uuid !== obj?.uuid)
      }
    }
  },
  
})

export const { addToCart, deleteCartItem, addQty, minusQty } = cartSlice.actions


export default cartSlice.reducer