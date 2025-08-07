import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="textarea"
              placeholder="Your message"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
