import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'sm' | 'md'
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', size = 'sm' }) => {
  const getColors = () => {
    switch (variant) {
      case 'primary':
        return { bg: 'var(--primary-light)', text: 'var(--primary)' }
      case 'success':
        return { bg: 'var(--success-bg)', text: 'var(--success)' }
      case 'warning':
        return { bg: 'var(--warning-bg)', text: 'var(--warning)' }
      case 'danger':
        return { bg: 'var(--danger-bg)', text: 'var(--danger)' }
      case 'info':
        return { bg: 'var(--info-bg)', text: 'var(--info)' }
      default:
        return { bg: 'var(--bg-tertiary)', text: 'var(--text-secondary)' }
    }
  }

  const { bg, text } = getColors()

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: size === 'sm' ? '0.15rem 0.5rem' : '0.25rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        fontSize: size === 'sm' ? '0.75rem' : '0.875rem',
        fontWeight: 600,
        backgroundColor: bg,
        color: text,
      }}
    >
      {children}
    </span>
  )
}
