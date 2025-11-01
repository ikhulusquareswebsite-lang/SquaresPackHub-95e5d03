import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E91E8C]">iKHULU SQUARES</h3>
            <p className="text-gray-300">
              Your trusted supplier of packaging solutions in South Africa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#E91E8C] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#E91E8C]" />
                <span>info@ikhulu.co.za</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#E91E8C]" />
                <span>+27 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#E91E8C]" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} iKHULU SQUARES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};