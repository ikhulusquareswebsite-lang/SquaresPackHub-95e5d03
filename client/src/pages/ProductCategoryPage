import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ProductVariantSelector } from '@/components/ProductVariantSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/useToast';
import { getProductsByCategory, ProductCategory, CategoryProduct } from '@/api/productCategories';
import { ArrowLeft, Package } from 'lucide-react';

export const ProductCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      if (!categoryId) {
        toast({
          title: 'Error',
          description: 'Category not found',
          variant: 'destructive'
        });
        navigate('/');
        return;
      }

      try {
        console.log(`Fetching products for category: ${categoryId}`);
        const response = await getProductsByCategory(categoryId);
        setCategory(response.category);
        console.log(`Category loaded: ${response.category.categoryName}`);
      } catch (error) {
        console.error('Error fetching category:', error);
        toast({
          title: 'Error',
          description: 'Failed to load products',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId, navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <MarketingHeader />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg p-6 animate-pulse h-48"></div>
              ))}
            </div>
          </div>
        </div>
        <MarketingFooter />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <MarketingHeader />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <p className="text-gray-600">Category not found</p>
            <Button onClick={() => navigate('/')} className="mt-4">
              Back to Home
            </Button>
          </div>
        </div>
        <MarketingFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8E8E8] via-[#F5F5F5] to-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-gray-700 hover:text-[#E91E8C] flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 animate-in fade-in slide-in-from-bottom duration-700">
            {category.categoryName}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <SectionWrapper id="products" variant="light">
        <div className="space-y-8">
          {category.products.map((product, index) => (
            <Card
              key={product._id}
              className="overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-[#E91E8C]/5 to-[#E41E3F]/5 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-black mb-2">
                      {product.name}
                    </CardTitle>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <Package className="w-8 h-8 text-[#E91E8C] flex-shrink-0 ml-4" />
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8 h-64">
                    <Package className="w-32 h-32 text-gray-300" />
                  </div>

                  {/* Product Details */}
                  <div>
                    <ProductVariantSelector
                      variants={product.variants}
                      productName={product.name}
                    />

                    <Button
                      onClick={() => setExpandedProduct(
                        expandedProduct === product._id ? null : product._id
                      )}
                      className="w-full mt-6 bg-[#E91E8C] hover:bg-[#E41E3F] text-white transition-all duration-300"
                    >
                      {expandedProduct === product._id
                        ? 'Hide All Variants'
                        : `View All ${product.variants.length} Variants`}
                    </Button>
                  </div>
                </div>

                {/* All Variants */}
                {expandedProduct === product._id && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-black mb-4">
                      All Available Variants
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.variants.map((variant) => (
                        <Card
                          key={variant._id}
                          className="bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-[#E91E8C] transition-colors duration-300"
                        >
                          <CardContent className="pt-6">
                            <div className="space-y-2">
                              <p className="font-semibold text-gray-900">
                                {variant.size}
                              </p>
                              {variant.color && (
                                <p className="text-sm text-gray-600">
                                  Color: {variant.color}
                                </p>
                              )}
                              {variant.thickness && (
                                <p className="text-sm text-gray-600">
                                  Thickness: {variant.thickness}
                                </p>
                              )}
                              {variant.capacity && (
                                <p className="text-sm text-gray-600">
                                  Capacity: {variant.capacity}
                                </p>
                              )}
                              <p className="text-sm text-gray-700 pt-2">
                                {variant.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <MarketingFooter />
    </div>
  );
};
