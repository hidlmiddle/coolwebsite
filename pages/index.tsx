import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Your Site</h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern website built with Next.js and Tailwind CSS
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
