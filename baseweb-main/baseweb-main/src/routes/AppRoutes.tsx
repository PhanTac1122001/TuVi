import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { HomePage } from '@/pages/HomePage'
import { TextbookPage } from '@/pages/TextbookPage'
import { TwelvePalacesPage } from '@/pages/TwelvePalacesPage'
import { StarCatalogPage } from '@/pages/StarCatalogPage'
import { StarDetailPage } from '@/pages/StarDetailPage'
import { ChartGeneratorPage } from '@/pages/ChartGeneratorPage'
import { ChartDetailPage } from '@/pages/ChartDetailPage'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardOverviewPage } from '@/pages/DashboardOverviewPage'
import { PostsPage } from '@/pages/PostsPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProtectedRoute, PublicOnlyRoute } from './RouteGuards'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Auth Pages (Login) - Only accessible when NOT logged in */}
      <Route element={<PublicOnlyRoute />}>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
      </Route>

      {/* Protected Pages - Must be logged in to access */}
      <Route element={<ProtectedRoute />}>
        {/* Main Tử Vi Pages with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/giao-trinh" element={<TextbookPage />} />
          <Route path="/giao-trinh/:chapterId" element={<TextbookPage />} />
          <Route path="/12-cung" element={<TwelvePalacesPage />} />
          <Route path="/tra-cuu" element={<StarCatalogPage />} />
          <Route path="/tra-cuu/:starId" element={<StarDetailPage />} />
          <Route path="/lap-la-so" element={<ChartGeneratorPage />} />
          <Route path="/la-so" element={<ChartDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverviewPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
