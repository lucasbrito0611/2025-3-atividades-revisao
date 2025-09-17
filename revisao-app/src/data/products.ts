import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    title: 'Smartphone X100',
    description: 'Celular com tela AMOLED e 128GB de armazenamento',
    price: 1999,
    discountPercentage: 10,
    rating: 4.5,
    stock: 12,
    brand: 'BrandCo',
    category: 'smartphones',
    thumbnail: 'https://picsum.photos/seed/p1/400/300',
    images: ['https://picsum.photos/seed/p1a/1200/800'],
  },
  {
    id: 2,
    title: 'Headphone Pro',
    description: 'Headphone com cancelamento de ruído ativo',
    price: 599,
    discountPercentage: 15,
    rating: 4.7,
    stock: 34,
    brand: 'Soundly',
    category: 'audio',
    thumbnail: 'https://picsum.photos/seed/p2/400/300',
    images: ['https://picsum.photos/seed/p2a/1200/800'],
  },
];
