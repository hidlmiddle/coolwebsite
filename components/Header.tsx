import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <div className="container mx-auto pt-4">
      <header className="glass-navbar">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Your Site
          </Link>
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </div>
  );
}
