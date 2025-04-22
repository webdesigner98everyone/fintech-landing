'use client';

import { Product } from '../types';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../styles/StyledButton';


interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <CardLink>
        <Card>
          <h3>{product.nombre}</h3>
          <p>Tipo: {product.tipo}</p>
          {product.tasaInteres !== undefined && <p>Tasa de Interés: {product.tasaInteres}%</p>}
          <p>Categoría: {product.categoria}</p>
          {product.riesgo && <p>Riesgo: {product.riesgo}</p>}
          <Button aria-label="Contratar este producto">
            Ver detalles →
          </Button>
        </Card>
      </CardLink>
    </Link>
  );
};

const CardLink = styled.div`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  cursor: pointer;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #111827;
  }

  p {
    margin: 0.25rem 0;
    color: #4b5563;
  }
`;
