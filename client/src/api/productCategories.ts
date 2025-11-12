import api from './api';
import stretchfilmImg from '@/assets/images/stretchfilm.png';
import palletwraphandrollImg from '@/assets/images/palletwraphandroll.png';
import palletwrapextendedcoreImg from '@/assets/images/palletwrapextendedcore.jpg';
import palletwrapmachinerollImg from '@/assets/images/palletwrapmachineroll.jpeg';
import skinpackagingImg from '@/assets/images/skinpackaging.png';
import blackpalletwrapImg from '@/assets/images/blackpalletwrap.png';
import bubblewrapImg from '@/assets/images/bubblewrap.png';

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
        'plastics': {
          _id: 'plastics',
          categoryName: 'PLASTICS',
          categoryImage: stretchfilmImg,
          description: 'High-quality plastics for secure wrapping',
          products: [
            {
              _id: 'pl-1',
              name: 'Stretch Refill',
              image: stretchfilmImg,
              description: 'Stretch Refill-roll. Ideal for bundling. Custom sizes available on request',
              variants: [
                { _id: 'pl-1-v1', size: '100 x 200 x 13mic', description: 'Standard thickness' },
                { _id: 'pl-1-v2', size: '100 x 200 x 15mic', description: 'Heavy duty thickness' },
              ]
            },
            {
              _id: 'pl-2',
              name: 'Pallet Wrap Hand Rolls',
              image: palletwraphandrollImg,
              description: 'A smart, effective and cost-efficient packaging solution. Smooth, easy release - wraps loads fast with little effort. Industrial strength and clings to itself without adhesives',
              variants: [
                { _id: 'pl-2-v1', size: '450mm x 400mm x 11mic', description: 'Ultra light' },
                { _id: 'pl-2-v2', size: '450mm x 400mm x 12mic', description: 'Light' },
                { _id: 'pl-2-v3', size: '450mm x 400mm x 13mic', description: 'Standard' },
                { _id: 'pl-2-v4', size: '450mm x 400mm x 15mic', description: 'Medium duty' },
                { _id: 'pl-2-v5', size: '450mm x 400mm x 17mic', description: 'Heavy duty' },
                { _id: 'pl-2-v6', size: '450mm x 400mm x 20mic', description: 'Extra heavy' },
                { _id: 'pl-2-v7', size: '450mm x 400mm x 23mic', description: 'Super heavy' },
                { _id: 'pl-2-v8', size: '450mm x 400mm x 25mic', description: 'Industrial' },
                { _id: 'pl-2-v9', size: '450mm x 400mm x 30mic', description: 'Maximum strength' },
              ]
            },
            {
              _id: 'pl-3',
              name: 'Pallet Wrap Extended Core Hand Rolls',
              image: palletwrapextendedcoreImg,
              description: 'Clear Hand pallet Wrap for securing pallet loads. With Extended core to be used as handles. Perfect for wrapping and bundling items that are being transported on pallets or put into storage',
              variants: [
                { _id: 'pl-3-v1', size: '450mm x 400mm x 11mic', description: 'Ultra light' },
                { _id: 'pl-3-v2', size: '450mm x 400mm x 12mic', description: 'Light' },
                { _id: 'pl-3-v3', size: '450mm x 400mm x 13mic', description: 'Standard' },
                { _id: 'pl-3-v4', size: '450mm x 400mm x 15mic', description: 'Medium duty' },
                { _id: 'pl-3-v5', size: '450mm x 400mm x 17mic', description: 'Heavy duty' },
                { _id: 'pl-3-v6', size: '450mm x 400mm x 20mic', description: 'Extra heavy' },
                { _id: 'pl-3-v7', size: '450mm x 400mm x 23mic', description: 'Super heavy' },
              ]
            },
            {
              _id: 'pl-4',
              name: 'Pallet Wrap Machine Rolls',
              image: palletwrapmachinerollImg,
              description: 'Clear pallet wrap used to secure pallet loads using an automatic pallet wrapping machine.',
              variants: [
                { _id: 'pl-4-v1', size: '450mm x 1000mm x 10mic', description: 'Machine - Ultra light' },
                { _id: 'pl-4-v2', size: '450mm x 1000mm x 12mic', description: 'Machine - Light' },
                { _id: 'pl-4-v3', size: '450mm x 1000mm x 13mic', description: 'Machine - Standard' },
                { _id: 'pl-4-v4', size: '450mm x 1000mm x 17mic', description: 'Machine - Heavy duty' },
                { _id: 'pl-4-v5', size: '450mm x 1000mm x 23mic', description: 'Machine - Super heavy' },
                { _id: 'pl-4-v6', size: '450mm x 1000mm x 25mic', description: 'Machine - Industrial' },
                { _id: 'pl-4-v7', size: '450mm x 1000mm x 30mic', description: 'Machine - Maximum strength' },
                { _id: 'pl-4-v8', size: '450mm x 1500mm x 15mic', description: 'Machine Extended - Medium' },
                { _id: 'pl-4-v9', size: '450mm x 1500mm x 17mic', description: 'Machine Extended - Heavy' },
                { _id: 'pl-4-v10', size: '450mm x 1500mm x 23mic', description: 'Machine Extended - Super heavy' },
                { _id: 'pl-4-v11', size: '450mm x 2000mm x 11mic', description: 'Machine XL - Ultra light' },
                { _id: 'pl-4-v12', size: '450mm x 2000mm x 13mic', description: 'Machine XL - Standard' },
                { _id: 'pl-4-v13', size: '450mm x 2000mm x 15mic', description: 'Machine XL - Medium' },
                { _id: 'pl-4-v14', size: '450mm x 2000mm x 17mic', description: 'Machine XL - Heavy' },
              ]
            },
            {
              _id: 'pl-5',
              name: 'Skin Packaging',
              image: skinpackagingImg,
              description: 'This plastic shrinks the product to a backing card. Products are tightly shrunk to a card and clearly displayed on hanging pins in retail outlets. Suitable for small components in the plumbing, tooling, adhesive and stationery industries.',
              variants: [
                { _id: 'pl-5-v1', size: '550mm x 80mic', description: 'Light duty' },
                { _id: 'pl-5-v2', size: '550mm x 120mic', description: 'Medium duty' },
                { _id: 'pl-5-v3', size: '550mm x 200mic', description: 'Heavy duty' },
                { _id: 'pl-5-v4', size: '550mm x 250mic', description: 'Extra heavy duty' },
                { _id: 'pl-5-v5', size: '620mm x 80mic', description: 'Wide - Light duty' },
                { _id: 'pl-5-v6', size: '620mm x 120mic', description: 'Wide - Medium duty' },
              ]
            },
            {
              _id: 'pl-6',
              name: 'Black Pallet Wrap',
              image: blackpalletwrapImg,
              description: 'Black pallet wrap used predominantly for security, and light-sensitive products by prohibiting UV exposure.',
              variants: [
                { _id: 'pl-6-v1', size: '450mm x 400mm x 15mic', description: 'Medium duty' },
                { _id: 'pl-6-v2', size: '450mm x 400mm x 17mic', description: 'Heavy duty' },
                { _id: 'pl-6-v3', size: '450mm x 400mm x 20mic', description: 'Extra heavy duty' },
              ]
            },
            {
              _id: 'pl-7',
              name: 'Bubble Wrap',
              image: bubblewrapImg,
              description: 'Strong, flexible and lightweight. Ideal for dispatch areas and post rooms. Easy and convenient to store. The material is a pliable transparent plastic with air bubbles evenly spread across a sheet. This ensures that the item is consistently cushioned on all sides to ensure minimum chances of damage during transport',
              variants: [
                { _id: 'pl-7-v1', size: '1.220m x 100m (small bubbles)', description: 'Standard roll - Small bubbles' },
                { _id: 'pl-7-v2', size: '1.220m x 80m (small bubbles)', description: 'Compact roll - Small bubbles' },
                { _id: 'pl-7-v3', size: '1.250m x 100m (small bubbles)', description: 'Wide roll - Small bubbles' },
                { _id: 'pl-7-v4', size: '1.250m x 48m (big bubbles)', description: 'Wide roll - Big bubbles' },
                { _id: 'pl-7-v5', size: '410mm x 30m Ready to Roll', description: 'Convenient Ready to Roll' },
              ]
            },
          ]
        },
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

      resolve({ category: categories[categoryId] || categories['plastics'] });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  /* try {
     return await api.get(`/api/products/category/${categoryId}`);
   } catch (error) {
     throw new Error(error?.response?.data?.error || error.message);
   } */
};
