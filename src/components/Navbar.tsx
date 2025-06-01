import React, { useState } from 'react';
import { NavItem } from '../types';
import { Menu, X, ChevronDown, Search, User, ShoppingCart } from 'lucide-react';
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

  return (
    <nav className="bg-black/95 text-white sticky top-0 z-50 border-b border-red-500/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
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

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
              <ShoppingCart size={20} />
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-200">
              Join Now
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
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-red-500 hover:bg-gray-800 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex justify-between px-3">
              <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                <Search size={20} />
              </button>
              <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                <User size={20} />
              </button>
              <button className="text-gray-300 hover:text-red-500 transition-colors duration-200">
                <ShoppingCart size={20} />
              </button>
            </div>
            <div className="px-3 pt-2">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-200">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;