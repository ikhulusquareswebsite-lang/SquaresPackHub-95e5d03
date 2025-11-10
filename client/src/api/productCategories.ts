import api from './api';

export interface ProductVariant {
  _id: string;
  size: string;
  color?: string;
  thickness?: string;
  capacity?: string;
  description: string;
}

export interface CategoryProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  variants: ProductVariant[];
}

export interface ProductCategory {
  _id: string;
  categoryName: string;
  categoryImage: string;
  description: string;
  products: CategoryProduct[];
}

// Description: Get products by category
// Endpoint: GET /api/products/category/:categoryId
// Request: {}
// Response: { category: ProductCategory }
export const getProductsByCategory = (categoryId: string) => {
  // Mocking the response
  return new Promise<{ category: ProductCategory }>((resolve) => {
    setTimeout(() => {
      const categories: Record<string, ProductCategory> = {
        'pallet-wrap': {
          _id: 'pallet-wrap',
          categoryName: 'PALLET WRAP',
          categoryImage: '/images/pallet-wrap.jpg',
          description: 'High-quality stretch film for secure pallet wrapping and load stabilization',
          products: [
            {
              _id: 'pw-1',
              name: 'Standard Stretch Film',
              image: '/images/pallet-wrap.jpg',
              description: 'Professional grade stretch film for general pallet wrapping',
              variants: [
                { _id: 'pw-1-v1', size: '500mm x 300m', thickness: '17 microns', description: 'Standard roll' },
                { _id: 'pw-1-v2', size: '500mm x 300m', thickness: '20 microns', description: 'Heavy duty' },
                { _id: 'pw-1-v3', size: '500mm x 300m', thickness: '23 microns', description: 'Extra heavy duty' },
              ]
            },
            {
              _id: 'pw-2',
              name: 'Colored Stretch Film',
              image: '/images/pallet-wrap.jpg',
              description: 'Colored stretch film for easy identification and branding',
              variants: [
                { _id: 'pw-2-v1', size: '500mm x 300m', color: 'Red', thickness: '17 microns', description: 'Red film' },
                { _id: 'pw-2-v2', size: '500mm x 300m', color: 'Blue', thickness: '17 microns', description: 'Blue film' },
                { _id: 'pw-2-v3', size: '500mm x 300m', color: 'Green', thickness: '17 microns', description: 'Green film' },
              ]
            },
            {
              _id: 'pw-3',
              name: 'Machine Grade Stretch Film',
              image: '/images/pallet-wrap.jpg',
              description: 'Optimized for automatic wrapping machines',
              variants: [
                { _id: 'pw-3-v1', size: '500mm x 1000m', thickness: '15 microns', description: 'Machine compatible' },
                { _id: 'pw-3-v2', size: '500mm x 1500m', thickness: '15 microns', description: 'Extended length' },
              ]
            },
          ]
        },
        'cardboard-box': {
          _id: 'cardboard-box',
          categoryName: 'GENERAL CARDBOARD BOXE',
          categoryImage: '/images/cardboard-box.jpg',
          description: 'Durable and versatile cardboard boxes for all packaging needs',
          products: [
            {
              _id: 'cb-1',
              name: 'Single Wall Boxes',
              image: '/images/cardboard-box.jpg',
              description: 'Standard single wall corrugated boxes',
              variants: [
                { _id: 'cb-1-v1', size: '200x150x100mm', description: 'Small box' },
                { _id: 'cb-1-v2', size: '300x200x150mm', description: 'Medium box' },
                { _id: 'cb-1-v3', size: '400x300x200mm', description: 'Large box' },
              ]
            },
            {
              _id: 'cb-2',
              name: 'Double Wall Boxes',
              image: '/images/cardboard-box.jpg',
              description: 'Extra strong double wall corrugated boxes',
              variants: [
                { _id: 'cb-2-v1', size: '200x150x100mm', description: 'Small box' },
                { _id: 'cb-2-v2', size: '300x200x150mm', description: 'Medium box' },
                { _id: 'cb-2-v3', size: '400x300x200mm', description: 'Large box' },
              ]
            },
            {
              _id: 'cb-3',
              name: 'Custom Printed Boxes',
              image: '/images/cardboard-box.jpg',
              description: 'Branded cardboard boxes with custom printing',
              variants: [
                { _id: 'cb-3-v1', size: 'Custom', description: 'Full color printing' },
                { _id: 'cb-3-v2', size: 'Custom', description: 'Single color printing' },
              ]
            },
          ]
        },
        'tape': {
          _id: 'tape',
          categoryName: 'TAPE',
          categoryImage: '/images/tape.jpg',
          description: 'Strong adhesive packing tape for secure sealing',
          products: [
            {
              _id: 't-1',
              name: 'Brown Packing Tape',
              image: '/images/tape.jpg',
              description: 'Standard brown packing tape for general use',
              variants: [
                { _id: 't-1-v1', size: '48mm x 50m', description: 'Standard roll' },
                { _id: 't-1-v2', size: '48mm x 100m', description: 'Extended length' },
                { _id: 't-1-v3', size: '72mm x 50m', description: 'Wide roll' },
              ]
            },
            {
              _id: 't-2',
              name: 'Clear Packing Tape',
              image: '/images/tape.jpg',
              description: 'Transparent packing tape for professional appearance',
              variants: [
                { _id: 't-2-v1', size: '48mm x 50m', description: 'Standard roll' },
                { _id: 't-2-v2', size: '48mm x 100m', description: 'Extended length' },
              ]
            },
            {
              _id: 't-3',
              name: 'Heavy Duty Tape',
              image: '/images/tape.jpg',
              description: 'Extra strong tape for heavy packages',
              variants: [
                { _id: 't-3-v1', size: '48mm x 50m', thickness: 'Extra thick', description: 'Heavy duty' },
                { _id: 't-3-v2', size: '72mm x 50m', thickness: 'Extra thick', description: 'Wide heavy duty' },
              ]
            },
          ]
        },
        'black-bags': {
          _id: 'black-bags',
          categoryName: 'BLACK BAGS',
          categoryImage: '/images/black-bags.jpg',
          description: 'Heavy-duty refuse bags for waste management',
          products: [
            {
              _id: 'bb-1',
              name: 'Standard Refuse Bags',
              image: '/images/black-bags.jpg',
              description: 'Standard black refuse bags for general waste',
              variants: [
                { _id: 'bb-1-v1', capacity: '30L', description: 'Small bags' },
                { _id: 'bb-1-v2', capacity: '60L', description: 'Medium bags' },
                { _id: 'bb-1-v3', capacity: '100L', description: 'Large bags' },
              ]
            },
            {
              _id: 'bb-2',
              name: 'Heavy Duty Refuse Bags',
              image: '/images/black-bags.jpg',
              description: 'Extra strong refuse bags for heavy waste',
              variants: [
                { _id: 'bb-2-v1', capacity: '60L', description: 'Medium heavy duty' },
                { _id: 'bb-2-v2', capacity: '100L', description: 'Large heavy duty' },
              ]
            },
            {
              _id: 'bb-3',
              name: 'Biodegradable Bags',
              image: '/images/black-bags.jpg',
              description: 'Eco-friendly biodegradable refuse bags',
              variants: [
                { _id: 'bb-3-v1', capacity: '30L', description: 'Small eco bags' },
                { _id: 'bb-3-v2', capacity: '60L', description: 'Medium eco bags' },
              ]
            },
          ]
        }
      };

      resolve({ category: categories[categoryId] || categories['pallet-wrap'] });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get(`/api/products/category/${categoryId}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};
