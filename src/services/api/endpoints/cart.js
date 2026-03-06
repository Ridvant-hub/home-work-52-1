import { baseApi } from '../baseApi'

export const cartApi = {
  getCart: () => baseApi.get('/cart'),
  updateCart: (items) => baseApi.post('/cart', { items }),
}
