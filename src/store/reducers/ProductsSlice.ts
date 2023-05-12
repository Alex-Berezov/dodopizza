import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../models/IProducts'

export interface ProductsState {
  products: IProducts[]
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true
    },
    productsFetchingSuccess(state, action: PayloadAction<IProducts[]>) {
      state.isLoading = false
      state.error = ''
      state.products = action.payload
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default productSlice.reducer
