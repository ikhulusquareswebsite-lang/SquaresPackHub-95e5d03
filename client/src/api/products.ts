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
            name: 'PLASTICS',
            image: '/assets/images/pallet-wrap.png',
            description: 'High-quality plastics for secure wrapping'
          },
          {
            _id: '2',
            name: 'CORRUGATED',
            image: '/assets/images/cardboard-box.png',
            description: 'Durable corrugated cardboard for all your packaging needs'
          },
          {
            _id: '3',
            name: 'TAPE',
            image: '/assets/images/tape.png',
            description: 'Strong adhesive packing tape'
          },
          {
            _id: '4',
            name: 'PRINTING',
            image: '/assets/images/black-bags.png',
            description: 'High quality printing and embroidery'
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
