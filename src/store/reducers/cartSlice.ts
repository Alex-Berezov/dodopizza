import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../models/IProducts'
import { RootState } from '../store'

interface CartState {
  items: IProducts[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProducts>) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedDough === action.payload.selectedDough,
      )

      if (product) {
        if (product.quantity !== undefined) {
          product.quantity += 1
        } else {
          product.quantity = 1
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number; selectedSize: string; selectedDough: string }>) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedDough === action.payload.selectedDough,
      )

      if (product && product.quantity) {
        product.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number; selectedSize: string; selectedDough: string }>) => {
      const product = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedDough === action.payload.selectedDough,
      )

      if (product && product.quantity && product.quantity > 1) {
        product.quantity -= 1
      } else {
        return state
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: number; selectedSize: string; selectedDough: string }>) => {
      const newItems = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedSize !== action.payload.selectedSize ||
          item.selectedDough !== action.payload.selectedDough,
      )

      if (newItems.length !== state.items.length) {
        state.items = newItems
      } else {
        return state
      }
    },
  },
})

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
