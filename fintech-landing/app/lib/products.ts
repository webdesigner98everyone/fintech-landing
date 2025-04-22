import { promises as fs } from 'fs';
import path from 'path';
import { Product } from '../types';

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'app', 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}
