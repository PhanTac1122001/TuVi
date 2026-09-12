import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { APP_CONFIG } from '@/config/app.config'
import { useAuthStore } from '@/stores/authStore'

export const apiClient = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor (Gắn token vào header)
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor (Xử lý lỗi tập trung & Refresh token / 401 Unauthorized)
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Tự động logout nếu phiên làm việc hết hạn
      useAuthStore.getState().logout()
    }
    return Promise.reject(error)
  }
)
