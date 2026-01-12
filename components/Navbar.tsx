import React, { useState, useEffect } from 'react';
import { colors, typography, spacing } from '../styles/theme';

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
    <nav
      style={{
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : colors.background,
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'shadow-md py-4' : 'py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo Section */}
          <div className='flex-shrink-0 flex items-center gap-3'>
            {/* Logo Image */}
            <img
              src='/assets/logo.png'
              alt='Quế Anh Logo'
              className='h-12 w-12 md:h-14 md:w-14 object-cover rounded'
            />
            {/* Brand Text */}
            <div className='flex flex-col'>
              <span
                style={{
                  fontFamily: typography.fontFamily.primary,
                  color: colors.secondary,
                  fontSize: typography.fontSize.xl,
                }}
                className='font-bold tracking-[0.2em]'
              >
                QUẾ ANH
              </span>
              <span
                style={{
                  color: colors.primary,
                  fontSize: typography.fontSize.xs,
                }}
                className='tracking-[0.5em] font-bold uppercase leading-tight'
              >
                BIRD'S NEST
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center space-x-8 xl:space-x-12'>
            {['TRANG CHỦ', 'SẢN PHẨM', 'HỘP QUÀ BIẾU', 'VỀ CHÚNG TÔI'].map(
              (link, idx) => (
                <a
                  key={idx}
                  href={idx === 0 ? '#' : `#${link.toLowerCase()}`}
                  style={{
                    color: colors.textPrimary,
                    fontSize: typography.fontSize.xs,
                  }}
                  className='font-bold tracking-widest hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1'
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Contact Actions */}
          <div className='flex items-center space-x-4 md:space-x-8'>
            <div className='hidden xl:block text-right'>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: typography.fontSize.xs,
                }}
                className='font-bold uppercase tracking-widest'
              >
                Hotline Tư Vấn
              </p>
              <p
                style={{
                  color: colors.secondary,
                  fontSize: typography.fontSize.lg,
                }}
                className='font-bold'
              >
                0900.XXX.XXX
              </p>
            </div>
            <button
              style={{
                backgroundColor: colors.secondary,
                color: colors.textLight,
                fontSize: typography.fontSize.xs,
              }}
              className='px-6 md:px-8 py-3 font-bold hover:bg-black transition-all uppercase tracking-[0.15em] shadow-lg'
            >
              LIÊN HỆ NGAY
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
