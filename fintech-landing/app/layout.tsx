import './globals.css';
import React from 'react';
import Header from 'app/components/Header';

export const metadata = {
  title: 'Fintech Landing',
  description: 'Landing de productos financieros',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
