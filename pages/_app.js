// pages/_app.js
import { useEffect } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (!authenticated && Router.pathname !== '/') {
      Router.push('/');
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
