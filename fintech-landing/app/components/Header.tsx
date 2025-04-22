'use client';

import { useState } from 'react';
import StyledLink from '../styles/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMobileNavClick = () => setMenuOpen(false); // Función para cerrar el menú

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">FintechPro</h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Menú en desktop */}
        <nav className="hidden md:flex space-x-6">
          <StyledLink href="/" aria-label="Ir al inicio">Inicio</StyledLink>
          <StyledLink href="#productos" aria-label="Ir a la sección de productos">Productos</StyledLink>
          <StyledLink href="#contacto" aria-label="Ir a la sección de contacto">Contacto</StyledLink>
        </nav>
      </div>

      {/* Menú en mobile */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-white shadow">
          <StyledLink href="/" aria-label="Ir al inicio" onClick={handleMobileNavClick}>Inicio</StyledLink>
          <StyledLink href="#productos" aria-label="Ir a la sección de productos" onClick={handleMobileNavClick}>Productos</StyledLink>
          <StyledLink href="#contacto" aria-label="Ir a la sección de contacto" onClick={handleMobileNavClick}>Contacto</StyledLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
