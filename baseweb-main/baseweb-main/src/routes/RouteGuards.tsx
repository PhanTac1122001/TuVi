import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

interface RouteProps {
  redirectTo?: string
}

/**
 * Chỉ cho phép truy cập khi ĐÃ đăng nhập
 */
export const ProtectedRoute: React.FC<RouteProps> = ({ redirectTo = '/auth/login' }) => {
  const { isAuthenticated } = useAuthStore()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  return <Outlet />
}

/**
 * Chỉ cho phép truy cập khi CHƯA đăng nhập (VD: trang Login, Register)
 */
export const PublicOnlyRoute: React.FC<RouteProps> = ({ redirectTo = '/' }) => {
  const { isAuthenticated } = useAuthStore()

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  return <Outlet />
}
