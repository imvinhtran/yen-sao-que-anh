import React from 'react';
import { colors, typography } from '../styles/theme';
import { useLocales } from '../hooks/useLocales';

const Pricing: React.FC = () => {
  const locales = useLocales();
  const { title, subtitle, description, gifts, cards } = locales.pricing;

  return (
    <section
      className='py-24 relative'
      id='pricing'
      style={{
        backgroundImage: 'url(/assets/background-texture.png)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backgroundSize: 'cover',
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
            — {subtitle} —
          </span>
          <h2
            style={{
              fontFamily: typography.fontFamily.primary,
              color: colors.textPrimary,
            }}
            className='text-4xl md:text-5xl mb-6'
          >
            {title}
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
            "{description}"
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
          {cards.map((card: any, cardIdx: number) => (
            <div key={card.id}>
              {card.id === 1 && (
                <div
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                  className='border shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group h-full'
                >
                  <div className='mb-6 h-64 overflow-hidden'>
                    <img
                      alt={card.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                      src='/assets/sp-1.png'
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
                    {card.title}
                  </h3>
                  <div className='space-y-5 flex-grow'>
                    {card.items.map((item: any, idx: number) => (
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
                      {card.giftsLabel}
                    </p>
                    <ul
                      style={{
                        color: colors.textSecondary,
                        fontSize: typography.fontSize.xs,
                      }}
                      className='space-y-2'
                    >
                      {gifts.map((gift: string, idx: number) => (
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
                    {card.button}
                  </button>
                </div>
              )}

              {card.id === 2 && (
                <div
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.primary,
                    borderWidth: '2px',
                  }}
                  className='shadow-2xl p-8 flex flex-col relative transform lg:-translate-y-6 z-10 group h-full'
                >
                  <div
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.textLight,
                      fontSize: typography.fontSize.xs,
                    }}
                    className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 font-bold tracking-[0.3em] uppercase whitespace-nowrap'
                  >
                    {card.badge}
                  </div>
                  <div className='mb-6 h-64 overflow-hidden'>
                    <img
                      alt={card.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                      src='/assets/sp-2.png'
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
                    {card.title}
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
                        {card.refine.title}
                      </h4>
                      <div className='space-y-3'>
                        {card.refine.items.map((item: any, idx: number) => (
                          <div
                            key={idx}
                            className='flex justify-between text-sm'
                          >
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
                        {card.hairRemoval.title}
                      </h4>
                      <div className='space-y-3'>
                        {card.hairRemoval.items.map(
                          (item: any, idx: number) => (
                            <div
                              key={idx}
                              className='flex justify-between text-sm'
                            >
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
                          )
                        )}
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
                      {card.giftsLabel}
                    </p>
                    <p
                      style={{
                        color: colors.textSecondary,
                        fontSize: typography.fontSize.xs,
                      }}
                      className='leading-relaxed italic'
                    >
                      {card.giftsDescription}
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
                    {card.button}
                  </button>
                </div>
              )}

              {card.id === 3 && (
                <div
                  style={{
                    backgroundColor: colors.background,
                    borderColor: colors.border,
                  }}
                  className='border shadow-sm hover:shadow-xl transition-all p-8 flex flex-col group h-full'
                >
                  <div className='mb-6 h-64 overflow-hidden'>
                    <img
                      alt={card.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                      src='/assets/sp-3.png'
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
                    {card.title}
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
                        {card.priceLabel}
                      </p>
                      <p
                        style={{
                          color: colors.secondary,
                          fontSize: typography.fontSize['2xl'],
                        }}
                        className='font-bold italic leading-none'
                      >
                        {card.priceValue}
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      {card.sets.map((item: any, idx: number) => (
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
                      "{card.description}"
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
                    {card.button}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
