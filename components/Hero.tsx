
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden hero-clip bg-luxury">
      {/* Hero Background Image */}
      <img 
        alt="Luxury Bird Nest Hero" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPN5Q5rilIzPhwAK8rMSbhwZ9Dqc1beBxBOh2_vCY29OGi1sDB38c7Ukdm-vxTcavL6XyRZ-9JAHToSv7u8wXV2u8g7EhV7DqkeYwZtbEPqvbtDo74SzzTu4d3zYTG7pno5LyXKqYljPZ44vF80ScLkhhjERnI5GWBNPC0HvuDfkOHUMYRtpuj3ZN4Kbew3c6YXjpkSY3K9nIsNaoS34znarBBngQJK4ZZBMJpzdh30XipUCLuM-S7qjaF0jcYP4N6iASi82s8Bhkb" 
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl border-l-[4px] md:border-l-[6px] border-primary pl-6 md:pl-10 py-4 md:py-6">
          <span className="text-primary font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-4 md:mb-6 text-xs md:text-sm">
            Yến Sào Cao Cấp Quế Anh
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-[1.1]">
            Tinh Túy <br/>
            <span className="italic text-primary font-normal">Đất Trời</span>
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-12 max-w-lg leading-relaxed font-light">
            Mang trọn vẹn giá trị dinh dưỡng từ thiên nhiên đến từng gia đình Việt qua bàn tay chăm chút tỉ mỉ của Quế Anh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#pricing" className="gold-gradient text-white px-8 md:px-10 py-4 md:py-5 font-bold text-[11px] md:text-xs tracking-[0.2em] hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center">
              KHÁM PHÁ SẢN PHẨM
            </a>
            <a href="#gifts" className="border border-white/40 text-white px-8 md:px-10 py-4 md:py-5 font-bold text-[11px] md:text-xs tracking-[0.2em] hover:bg-white/10 transition-all text-center">
              HỘP QUÀ SANG TRỌNG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
