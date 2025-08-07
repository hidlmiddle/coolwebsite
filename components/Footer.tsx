export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto py-8">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Your Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
