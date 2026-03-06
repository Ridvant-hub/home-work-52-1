import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    list: [],
    currentOrder: null,
  },
  reducers: {
    addOrder: (state, action) => {
      state.list.unshift({
        ...action.payload,
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        status: 'pending',
      })
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
  },
})

export const { addOrder, setCurrentOrder } = ordersSlice.actions
export const selectOrders = (state) => state.orders.list
export const selectCurrentOrder = (state) => state.orders.currentOrder
export default ordersSlice.reducer
