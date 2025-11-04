import React, { useEffect, useRef, useState } from 'react';
import { teams } from '../data';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('right');

  // IntersectionObserver ile görünürlük kontrolü
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Carousel'ı otomatik olarak döndürme
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      
      if (autoScrollEnabled && carouselRef.current && isVisible) {
        autoScrollRef.current = setInterval(() => {
          if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            
            // Yön kontrolü
            if (scrollDirection === 'right') {
              // Sağa doğru kaydırma
              if (scrollLeft + clientWidth >= scrollWidth - 20) {
                // Sona gelindi, yönü değiştir
                setScrollDirection('left');
              } else {
                // Devam et
                carouselRef.current.scrollLeft = scrollLeft + 1;
              }
            } else {
              // Sola doğru kaydırma
              if (scrollLeft <= 20) {
                // Başa gelindi, yönü değiştir
                setScrollDirection('right');
              } else {
                // Devam et
                carouselRef.current.scrollLeft = scrollLeft - 1;
              }
            }
          }
        }, 30); // Her 30ms'de bir piksel kaydır
      }
    };

    startAutoScroll();

    // Temizleme işlemi
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScrollEnabled, isVisible, scrollDirection]);

  // Kaydırma olayını izleme
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // Sınırlara geldiğimizde yönü değiştir
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          setScrollDirection('left');
        } else if (scrollLeft <= 20) {
          setScrollDirection('right');
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Mouse olaylarını ele alma
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    setAutoScrollEnabled(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    if (carouselRef.current) {
      const x = e.pageX - (carouselRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2; // Scroll hızı
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Bir süre sonra otomatik kaydırmayı tekrar etkinleştir
    setTimeout(() => setAutoScrollEnabled(true), 2000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Bir süre sonra otomatik kaydırmayı tekrar etkinleştir
      setTimeout(() => setAutoScrollEnabled(true), 2000);
    }
  };

  // Düğmelerle manuel kaydırma
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.5; // 50% kaydırma
      
      // Yeni scrollLeft değeri
      let newScrollLeft;
      
      if (direction === 'left') {
        newScrollLeft = scrollLeft - scrollAmount;
        // Eğer başa geldiysek, sondan bir önceki karta git
        if (newScrollLeft <= 20) {
          setScrollDirection('right');
        }
      } else {
        newScrollLeft = scrollLeft + scrollAmount;
        // Eğer sona geldiysek, baştan bir sonraki karta git
        if (newScrollLeft + clientWidth >= scrollWidth - 20) {
          setScrollDirection('left');
        }
      }
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
      
      // Otomatik kaydırmayı geçici olarak durdur
      setAutoScrollEnabled(false);
      setTimeout(() => setAutoScrollEnabled(true), 2000);
    }
  };

  // Takımları duplika etme (sonsuz döngü etkisi için)
  const duplicatedTeams = [...teams, ...teams, ...teams, ...teams, ...teams];

  return (
    <section className="bg-black bg-opacity-90 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-oswald">OUR TEAMS</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="relative"
          onMouseEnter={() => setAutoScrollEnabled(false)}
          onMouseLeave={() => setAutoScrollEnabled(true)}
        >
          {/* Scroll Buttons */}
          <button 
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-r-md backdrop-blur-lg shadow-lg"
            aria-label="Sola kaydır"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-l-md backdrop-blur-lg shadow-lg"
            aria-label="Sağa kaydır"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* Döngüsel olarak duplika edilmiş takım kartları */}
            {duplicatedTeams.map((team, index) => (
              <div 
                key={`${team.id}-${index}`}
                className="flex-none w-[85%] md:w-[40%] lg:w-[30%] h-[550px] bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 group flex flex-col shadow-lg shadow-red-900/10"
              >
                {/* Üst Kısım: Roster Görseli */}
                <div className="h-[250px] w-full border-b border-gray-800/50 group-hover:border-red-500/30 transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10"></div>
                    <img 
                      src={team.rosterImage || team.logo}
                      alt={`${team.name} Team`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Alt Kısım: Bilgiler */}
                <div className="w-full p-6 flex flex-col justify-between flex-grow bg-black/40 backdrop-blur-sm">
                  <div className="relative z-10"> 
                    <div className="mb-4">
                      <span className="bg-red-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold font-oswald">
                        {team.game}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-oswald">{team.name}</h3>

                    {/* Oyuncu Listesi */}
                    {team.players && team.players.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-md font-semibold text-gray-300 mb-2 font-oswald">Roster:</h4>
                        <div className="flex flex-wrap gap-2">
                          {team.players.slice(0, 5).map((player) => (
                            <span key={player.id} className="text-sm text-gray-400 bg-black/50 backdrop-blur-sm px-2 py-1 rounded border-l border-red-500/40">
                              {player.nickname}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Başarılar */}
                    {team.achievements && team.achievements.length > 0 && (
                      <div>
                        <h4 className="text-md font-semibold text-gray-300 mb-2 flex items-center font-oswald">
                          <Trophy size={16} className="mr-2 text-red-500" /> 
                          Achievements:
                        </h4>
                        <ul className="space-y-1 list-disc list-inside pl-1">
                          {team.achievements.slice(0, 2).map((achievement) => (
                            <li key={achievement.id} className="text-sm text-gray-400">
                              <span className="font-medium text-gray-300">{achievement.title}</span> - {achievement.tournament}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Dekoratif Efekt */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Kenarlar için gradient efektleri */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-20"></div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/teams" className="inline-block bg-red-600/90 hover:bg-red-700 text-white font-medium px-6 py-3 rounded transition-colors duration-200 backdrop-blur-sm">
            Explore All Teams
          </a>
        </div>
      </div>
      
      {/* Global CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </section>
  );
};

export default TeamSection;