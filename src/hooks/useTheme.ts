import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    return stored || 'system'
  })

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return 'dark'
    if (stored === 'light') return 'light'
    
    // System preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    
    const updateTheme = (newTheme: Theme) => {
      let isDark = false
      
      if (newTheme === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      } else {
        isDark = newTheme === 'dark'
      }
      
      if (isDark) {
        root.classList.add('dark')
        root.setAttribute('data-theme', 'dark')
        setResolvedTheme('dark')
      } else {
        root.classList.remove('dark')
        root.setAttribute('data-theme', 'light')
        setResolvedTheme('light')
      }
    }

    updateTheme(theme)
    localStorage.setItem('theme', theme)

    // Listen for system preference changes when theme is 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.add('dark')
          root.setAttribute('data-theme', 'dark')
          setResolvedTheme('dark')
        } else {
          root.classList.remove('dark')
          root.setAttribute('data-theme', 'light')
          setResolvedTheme('light')
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return {
    theme,
    setTheme,
    resolvedTheme,
  }
}
