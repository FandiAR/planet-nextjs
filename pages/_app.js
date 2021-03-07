import { useEffect } from 'react';
import Head from 'next/head';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

const useStyles = makeStyles({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
});

const PlanetWhim = ({ Component, pageProps }) => {
  const classes = useStyles();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div className={classes.body}>
      <Head>
        <title>WHIM</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default PlanetWhim;
