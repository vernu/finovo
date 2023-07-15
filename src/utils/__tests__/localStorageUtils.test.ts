import {
  ACCESS_TOKEN_KEY,
  CURRENT_USER_KEY,
} from '../../lib/constants/localStorageKeys'
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  getCurrentUser,
  setCurrentUser,
  removeCurrentUser,
} from '../localStorageUtils'

describe('localStorage methods', () => {
  const mockToken = 'token'
  const mockUser = { name: 'Abe Kebe', email: 'abe@kebe.et' }

  beforeEach(() => {
    localStorage.clear()
  })

  test('setAccessToken should add token to localStorage', () => {
    setAccessToken(mockToken)
    expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBe(mockToken)
  })

  test('getAccessToken should retrieve token from localStorage', () => {
    localStorage.setItem(ACCESS_TOKEN_KEY, mockToken)
    const token = getAccessToken()
    expect(token).toBe(mockToken)
  })

  test('removeAccessToken should remove token from localStorage', () => {
    localStorage.setItem(ACCESS_TOKEN_KEY, mockToken)
    removeAccessToken()
    expect(localStorage.getItem(ACCESS_TOKEN_KEY)).toBeNull()
  })

  test('getCurrentUser should retrieve user object from localStorage', () => {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(mockUser))
    const user = getCurrentUser()
    expect(user).toEqual(mockUser)
  })

  test('setCurrentUser should add user object to localStorage', () => {
    setCurrentUser(mockUser)
    expect(localStorage.getItem(CURRENT_USER_KEY)).toBe(
      JSON.stringify(mockUser)
    )
  })

  test('removeCurrentUser should remove user object from localStorage', () => {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(mockUser))
    removeCurrentUser()
    expect(localStorage.getItem(CURRENT_USER_KEY)).toBeNull()
  })
})
