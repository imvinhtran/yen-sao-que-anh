
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import GiftSection from './components/GiftSection';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <GiftSection />
        <WhyUs />
      </main>
      <Footer />
      
      {/* Floating Zalo Contact Placeholder */}
      <a 
        href="https://zalo.me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-white p-3 rounded-full shadow-2xl border border-gray-100 flex items-center gap-3 hover:scale-105 transition-transform group"
      >
        <div className="bg-primary/10 p-2 rounded-full">
           <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">chat</span>
        </div>
        <span className="text-sm font-semibold text-gray-700 hidden md:block">Tư vấn ngay</span>
      </a>
    </div>
  );
};

export default App;
