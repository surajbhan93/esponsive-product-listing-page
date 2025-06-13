import { notFound } from 'next/navigation';
import Link from 'next/link';

type ProductParams = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: ProductParams) {
  const { id } = await params;
// fetch the product details from the api
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) 
    return notFound();

  const product = await response.json();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-md-5 text-center p-4">
{/*                 fetch the product images */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
{/*               fetch the products details */}
              <div className="col-md-7">
                <div className="card-body">
{/*                   fetch titlke */}
                  <h3 className="card-title">{product.title}</h3>
{/*                   fetch a description */}
                  <p className="card-text">{product.description}</p>
{/*                   fetch a price */}
                  <p><strong>Price:</strong> ₹{product.price}</p>
{/*                   fetch a category */}
                  <p><strong>Category:</strong> {product.category}</p>
{/*                   fetch a rating  */}
                  <p><strong>Rating:</strong> {product.rating?.rate ?? 'N/A'} ⭐</p>
{/*                   back the all product using a button */}
                  <Link href="/" className="btn btn-primary mt-3">← Back to Products</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
