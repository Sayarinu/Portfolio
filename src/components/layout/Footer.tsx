import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn(
      'border-t-3 py-8 mt-auto',
      'bg-retro-surface border-retro-border',
      'dark:bg-gold-surface dark:border-gold-border'
    )}>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={cn(
            'font-mono text-sm',
            'text-retro-text/70 dark:text-gold-text/70'
          )}>
            © {currentYear} SAYARIN.XYZ
          </p>
          
          <div className="flex gap-4 font-mono text-xs">
            <a 
              href="https://github.com/Sayarinu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-text/70 hover:text-retro-accent dark:text-gold-text/70 dark:hover:text-gold-accent transition-colors"
            >
              GITHUB
            </a>
            <span className="text-retro-text/30 dark:text-gold-text/30">|</span>
            <a 
              href="https://www.linkedin.com/in/carter-garcia-cg225/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-text/70 hover:text-retro-accent dark:text-gold-text/70 dark:hover:text-gold-accent transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
