import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-gray-300 pt-16 pb-8 border-t-[5px] border-brand-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white tracking-wider mb-6">
              HINDUSTAN <span className="text-brand-gold">OFFSET</span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Premium quality offset and digital printing services. We deliver excellence in every print, ensuring your brand stands out with professional and luxury finishing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-5px] left-0 w-1/2 h-[2px] bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-brand-gold transition-colors block">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-brand-gold transition-colors block">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Our Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-brand-gold transition-colors block">Gallery & Portfolio</Link></li>
              <li><Link to="/machines" className="text-sm hover:text-brand-gold transition-colors block">Our Machines</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand-gold transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-[-5px] left-0 w-1/2 h-[2px] bg-brand-gold"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Offset Printing</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Digital Printing</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Packaging Solutions</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Corporate Branding</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Wedding Cards</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-gold transition-colors block">Brochures & Catalogs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-[-5px] left-0 w-1/2 h-[2px] bg-brand-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-sm">Santosh Vihar, Arya Nagar, Jwalapur, Uttarakhand 249407</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <span className="text-sm">098970 34264</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <span className="text-sm">info@hindustanoffset.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} The Hindustan Offset Printers. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link to="#" className="hover:text-brand-gold">Privacy Policy</Link>
              <Link to="#" className="hover:text-brand-gold">Terms of Service</Link>
            </div>
          </div>
          
          {/* Yuvan Creations Branding */}
          <div className="flex flex-col items-center justify-center pt-6 border-t border-white/5">
            <div className="text-sm text-gray-400 flex flex-col sm:flex-row items-center gap-2">
              <span>Website Designed & Developed By</span>
              <a 
                href="http://www.yuvancreations.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold font-bold tracking-wider hover:text-white transition-all duration-300 relative group"
              >
                YUVAN CREATIONS
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Phone size={12} className="text-brand-gold" />
              <span>Contact: 9557300217</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
