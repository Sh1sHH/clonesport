import React, { useState, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Video Arkaplan */}
      <div className="absolute inset-0 z-0 cursor-pointer" onClick={togglePlayPause}>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10"></div>
        
        {/* Video */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source src="/videos/futvct.mp4" type="video/mp4" />
          {/* Fallback resim */}
          <img 
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Futbol Arka Plan" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Play/Pause Göstergesi */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className={`bg-black/30 backdrop-blur-sm rounded-full p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 text-white"
            >
              {isPlaying ? (
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;