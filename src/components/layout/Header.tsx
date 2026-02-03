import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';

export function Header() {
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
          </nav>
        </div>
      </Container>
    </header>
  );
}