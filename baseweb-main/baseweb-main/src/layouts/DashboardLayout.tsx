import React, { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, Settings, LogOut, Sun, Moon, ArrowLeft, Menu, X } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { Button } from '@/components/common'

export const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()
  const location = useLocation()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [prevPath, setPrevPath] = useState(location.pathname)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setIsSidebarOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    { label: 'Tổng quan (Overview)', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { label: 'Bài viết & Dữ liệu API', path: '/dashboard/posts', icon: <FileText size={18} /> },
    { label: 'Cài đặt hệ thống', path: '/dashboard/settings', icon: <Settings size={18} /> },
  ]

  return (
    <div className="dashboard-layout-container">
      {/* Mobile Header Bar */}
      <div className="dashboard-mobile-header">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 700,
          }}
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          <span>Dashboard Menu</span>
        </button>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <ArrowLeft size={14} /> Trang chủ
        </Link>
      </div>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="header-mobile-backdrop hide-on-desktop"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
        <div style={{ padding: '0 0.5rem 1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            <ArrowLeft size={14} /> Về trang chủ
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img
                src="/taman.png"
                alt="Tử Vi Tâm An Logo"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid var(--gold-primary)',
                  boxShadow: '0 2px 8px rgba(212, 175, 55, 0.25)',
                }}
              />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                Tử Vi <span style={{ color: 'var(--gold-primary)' }}>Tâm An</span>
              </h2>
            </div>
            <button
              className="hide-on-desktop"
              onClick={() => setIsSidebarOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', flex: 1 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.9rem',
                  transition: 'var(--transition)',
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User Card & Logout in Sidebar */}
        <div
          style={{
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-tertiary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
              }}
            >
              {user?.name?.[0] || 'U'}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                {user?.name || 'Developer Admin'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.role || 'Admin'}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
            <Button variant="ghost" size="sm" onClick={toggleTheme} style={{ flex: 1, padding: '0.35rem' }}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} style={{ flex: 2, padding: '0.35rem' }} leftIcon={<LogOut size={14} />}>
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="dashboard-main-content">
        <Outlet />
      </main>
    </div>
  )
}
