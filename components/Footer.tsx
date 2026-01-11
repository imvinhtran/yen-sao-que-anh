
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury text-white pt-24 pb-12 border-t border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 traditional-pattern opacity-[0.02] -translate-y-1/2 translate-x-1/2 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand Info */}
        <div>
          <div className="mb-8">
            <span className="font-display text-3xl font-bold tracking-[0.2em] text-primary block leading-none">QUẾ ANH</span>
            <span className="text-[10px] tracking-[0.5em] text-white/50 font-bold uppercase mt-2 block">BIRD'S NEST</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-xs">
            Chuyên cung cấp các dòng sản phẩm yến sào cao cấp, quà tặng doanh nghiệp sang trọng với cam kết chất lượng hàng đầu Việt Nam.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-primary font-bold mb-10 uppercase text-xs tracking-[0.3em]">Sản Phẩm Chính</h4>
          <ul className="space-y-4 text-xs text-gray-400 font-medium tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">YẾN THÔ NGUYÊN TỔ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">YẾN TINH CHẾ SỢI DÀI</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">YẾN RÚT LÔNG CAO CẤP</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">SET QUÀ BIẾU SANG TRỌNG</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-primary font-bold mb-10 uppercase text-xs tracking-[0.3em]">Hỗ Trợ Khách Hàng</h4>
          <ul className="space-y-4 text-xs text-gray-400 font-medium tracking-widest">
            <li><a href="#" className="hover:text-primary transition-colors">HƯỚNG DẪN SỬ DỤNG</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">CHÍNH SÁCH ĐỔI TRẢ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">VẬN CHUYỂN & THANH TOÁN</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">CÂU HỎI THƯỜNG GẶP</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary font-bold mb-10 uppercase text-xs tracking-[0.3em]">Liên Hệ Quế Anh</h4>
          <ul className="space-y-6 text-sm text-gray-400">
            <li className="flex items-start space-x-4">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <span className="text-xs leading-relaxed">
                <span className="text-white font-bold block mb-1">Showroom Miền Nam:</span>
                TP. Hồ Chí Minh
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <span className="font-bold text-white text-lg tracking-widest leading-none">0900.XXX.XXX</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <span className="text-xs italic underline underline-offset-4">contact@yensaoqueanh.vn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-[9px] text-gray-600 tracking-[0.3em] uppercase font-bold">
          © 2024 YẾN SÀO QUẾ ANH - TINH HOA TỪ TÂM - BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
