import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none brightness-75"
      >
        <source src="/videos/Verceland_Glassmorphism_Background_Video.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
