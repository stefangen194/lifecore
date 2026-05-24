import React from 'react';

interface ContainerProps {
  /** Use the wider 1440px max-width (default is 1280px). */
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Centered, padded content container. Mirrors .container-base / .container-wide. */
export default function Container({ wide = false, className = '', children }: ContainerProps) {
  return (
    <div className={`${wide ? 'container-wide' : 'container-base'} ${className}`}>{children}</div>
  );
}
