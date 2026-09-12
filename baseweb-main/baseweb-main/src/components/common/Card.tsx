import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean
  glass?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = false,
  glass = false,
  className = '',
  style,
  ...props
}) => {
  return (
    <div
      style={{
        backgroundColor: glass ? 'var(--bg-glass)' : 'var(--bg-card)',
        backdropFilter: glass ? 'blur(12px)' : undefined,
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        transition: 'var(--transition)',
        ...style,
      }}
      className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
