import { ButtonProps } from '../../types';
import { cn } from '../../utils/cn';

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  href,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'font-retro uppercase transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed border-2 inline-flex items-center cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-retro-primary text-retro-surface border-retro-border hover:opacity-90 shadow-retro active:shadow-none active:translate-y-[1px]',
    secondary: 'bg-retro-surface text-retro-text border-retro-border hover:bg-retro-primary/10',
    retro: 'bg-retro-primary text-retro-text border-retro-border shadow-retro hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]',
    gold: 'bg-retro-surface text-retro-text border-retro-border dark:text-glow-gold hover:bg-retro-primary/20',
    ghost: 'bg-transparent text-retro-text border-transparent hover:border-retro-border',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}