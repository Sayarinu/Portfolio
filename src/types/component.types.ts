import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export type ButtonVariant = 'retro' | 'gold' | 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export type CardVariant = 'retro' | 'gold' | 'default';

export interface CardProps extends BaseComponentProps {
  variant?: CardVariant;
  title?: string;
  hoverable?: boolean;
}

export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centered?: boolean;
}

export interface LayoutProps extends BaseComponentProps {
  showScanlines?: boolean;
  showCRT?: boolean;
}
