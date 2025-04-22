// components/ProductRiskPerformanceChart.tsx

'use client'; // Agregar esta línea al inicio del archivo

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';

// componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ProductRiskPerformanceChartProps {
  rendimiento: number; // Tasa de interés o rendimiento
  riesgo: 'Bajo' | 'Medio' | 'Alto'; // Riesgo (Bajo, Medio, Alto)
}

const ProductRiskPerformanceChart: React.FC<ProductRiskPerformanceChartProps> = ({ rendimiento, riesgo }) => {
  // Tipamos el objeto riskLevels para que acepte solo 'Bajo', 'Medio' o 'Alto' como claves
  const riskLevels: Record<'Bajo' | 'Medio' | 'Alto', number> = {
    Bajo: 1,
    Medio: 2,
    Alto: 3,
  };

  // Datos del gráfico
  const data = {
    labels: ['Rendimiento', 'Riesgo'],
    datasets: [
      {
        label: 'Rendimiento/Riesgo',
        data: [rendimiento, riskLevels[riesgo]], // Trabajo Dinamico de TypeScript, ya sabe que 'riesgo' es uno de los valores correctos
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Rendimiento vs Riesgo',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProductRiskPerformanceChart;
