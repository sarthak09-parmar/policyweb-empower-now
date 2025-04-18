
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-openpolitica-navy">
              Open<span className="text-openpolitica-cyan">Politica</span>
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium"
          >
            Features
          </a>
          <a 
            href="#platform" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium"
          >
            Platform
          </a>
          <a 
            href="#mission" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium"
          >
            Mission
          </a>
          <a 
            href="#join-us" 
            className="bg-openpolitica-cyan hover:bg-openpolitica-navy text-white px-5 py-2 rounded-md transition-colors font-poppins font-medium"
          >
            Get Started
          </a>
        </nav>
        
        <button 
          className="md:hidden text-openpolitica-navy"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } z-40`}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#platform" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Platform
          </a>
          <a 
            href="#mission" 
            className="text-openpolitica-slate hover:text-openpolitica-cyan transition-colors font-poppins font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Mission
          </a>
          <a 
            href="#join-us" 
            className="bg-openpolitica-cyan text-white px-5 py-2 rounded-md transition-colors font-poppins font-medium text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
