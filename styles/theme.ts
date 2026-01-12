/**
 * Theme Constants - Centralized color, font, and spacing definitions
 * Import and use these constants throughout the app for consistent styling
 */

// Colors - Luxury Bird's Nest Theme
export const colors = {
  // Primary - Red Wine (main brand color)
  primary: '#8B1E1E',
  primaryLight: '#A83C3C',
  primaryDark: '#6B1515',

  // Secondary - Gold Deep (accent)
  secondary: '#D4AF37',
  secondaryLight: '#F5D78E',
  secondaryDark: '#B8860B',

  // Accent - Gold Light (highlights)
  accent: '#F5D78E',
  accentLight: '#F9E5B8',
  accentDark: '#D4AF37',

  // Neutral
  textPrimary: '#1C1C1C',
  textSecondary: '#B7B7B7',
  textLight: '#FAF8F3',
  background: '#FAF8F3',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#2D2D2D',
  border: '#D4AF37',

  // Status (keeping original)
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB',

  // Additional luxury colors
  brownGold: '#7A4A1D',
  warmGray: '#B7B7B7',
};

// Gradients - Text & Button Gradients
export const gradients = {
  // Text Gradients
  textGradients: {
    // Gold Luxury - cho tiêu đề chính
    goldLuxury:
      'linear-gradient(90deg, #F9E08C 0%, #D4AF37 40%, #B8860B 70%, #FFF1B8 100%)',
    // Champagne Gold - nhẹ, tinh tế
    champagneGold:
      'linear-gradient(90deg, #FFF4D1 0%, #F3C969 50%, #E0AA3E 100%)',
  },

  // Button Gradients
  buttonGradients: {
    // Gold Premium Button
    goldPremium:
      'linear-gradient(135deg, #D4AF37 0%, #F5D78E 50%, #B8860B 100%)',
    // Gold Premium Hover
    goldPremiumHover:
      'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F9E08C 100%)',
    // Gold x Red Royal - rất Á Đông
    goldRedRoyal:
      'linear-gradient(135deg, #8B1E1E 0%, #D4AF37 60%, #F9E08C 100%)',
    // Champagne Gold Light Button
    champagneGoldLight:
      'linear-gradient(135deg, #FFF4D1 0%, #F3C969 50%, #E0AA3E 100%)',
  },
};

// Typography
export const typography = {
  fontFamily: {
    primary: "'Letters From Sweden', sans-serif",
    secondary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
};

// Spacing
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
};

// Border Radius
export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '1rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

// Breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
