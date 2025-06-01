import React, { useState } from 'react';

const FnaticSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        
        
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Column 1 - We Win */}
          <div className="relative rounded-lg overflow-hidden group h-[700px]">
            <img 
              src="/future1.webp"
              alt="Esports team celebrating victory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 p-6 flex flex-col justify-between">
              <div className="">
                <p className="text-sm text-gray-300 mb-1">The leading esports organisation in the west</p>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald">WE WIN</h3>
              </div>
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-md w-max text-sm font-medium transition-colors self-start">
                More Info
              </button>
            </div>
          </div>
          
          {/* Column 2 - We Entertain */}
          <div className="relative rounded-lg overflow-hidden group h-[700px]">
            <img 
              src="/is2.webp"
              alt="Fans cheering at esports event" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 p-6 flex flex-col justify-between">
              <div className="">
                <p className="text-sm text-gray-300 mb-1">The Black & Red Family</p>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald">WE ENTERTAIN</h3>
              </div>
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-md w-max text-sm font-medium transition-colors self-start">
                More Info
              </button>
            </div>
          </div>
          
          {/* Column 3 - We Innovate */}
          <div className="relative rounded-lg overflow-hidden group h-[700px]">
            <img 
              src="/here3.webp"
              alt="Esports innovation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 p-6 flex flex-col justify-between">
              <div className="">
                <p className="text-sm text-gray-300 mb-1">We stay ahead of the curve</p>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald">WE INNOVATE</h3>
              </div>
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-md w-max text-sm font-medium transition-colors self-start">
                Read More
              </button>
            </div>
          </div>
        </div>
        
        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 - Fnatic Network */}
          <div className="relative rounded-lg overflow-hidden group h-[700px]">
            <img 
              src="https://images.pexels.com/photos/7915496/pexels-photo-7915496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fnatic Network" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 p-6 flex flex-col justify-between">
              <div className="">
                <p className="text-sm text-gray-300 mb-1">Level up your game</p>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald">FUT NETWORK</h3>
              </div>
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-md w-max text-sm font-medium transition-colors self-start">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Column 2 - Careers */}
          <div className="relative rounded-lg overflow-hidden group h-[700px]">
            <img 
              src="https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Careers at Fnatic" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 p-6 flex flex-col justify-between">
              <div className="">
                <p className="text-sm text-gray-300 mb-1">Be part of a movement</p>
                <h3 className="text-3xl md:text-4xl font-bold font-oswald">CAREERS IN FUT</h3>
              </div>
              <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 rounded-md w-max text-sm font-medium transition-colors self-start">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FnaticSection; 