export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
};

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username?: string;
    email?: string;
    age?: number;
    image?: string;
};