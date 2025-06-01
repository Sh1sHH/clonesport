import React from 'react';
import { products } from '../data';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const ShopSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald">SHOP</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative"
            >
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden relative transition-all duration-300 group-hover:shadow-md">
                {/* İndirim etiketi */}
                {product.isLimited && (
                  <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-sm">
                    -15%
                  </div>
                )}
                
                {/* Ürün görseli */}
                <div className="relative aspect-square overflow-hidden flex items-center justify-center p-4 bg-[#36383c]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  
                  {/* Quick Add butonu - hover durumunda görünür */}
                  <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
                
                {/* Ürün bilgileri */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-base leading-tight text-white">{product.name}</h3>
                    <span className="text-base font-bold text-white">${product.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-sm text-gray-400">{product.category}</p>
                  {product.isLimited && (
                    <span className="text-xs text-gray-400 line-through">${(product.price * 1.15).toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/shop" 
            className="inline-block bg-red-600/90 hover:bg-red-700 text-white font-medium px-6 py-3 rounded transition-colors duration-200 backdrop-blur-sm"
          >
            <span>Visit Full Shop</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;