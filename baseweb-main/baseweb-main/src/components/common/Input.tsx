import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', style, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', width: '100%' }}>
        {label && (
          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            {label}
          </label>
        )}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {leftIcon && (
            <div
              style={{
                position: 'absolute',
                left: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-muted)',
                pointerEvents: 'none',
              }}
            >
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            style={{
              width: '100%',
              padding: `0.625rem ${rightIcon ? '2.5rem' : '0.875rem'} 0.625rem ${leftIcon ? '2.5rem' : '0.875rem'}`,
              backgroundColor: 'var(--bg-secondary)',
              border: `1px solid ${error ? 'var(--danger)' : 'var(--border-color)'}`,
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.925rem',
              outline: 'none',
              transition: 'var(--transition)',
              ...style,
            }}
            className={className}
            {...props}
          />
          {rightIcon && (
            <div
              style={{
                position: 'absolute',
                right: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--text-muted)',
              }}
            >
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <span style={{ fontSize: '0.775rem', color: 'var(--danger)' }}>{error}</span>
        ) : helperText ? (
          <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{helperText}</span>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'
