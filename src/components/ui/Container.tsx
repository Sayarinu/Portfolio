import { ContainerProps } from '../../types';
import { cn } from '../../utils/cn';

export function Container({
  children,
  className,
  maxWidth = 'xl',
  centered = true,
}: ContainerProps) {
  const maxWidthStyles = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };
  
  return (
    <div
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8',
        maxWidthStyles[maxWidth],
        centered && 'mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
