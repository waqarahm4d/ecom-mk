import { ProductsList } from '@/app/utils/mock'
import { Product } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Product[] = ProductsList

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
})

export const {  } = productSlice.actions


export default productSlice.reducer