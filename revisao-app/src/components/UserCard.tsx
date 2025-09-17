'use client';
import type { User } from '@/types';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export const UserCard = ({ user }: { user: User }) => {
    return (
        <Card className="flex items-center gap-4">
            <Avatar>
                <AvatarImage src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                <AvatarFallback>
                    {user.firstName[0]}
                    {user.lastName[0]}
                </AvatarFallback>
            </Avatar>
            <div>
                <div className="font-semibold">
                    {user.firstName} {user.lastName}
                </div>
                <div className="text-sm text-slate-500">{user.email}</div>
            </div>
        </Card>
    );
};
