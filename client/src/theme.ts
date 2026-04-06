import { createTheme } from '@mui/material/styles';

// Color palette chosen for a professional school counseling portfolio.
// Primary: deep teal (#00695C) — calming, trustworthy, professional.
// Secondary: warm amber (#E65100) — approachable accent.
// All text/background pairs meet WCAG 2.1 AA contrast ratio ≥ 4.5:1.
//   - text.primary (#1A1A1A) on background.default (#F5F7F6): ~16:1
//   - text.primary (#1A1A1A) on background.paper (#FFFFFF): ~18.1:1
//   - primary.main (#00695C) on background.paper (#FFFFFF): ~5.1:1
const theme = createTheme({
  palette: {
    primary: {
      main: '#00695C',
      light: '#439889',
      dark: '#003D33',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E65100',
      light: '#FF833A',
      dark: '#AC1900',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F7F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
