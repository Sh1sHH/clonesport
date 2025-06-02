import React from 'react';
import { news } from '../data';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-oswald">LATEST NEWS</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <div 
              key={article.id}
              className="bg-red-900/50 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col h-full border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-red-900/10 hover:translate-y-[-5px]"
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent mix-blend-overlay z-10"></div>
                
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-3 right-3 z-20">
                  <span className="bg-black border border-red-500/50 text-red-500 text-xs px-2 py-1 rounded-sm flex items-center gap-1 shadow-md">
                    <Tag size={12} />
                    {article.category}
                  </span>
                </div>
                
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="bg-black/80 text-white text-xs px-2 py-1 rounded-sm flex items-center gap-1 border-l-2 border-red-500">
                    <Calendar size={12} className="text-red-500" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col bg-black/40 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-2 leading-tight text-white font-oswald group-hover:text-red-500 transition-colors">{article.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-2">{article.excerpt}</p>
                
                <a 
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center text-red-500 hover:text-white hover:bg-red-600 transition-all duration-200 mt-auto text-sm font-medium py-1 px-2 rounded-sm w-fit group-hover:pl-3"
                >
                  <span>Read More</span>
                  <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/news" className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;