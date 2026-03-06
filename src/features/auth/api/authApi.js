import { baseApi } from '../../../services/api/baseApi'

export const authApi = {
  login: (email, password) => baseApi.post('/auth/login', { email, password }),
  register: (data) => baseApi.post('/auth/register', data),
}
