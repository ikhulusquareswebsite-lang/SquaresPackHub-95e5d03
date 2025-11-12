import React from 'react';
import { Card, CardContent } from './ui/card';
import { Package, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCategoryCardProps {
  categoryId: string;
  categoryName: string;
  description: string;
  productCount: number;
  image?: string;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  categoryId,
  categoryName,
  description,
  productCount,
  image
}) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate('/products/${categoryId}')}
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-gray-200 overflow-hidden"
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-full h-48 mb-4 flex items-center justify-center bg-white rounded-lg overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={categoryName}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E91E8C]/10 to-[#E41E3F]/10 group-hover:from-[#E91E8C]/20 group-hover:to-[#E41E3F]/20 transition-colors duration-300">
              <Package className="w-16 h-16 text-[#E91E8C] group-hover:text-[#E41E3F] transition-colors duration-300" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-black uppercase mb-2 group-hover:text-[#E91E8C] transition-colors duration-300">
          {categoryName}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-xs font-semibold text-gray-500">
            {productCount} product{productCount !== 1 ? 's' : ''}
          </span>
          <ChevronRight className="w-5 h-5 text-[#E91E8C] group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </CardContent>
    </Card>
  );
};
