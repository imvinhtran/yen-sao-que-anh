import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, typography, spacing, gradients } from '../styles/theme';
import { useLocales } from '../hooks/useLocales';

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  btnText: string;
  btnLink: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const locales = useLocales();

  const slides: Slide[] = locales.hero.slides;

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle drag/swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = startX - e.clientX;
    const threshold = 50;

    if (diff > threshold) {
      // Drag left - next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -threshold) {
      // Drag right - prev slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = startX - e.changedTouches[0].clientX;
    const threshold = 50;

    if (diff > threshold) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -threshold) {
      // Swipe right - prev slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      className='relative h-[70vh] md:h-[85vh] overflow-hidden bg-luxury cursor-grab active:cursor-grabbing'
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition:
          'background-image 1200ms ease-in-out, opacity 1200ms ease-in-out',
        opacity: 0.95,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dark Overlay Gradient */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent'></div>

      {/* Content Container */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            className='max-w-2xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              style={{
                fontSize: typography.fontSize.sm,
                background: gradients.textGradients.champagneGold,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}
              className='font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-4 md:mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.span>

            <motion.h1
              style={{
                fontFamily: typography.fontFamily.primary,
                fontSize: 'clamp(1.5rem, 6vw, 5rem)',
                background: gradients.textGradients.goldLuxury,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className='mb-6 md:mb-8 leading-[1.1]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              {slides[currentSlide].title} <br />
              <span
                style={{
                  background: gradients.textGradients.champagneGold,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className='italic font-normal text-4xl md:text-5xl'
              ></span>
            </motion.h1>

            <motion.p
              style={{
                color: colors.textLight,
                fontSize: typography.fontSize.base,
              }}
              className='mb-8 md:mb-12 max-w-lg leading-relaxed font-light'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            <div className='flex flex-col gap-4 items-start'>
              <motion.a
                href={slides[currentSlide].btnLink}
                style={{
                  background: gradients.buttonGradients.champagneGoldLight,
                  color: colors.primary,
                  fontSize: typography.fontSize.xs,
                }}
                className='px-8 md:px-10 py-4 md:py-5 font-bold tracking-[0.2em] text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ y: -2 }}
              >
                {slides[currentSlide].btnText}
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators - Center Bottom */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              index === currentSlide ? 'w-8' : 'w-2'
            } h-2 rounded-full`}
            style={{
              backgroundColor: index === currentSlide ? '#F5D78E' : '#888888',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20'
        style={{ color: 'white', cursor: 'pointer', fontSize: '32px' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#F5D78E')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
        aria-label='Previous slide'
      >
        <span className='material-symbols-outlined'>chevron_left</span>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20'
        style={{ color: 'white', cursor: 'pointer', fontSize: '32px' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#F5D78E')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
        aria-label='Next slide'
      >
        <span className='material-symbols-outlined text-4xl'>
          chevron_right
        </span>
      </button>
    </section>
  );
};

export default Hero;
