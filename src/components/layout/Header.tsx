import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useEffects } from '../../contexts/EffectsContext';
import { ScanlineIcon, CRTIcon } from '../ui/Icons';
import { cn } from '../../utils/cn';

export function Header() {
  const { scanlines, crtEffect, toggleScanlines, toggleCRT } = useEffects();
  
  return (
    <header className={cn(
      'sticky top-0 z-30 backdrop-blur-md border-b-2 transition-colors',
      'bg-retro-surface/80 border-retro-border'
    )}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <h1 className={cn(
            'font-retro text-xl sm:text-2xl tracking-tighter',
            'text-retro-text text-shadow-retro dark:text-glow-gold'
          )}>
            SAYARIN.XYZ
          </h1>
          
          <nav className="flex items-center gap-3">
            <button
              onClick={toggleScanlines}
              aria-label="Toggle scanlines"
              className={cn(
                'p-2 rounded-sm border-2 transition-all active:translate-y-[1px]',
                'shadow-retro hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]',
                scanlines
                  ? 'bg-retro-border text-retro-surface border-retro-border'
                  : 'bg-transparent text-retro-border border-retro-border/50 hover:border-retro-border'
              )}
            >
              <ScanlineIcon size={18} />
            </button>
            
            <button
              onClick={toggleCRT}
              aria-label="Toggle CRT effect"
              className={cn(
                'p-2 rounded-sm border-2 transition-all active:translate-y-[1px]',
                'shadow-retro hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]',
                crtEffect
                  ? 'bg-retro-border text-retro-surface border-retro-border'
                  : 'bg-transparent text-retro-border border-retro-border/50 hover:border-retro-border'
              )}
            >
              <CRTIcon size={18} />
            </button>
            
            <div className="pl-2 ml-2 flex items-center border-l border-retro-border/30">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}