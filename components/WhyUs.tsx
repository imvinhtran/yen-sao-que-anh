import React from 'react';
import { colors, typography } from '../styles/theme';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: 'verified',
      title: '100% Nguyên Chất',
      desc: 'Cam kết nguồn yến thật, không pha trộn, không chất bảo quản hay tẩy trắng.',
    },
    {
      icon: 'pan_tool',
      title: 'Sơ Chế Thủ Công',
      desc: 'Nhặt lông bằng tay tỉ mỉ bởi nghệ nhân, giữ trọn vẹn 18 loại acid amin quý giá.',
    },
    {
      icon: 'featured_seasonal_and_gifts',
      title: 'Quà Tặng Tinh Tế',
      desc: 'Hệ thống bao bì được thiết kế độc quyền, sang trọng, nâng tầm giá trị món quà.',
    },
    {
      icon: 'support_agent',
      title: 'Tư Vấn Tận Tâm',
      desc: 'Đội ngũ am hiểu sâu sắc, luôn sẵn sàng lắng nghe và thấu hiểu nhu cầu của bạn.',
    },
  ];

  return (
    <section
      className='py-24 relative'
      id='about'
      style={{
        backgroundImage: 'url(/assets/background-texture.png)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backgroundSize: 'cover',
      }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <span
            style={{
              color: colors.primary,
              fontSize: typography.fontSize.xs,
            }}
            className='font-bold tracking-[0.2em] uppercase block mb-4'
          >
            Cam Kết Thương Hiệu
          </span>
          <h2
            style={{
              fontFamily: typography.fontFamily.primary,
              color: colors.textPrimary,
            }}
            className='text-4xl md:text-5xl'
          >
            Tại Sao Chọn Quế Anh?
          </h2>
          <div
            style={{
              backgroundColor: colors.primary,
              height: '4px',
            }}
            className='w-16 mx-auto mt-6'
          ></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {reasons.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
              }}
              className='p-10 shadow-sm border group hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center'
            >
              <div
                style={{
                  backgroundColor: colors.backgroundLight,
                }}
                className='w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-colors'
              >
                <span
                  style={{ color: colors.primary }}
                  className='material-symbols-outlined text-4xl group-hover:scale-110 transition-transform'
                >
                  {item.icon}
                </span>
              </div>
              <h4
                style={{
                  color: colors.textPrimary,
                  fontSize: typography.fontSize.base,
                }}
                className='font-bold mb-4 uppercase tracking-widest'
              >
                {item.title}
              </h4>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='leading-relaxed'
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Quote */}
        <div className='mt-20 text-center max-w-3xl mx-auto px-6'>
          <p
            style={{
              fontFamily: typography.fontFamily.primary,
              color: colors.textPrimary,
              fontSize: typography.fontSize.lg,
            }}
            className='italic leading-relaxed'
          >
            "Chúng tôi không chỉ bán yến, chúng tôi gửi gắm cả tâm tình và lời
            chúc sức khỏe trọn vẹn đến từng tổ yến trao tay."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
