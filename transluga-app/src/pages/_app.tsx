import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { isFirebaseAvailable } from '@/firebase/fallback';

export default function App({ Component, pageProps }: AppProps) {
  // Check Firebase availability on client-side only
  useEffect(() => {
    try {
      const available = isFirebaseAvailable();
      console.log('Firebase availability check:', available ? 'Available' : 'Limited functionality');
      
      if (!available) {
        console.log('Firebase functionality is limited in this environment. Some features may not work.');
      }
    } catch (error) {
      console.error('Error checking Firebase availability:', error);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
