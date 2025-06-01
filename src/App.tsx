import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import FnaticSection from './components/FnaticSection';
import ShopSection from './components/ShopSection';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <SponsorsSection />
        <FnaticSection />
        <ShopSection />
        <TeamSection />
        <NewsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;