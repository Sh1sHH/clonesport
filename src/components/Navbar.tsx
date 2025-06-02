import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Teams', href: '/teams' },
  { label: 'Matches', href: '/matches' },
  { label: 'News', href: '/news' },
  { label: 'Shop', href: '/shop' },
  { label: 'Community', href: '/community' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // İlk yüklenmede scroll pozisyonunu kontrol et
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 border-b border-red-500/20' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation - Menü Öğeleri Ortalanmış */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 px-2 py-1 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Button - Sağda */}
          <div className="hidden md:flex items-center">
            <button className={`${
              isScrolled 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-red-600/80 hover:bg-red-600'
              } text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-200`}
            >
              Shop
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-gray-900' : 'bg-black/90'} border-t border-gray-800`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-red-500 hover:bg-gray-800/50 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 pt-2">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-200">
                Shop
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;