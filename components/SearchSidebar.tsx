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
    <aside className="glass-sidebar">
      <div className="space-y-4 pointer-events-auto">
        <input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-input"
          aria-label="Search sections"
        />
        
        <nav className="space-y-2">
          {filteredSections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block px-3 py-2 rounded-xl transition-all duration-200 ${
                activeSection === id
                  ? 'glass-button bg-gradient-to-r from-rose-100/50 to-indigo-100/50 dark:from-rose-500/10 dark:to-indigo-500/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/5'
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
