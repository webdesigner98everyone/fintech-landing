'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  'aria-label'?: string;
  onClick?: () => void;  // Asegúrate de que onClick sea opcional
}

const StyledLink = ({ href, children, ...rest }: StyledLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href.startsWith('#') && pathname === '/');

  return (
    <Link
      href={href}
      className={clsx(
        'text-sm md:text-base font-medium transition-all duration-300 relative px-3 py-1',  // Añadido padding para mejorar el espacio
        'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
        {
          // Estilo activo
          'text-blue-600': isActive,
          // Estilo normal
          'text-gray-700 hover:text-white hover:bg-blue-600 hover:scale-105 hover:shadow-md': !isActive,
        }
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
