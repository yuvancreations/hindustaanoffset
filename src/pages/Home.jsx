import { motion, useScroll, useTransform } from 'framer-motion';
import { Printer, ShieldCheck, Clock, Award, ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import MachineCarousel from '../components/MachineCarousel';

import TrustedPartners from '../components/TrustedPartners';

const Home = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-brand-gray min-h-screen">
      <SEO 
        title="Home"
        description="The Hindustan Offset Printers offers premium offset and digital printing services, packaging, and corporate identity solutions."
        keywords="Hindustan Offset, premium printing, offset printing Haridwar, digital printing, packaging solutions"
        canonicalUrl="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroBgY }}>
          <img src="/images/hero.png" alt="Modern Printing Press" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-blue/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black"></div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center lg:text-left">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase">
              <Sparkles size={14} className="text-brand-gold" />
              Trusted Since 1997
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Premium Printing <br />
              <span className="text-brand-gold">Excellence.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              We blend 29 years of legacy with world-class technology to deliver perfection in every single impression.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-blue font-bold rounded-full shadow-xl transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                >
                  Start Project <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full transition-all uppercase tracking-widest text-sm backdrop-blur-md"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-brand-gold">Hindustan Offset?</span></h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Printer size={32} />, title: 'Advanced Tech', desc: 'Operating with ultra-high resolution presses for vibrant color ranges and detail.' },
              { icon: <Clock size={32} />, title: 'Fast Execution', desc: 'Industrial speed paired with strict QC protocols to meet tightest deadlines.' },
              { icon: <ShieldCheck size={32} />, title: 'Master Quality', desc: '29-point quality check on every batch to ensure 100% consistency.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our <span className="text-brand-gold">Core Expertise</span></h2>
              <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
            </div>
            <Link to="/services" className="text-brand-blue font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-brand-gold transition-colors">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Offset Printing', img: '/images/prints.png' },
              { name: 'Digital Express', img: '/images/prints.png' },
              { name: 'Luxury Packaging', img: '/images/machine/HP Indigo 6K.avif' },
              { name: 'Custom Labels', img: '/images/prints.png' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-xl font-bold tracking-tight">{service.name}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">Precision-engineered solutions for global brands demanding high consistency.</p>
                  <Link to="/services" className="text-brand-blue font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-gold transition-colors">
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Carousel Section */}
      <MachineCarousel />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready for <span className="text-brand-gold">Perfection?</span></h2>
            <p className="text-xl text-gray-300 mb-12 font-light">Join the brands that refuse to settle for anything less than printing excellence.</p>
            <Link to="/contact">
              <button className="px-12 py-5 bg-brand-gold text-brand-blue font-black text-lg rounded-full shadow-2xl hover:bg-white transition-all uppercase tracking-widest">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
