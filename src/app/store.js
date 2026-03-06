import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/model/cartSlice'
import productsReducer from '../features/products/model/productsSlice'
import authReducer from '../features/auth/model/authSlice'
import ordersReducer from '../features/orders/model/ordersSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    orders: ordersReducer,
  },
})
