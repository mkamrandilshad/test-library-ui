import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'efc-ui-library'
import type { ThemeColors } from 'efc-ui-library'
import './index.css'
import App from './App.tsx'

// Light theme colors
// Blue color palette: #e5f0fc, #c2d9f7, #7494ff, #4266c6, #162154
const lightTheme: ThemeColors = {
  background: '0 0% 100%',              // #FFFFFF
  foreground: '229 58% 21%',             // #162154

  card: '211 79% 94%',                   // #e5f0fc
  'card-foreground': '229 58% 21%',      // #162154

  popover: '211 79% 94%',                // #e5f0fc
  'popover-foreground': '229 58% 21%',   // #162154

  primary: '226 100% 73%',               // #7494ff
  'primary-foreground': '211 79% 94%',   // #e5f0fc

  secondary: '214 77% 86%',              // #c2d9f7
  'secondary-foreground': '229 58% 21%', // #162154

  muted: '214 77% 86%',                  // #c2d9f7
  'muted-foreground': '224 54% 52%',     // #4266c6

  accent: '226 100% 73%',                // #7494ff
  'accent-foreground': '211 79% 94%',    // #e5f0fc

  destructive: '224 54% 52%',            // #4266c6
  'destructive-foreground': '211 79% 94%', // #e5f0fc

  border: '214 77% 86%',                 // #c2d9f7
  input: '214 77% 86%',                  // #c2d9f7
  ring: '226 100% 73%',                  // #7494ff

  radius: '0.5rem',
}


// Dark theme colors
const darkTheme: ThemeColors = {
  background: '220 15% 12%',           // Darker background
  foreground: '210 35% 95%',           // Bright text
  card: '220 15% 15%',                  // Slightly lighter than background
  'card-foreground': '210 35% 95%',    // Same bright text for cards
  popover: '220 15% 18%',               // Slightly lighter for popovers
  'popover-foreground': '210 35% 95%',
  primary: '200 90% 60%',               // A vibrant blue for primary actions
  'primary-foreground': '220 15% 12%',  // Dark text on bright primary
  secondary: '210 30% 40%',             // Muted blue-gray
  'secondary-foreground': '210 35% 95%',
  muted: '210 25% 25%',                 // Muted background for less important elements
  'muted-foreground': '210 35% 75%',    // Slightly lighter text
  accent: '280 50% 60%',                // Purple accent
  'accent-foreground': '220 15% 12%',
  destructive: '0 70% 50%',             // Red for destructive actions
  'destructive-foreground': '220 15% 12%',
  border: '220 15% 25%',                // Subtle borders
  input: '220 15% 18%',                  // Input background
  ring: '200 90% 60%',                   // Highlight ring
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
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}  >
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
