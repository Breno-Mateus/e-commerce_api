import { api } from "./api";

// Busca todos os produtos
export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

// Busca produtos por categoria
export const getProductsByCategory = async (category: string) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

// Busca um produto específico
export const getProductById = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
