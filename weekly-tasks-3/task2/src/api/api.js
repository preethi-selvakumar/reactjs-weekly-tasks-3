import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = () => axios.get(`${BASE_URL}/products`);

export const getProductById = (id) => axios.get(`${BASE_URL}/products/${id}`);

export const getCart = () => axios.get(`${BASE_URL}/carts/1`);

export const getCategories = () => axios.get(`${BASE_URL}/products/categories`);
