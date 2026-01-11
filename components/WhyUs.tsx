
import React from 'react';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: "verified",
      title: "100% Nguyên Chất",
      desc: "Cam kết nguồn yến thật, không pha trộn, không chất bảo quản hay tẩy trắng."
    },
    {
      icon: "pan_tool",
      title: "Sơ Chế Thủ Công",
      desc: "Nhặt lông bằng tay tỉ mỉ bởi nghệ nhân, giữ trọn vẹn 18 loại acid amin quý giá."
    },
    {
      icon: "featured_seasonal_and_gifts",
      title: "Quà Tặng Tinh Tế",
      desc: "Hệ thống bao bì được thiết kế độc quyền, sang trọng, nâng tầm giá trị món quà."
    },
    {
      icon: "support_agent",
      title: "Tư Vấn Tận Tâm",
      desc: "Đội ngũ am hiểu sâu sắc, luôn sẵn sàng lắng nghe và thấu hiểu nhu cầu của bạn."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block mb-4">Cam Kết Thương Hiệu</span>
          <h2 className="font-display text-4xl md:text-5xl text-luxury">Tại Sao Chọn Quế Anh?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white shadow-sm border border-gray-100 group hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
              </div>
              <h4 className="font-bold text-luxury mb-4 text-base uppercase tracking-widest">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Decorative Quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto px-6">
          <p className="text-lg md:text-xl font-display italic text-gray-700 leading-relaxed">
            "Chúng tôi không chỉ bán yến, chúng tôi gửi gắm cả tâm tình và lời chúc sức khỏe trọn vẹn đến từng tổ yến trao tay."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
