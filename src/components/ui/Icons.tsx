import { BaseComponentProps } from '../../types/component.types';

interface IconProps extends BaseComponentProps {
  size?: number;
}

export function ScanlineIcon({ size = 20, className }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
      className={className}
    >
      <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="2"/>
      <line x1="2" y1="8" x2="22" y2="8" strokeWidth="1"/>
      <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1"/>
      <line x1="2" y1="16" x2="22" y2="16" strokeWidth="1"/>
    </svg>
  );
}

export function CRTIcon({ size = 20, className }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="square" 
      strokeLinejoin="miter" 
      className={className}
    >
      <path d="M21 7.50004C21 5.01476 18.9853 3.00004 16.5 3.00004H7.5C5.01472 3.00004 3 5.01476 3 7.50004V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V7.50004Z" />
      <path d="M12 21V21" />
      <path d="M7 12H17" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  );
}

export function SunIcon({ size = 24, className }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none" 
      className={className}
    >
      <circle cx="12" cy="12" r="6" />
      <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MoonIcon({ size = 24, className }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none" 
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
