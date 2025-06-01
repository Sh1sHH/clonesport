import React from 'react';
import { sponsors } from '../data';
import { BackgroundBeams } from './ui/BackgroundBeams';

const SponsorsSection: React.FC = () => {
  // Görseldeki logoları temsil edecek şekilde data/index.ts'deki sponsorları güncellediğinizi varsayıyorum.
  // Örneğin:
  // const sponsors = [
  //   { id: '1', name: 'Inzone', logo: '/sponsors/inzone.png', tier: 'platinum' },
  //   { id: '2', name: 'Red Bull', logo: '/sponsors/redbull.png', tier: 'platinum' },
  //   { id: '3', name: 'Betify', logo: '/sponsors/betify.png', tier: 'platinum' },
  //   { id: '4', name: 'Blacklyte', logo: '/sponsors/blacklyte.png', tier: 'gold' },
  //   { id: '5', name: 'GoGlobal', logo: '/sponsors/goglobal.png', tier: 'gold' },
  //   { id: '6', name: 'Amazon', logo: '/sponsors/amazon.png', tier: 'gold' },
  //   { id: '7', name: 'McDonalds', logo: '/sponsors/mcdonalds.png', tier: 'silver' }, 
  // ];

  // Logoları sıralara bölelim
  const topRowSponsors = sponsors.slice(0, 2); // İlk 2 sponsor (Adidas, Logitech)
  const middleRowSponsors = sponsors.slice(2, 4); // Sonraki 2 sponsor (Red Bull, Vodafone)
  // const bottomRowSponsors = sponsors.slice(4, 5); // Eğer daha fazla sponsor varsa (örneğin McDonalds)

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          
          
        </div>
        
        {/* Tüm logoları tek bir flex container içinde göster */}
        {sponsors.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-24 gap-y-8">
            {sponsors.map((sponsor) => (
              <a href="#" key={sponsor.id} className="block">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-20 md:h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        )}
        
        {/* "Become a Partner" butonu (isteğe bağlı) */}
        {/* 
        <div className="text-center mt-20">
          <a 
            href="/partners" 
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 text-lg"
          >
            Become a Partner
          </a>
        </div>
        */}
      </div>
    </section>
  );
};

export default SponsorsSection;