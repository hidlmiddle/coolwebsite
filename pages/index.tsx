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
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold mb-6">Welcome to Your Site</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A modern website built with Next.js and Tailwind CSS
            </p>
            <Link href="#contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </section>

        <section id="features" className="min-h-screen">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Feature {i}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="min-h-screen">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl aspect-video"></div>
          </div>
        </section>

        <section id="contact" className="min-h-screen">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="input" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="input" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" className="textarea"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
