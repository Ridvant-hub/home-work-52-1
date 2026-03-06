import { createSlice } from '@reduxjs/toolkit'
import { CART_STORAGE_KEY } from '../../../utils/constants'
import { storage } from '../../../services/storage/storageService'

const loadCart = () => storage.get(CART_STORAGE_KEY) ?? []

const saveCart = (items) => {
  storage.set(CART_STORAGE_KEY, items)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: loadCart() },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload
      const existing = state.items.find((i) => i.id === id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ id, title, price, image, quantity: 1 })
      }
      saveCart(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
      saveCart(state.items)
    },
    changeQuantity: (state, action) => {
      const { id, delta } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (!item) return
      item.quantity = Math.max(0, item.quantity + delta)
      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== id)
      }
      saveCart(state.items)
    },
    clearCart: (state) => {
      state.items = []
      saveCart(state.items)
    },
  },
})

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
export default cartSlice.reducer
