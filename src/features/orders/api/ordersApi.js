import { baseApi } from '../../../services/api/baseApi'

export const ordersApi = {
  getOrders: () => baseApi.get('/orders'),
  createOrder: (data) => baseApi.post('/orders', data),
}
