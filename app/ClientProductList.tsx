'use client';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Spinner, Pagination } from 'react-bootstrap';
import Link from 'next/link';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number };
}

interface Props {
  products: Product[];
}

export default function ClientProductList({ products }: Props) {
  const [filtered, setFiltered] = useState<Product[]>(products);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    setLoading(true);
    const delay = setTimeout(() => {
      const filteredList = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredList);
      setCurrentPage(1);
      setLoading(false);
    }, 300);
    return () => clearTimeout(delay);
  }, [search, products]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Form.Control
        type="text"
        placeholder="🔍 Search products..."
        className="mb-4 p-3 shadow-sm rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row>
            {paginatedProducts.map(product => (
              <Col sm={12} md={6} lg={4} xl={3} key={product.id} className="mb-4">
                <Link
                  href={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Card className="h-100 shadow-sm border-0 product-card">
                    <div className="text-center p-3">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: '200px', objectFit: 'contain' }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="text-truncate" title={product.title}>
                        {product.title}
                      </Card.Title>
                      <Card.Text>
                        <span className="fw-bold text-success">₹{product.price}</span> <br />
                        <small className="text-muted">{product.category}</small><br />
                        <span>⭐ {product.rating?.rate}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                {Array.from({ length: totalPages }, (_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={idx + 1 === currentPage}
                    onClick={() => setCurrentPage(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )}
        </>
      )}

      <style jsx global>{`
        .product-card:hover {
          transform: scale(1.02);
          transition: transform 0.2s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .text-truncate {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
}
