/**
 * Theme System
 * Centralized theme configuration for consistent styling across the portfolio
 */

export const THEME_COLORS = {
  light: {
    bg: '#FFFFFF',
    fg: '#0F0F0F',
    muted: '#F5F5F5',
    'muted-fg': '#737373',
    border: '#E5E5E5',
    glass: 'rgba(255, 255, 255, 0.7)',
    primary: '#000000',
    secondary: '#F3F4F6',
  },
  dark: {
    bg: '#0F0F0F',
    fg: '#FFFFFF',
    muted: '#1F1F1F',
    'muted-fg': '#A1A1A1',
    border: '#2A2A2A',
    glass: 'rgba(17, 17, 17, 0.7)',
    primary: '#FFFFFF',
    secondary: '#1F1F1F',
  },
}

export const GLASS_EFFECT = {
  light: {
    bg: 'rgba(255, 255, 255, 0.7)',
    shadow: 'rgba(31, 38, 135, 0.12)',
    border: 'rgba(255, 255, 255, 0.8)',
  },
  dark: {
    bg: 'rgba(17, 17, 17, 0.7)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
}

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
}

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
}

export const TYPOGRAPHY = {
  fonts: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  },
  heading: {
    h1: {
      size: '3.5rem',
      weight: 700,
      lineHeight: 1.2,
    },
    h2: {
      size: '2.5rem',
      weight: 700,
      lineHeight: 1.3,
    },
    h3: {
      size: '1.875rem',
      weight: 600,
      lineHeight: 1.4,
    },
  },
  body: {
    lg: {
      size: '1.125rem',
      weight: 400,
      lineHeight: 1.6,
    },
    base: {
      size: '1rem',
      weight: 400,
      lineHeight: 1.6,
    },
    sm: {
      size: '0.875rem',
      weight: 400,
      lineHeight: 1.5,
    },
  },
}

export const TRANSITIONS = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms',
  verySlow: '750ms',
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    cubic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
}

export const SHADOWS = {
  light: {
    sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
    'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.08)',
  },
  dark: {
    sm: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  },
}
