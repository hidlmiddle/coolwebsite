import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';
import VideoBackground from '../components/VideoBackground';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <VideoBackground />
      <div className="fixed inset-0 bg-black opacity-30 -z-5" />
      <div className="relative">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
