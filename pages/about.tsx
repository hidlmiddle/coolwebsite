import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
        </div>
        <div className="relative h-[400px] bg-gray-100 rounded-lg">
          <Image
            src="https://via.placeholder.com/800x600"
            alt="About us"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
