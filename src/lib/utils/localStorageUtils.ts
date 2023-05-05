export const setAccessToken = (token: string): void => {
  localStorage.setItem('pfa.accessToken', token)
}

export const getAccessToken = (): string | null | undefined => {
  return localStorage.getItem('pfa.accessToken')
}

export const removeAccessToken = (): void => {
  localStorage.removeItem('pfa.accessToken')
}

export const getCurrentUser = () => {
  const user = localStorage.getItem('pfa.currentUser')
  return user ? JSON.parse(user) : null
}

export const setCurrentUser = (user: any) => {
  localStorage.setItem('pfa.currentUser', JSON.stringify(user))
}

export const removeCurrentUser = () => {
  localStorage.removeItem('pfa.currentUser')
}
