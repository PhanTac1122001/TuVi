import { create } from 'zustand'
import { APP_CONFIG } from '@/config/app.config'
import type { ThemeMode } from '@/types'

interface ThemeState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const getInitialTheme = (): ThemeMode => {
  const saved = localStorage.getItem(APP_CONFIG.storageKeys.theme) as ThemeMode
  if (saved && (saved === 'light' || saved === 'dark')) {
    return saved
  }
  return APP_CONFIG.defaultTheme
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (theme: ThemeMode) => {
    localStorage.setItem(APP_CONFIG.storageKeys.theme, theme)
    document.documentElement.setAttribute('data-theme', theme)
    set({ theme })
  },
  toggleTheme: () => {
    const nextTheme = get().theme === 'dark' ? 'light' : 'dark'
    get().setTheme(nextTheme)
  },
}))
