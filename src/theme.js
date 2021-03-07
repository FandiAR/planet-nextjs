import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    body2: {
      fontSize: '12px',
    },
    body1: {
      fontSize: '14px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#006fff',
      white: '#ffffff',
      blue: '#006fff',
      black: '#000000',
      grey: '#d9d9d9',
      red: '#ff0033',
    },
  },
});

export default theme;
