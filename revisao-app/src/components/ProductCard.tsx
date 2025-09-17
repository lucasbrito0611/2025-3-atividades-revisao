'use client';

import { Card } from './ui/card';
import { Button } from './ui/button';
import type { Product } from '@/types';

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="flex gap-4 items-center">
            <img src={product.thumbnail} alt={product.title} className="w-28 h-20 object-cover rounded-lg" />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-slate-600 truncate">{product.description}</p>
                <div className="mt-2 flex items-center gap-3">
                    <div className="text-xl font-bold">R$ {product.price}</div>
                    <div className="text-sm text-slate-500">({product.rating ?? '-'}/5)</div>
                </div>
            </div>
            <div>
                <Button>Comprar</Button>
            </div>
        </Card>
    );
}