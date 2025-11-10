import React from 'react';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, image, description }) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-gray-200">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-black uppercase text-center mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 text-center">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
