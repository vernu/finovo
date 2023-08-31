import {
  ACCESS_TOKEN_KEY,
  CURRENT_USER_KEY,
} from '@lib/constants/localStorageKeys'

export const setAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = (): string | null | undefined => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const removeAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY)
  return user ? JSON.parse(user) : null
}

export const setCurrentUser = (user: any) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
}

export const removeCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}
