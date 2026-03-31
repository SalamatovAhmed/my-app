const BASE = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await fetch(BASE);
  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${BASE}/${id}`);
  return res.json();
};

export const searchProducts = async (q) => {
  const res = await fetch(`${BASE}/search?q=${q}`);
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${BASE}/categories`);
  return res.json();
};

export const getByCategory = async (cat) => {
  const res = await fetch(`${BASE}/category/${cat}`);
  return res.json();
};