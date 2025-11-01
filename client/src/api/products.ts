import api from './api';

export interface Product {
  _id: string;
  name: string;
  image: string;
  description?: string;
}

// Description: Get all products
// Endpoint: GET /api/products
// Request: {}
// Response: { products: Array<{ _id: string, name: string, image: string, description?: string }> }
export const getProducts = () => {
  // Mocking the response
  return new Promise<{ products: Product[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        products: [
          {
            _id: '1',
            name: 'PALLET WRAP',
            image: '/images/pallet-wrap.jpg',
            description: 'High-quality stretch film for secure pallet wrapping'
          },
          {
            _id: '2',
            name: 'GENERAL CARDBOARD BOXE',
            image: '/images/cardboard-box.jpg',
            description: 'Durable cardboard boxes for all your packaging needs'
          },
          {
            _id: '3',
            name: 'TAPE',
            image: '/images/tape.jpg',
            description: 'Strong adhesive packing tape'
          },
          {
            _id: '4',
            name: 'BLACK BAGS',
            image: '/images/black-bags.jpg',
            description: 'Heavy-duty refuse bags'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/products');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};