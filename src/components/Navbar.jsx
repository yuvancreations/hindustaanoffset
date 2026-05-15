import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Machines', path: '/machines' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full max-w-6xl flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-500 ${
            scrolled 
              ? 'bg-brand-blue/90 backdrop-blur-xl border-white/10 shadow-2xl' 
              : 'bg-white/80 backdrop-blur-md border-white/40 shadow-lg'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/images/logo/navbar.png" 
              alt="Hindustan Offset" 
              className={`h-10 md:h-12 w-auto object-contain transition-all ${scrolled ? 'brightness-110' : ''}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all rounded-full ${
                  location.pathname === link.path 
                    ? scrolled ? 'bg-brand-gold text-brand-blue' : 'bg-brand-blue text-white'
                    : scrolled ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-brand-blue/70 hover:text-brand-blue hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  scrolled 
                    ? 'bg-brand-gold text-brand-blue hover:bg-white' 
                    : 'bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-blue'
                }`}
              >
                Inquire Now
              </motion.button>
            </Link>

            <button 
              className={`lg:hidden p-2 rounded-full transition-all ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-brand-blue hover:bg-black/5'
              }`} 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 w-full px-4 mt-2 lg:hidden"
          >
            <div className="bg-brand-blue/95 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    onClick={closeMenu}
                    className={`text-lg font-bold uppercase tracking-widest py-3 rounded-2xl ${
                      location.pathname === link.path ? 'text-brand-gold bg-white/5' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={closeMenu}>
                  <button className="w-full bg-brand-gold text-brand-blue font-black py-4 rounded-2xl mt-4 uppercase tracking-widest text-sm">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
