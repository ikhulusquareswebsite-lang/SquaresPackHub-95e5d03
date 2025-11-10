import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export const MarketingHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Contact us', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-[#E8E8E8]'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo className="cursor-pointer" onClick={() => navigate('/')} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black font-medium text-lg hover:text-[#E91E8C] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E91E8C] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black font-medium text-lg hover:text-[#E91E8C] transition-colors duration-300 text-left py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};