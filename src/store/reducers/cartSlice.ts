import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../models/IProducts'
import { RootState } from '../store'

interface CartState {
  items: IProducts[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProducts>) => {
        const productIndex = state.items.findIndex(item => item.id === action.payload.id)

        if (productIndex >= 0) {
          state.items[productIndex].quantity += 1
        } else {
          state.items.push({ ...action.payload, quantity: 1 })
        }
      },
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
