import { create } from 'zustand'
import { APP_CONFIG } from '@/config/app.config'
import type { User } from '@/types'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

const getStoredUser = (): User | null => {
  try {
    const raw = localStorage.getItem(APP_CONFIG.storageKeys.user)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const useAuthStore = create<AuthState>((set) => {
  const token = localStorage.getItem(APP_CONFIG.storageKeys.token)
  const user = getStoredUser()

  return {
    user,
    token,
    isAuthenticated: !!token,
    login: (user: User, token: string) => {
      localStorage.setItem(APP_CONFIG.storageKeys.token, token)
      localStorage.setItem(APP_CONFIG.storageKeys.user, JSON.stringify(user))
      set({ user, token, isAuthenticated: true })
    },
    logout: () => {
      localStorage.removeItem(APP_CONFIG.storageKeys.token)
      localStorage.removeItem(APP_CONFIG.storageKeys.user)
      set({ user: null, token: null, isAuthenticated: false })
    },
  }
})
