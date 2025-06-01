import React, { useEffect, useState } from 'react';
import { Twitter, Instagram, Twitch, Youtube, Disc, ArrowRight } from 'lucide-react';
import { socialLinks } from '../data';

const CallToAction: React.FC = () => {
  // Görsel yüklenme durumunu takip etme
  const [imageLoaded, setImageLoaded] = useState(false);

  // Bileşen yüklendiğinde arka plan görselini ön yükleme
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = '/futhouse.webp';
    preloadImage.onload = () => setImageLoaded(true);
    return () => {
      preloadImage.onload = null; // Temizleme
    };
  }, []);

  // Sosyal medya ikonlarını oluşturma
  const getSocialIcon = (platform: string, size = 24) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <Twitter size={size} />;
      case 'instagram':
        return <Instagram size={size} />;
      case 'twitch':
        return <Twitch size={size} />;
      case 'youtube':
        return <Youtube size={size} />;
      case 'discord':
        return <Disc size={size} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Gradient arka plan her zaman görünür */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-black/90 opacity-60"></div>
      
      {/* Görsel yüklendiğinde göster, yüklenmeden önce yalnızca gradient göster */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${
          imageLoaded ? 'opacity-60' : 'opacity-0'
        }`}
        style={{ 
          backgroundImage: 'url("/futhouse.webp")',
          backgroundPosition: 'center -31rem', // Rem değeriyle konumlandırma
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald">FOLLOW US</h2>
          <p className="text-lg mb-8 text-white/90">
            Connect with us across all our social media platforms to get the latest updates, exclusive content, and opportunities to engage with our community.
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Sosyal Medya Butonları */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-4xl">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center gap-2 bg-black/50 hover:bg-red-600/90 backdrop-blur-sm border border-gray-800 hover:border-red-500 text-white font-medium px-4 py-3 rounded-lg shadow-lg transition-all duration-300"
                >
                  <span className="text-red-500 group-hover:text-white transition-colors duration-300">
                    {getSocialIcon(social.platform)}
                  </span>
                  <span className="font-medium">{social.platform}</span>
                </a>
              ))}
            </div>
            
            <p className="mt-4 text-sm text-white/70">
              Join our growing community across all platforms!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;