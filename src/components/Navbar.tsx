import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-white text-lg">NASA Challenge 2025</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Teams
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
