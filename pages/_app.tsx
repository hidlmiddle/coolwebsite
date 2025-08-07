import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
