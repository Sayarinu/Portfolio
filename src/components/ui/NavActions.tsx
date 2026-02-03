import { Button } from './Button';
import { useScrollTo } from '../../hooks/useScrollTo';
import { cn } from '../../utils/cn';

interface NavActionsProps {
  className?: string;
}

export function NavActions({ className }: NavActionsProps) {
  const scrollTo = useScrollTo();

  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => scrollTo('experience')}
      >
        VIEW EXPERIENCE
      </Button>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => scrollTo('projects')}
      >
        VIEW PROJECTS
      </Button>
    </div>
  );
}
