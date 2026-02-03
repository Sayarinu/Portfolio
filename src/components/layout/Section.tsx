import { ReactNode } from 'react';
import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: string;
}

export function Section({ children, id, className, delay }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("animate-tech-slide", className)}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}
