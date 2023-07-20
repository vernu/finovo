import { useEffect, useState } from 'react'

const THEME_KEY = 'pfa.theme'

const useAppTheme = () => {
  const [appTheme, setAppTheme] = useState('light')

  const loadThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme) {
      setAppTheme(savedTheme)
    }
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    if (prefersDarkMode) {
      setAppTheme('dark')
    } else {
      setAppTheme('light')
    }

    loadThemeFromLocalStorage()
  }, [])

  const handleSetTheme = (newTheme: any) => {
    if (newTheme === 'deviceDefault') {
      localStorage.removeItem(THEME_KEY)
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (prefersDarkMode) {
        setAppTheme('dark')
      } else {
        setAppTheme('light')
      }
    } else {
      localStorage.setItem(THEME_KEY, newTheme)
      setAppTheme(newTheme)
    }
  }

  return { appTheme, setAppTheme: handleSetTheme }
}

export default useAppTheme
