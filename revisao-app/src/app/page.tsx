import React from 'react';
import { ProductList } from '@/components/ProductList';
import { UserList } from '@/components/UserList';
import { products } from '@/data/products';
import { users } from '@/data/users';

export default function Page() {
  return (
    <main className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Lista de Produtos e Usuários</h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Produtos</h2>
          <ProductList products={products} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Usuários</h2>
          <UserList users={users} />
        </section>
      </div>
    </main>
  );
}
