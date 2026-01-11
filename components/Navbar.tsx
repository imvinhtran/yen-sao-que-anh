
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.2em] text-secondary">QUẾ ANH</span>
              <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-primary font-bold uppercase leading-tight">BIRD'S NEST</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a href="#" className="text-xs font-bold tracking-widest text-gray-800 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">TRANG CHỦ</a>
            <a href="#pricing" className="text-xs font-bold tracking-widest text-gray-800 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">SẢN PHẨM</a>
            <a href="#gifts" className="text-xs font-bold tracking-widest text-gray-800 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">HỘP QUÀ BIẾU</a>
            <a href="#about" className="text-xs font-bold tracking-widest text-gray-800 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">VỀ CHÚNG TÔI</a>
          </div>

          {/* Contact Actions */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden xl:block text-right">
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Hotline Tư Vấn</p>
              <p className="text-secondary font-bold text-sm">0900.XXX.XXX</p>
            </div>
            <button className="bg-secondary text-white px-6 md:px-8 py-3 rounded-none font-bold hover:bg-black transition-all uppercase text-[10px] md:text-[11px] tracking-[0.15em] shadow-lg">
              LIÊN HỆ NGAY
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
