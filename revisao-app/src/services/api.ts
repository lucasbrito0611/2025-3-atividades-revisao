import axios from 'axios';
import type { Product, User } from '@/types';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
});

export async function fetchProducts(limit = 10) {
  const res = await api.get(`/products?limit=${limit}`);
  return res.data;
}

export async function fetchUsers(limit = 10) {
  const res = await api.get(`/users?limit=${limit}`);
  return res.data;
}
