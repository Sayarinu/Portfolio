import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/cn';
import { SunIcon, MoonIcon } from './Icons';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-16 h-8 rounded-full transition-colors duration-300 border-2',
        'border-retro-border bg-retro-surface shadow-retro-sm'
      )}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          'absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center',
          theme === 'light' 
            ? 'translate-x-0 bg-retro-border text-retro-surface' 
            : 'translate-x-8 bg-retro-primary text-black'
        )}
      >
        {theme === 'light' ? <SunIcon size={14} /> : <MoonIcon size={14} />}
      </span>
    </button>
  );
}