import React from 'react'
import { Card, Button, Input } from '@/components/common'
import { useThemeStore } from '@/stores/themeStore'
import { useAuthStore } from '@/stores/authStore'
import { Sun, Moon } from 'lucide-react'

export const SettingsPage: React.FC = () => {
  const { theme, setTheme } = useThemeStore()
  const { user } = useAuthStore()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '720px' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Cài đặt hệ thống</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Quản lý tùy chọn cá nhân và giao diện</p>
      </div>

      <Card style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Giao diện hiển thị (Theme)
        </h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant={theme === 'light' ? 'primary' : 'outline'}
            leftIcon={<Sun size={16} />}
            onClick={() => setTheme('light')}
          >
            Light Mode
          </Button>
          <Button
            variant={theme === 'dark' ? 'primary' : 'outline'}
            leftIcon={<Moon size={16} />}
            onClick={() => setTheme('dark')}
          >
            Dark Mode
          </Button>
        </div>
      </Card>

      <Card style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
          Thông tin tài khoản
        </h2>
        <Input label="Họ và tên" defaultValue={user?.name || 'Nguyễn Văn Dev'} />
        <Input label="Địa chỉ Email" defaultValue={user?.email || 'admin@baseweb.dev'} disabled />
        <Input label="Vai trò (Role)" defaultValue={user?.role || 'Admin'} disabled />

        <div>
          <Button onClick={() => alert('Đã lưu thông tin cài đặt!')}>Lưu thay đổi</Button>
        </div>
      </Card>
    </div>
  )
}
