import { CardProps } from '../../types';
import { cn } from '../../utils/cn';

export const Card = ({
  children,
  className,
  variant = 'default',
  title,
  hoverable = false,
}: CardProps) => {
  const baseStyles = 'rounded-lg p-6 transition-all duration-200';
  
  const variantStyles = {
    retro: 'bg-retro-surface border-3 border-retro-border shadow-retro dark:bg-gold-surface dark:border-gold-border',
    gold: 'bg-gold-surface border-2 border-gold-primary shadow-gold',
    default: 'bg-retro-surface border-2 border-retro-border dark:bg-gold-surface dark:border-gold-border',
  };
  
  const hoverStyles = hoverable
    ? 'hover:shadow-retro-hover hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer dark:hover:shadow-gold-glow'
    : '';
  
  return (
    <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
      {title && (
        <h3 className="font-retro text-lg mb-4 text-shadow-retro dark:text-glow-gold">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
