'use client';
import { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import type { User } from '@/types';

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(users);
    }, []);

    return (
        <div className="space-y-3">
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </div>
    )
}