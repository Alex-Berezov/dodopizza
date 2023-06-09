import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productsAPI } from '../services/ProductsService'
import cartReducer from './reducers/cartSlice'

const rootReducer = combineReducers({
  [productsAPI.reducerPath]: productsAPI.reducer,
  cart: cartReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
