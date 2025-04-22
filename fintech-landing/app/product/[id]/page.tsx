import { notFound } from 'next/navigation';
import { getProducts } from '../../lib/products';
import Button from '../../styles/StyledButton';
import Link from 'next/link';
import ProductRiskPerformanceChart from '../../components/ProductRiskPerformanceChart';
import { Metadata } from 'next';

// Definición del tipo correcto que espera Next.js
type Props = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Detalle del Producto',
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

const ProductPage = async ({ params }: Props) => {
  const { id } = params;
  const products = await getProducts();
  const product = products.find((p) => String(p.id) === id);

  if (!product) return notFound();

  const rendimiento = product.tasaInteres ?? 0;
  const riesgo = product.riesgo || 'Bajo';

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" passHref>
        <Button aria-label="Volver al Home">
          ← Volver al inicio
        </Button>
      </Link>

      <div className="border p-6 rounded shadow bg-white">
        <h1 className="text-3xl font-bold mb-2">{product.nombre}</h1>
        <p className="text-lg text-gray-700 mb-2"><strong>Tipo:</strong> {product.tipo}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Categoría:</strong> {product.categoria}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Riesgo:</strong> {product.riesgo}</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Tasa de Interés:</strong> {product.tasaInteres}%</p>
        <p className="text-gray-600 mb-6">{product.descripcion}</p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Beneficios</h2>
          <ul className="list-disc list-inside text-gray-700">
            {product.beneficios.map((b, index) => (
              <li key={index}>{b}</li>
            ))}
          </ul>
        </div>

        <ProductRiskPerformanceChart rendimiento={rendimiento} riesgo={riesgo} />
      </div>
    </div>
  );
};

export default ProductPage;
