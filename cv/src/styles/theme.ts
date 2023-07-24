import createTheme from '@mui/material/styles/createTheme'
import Lato from '../assets/fonts/Lato-Regular.woff2';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#0A66C2',
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Lato, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lato'), local('Lato-Regular'), url(${Lato}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
