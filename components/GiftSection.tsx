
import React from 'react';

const GiftSection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury relative overflow-hidden" id="gifts">
      {/* Subtle traditional pattern overlay */}
      <div className="absolute inset-0 traditional-pattern opacity-[0.03] scale-150"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block mb-6">Xứng Tầm Đẳng Cấp</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight">
              HỘP QUÀ BIẾU <br/>
              <span className="text-primary italic font-normal text-4xl md:text-5xl">Sang Trọng & Tinh Tế</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
              Những set quà được Quế Anh thiết kế riêng biệt, sử dụng chất liệu hộp cao cấp với hoa văn dát vàng, là lựa chọn hoàn hảo để tri ân đối tác, khách hàng và người thân trong những dịp trọng đại.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="border-l-2 border-primary pl-6">
                <p className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest text-gray-300">Set Phú Quý</p>
                <p className="text-primary text-2xl font-bold">Từ 2.xxx.000đ</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <p className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest text-gray-300">Set Trường Thọ</p>
                <p className="text-primary text-2xl font-bold">Từ 3.xxx.000đ</p>
              </div>
            </div>
            
            <button className="gold-gradient text-white px-10 md:px-12 py-5 font-bold tracking-[0.2em] text-[10px] md:text-xs hover:scale-105 transition-all shadow-2xl">
              XEM CATALOGUE QUÀ TẶNG
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Outer floating border */}
              <div className="absolute -inset-4 md:-inset-6 border border-primary/20 group-hover:border-primary/50 transition-colors duration-500"></div>
              
              <div className="relative overflow-hidden shadow-2xl z-10">
                 <img 
                  alt="Luxury Gift Box" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXA5K1vKpvlA9qr4oz4CKBerd6yMVez7Omgpd1SNA3NycU1FQHnjwu9q7oBhDNZV9Jo-FbmpazanVZkNLHQM42O-AzngWd9WOZgPPu7KlheJytsafsC5PUrTj7p0Wp1gvJVzrkjKhvn3rIDNvGOykhA_7L6q1pRfK6yzf4_WkLQAcX4etcfrrUVzK1E_r4U9oEa_KbVroutp1hgyl5KeB8MGLOm7nz3QwsLkxp5uU8iChbAnJhEWssKPJw1G7hMG6Edx8gpT5Hcl64" 
                />
              </div>
              
              {/* Floating feature badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-secondary p-8 shadow-2xl z-20 hidden md:block border-t-2 border-primary">
                <p className="text-white text-[10px] tracking-[0.4em] font-bold uppercase mb-4 opacity-80">Đặc Quyền Doanh Nghiệp</p>
                <p className="text-white/90 text-xs leading-relaxed font-medium">
                  Miễn phí thiết kế thiệp <br/>
                  In Logo thương hiệu riêng <br/>
                  Giao hàng hỏa tốc nội thành
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
