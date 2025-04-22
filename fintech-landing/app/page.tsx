import { ProductList } from '../app/components/ProductList';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Productos Financieros</h1>
      <ProductList />
    </main>
  );
}
