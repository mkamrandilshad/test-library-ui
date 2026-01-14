import { Button } from 'efc-ui-library'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="gap-2"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <>
          <span>☀️</span>
          <span>Light</span>
        </>
      ) : (
        <>
          <span>🌙</span>
          <span>Dark</span>
        </>
      )}
    </Button>
  )
}
