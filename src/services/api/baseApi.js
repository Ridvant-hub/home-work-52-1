/**
 * Базова конфігурація API-клієнта.
 * Для реального бекенду можна підключити axios:
 * import axios from 'axios'
 * export const baseApi = axios.create({ baseURL: process.env.VITE_API_URL })
 */
export const baseApi = {
  get: async (url) => {
    // mock: для реального API замінити на axios.get(url)
    return { data: null }
  },
  post: async (url, data) => {
    return { data: null }
  },
}
