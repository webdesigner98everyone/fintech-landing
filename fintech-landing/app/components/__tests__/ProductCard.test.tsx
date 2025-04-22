import { render, screen } from '@testing-library/react';
import { ProductCard } from '../../components/ProductCard';
import '@testing-library/jest-dom';
import { Product } from '../../types';

const mockProduct: Product = {
  id: '123',
  nombre: 'Cuenta de Ahorros',
  tipo: 'Cuenta',
  tasaInteres: 4.5,
  categoria: 'Básica',
  riesgo: 'Bajo',
  descripcion: 'Una cuenta para ahorrar',
  beneficios: ['Sin cuotas', 'Transferencias gratis'],
};

describe('ProductCard', () => {
  it('renderiza el producto correctamente', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Cuenta de Ahorros/i)).toBeInTheDocument();
    expect(screen.getByText(/Tipo: Ahorros/i)).toBeInTheDocument();
    expect(screen.getByText(/Tasa de Interés: 4.5%/i)).toBeInTheDocument();
    expect(screen.getByText(/Categoría: Básica/i)).toBeInTheDocument();
    expect(screen.getByText(/Riesgo: Bajo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver detalles/i })).toBeInTheDocument();
  });
});
