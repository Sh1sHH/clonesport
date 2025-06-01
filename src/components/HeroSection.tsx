import React from 'react';
import { Clock, Calendar, BellRing } from 'lucide-react';
// featuredMatch verisini doğrudan kullanmak yerine sabit metinler ve logolar kullanacağız.

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Orijinal arka plan görseline geri dönüldü */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf: Maç Bilgileri */}
          <div className="space-y-6">
            <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium rounded-full animate-pulse">
              Upcoming Match
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-oswald">
              FUT <span className="text-red-500">VS</span> Liquid
            </h1>
            <p className="text-lg text-gray-300">
              The most anticipated matchup of the season! Don't miss the action.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-red-500" />
                <span>August 15, 2024</span> {/* Örnek tarih */}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-red-500" />
                <span>19:00 CET</span> {/* Örnek saat */}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200">
                Watch Live
              </a>
              <a href="/matches" className="bg-transparent border border-white/30 hover:border-red-500 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200 hover:text-red-500">
                View All Matches
              </a>
            </div>
          </div>
          
          {/* Sağ Taraf: Takım Logoları ve Geliştirilmiş Hatırlatıcı */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-red-500/50 transition-colors duration-300 flex flex-col items-center justify-center min-h-[300px]">
            <div className="flex items-center justify-around w-full">
              {/* FUT Logo */}
              <div className="text-center space-y-3">
                <img src="/fut_logo.webp" alt="FUT Logo" className="h-28 w-auto mx-auto transition-transform duration-300 hover:scale-105" />
                <h4 className="font-bold text-xl font-oswald">FUT</h4>
              </div>
              
              {/* VS Metni */}
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 font-oswald">VS</div>
              </div>
              
              {/* Liquid Logo */}
              <div className="text-center space-y-3">
                <img src="/Team_Liquid_logo.webp" alt="Liquid Logo" className="h-28 w-auto mx-auto transition-transform duration-300 hover:scale-105" /> 
                <h4 className="font-bold text-xl font-oswald">Liquid</h4>
              </div>
            </div>
            
            {/* Geliştirilmiş Set Reminder Bölümü */}
            <div className="mt-8 pt-6 border-t border-gray-700/50 w-full text-center">
              <p className="text-sm text-gray-300 mb-4">
                Bu efsanevi karşılaşmayı kaçırma! Maç başlamadan hatırlatma al.
              </p>
              <button className="w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base">
                <BellRing size={20} className="mr-1"/>
                Hatırlatıcı Kur
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;