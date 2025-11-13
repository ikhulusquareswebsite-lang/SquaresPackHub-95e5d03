import React, { useEffect, useState } from 'react';
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ProductCard } from '@/components/ProductCard';
import { ProductCategoryCard } from '@/components/ProductCategoryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/useToast';
import { getProducts, Product } from '@/api/products';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import plasticsImg from '@/assets/images/pallet-wrap.png';
import corrugatedImg from '@/assets/images/cardboard-box.jpg';
import tapeImg from '@/assets/images/tape.jpg';
import printingImg from '@/assets/images/printing.jfif';

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('pQRVWWjiPbsLmCve2');
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await getProducts();
        setProducts(response.products);
        console.log('Products loaded:', response.products.length);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: 'Error',
          description: 'Failed to load products',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_mnifvdh',
        'template_el42dir',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const categoryMappings = [
    { 
      id: 'plastics', 
      name: 'PLASTICS', 
      count: 7,
      image: plasticsImg,
      description: 'High-quality plastics for secure wrapping'
    },
    { 
      id: 'corrugated', 
      name: 'CORRUGATED', 
      count: 1,
      image: corrugatedImg,
      description: 'Durable corrugated cardboard for all your packaging needs'
    },
    { 
      id: 'tape', 
      name: 'TAPE', 
      count: 5,
      image: tapeImg,
      description: 'Strong adhesive packing tape'
    },
    { 
      id: 'printing', 
      name: 'PRINTING', 
      count: 5,
      image: printingImg,
      description: 'High quality printing and embroidery'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MarketingHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8E8E8] via-[#F5F5F5] to-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#E41E3F]">
                iKHULU SQUARES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              Your trusted supplier of packaging solutions in South Africa
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-[#E91E8C] hover:bg-[#E41E3F] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-in fade-in slide-in-from-bottom duration-700 delay-300"
            >
              Explore Our Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <SectionWrapper id="about" variant="light">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 animate-in fade-in slide-in-from-left duration-700">
            About us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-in fade-in slide-in-from-left duration-700 delay-150">
            iKHULU SQUARES is a supplier of packaging and printing products and solutions countrywide. We stock a wide variety packaging and print products tailored to suit diverse industries.
          </p>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper id="products" variant="dark">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 animate-in fade-in slide-in-from-left duration-700">
          Products
        </h2>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700 delay-150">
            {categoryMappings.map((category, index) => (
              <div
                key={category.id}
                className="animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCategoryCard
                  categoryId={category.id}
                  categoryName={category.name}
                  description={category.description}
                  productCount={category.count}
                  image={category.image}
                />
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* Contact Us Section */}
      <SectionWrapper id="contact" variant="light">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 animate-in fade-in slide-in-from-left duration-700">
          Contact us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left duration-700 delay-150">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300 focus:border-[#E91E8C] focus:ring-[#E91E8C]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300 focus:border-[#E91E8C] focus:ring-[#E91E8C]"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300 focus:border-[#E91E8C] focus:ring-[#E91E8C] min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#E91E8C] hover:bg-[#E41E3F] text-white py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="bg-gradient-to-br from-[#E91E8C] to-[#E41E3F] p-8 rounded-2xl shadow-lg text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="mb-8 text-white/90">
                We're here to help with all your packaging needs. Reach out to us through any of the following channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/90">sales@ikhulusquares.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-white/90">+27 61 519 1757</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/90">9 Crete road</p>
                    <p className="text-white/90">Unit 1 Wetron Industial Park</p>
                    <p className="text-white/90">Wetton</p>
                    <p className="text-white/90">7800</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-white/90">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-white/90">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-white/90">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <MarketingFooter />
    </div>
  );
};
