export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user' | 'editor'
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message?: string
}

export type ThemeMode = 'light' | 'dark'

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}
