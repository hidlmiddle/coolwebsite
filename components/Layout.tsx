import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import VideoBackground from './VideoBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <VideoBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
