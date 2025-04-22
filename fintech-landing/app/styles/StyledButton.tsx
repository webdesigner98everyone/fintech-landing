'use client';

import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* texto más pequeño */
  color: #2563eb; /* azul estilizado */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;

  &:hover {
    background-color: rgba(37, 99, 235, 0.1); /* sutil fondo en hover */
    color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }

  &:active {
    opacity: 0.9;
  }

  &.loading {
    color: #9ca3af; /* gris para loading */
    pointer-events: none;
  }
`;

export default Button;
