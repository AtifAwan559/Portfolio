'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  // init
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme: Theme = stored || 'system'
    setThemeState(initialTheme)
    applyTheme(initialTheme, prefersDark)
  }, [])

  const applyTheme = (newTheme: Theme, prefersDark?: boolean) => {
    const isDark =
      newTheme === 'dark' ||
      (newTheme === 'system' &&
        (prefersDark ?? window.matchMedia('(prefers-color-scheme: dark)').matches))

    const root = document.documentElement

    if (isDark) {
      root.classList.add('dark')
      setResolvedTheme('dark')
    } else {
      root.classList.remove('dark')
      setResolvedTheme('light')
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  // system listener
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = (e: MediaQueryListEvent) => {
      if (theme === 'system') applyTheme('system', e.matches)
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}