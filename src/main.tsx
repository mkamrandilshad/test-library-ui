import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'efc-ui-library'
import type { ThemeColors } from 'efc-ui-library'
import './index.css'
import App from './App.tsx'

// Light theme colors
// Blue color palette: #e5f0fc, #c2d9f7, #7494ff, #4266c6, #162154
const lightTheme: ThemeColors = {
  background: 'white', // #e5f0fc - very light blue
  foreground: '229 58% 21%', // #162154 - very dark blue
  card: '211 79% 94%', // #e5f0fc - same as background
  'card-foreground': '229 58% 21%', // #162154 - dark text
  popover: '211 79% 94%', // #e5f0fc - light blue
  'popover-foreground': '229 58% 21%', // #162154 - dark text
  primary: '226 100% 73%', // #7494ff - bright blue
  'primary-foreground': '211 79% 94%', // #e5f0fc - light text on primary
  secondary: '214 77% 86%', // #c2d9f7 - light blue
  'secondary-foreground': '229 58% 21%', // #162154 - dark text
  muted: '214 77% 86%', // #c2d9f7 - light blue
  'muted-foreground': '224 54% 52%', // #4266c6 - medium blue
  accent: '226 100% 73%', // #7494ff - bright blue
  'accent-foreground': '211 79% 94%', // #e5f0fc - light text
  destructive: '224 54% 52%', // #4266c6 - medium blue
  'destructive-foreground': '211 79% 94%', // #e5f0fc - light text
  border: '214 77% 86%', // #c2d9f7 - light blue border
  input: '214 77% 86%', // #c2d9f7 - light blue input border
  ring: '226 100% 73%', // #7494ff - bright blue focus ring
  radius: '0.5rem',
}

// Dark theme colors
const darkTheme: ThemeColors = {
  background: '222.2 84% 4.9%',
  foreground: '210 40% 98%',
  card: '222.2 84% 4.9%',
  'card-foreground': '210 40% 98%',
  popover: '222.2 84% 4.9%',
  'popover-foreground': '210 40% 98%',
  primary: '210 40% 98%',
  'primary-foreground': '222.2 47.4% 11.2%',
  secondary: '217.2 32.6% 17.5%',
  'secondary-foreground': '210 40% 98%',
  muted: '217.2 32.6% 17.5%',
  'muted-foreground': '215 20.2% 65.1%',
  accent: '217.2 32.6% 17.5%',
  'accent-foreground': '210 40% 98%',
  destructive: '0 62.8% 30.6%',
  'destructive-foreground': '210 40% 98%',
  border: '217.2 32.6% 17.5%',
  input: '217.2 32.6% 17.5%',
  ring: '212.7 26.8% 83.9%',
  radius: '0.5rem',
}

// Initialize dark mode based on stored preference or system preference
const initializeDarkMode = () => {
  const stored = localStorage.getItem('theme')
  const root = document.documentElement
  
  if (stored === 'dark') {
    root.classList.add('dark')
    root.setAttribute('data-theme', 'dark')
    return
  }
  
  if (stored === 'light') {
    root.classList.remove('dark')
    root.setAttribute('data-theme', 'light')
    return
  }
  
  // System preference (default)
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark')
    root.setAttribute('data-theme', 'dark')
  } else {
    root.classList.remove('dark')
    root.setAttribute('data-theme', 'light')
  }
}

// Initialize theme before React renders
initializeDarkMode()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}  >
      <App/>
    </ThemeProvider>
  </StrictMode>
)
