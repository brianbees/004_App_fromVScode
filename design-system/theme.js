import { colors, spacing, typography } from './tokens';

export const lightTheme = {
  colors: {
    ...colors,
    background: '#fff',
    text: '#222',
  },
  spacing,
  typography,
};

export const darkTheme = {
  colors: {
    ...colors,
    background: '#18181b',
    text: '#fff',
    surface: '#222',
  },
  spacing,
  typography: {
    ...typography,
    text: '#fff',
  },
};
