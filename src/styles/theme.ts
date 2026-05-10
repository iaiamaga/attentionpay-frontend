export const theme = {
  colors: {
    surface: '#13121b',
    primary: '#6c5ce7',
    secondary: '#00d9ff',
    success: '#00b894',
    warning: '#fdcb6e',
    error: '#ff7675',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
  },
  fonts: {
    family: 'Inter, sans-serif',
    sizes: {
      display: '32px',
      headline: '24px',
      body: '16px',
      label: '12px',
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  glass: {
    background: 'rgba(28, 27, 35, 0.6)',
    blur: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
} as const;

export type Theme = typeof theme;