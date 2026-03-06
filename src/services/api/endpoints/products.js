import { baseApi } from '../baseApi'

export const productsApi = {
  getProducts: () => baseApi.get('/products'),
  getProductById: (id) => baseApi.get(`/products/${id}`),
}
