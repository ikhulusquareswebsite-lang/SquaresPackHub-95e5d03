import React, { useState } from 'react';
import { ProductVariant } from '@/api/productCategories';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  productName: string;
}

export const ProductVariantSelector: React.FC<ProductVariantSelectorProps> = ({
  variants,
  productName
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    variants.length > 0 ? variants[0] : null
  );

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select Configuration
        </label>
        <Select
          value={selectedVariant?._id || ''}
          onValueChange={(variantId) => {
            const variant = variants.find(v => v._id === variantId);
            if (variant) setSelectedVariant(variant);
          }}
        >
          <SelectTrigger className="w-full bg-white border-gray-300 focus:border-[#E91E8C] focus:ring-[#E91E8C]">
            <SelectValue placeholder="Choose a configuration" />
          </SelectTrigger>
          <SelectContent>
            {variants.map((variant) => (
              <SelectItem key={variant._id} value={variant._id}>
                {variant.size}
                {variant.color && ` - ${variant.color}`}
                {variant.thickness && ` (${variant.thickness})`}
                {variant.capacity && ` - ${variant.capacity}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedVariant && (
        <Card className="bg-gradient-to-br from-[#E91E8C]/5 to-[#E41E3F]/5 border-[#E91E8C]/20">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Size</p>
                <Badge variant="secondary" className="bg-white text-gray-900">
                  {selectedVariant.size}
                </Badge>
              </div>

              {selectedVariant.color && (
                <div>
                  <p className="text-sm text-gray-600 mb-1">Color</p>
                  <Badge variant="secondary" className="bg-white text-gray-900">
                    {selectedVariant.color}
                  </Badge>
                </div>
              )}

              {selectedVariant.thickness && (
                <div>
                  <p className="text-sm text-gray-600 mb-1">Thickness</p>
                  <Badge variant="secondary" className="bg-white text-gray-900">
                    {selectedVariant.thickness}
                  </Badge>
                </div>
              )}

              {selectedVariant.capacity && (
                <div>
                  <p className="text-sm text-gray-600 mb-1">Capacity</p>
                  <Badge variant="secondary" className="bg-white text-gray-900">
                    {selectedVariant.capacity}
                  </Badge>
                </div>
              )}

              <p className="text-sm text-gray-700 pt-2">
                {selectedVariant.description}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
