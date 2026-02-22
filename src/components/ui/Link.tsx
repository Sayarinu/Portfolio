import { cn } from '../../utils/cn';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export const Link = ({
  children,
  href,
  onClick,
  className,
  target,
  rel,
}: LinkProps) => {
  const baseStyles = 'font-retro text-retro-accent dark:text-gold-accent underline underline-offset-4 hover:text-white cursor-pointer transition-colors';

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(baseStyles, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, className)}
    >
      {children}
    </button>
  );
}
