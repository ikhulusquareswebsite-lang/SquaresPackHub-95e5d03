import api from './api';

// Import your images
import palletWrapImg from '../assets/images/pallet-wrap.png';
import cardboardBoxImg from '../assets/images/cardboard-box.jpg';
import tapeImg from '../assets/images/tape.jpg';
import printingImg from '../assets/images/printing.jfif';

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
            image: palletWrapImg,
            description: 'High-quality plastics for secure wrapping'
          },
          {
            _id: '2',
            name: 'CORRUGATED',
            image: cardboardBoxImg,
            description: 'Durable corrugated cardboard for all your packaging needs'
          },
          {
            _id: '3',
            name: 'TAPE',
            image: tapeImg,
            description: 'Strong adhesive packing tape'
          },
          {
            _id: '4',
            name: 'PRINTING',
            image: printingImg,
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
