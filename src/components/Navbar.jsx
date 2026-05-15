import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-blue py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Top bar (Address & Phone) - Only visible when not scrolled on desktop */}
        <div className={`hidden md:flex justify-between items-center border-b border-white/10 pb-2 mb-2 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0 pb-0 mb-0 border-transparent' : 'opacity-100'}`}>
          <div className="flex items-center text-sm text-gray-300">
            <MapPin size={14} className="mr-2 text-brand-gold" />
            Santosh Vihar, Arya Nagar, Jwalapur, Uttarakhand 249407
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Phone size={14} className="mr-2 text-brand-gold" />
            7060332238, 8171114207
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="text-2xl font-bold text-white tracking-wider">
              HINDUSTAN <span className="text-brand-gold">OFFSET</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/' ? 'text-brand-gold' : 'text-white'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/about' ? 'text-brand-gold' : 'text-white'}`}>About Us</Link>
            
            <div className="relative group">
              <Link to="/services" className={`flex items-center gap-1 text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/services' ? 'text-brand-gold' : 'text-white'}`}>
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              {/* Dropdown Mega Menu */}
              <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Offset Printing</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Digital Printing</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Packaging Printing</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Pouches Printing</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Protein Powder Labels</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Cosmetics Labels</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Pharma Labels</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-brand-dark-gray hover:bg-brand-gray hover:text-brand-blue">Liquor Labels</Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link to="/services" className="block px-4 py-2 text-sm text-brand-gold font-medium hover:bg-brand-gray">View All Services →</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/gallery" className={`text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/gallery' ? 'text-brand-gold' : 'text-white'}`}>Gallery</Link>
            <Link to="/machines" className={`text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/machines' ? 'text-brand-gold' : 'text-white'}`}>Our Machines</Link>
            <Link to="/contact" className={`text-sm font-medium hover:text-brand-gold transition-colors ${location.pathname === '/contact' ? 'text-brand-gold' : 'text-white'}`}>Contact Us</Link>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-brand-blue font-bold px-6 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                Quick Quote
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-blue shadow-xl border-t border-white/10"
        >
          <div className="flex flex-col px-4 py-6 space-y-4">
            <Link to="/" className="text-white text-lg font-medium" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-white text-lg font-medium" onClick={closeMenu}>About Us</Link>
            <Link to="/services" className="text-white text-lg font-medium" onClick={closeMenu}>Services</Link>
            <Link to="/gallery" className="text-white text-lg font-medium" onClick={closeMenu}>Gallery</Link>
            <Link to="/machines" className="text-white text-lg font-medium" onClick={closeMenu}>Our Machines</Link>
            <Link to="/contact" className="text-white text-lg font-medium" onClick={closeMenu}>Contact Us</Link>
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone size={14} className="mr-2 text-brand-gold" />
                7060332238, 8171114207
              </div>
              <Link to="/contact">
                <button onClick={closeMenu} className="w-full bg-brand-gold text-brand-blue font-bold px-6 py-3 rounded-md mt-2">
                  Quick Quote
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
