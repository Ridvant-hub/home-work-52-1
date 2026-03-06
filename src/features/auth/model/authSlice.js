import { createSlice } from '@reduxjs/toolkit'
import { AUTH_STORAGE_KEY } from '../../../utils/constants'
import { storage } from '../../../services/storage/storageService'

const loadUser = () => storage.get(AUTH_STORAGE_KEY)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: loadUser(),
    isAuthenticated: !!loadUser(),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
      if (action.payload) {
        storage.set(AUTH_STORAGE_KEY, action.payload)
      } else {
        storage.remove(AUTH_STORAGE_KEY)
      }
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      storage.remove(AUTH_STORAGE_KEY)
    },
  },
})

export const { setUser, logout } = authSlice.actions
export const selectUser = (state) => state.auth.user
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export default authSlice.reducer
