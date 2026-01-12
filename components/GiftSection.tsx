import React from 'react';
import { colors, typography, spacing } from '../styles/theme';

const GiftSection: React.FC = () => {
  return (
    <section className='py-24 relative overflow-hidden' id='gifts'>
      {/* Subtle traditional pattern overlay */}
      <div className='absolute inset-0 traditional-pattern opacity-[0.03] scale-150'></div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          <div className='order-2 lg:order-1'>
            <span
              style={{
                color: colors.primary,
                fontSize: typography.fontSize.xs,
              }}
              className='font-bold tracking-[0.4em] uppercase block mb-6'
            >
              Xứng Tầm Đẳng Cấp
            </span>
            <h2
              style={{
                fontFamily: typography.fontFamily.primary,
                color: colors.textLight,
              }}
              className='text-5xl md:text-6xl mb-8 leading-tight'
            >
              HỘP QUÀ BIẾU <br />
              <span
                style={{ color: colors.primary }}
                className='text-primary italic font-normal text-4xl md:text-5xl'
              >
                Sang Trọng & Tinh Tế
              </span>
            </h2>
            <p
              style={{
                color: colors.textSecondary,
                fontSize: typography.fontSize.lg,
              }}
              className='mb-12 leading-relaxed font-light'
            >
              Những set quà được Quế Anh thiết kế riêng biệt, sử dụng chất liệu
              hộp cao cấp với hoa văn dát vàng, là lựa chọn hoàn hảo để tri ân
              đối tác, khách hàng và người thân trong những dịp trọng đại.
            </p>

            <div className='grid grid-cols-2 gap-8 mb-16'>
              <div
                style={{
                  borderLeftColor: colors.primary,
                  paddingLeft: spacing.xl,
                }}
                className='border-l-2 pl-6'
              >
                <p
                  style={{
                    color: colors.textSecondary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='font-bold mb-2 uppercase tracking-widest'
                >
                  Set Phú Quý
                </p>
                <p
                  style={{
                    color: colors.primary,
                    fontSize: typography.fontSize['2xl'],
                  }}
                  className='font-bold'
                >
                  Từ 2.xxx.000đ
                </p>
              </div>
              <div
                style={{
                  borderLeftColor: colors.primary,
                  paddingLeft: spacing.xl,
                }}
                className='border-l-2 pl-6'
              >
                <p
                  style={{
                    color: colors.textSecondary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='font-bold mb-2 uppercase tracking-widest'
                >
                  Set Trường Thọ
                </p>
                <p
                  style={{
                    color: colors.primary,
                    fontSize: typography.fontSize['2xl'],
                  }}
                  className='font-bold'
                >
                  Từ 3.xxx.000đ
                </p>
              </div>
            </div>

            <button
              style={{
                backgroundColor: colors.accent,
                color: colors.textLight,
                fontSize: typography.fontSize.xs,
              }}
              className='px-10 md:px-12 py-5 font-bold tracking-[0.2em] hover:scale-105 transition-all shadow-2xl'
            >
              XEM CATALOGUE QUÀ TẶNG
            </button>
          </div>

          <div className='order-1 lg:order-2'>
            <div className='relative group'>
              {/* Outer floating border */}
              <div
                style={{
                  borderColor: colors.primary,
                }}
                className='absolute -inset-4 md:-inset-6 border group-hover:border-opacity-50 transition-colors duration-500'
              ></div>

              <div className='relative overflow-hidden shadow-2xl z-10'>
                <img
                  alt='Luxury Gift Box'
                  className='w-full h-auto transform group-hover:scale-105 transition-transform duration-1000'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuCXA5K1vKpvlA9qr4oz4CKBerd6yMVez7Omgpd1SNA3NycU1FQHnjwu9q7oBhDNZV9Jo-FbmpazanVZkNLHQM42O-AzngWd9WOZgPPu7KlheJytsafsC5PUrTj7p0Wp1gvJVzrkjKhvn3rIDNvGOykhA_7L6q1pRfK6yzf4_WkLQAcX4etcfrrUVzK1E_r4U9oEa_KbVroutp1hgyl5KeB8MGLOm7nz3QwsLkxp5uU8iChbAnJhEWssKPJw1G7hMG6Edx8gpT5Hcl64'
                />
              </div>

              {/* Floating feature badge */}
              <div
                style={{
                  backgroundColor: colors.secondary,
                  borderTopColor: colors.primary,
                }}
                className='absolute -bottom-8 -right-4 md:-right-8 p-8 shadow-2xl z-20 hidden md:block border-t-2'
              >
                <p
                  style={{
                    color: colors.textLight,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='tracking-[0.4em] font-bold uppercase mb-4 opacity-80'
                >
                  Đặc Quyền Doanh Nghiệp
                </p>
                <p
                  style={{
                    color: colors.textLight,
                    fontSize: typography.fontSize.sm,
                  }}
                  className='leading-relaxed font-medium'
                >
                  Miễn phí thiết kế thiệp <br />
                  In Logo thương hiệu riêng <br />
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
