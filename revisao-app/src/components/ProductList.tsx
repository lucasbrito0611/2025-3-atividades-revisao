'use client';
import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';

export const ProductList = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}