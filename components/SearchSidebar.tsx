import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

interface SearchSidebarProps {
  sections: Section[];
}

export function SearchSidebar({ sections }: SearchSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Triggers when section is ~20% into view
        threshold: 0
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Filter sections based on search term
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="fixed right-4 top-24 w-64 p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow"
        />
        
        <nav className="space-y-2">
          {filteredSections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
