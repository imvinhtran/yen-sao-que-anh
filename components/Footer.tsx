import React from 'react';
import { colors, typography } from '../styles/theme';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: colors.backgroundDark,
        color: colors.textLight,
        borderTopColor: colors.primary,
      }}
      className='pt-24 pb-12 border-t relative overflow-hidden'
    >
      <div className='absolute top-0 right-0 w-96 h-96 traditional-pattern opacity-[0.02] -translate-y-1/2 translate-x-1/2 rounded-full'></div>

      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10'>
        {/* Brand Info */}
        <div>
          <div className='mb-8'>
            <span
              style={{
                fontFamily: typography.fontFamily.primary,
                color: colors.primary,
                fontSize: typography.fontSize['2xl'],
              }}
              className='font-bold tracking-[0.2em] block leading-none'
            >
              QUẾ ANH
            </span>
            <span
              style={{
                color: colors.textSecondary,
                fontSize: typography.fontSize.xs,
              }}
              className='tracking-[0.5em] font-bold uppercase mt-2 block'
            >
              BIRD'S NEST
            </span>
          </div>
          <p
            style={{
              color: colors.textSecondary,
              fontSize: typography.fontSize.sm,
            }}
            className='leading-relaxed mb-10 max-w-xs'
          >
            Chuyên cung cấp các dòng sản phẩm yến sào cao cấp, quà tặng doanh
            nghiệp sang trọng với cam kết chất lượng hàng đầu Việt Nam.
          </p>
          <div className='flex space-x-4'>
            {[
              { icon: 'share', href: '#' },
              { icon: 'public', href: '#' },
              { icon: 'mail', href: '#' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
                className='w-10 h-10 border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group'
              >
                <span className='material-symbols-outlined text-sm'>
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4
            style={{
              color: colors.primary,
              fontSize: typography.fontSize.xs,
            }}
            className='font-bold mb-10 uppercase tracking-[0.3em]'
          >
            Sản Phẩm Chính
          </h4>
          <ul
            style={{
              color: colors.textSecondary,
              fontSize: typography.fontSize.xs,
            }}
            className='space-y-4 font-medium tracking-widest'
          >
            {[
              'YẾN THÔ NGUYÊN TỔ',
              'YẾN TINH CHẾ SỢI DÀI',
              'YẾN RÚT LÔNG CAO CẤP',
              'SET QUÀ BIẾU SANG TRỌNG',
            ].map((link, idx) => (
              <li key={idx}>
                <a href='#' className='hover:text-primary transition-colors'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4
            style={{
              color: colors.primary,
              fontSize: typography.fontSize.xs,
            }}
            className='font-bold mb-10 uppercase tracking-[0.3em]'
          >
            Hỗ Trợ Khách Hàng
          </h4>
          <ul
            style={{
              color: colors.textSecondary,
              fontSize: typography.fontSize.xs,
            }}
            className='space-y-4 font-medium tracking-widest'
          >
            {[
              'HƯỚNG DẪN SỬ DỤNG',
              'CHÍNH SÁCH ĐỔI TRẢ',
              'VẬN CHUYỂN & THANH TOÁN',
              'CÂU HỎI THƯỜNG GẶP',
            ].map((link, idx) => (
              <li key={idx}>
                <a href='#' className='hover:text-primary transition-colors'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            style={{
              color: colors.primary,
              fontSize: typography.fontSize.xs,
            }}
            className='font-bold mb-10 uppercase tracking-[0.3em]'
          >
            Liên Hệ Quế Anh
          </h4>
          <ul
            className='space-y-6 text-sm'
            style={{ color: colors.textSecondary }}
          >
            <li className='flex items-start space-x-4'>
              <span
                style={{ color: colors.primary }}
                className='material-symbols-outlined text-xl'
              >
                location_on
              </span>
              <span className='text-xs leading-relaxed'>
                <span
                  style={{ color: colors.textLight }}
                  className='font-bold block mb-1'
                >
                  Showroom Miền Nam:
                </span>
                TP. Hồ Chí Minh
              </span>
            </li>
            <li className='flex items-center space-x-4'>
              <span
                style={{ color: colors.primary }}
                className='material-symbols-outlined text-xl'
              >
                call
              </span>
              <span
                style={{ color: colors.textLight }}
                className='font-bold text-lg tracking-widest leading-none'
              >
                0900.XXX.XXX
              </span>
            </li>
            <li className='flex items-center space-x-4'>
              <span
                style={{ color: colors.primary }}
                className='material-symbols-outlined text-xl'
              >
                mail
              </span>
              <span className='text-xs italic underline underline-offset-4'>
                contact@yensaoqueanh.vn
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 text-center'>
        <p
          style={{
            color: colors.textSecondary,
            fontSize: typography.fontSize.xs,
          }}
          className='tracking-[0.3em] uppercase font-bold'
        >
          © 2024 YẾN SÀO QUẾ ANH - TINH HOA TỪ TÂM - BẢN QUYỀN ĐÃ ĐƯỢC BẢO HỘ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
