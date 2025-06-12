import React from 'react';
import { notFound } from 'next/navigation';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) return notFound(); // handle invalid product ID

  const product = await res.json();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-md-5 text-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <p><strong>Price:</strong> ₹{product.price}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                  <p><strong>Rating:</strong> {product.rating?.rate ?? 'N/A'} ⭐</p>
                  <a href="/" className="btn btn-primary mt-3">← Back to Products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
