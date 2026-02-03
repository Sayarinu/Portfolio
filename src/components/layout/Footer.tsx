import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';
import { Link } from '../ui/Link';

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
            <Link
              href="https://github.com/Sayarinu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-text/70 dark:text-gold-text/70 no-underline hover:underline"
            >
              GITHUB
            </Link>
            <span className="text-retro-text/30 dark:text-gold-text/30">|</span>
            <Link
              href="https://www.linkedin.com/in/carter-garcia-cg225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-text/70 dark:text-gold-text/70 no-underline hover:underline"
            >
              LINKEDIN
            </Link>
            <span className="text-retro-text/30 dark:text-gold-text/30">|</span>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-retro-text/70 dark:text-gold-text/70 no-underline hover:underline"
            >
              RESUME
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
