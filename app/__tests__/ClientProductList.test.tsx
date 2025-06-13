import { render, screen } from '@testing-library/react';
import ClientProductList from '../ClientProductList';

import { Product } from '../page';
// test the 1st data
const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Mock Product',
    price: 999,
    category: 'Electronics',
    
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.5, count: 100 },
  },
];

describe('ClientProductList', () => {
  it('renders product title after loading', async () => {
    
    render(<ClientProductList products={mockProducts} />);
    
    // Wait for the product title to appear
    const productTitle = await screen.findByText(/mock product/i);
    
    expect(productTitle).toBeInTheDocument();
  });
});
