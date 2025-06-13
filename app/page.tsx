// app/page.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import ClientProductList from './ClientProductList';
// define Product item
export interface Product {
  id: number;
  title: string;
  price: number;
  
  category: string;
  image: string;
  rating: { rate: number };
}
// fetch the produc data form the API 
async function getProducts(): Promise<Product[]> {
  //using public API 
  const response = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', // to mimic SSR like getServerSideProps
  });
  if (!response.ok)
  {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}
//Home Page 
export default async function HomePage() {
  const products = await getProducts();

  return (
    <Container className="mt-4">
      
 <h1 className="text-center mb-4 fw-bold text-primary">🛒 Explore Our Products</h1>
      
      <ClientProductList products={products} />
    </Container>
  );
}
