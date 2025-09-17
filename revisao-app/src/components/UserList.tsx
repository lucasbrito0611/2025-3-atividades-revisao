'use client';
import React from 'react';
import { UserCard } from './UserCard';
import type { User } from '@/types';

export const UserList = ({ users }: { users: User[] }) => {
    return (
        <div className="space-y-3">
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </div>
    )
}