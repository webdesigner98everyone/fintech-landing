export type ProductType = 'Cuenta' | 'Tarjeta' | 'Fondo' | 'Seguro';

export interface Product {
  id: string;
  nombre: string;
  tipo: ProductType;
  tasaInteres?: number;
  categoria: string;
  riesgo?: 'Bajo' | 'Medio' | 'Alto';
  descripcion: string;
  beneficios: string[];
}
