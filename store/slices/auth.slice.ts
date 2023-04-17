import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import {
  getAccessToken,
  getCurrentUser,
  removeAccessToken,
  removeCurrentUser,
  setAccessToken,
  setCurrentUser,
} from '../../lib/utils/localStorageUtils'

interface AuthState {
  accessToken: string | null | undefined
  currentUser: any
}

const initialState: AuthState = {
  currentUser: typeof window !== 'undefined' ? getCurrentUser() : null,
  accessToken: typeof window !== 'undefined' ? getAccessToken() : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      removeAccessToken()
      removeCurrentUser()
      state.accessToken = null
      state.currentUser = null
    },
    updateAuthState: (state, action: PayloadAction<any>) => {
      const { accessToken, currentUser } = action.payload
      setCurrentUser(currentUser)
      setAccessToken(accessToken)
      state.currentUser = currentUser
      state.accessToken = accessToken
    },
  },
})

export const { updateAuthState, logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
