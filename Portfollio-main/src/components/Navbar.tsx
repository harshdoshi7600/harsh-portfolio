
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '01', label: 'About', href: '#about' },
    { id: '02', label: 'Skills', href: '#skills' },
    { id: '03', label: 'Projects', href: '#projects' },
    { id: '04', label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 px-6 md:px-10 transition-all duration-300',
      scrolled ? 'bg-navy/90 backdrop-blur shadow-lg py-3' : 'bg-transparent py-5'
    )}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-highlight font-bold text-2xl relative group"
        >
          <span className="group-hover:animate-pulse">Harsh Doshi</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'text-highlight' : ''}`}
                >
                  <span className="nav-link-number">{item.id}.</span>
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-highlight scale-x-0 group-hover:scale-x-100"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-highlight focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="absolute top-6 right-6">
          <button 
            className="text-slate-light hover:text-highlight focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map(item => (
              <li key={item.id} className="transform transition-transform hover:translate-y-[-5px]">
                <a 
                  href={item.href} 
                  className="text-xl text-slate-light hover:text-highlight"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-highlight block text-center text-sm mb-1">{item.id}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
