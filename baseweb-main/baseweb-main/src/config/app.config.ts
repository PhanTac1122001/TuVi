export const APP_CONFIG = {
  appName: import.meta.env.VITE_APP_TITLE || 'Tử Vi Tâm An',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  isMockEnabled: import.meta.env.VITE_ENABLE_MOCK === 'true',
  version: '1.0.0',
  defaultTheme: 'dark' as const,
  storageKeys: {
    theme: 'app_theme',
    token: 'auth_token',
    user: 'auth_user',
  },
  auth: {
    username: import.meta.env.VITE_AUTH_USERNAME || 'minhanh1999',
    password: import.meta.env.VITE_AUTH_PASSWORD || 'minhanh1999',
  },
}
