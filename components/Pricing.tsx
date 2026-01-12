import React from 'react';
import { colors, typography, spacing } from '../styles/theme';

const Pricing: React.FC = () => {
  const gifts = [
    'Nhíp chuyên dụng',
    'Táo đỏ thượng hạng',
    'Đường phèn tinh khiết',
    'Hạt chia Organic',
    'Cẩm nang HDSD độc quyền',
  ];

  return (
    <section
      className='py-24 relative'
      id='pricing'
      style={{
        backgroundImage: 'url(/assets/background-texture.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: '200px 200px',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <span
            style={{
              color: colors.secondary,
              fontSize: typography.fontSize.xs,
            }}
            className='font-bold tracking-[0.3em] uppercase block mb-4'
          >
            — DANH MỤC SẢN PHẨM —
          </span>
          <h2
            style={{
              fontFamily: typography.fontFamily.primary,
              color: colors.textPrimary,
            }}
            className='text-4xl md:text-5xl mb-6'
          >
            Bảng Giá Yến Sào Quế Anh
          </h2>
          <div
            style={{
              backgroundColor: colors.primary,
              height: '3px',
            }}
            className='w-24 mx-auto mb-8'
          ></div>
          <p
            style={{
              color: colors.textSecondary,
              fontSize: typography.fontSize.base,
            }}
            className='italic max-w-xl mx-auto leading-relaxed'
          >
            "Mỗi người một nhu cầu – cứ nhắn Quế Anh tư vấn đúng loại phù hợp
            nhất cho bạn."
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
          {/* Card 1: Yến Thô */}
          <div
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
            }}
            className='border shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group'
          >
            <div className='mb-6 h-64 overflow-hidden'>
              <img
                alt='Yến Thô'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuB4lN87lox1U1RfQLq7jcXZDsgA-dSrWjieBQE-oZzm7Zl0Cl8QvxqR0eZs5nW-gEAAoxjNcxaBZxhJ78bOyigLbgsfu7q0CviTptuNfXgi1tSp_0PadM3rkq_LrhX-jAybaq5Gi2mZSn3xpqztfCRhRG7Xq62VHC5tlkivUnThFKac1sEoGX3IC3aQqk4wVPvPpuYiIGKwj3FH-DAl9_D-fypbDIeYu7htVI6ONLknSixa8-jKGAMd-kHxXJKzNml7eS3X-0Grjplw'
              />
            </div>
            <h3
              style={{
                fontFamily: typography.fontFamily.primary,
                color: colors.secondary,
                fontSize: typography.fontSize['2xl'],
              }}
              className='mb-8 text-center'
            >
              1. YẾN THÔ
            </h3>
            <div className='space-y-5 flex-grow'>
              {[
                { label: 'Chân yến', value: '50g / 100g' },
                { label: 'Yến thô ít lông', value: '50g / 100g' },
                { label: 'Yến thô thường', value: '50g / 100g' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className='flex justify-between border-b border-gray-100 pb-3'
                >
                  <span
                    style={{
                      color: colors.textPrimary,
                      fontSize: typography.fontSize.sm,
                    }}
                    className='font-medium'
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: colors.primary,
                      fontSize: typography.fontSize.sm,
                    }}
                    className='font-bold tracking-widest'
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                backgroundColor: '#fafafa',
                borderLeftColor: colors.secondary,
              }}
              className='mt-8 p-5 border-l-4'
            >
              <p
                style={{
                  color: colors.secondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='font-bold uppercase mb-3 tracking-[0.2em]'
              >
                Quà tặng đi kèm:
              </p>
              <ul
                style={{
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='space-y-2'
              >
                {gifts.map((gift, idx) => (
                  <li key={idx} className='flex items-center'>
                    <span className='material-symbols-outlined text-[14px] mr-2 text-primary'>
                      check_circle
                    </span>
                    {gift}
                  </li>
                ))}
              </ul>
            </div>
            <button
              style={{
                backgroundColor: colors.secondary,
                color: colors.textLight,
                fontSize: typography.fontSize.xs,
              }}
              className='w-full mt-8 py-4 font-bold tracking-[0.2em] hover:bg-black transition-all shadow-md'
            >
              NHẬN BÁO GIÁ CHI TIẾT
            </button>
          </div>

          {/* Card 2: Yến Làm Sạch (Featured) */}
          <div
            style={{
              backgroundColor: colors.background,
              borderColor: colors.primary,
              borderWidth: '2px',
            }}
            className='shadow-2xl p-8 flex flex-col relative transform lg:-translate-y-6 z-10 group'
          >
            <div
              style={{
                backgroundColor: colors.primary,
                color: colors.textLight,
                fontSize: typography.fontSize.xs,
              }}
              className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 font-bold tracking-[0.3em] uppercase whitespace-nowrap'
            >
              Sản phẩm được tin dùng
            </div>
            <div className='mb-6 h-64 overflow-hidden'>
              <img
                alt='Yến Làm Sạch'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDHIFAG8VgMWvY00fhQPsNwZMns86ngcjuE8aVkRrSWJaybyaJ67MS77ryUMzCcqmSbNc7el7qxsfUAHloEqQCGhY2wOoUp9-4k5rt0qXY8AVaLWGqcJO-zLGagiBrcBsKkTu9514AOQnsMYwnZQmM1lIfE5rn9LbqbGF5SKNhBV1itfAwxMLdqSJ4X3tB1QnMbNvo7brQMbrp9pj63VO1kmLpRCscPpY1-YWyui0IsjclTSVD28lo4Ewo_pAqJQjHy5w9sSbl6K-IE'
              />
            </div>
            <h3
              style={{
                fontFamily: typography.fontFamily.primary,
                color: colors.secondary,
                fontSize: typography.fontSize['2xl'],
              }}
              className='mb-8 text-center'
            >
              2. YẾN LÀM SẠCH
            </h3>
            <div className='space-y-8 flex-grow'>
              <div>
                <h4
                  style={{
                    color: colors.primary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='font-bold mb-4 tracking-[0.3em] uppercase border-b border-primary/20 pb-2 italic'
                >
                  TINH CHẾ
                </h4>
                <div className='space-y-3'>
                  {[
                    { label: 'Tinh rút xương', value: 'Giá liên hệ' },
                    { label: 'Tinh sợi dài', value: 'Giá liên hệ' },
                    { label: 'Sơ mướp baby', value: 'Giá liên hệ' },
                  ].map((item, idx) => (
                    <div key={idx} className='flex justify-between text-sm'>
                      <span
                        style={{ color: colors.textPrimary }}
                        className='font-medium'
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          color: colors.secondary,
                        }}
                        className='font-bold'
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4
                  style={{
                    color: colors.primary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='font-bold mb-4 tracking-[0.3em] uppercase border-b border-primary/20 pb-2 italic'
                >
                  RÚT LÔNG
                </h4>
                <div className='space-y-3'>
                  {[
                    { label: 'Rút lông A5', value: 'Giá liên hệ' },
                    { label: 'Rút lông khô', value: 'Giá liên hệ' },
                  ].map((item, idx) => (
                    <div key={idx} className='flex justify-between text-sm'>
                      <span
                        style={{ color: colors.textPrimary }}
                        className='font-medium'
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          color: colors.secondary,
                        }}
                        className='font-bold'
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#fafafa',
                borderLeftColor: colors.primary,
              }}
              className='mt-8 p-5 border-l-4'
            >
              <p
                style={{
                  color: colors.primary,
                  fontSize: typography.fontSize.xs,
                }}
                className='font-bold uppercase mb-2 tracking-[0.2em]'
              >
                Quà tặng đi kèm:
              </p>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='leading-relaxed italic'
              >
                Trọn bộ phụ kiện chưng yến cao cấp tương tự Yến Thô (trừ nhíp
                nhặt lông).
              </p>
            </div>
            <button
              style={{
                backgroundColor: colors.accent,
                color: colors.textLight,
                fontSize: typography.fontSize.xs,
              }}
              className='w-full mt-8 py-4 font-bold tracking-[0.2em] hover:shadow-lg transition-all transform hover:scale-[1.02]'
            >
              ĐẶT HÀNG NGAY
            </button>
          </div>

          {/* Card 3: Yến Chưng Khô */}
          <div
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
            }}
            className='border shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group'
          >
            <div className='mb-6 h-64 overflow-hidden'>
              <img
                alt='Yến Chưng'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuCssbCxwE_frY0yEPMvz1S24dMpxpXpLmbNIPdLetUutuWWp5e8UlFHEypfWBZ7N6_kDK3HmzY9Cc8MjmuDnlsm1ht4sSqgO61avdBG3F6Cz_-g5hd2944f54JVxLAYoeMopzkqgbFXBUvoVozcDHEJceNov2YYM5BZo2CfEMntrg8oHk2jfEDlh5_ysdd1ORkog8xFJg9YPkY-4ut8V44GnooVE-NSYo5JH6muE4qRbvNiEvOFqapp2LolsFbYNJVBTJTNhFILyHpH'
              />
            </div>
            <h3
              style={{
                fontFamily: typography.fontFamily.primary,
                color: colors.secondary,
                fontSize: typography.fontSize['2xl'],
              }}
              className='mb-8 text-center'
            >
              3. YẾN CHƯNG KHÔ
            </h3>
            <div className='space-y-8 flex-grow'>
              <div className='text-center p-6 bg-zinc-50 border border-gray-100 rounded-sm'>
                <p
                  style={{
                    color: colors.textSecondary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='mb-2 uppercase tracking-widest font-semibold'
                >
                  Giá bán lẻ 1 hũ
                </p>
                <p
                  style={{
                    color: colors.secondary,
                    fontSize: typography.fontSize['2xl'],
                  }}
                  className='font-bold italic leading-none'
                >
                  Liên hệ
                </p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { title: 'SET 6 HŨ', text: 'Giá tốt' },
                  { title: 'SET 10 HŨ', text: 'Ưu đãi' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderColor: colors.primary,
                      backgroundColor: colors.primaryLight,
                    }}
                    className='text-center p-4 border bg-opacity-10'
                  >
                    <p
                      style={{
                        color: colors.primary,
                        fontSize: typography.fontSize.xs,
                      }}
                      className='font-bold uppercase tracking-widest'
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        color: colors.textPrimary,
                        fontSize: typography.fontSize.sm,
                      }}
                      className='font-bold mt-1'
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='italic text-center px-4 leading-relaxed'
              >
                "Chế biến sẵn, tiện lợi, giữ nguyên hàm lượng dinh dưỡng cho
                người bận rộn."
              </p>
            </div>
            <button
              style={{
                borderColor: colors.secondary,
                color: colors.secondary,
                fontSize: typography.fontSize.xs,
              }}
              className='w-full mt-8 py-4 border-2 font-bold tracking-[0.2em] hover:bg-secondary hover:text-white transition-all'
            >
              TƯ VẤN SET CHƯNG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
