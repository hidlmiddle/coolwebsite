import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Your Site
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
