'use client';
import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(products);
    }, []);

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}