'use client';
import React, { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from '@/types';
import { fetchUsers } from '@/services/api';

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers(10);
                setUsers(data.users);
            } catch (err) {
                setError('Erro ao carregar usuários');
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    if (loading) return <p>Carregando usuários...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="space-y-3">
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </div>
    );
};
