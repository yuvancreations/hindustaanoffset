import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-gray-300 pt-32 pb-12 border-t-4 border-brand-gold relative overflow-hidden">
      {/* Premium Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="w-full mx-auto px-8 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Company Info */}
          <div className="space-y-10">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-glow-gold">
                <img
                  src="/images/logo/Footer.png"
                  alt="Hindustan Offset Logo"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-xl font-light leading-relaxed tracking-wide">
              Crafting premium printing legacies since 1997. We merge 29 years of heritage with industrial-grade precision engineering.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: 'rgba(212,175,55,1)', color: '#0A192F' }}
                  className="w-16 h-16 rounded-2xl glass-dark-ultra flex items-center justify-center transition-all duration-500 border border-white/5 shadow-xl text-white"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-lg font-black mb-12 relative inline-block tracking-[0.3em] uppercase">
              Navigation
              <span className="absolute -bottom-4 left-0 w-12 h-1 bg-brand-gold rounded-full shadow-glow-gold"></span>
            </h4>
            <ul className="space-y-6">
              {['Home', 'About Us', 'Services', 'Gallery', 'Our Machines', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-brand-gold transition-all duration-300 flex items-center gap-3 group text-lg font-medium"
                  >
                    <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-gold" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Links */}
          <div>
            <h4 className="text-white text-lg font-black mb-12 relative inline-block tracking-[0.3em] uppercase">
              Expertise
              <span className="absolute -bottom-4 left-0 w-12 h-1 bg-brand-gold rounded-full shadow-glow-gold"></span>
            </h4>
            <ul className="space-y-6">
              {['Offset Printing', 'Digital Precision', 'Luxury Packaging', 'FMCG Labels', 'Pharma Printing', 'Corporate Identity'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-brand-gold transition-all duration-300 flex items-center gap-3 group text-lg font-medium"
                  >
                    <div className="w-2 h-2 bg-brand-gold/30 rounded-full group-hover:bg-brand-gold transition-all"></div>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters Info */}
          <div>
            <h4 className="text-white text-lg font-black mb-12 relative inline-block tracking-[0.3em] uppercase">
              Headquarters
              <span className="absolute -bottom-4 left-0 w-12 h-1 bg-brand-gold rounded-full shadow-glow-gold"></span>
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 glass-dark-ultra p-6 rounded-[2rem] border border-white/5 transition-all hover:border-brand-gold/30">
                <MapPin size={24} className="text-brand-gold shrink-0 mt-1" />
                <span className="text-sm font-light leading-relaxed text-gray-300">Santosh Vihar, Arya Nagar, Jwalapur, Haridwar, Uttarakhand 249407</span>
              </li>
              <li className="flex items-center gap-5 glass-dark-ultra p-6 rounded-[2rem] border border-white/5 transition-all hover:border-brand-gold/30">
                <Phone size={24} className="text-brand-gold shrink-0" />
                <span className="text-lg font-black tracking-tight text-white">+91 7060332238</span>
              </li>
              <li className="flex items-center gap-5 glass-dark-ultra p-6 rounded-[2rem] border border-white/5 transition-all hover:border-brand-gold/30">
                <Phone size={24} className="text-brand-gold shrink-0" />
                <span className="text-lg font-black tracking-tight text-white">+91 8171114207</span>
              </li>
              <li className="flex items-center gap-5 glass-dark-ultra p-6 rounded-[2rem] border border-white/5 transition-all hover:border-brand-gold/30">
                <Mail size={24} className="text-brand-gold shrink-0" />
                <span className="text-sm font-medium text-gray-300">hindustanoffset@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Wide Condensed Creator Credit & Links */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Creator Credit One Line */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 text-xs font-black uppercase tracking-[0.2em] text-gray-500">
              <span className="text-gray-600">Designed & Engineered By</span>
              <a
                href="http://www.yuvancreations.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-white transition-colors"
              >
                YUVAN CREATIONS
              </a>
              <span className="hidden md:inline text-white/5">|</span>
              <span className="text-gray-700">Innovating Digital Luxury</span>
              <span className="hidden md:inline text-white/5">|</span>
              <a href="tel:+919557300217" className="text-gray-500 hover:text-brand-gold transition-colors">+91 95573 00217</a>
            </div>

            {/* Policy Links */}
            <div className="flex gap-12 text-xs font-black uppercase tracking-[0.3em] text-gray-500">
              <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
