import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg border-b border-brand-blue/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Name */}
          <button
            onClick={scrollToTop}
            className="flex items-center focus:outline-none"
            aria-label="LA Street Shine - scroll to top"
          >
            <span className="font-montserrat font-black text-lg md:text-xl text-brand-blue-light tracking-tight leading-tight">
              LA Street Shine
              <span className="hidden sm:inline text-white font-semibold text-base"> Auto Detailing</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-semibold text-brand-gray hover:text-brand-blue-light transition-colors duration-200 tracking-wide uppercase relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-pink group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="tel:9094411114"
              className="ml-4 px-5 py-2 btn-blue rounded text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black/98 backdrop-blur-md border-t border-brand-blue/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-semibold text-brand-gray hover:text-brand-blue-light hover:bg-brand-blue/10 rounded transition-colors uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9094411114"
              className="block mt-3 px-4 py-3 btn-blue rounded text-center text-sm"
            >
              Call (909) 441-1114
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
