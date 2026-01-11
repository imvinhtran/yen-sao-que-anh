
import React from 'react';

const Pricing: React.FC = () => {
  const gifts = [
    "Nhíp chuyên dụng",
    "Táo đỏ thượng hạng",
    "Đường phèn tinh khiết",
    "Hạt chia Organic",
    "Cẩm nang HDSD độc quyền"
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs block mb-4">— DANH MỤC SẢN PHẨM —</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6">Bảng Giá Yến Sào Quế Anh</h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mb-8"></div>
          <p className="text-gray-500 italic max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            "Mỗi người một nhu cầu – cứ nhắn Quế Anh tư vấn đúng loại phù hợp nhất cho bạn."
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Yến Thô */}
          <div className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group">
            <div className="mb-6 h-64 overflow-hidden">
              <img 
                alt="Yến Thô" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4lN87lox1U1RfQLq7jcXZDsgA-dSrWjieBQE-oZzm7Zl0Cl8QvxqR0eZs5nW-gEAAoxjNcxaBZxhJ78bOyigLbgsfu7q0CviTptuNfXgi1tSp_0PadM3rkq_LrhX-jAybaq5Gi2mZSn3xpqztfCRhRG7Xq62VHC5tlkivUnThFKac1sEoGX3IC3aQqk4wVPvPpuYiIGKwj3FH-DAl9_D-fypbDIeYu7htVI6ONLknSixa8-jKGAMd-kHxXJKzNml7eS3X-0Grjplw" 
              />
            </div>
            <h3 className="font-display text-3xl text-secondary mb-8 text-center">1. YẾN THÔ</h3>
            <div className="space-y-5 flex-grow">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="font-medium text-sm">Chân yến</span>
                <span className="text-primary font-bold text-sm tracking-widest">50g / 100g</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="font-medium text-sm">Yến thô ít lông</span>
                <span className="text-primary font-bold text-sm tracking-widest">50g / 100g</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="font-medium text-sm">Yến thô thường</span>
                <span className="text-primary font-bold text-sm tracking-widest">50g / 100g</span>
              </div>
            </div>
            <div className="mt-8 bg-zinc-50 p-5 border-l-4 border-secondary">
              <p className="text-[10px] font-bold text-secondary uppercase mb-3 tracking-[0.2em]">Quà tặng đi kèm:</p>
              <ul className="text-[11px] text-gray-600 space-y-2">
                {gifts.map((gift, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-2 text-primary">check_circle</span>
                    {gift}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 py-4 bg-secondary text-white font-bold tracking-[0.2em] text-[10px] hover:bg-black transition-all shadow-md">
              NHẬN BÁO GIÁ CHI TIẾT
            </button>
          </div>

          {/* Card 2: Yến Làm Sạch (Featured) */}
          <div className="bg-white border-2 border-primary shadow-2xl p-8 flex flex-col relative transform lg:-translate-y-6 z-10 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-8 py-2 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">
              Sản phẩm được tin dùng
            </div>
            <div className="mb-6 h-64 overflow-hidden">
              <img 
                alt="Yến Làm Sạch" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHIFAG8VgMWvY00fhQPsNwZMns86ngcjuE8aVkRrSWJaybyaJ67MS77ryUMzCcqmSbNc7el7qxsfUAHloEqQCGhY2wOoUp9-4k5rt0qXY8AVaLWGqcJO-zLGagiBrcBsKkTu9514AOQnsMYwnZQmM1lIfE5rn9LbqbGF5SKNhBV1itfAwxMLdqSJ4X3tB1QnMbNvo7brQMbrp9pj63VO1kmLpRCscPpY1-YWyui0IsjclTSVD28lo4Ewo_pAqJQjHy5w9sSbl6K-IE" 
              />
            </div>
            <h3 className="font-display text-3xl text-secondary mb-8 text-center">2. YẾN LÀM SẠCH</h3>
            <div className="space-y-8 flex-grow">
              <div>
                <h4 className="text-[10px] font-bold text-primary mb-4 tracking-[0.3em] uppercase border-b border-primary/20 pb-2 italic">TINH CHẾ</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="font-medium">Tinh rút xương</span> <span className="text-secondary font-bold">Giá liên hệ</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Tinh sợi dài</span> <span className="text-secondary font-bold">Giá liên hệ</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Sơ mướp baby</span> <span className="text-secondary font-bold">Giá liên hệ</span></div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-primary mb-4 tracking-[0.3em] uppercase border-b border-primary/20 pb-2 italic">RÚT LÔNG</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="font-medium">Rút lông A5</span> <span className="text-secondary font-bold">Giá liên hệ</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Rút lông khô </span> <span className="text-secondary font-bold">Giá liên hệ</span></div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-zinc-50 p-5 border-l-4 border-primary">
              <p className="text-[10px] font-bold text-primary uppercase mb-2 tracking-[0.2em]">Quà tặng đi kèm:</p>
              <p className="text-[11px] text-gray-600 leading-relaxed italic">
                Trọn bộ phụ kiện chưng yến cao cấp tương tự Yến Thô (trừ nhíp nhặt lông).
              </p>
            </div>
            <button className="w-full mt-8 py-4 gold-gradient text-white font-bold tracking-[0.2em] text-[10px] hover:shadow-lg transition-all transform hover:scale-[1.02]">
              ĐẶT HÀNG NGAY
            </button>
          </div>

          {/* Card 3: Yến Chưng Khô */}
          <div className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group">
            <div className="mb-6 h-64 overflow-hidden">
              <img 
                alt="Yến Chưng" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCssbCxwE_frY0yEPMvz1S24dMpxpXpLmbNIPdLetUutuWWp5e8UlFHEypfWBZ7N6_kDK3HmzY9Cc8MjmuDnlsm1ht4sSqgO61avdBG3F6Cz_-g5hd2944f54JVxLAYoeMopzkqgbFXBUvoVozcDHEJceNov2YYM5BZo2CfEMntrg8oHk2jfEDlh5_ysdd1ORkog8xFJg9YPkY-4ut8V44GnooVE-NSYo5JH6muE4qRbvNiEvOFqapp2LolsFbYNJVBTJTNhFILyHpH" 
              />
            </div>
            <h3 className="font-display text-3xl text-secondary mb-8 text-center">3. YẾN CHƯNG KHÔ</h3>
            <div className="space-y-8 flex-grow">
              <div className="text-center p-6 bg-zinc-50 border border-gray-100 rounded-sm">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-semibold">Giá bán lẻ 1 hũ</p>
                <p className="text-3xl font-bold text-secondary italic leading-none">Liên hệ</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-primary/20 bg-primary/5">
                  <p className="text-[9px] font-bold uppercase text-primary tracking-widest">SET 6 HŨ</p>
                  <p className="font-bold text-gray-900 mt-1 text-sm">Giá tốt</p>
                </div>
                <div className="text-center p-4 border border-primary/20 bg-primary/5">
                  <p className="text-[9px] font-bold uppercase text-primary tracking-widest">SET 10 HŨ</p>
                  <p className="font-bold text-gray-900 mt-1 text-sm">Ưu đãi</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 italic text-center px-4 leading-relaxed">
                "Chế biến sẵn, tiện lợi, giữ nguyên hàm lượng dinh dưỡng cho người bận rộn."
              </p>
            </div>
            <button className="w-full mt-8 py-4 border-2 border-secondary text-secondary font-bold tracking-[0.2em] text-[10px] hover:bg-secondary hover:text-white transition-all">
              TƯ VẤN SET CHƯNG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
