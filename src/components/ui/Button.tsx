import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'gold' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  /** Internal route -> renders a react-router <Link>. */
  to?: string;
  /** External/anchor href -> renders an <a>. */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  'aria-label'?: string;
  children: React.ReactNode;
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  ghost: 'btn-ghost',
};

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

/**
 * The single button used across the app. Renders a <Link>, <a> or <button>
 * depending on the props passed (`to`, `href`, otherwise a button).
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = `btn ${variantClass[variant]} ${sizeClass[size]} ${
    disabled ? 'opacity-40 pointer-events-none' : ''
  } ${className}`.trim();

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}
