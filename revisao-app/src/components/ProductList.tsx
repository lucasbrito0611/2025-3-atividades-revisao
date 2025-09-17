'use client';
import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';
import { fetchProducts } from '@/services/api';

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(10);
                setProducts(data.products);
            } catch (err) {
                setError('Erro ao carregar produtos');
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
};
