import Link from 'next/link';
import { SearchSidebar } from '../components/SearchSidebar';

const sections = [
  { id: 'hero', title: 'Welcome' },
  { id: 'features', title: 'Features' },
  { id: 'about', title: 'About Us' },
  { id: 'contact', title: 'Contact' },
];

export default function Home() {
  return (
    <div className="relative">
      <SearchSidebar sections={sections} />
      
      <div className="container mx-auto py-12 space-y-32">
        <section id="hero" className="min-h-[80vh] flex items-center">
          <div className="glass-section text-center w-full">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              Welcome to Your Site
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A modern website built with Next.js and Tailwind CSS, featuring a stunning glassmorphism design
            </p>
            <Link href="#contact" className="glass-button inline-block">
              Get in Touch
            </Link>
          </div>
        </section>

        <section id="features" className="min-h-screen glass-section">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="glass-grid md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card">
                <div className="h-32 mb-6 rounded-xl bg-gradient-to-br from-rose-100/20 to-indigo-100/20 dark:from-rose-500/10 dark:to-indigo-500/10" />
                <h3 className="text-xl font-semibold mb-4">Feature {i}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="min-h-screen glass-section">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="glass-grid md:grid-cols-2 items-center">
            <div className="glass-card space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="glass-card aspect-video bg-gradient-to-br from-rose-100/20 to-indigo-100/20 dark:from-rose-500/10 dark:to-indigo-500/10" />
          </div>
        </section>

        <section id="contact" className="min-h-screen glass-section">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="glass-card space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="glass-input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="glass-input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" className="glass-input min-h-[120px]"></textarea>
              </div>
              <button type="submit" className="glass-button w-full bg-gradient-to-r from-rose-100/50 to-indigo-100/50 dark:from-rose-500/10 dark:to-indigo-500/10">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
