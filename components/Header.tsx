import Link from 'next/link';

export default function Header() {
  return (
    <div className="container mx-auto pt-4">
      <header className="glass-navbar">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-serif font-bold text-white"
          >
            Your Site
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
