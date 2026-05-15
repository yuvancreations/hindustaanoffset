import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Printer, ShieldCheck, Clock, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const sectionBgY = useTransform(scrollY, [1000, 3000], ["-20%", "20%"]);

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
        {/* Background Image & Overlay */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroBgY }}>
          <img src="/images/hero.png" alt="Modern Printing Press" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1 mb-6 border border-brand-gold/30 rounded-full glass-dark text-brand-gold text-sm font-semibold tracking-widest uppercase">
              Premium Printing Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Precision Meets <br className="hidden md:block" />
              <span className="text-gradient">Perfection.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Elevate your brand with The Hindustan Offset Printers. We deliver world-class offset and digital printing solutions with unparalleled quality, speed, and luxury finishing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-blue font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-white transition-all text-lg flex items-center justify-center gap-2"
                >
                  Get Quick Quote <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-blue transition-all text-lg"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating 3D Elements (Decorative) */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[30%] hidden lg:block glass-dark p-6 rounded-2xl shadow-2xl border border-white/10 max-w-xs"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">25+ Years</h4>
              <p className="text-sm text-gray-400">of Excellence</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-black text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why <span className="text-brand-gold">Choose Us</span></h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">We combine state-of-the-art machinery with decades of expertise to deliver prints that speak volumes about your brand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Printer size={32} />, title: 'Advanced Tech', desc: 'Equipped with the latest offset and digital presses for ultra-high resolution prints.' },
              { icon: <Clock size={32} />, title: 'Fast Turnaround', desc: 'Strict adherence to deadlines without compromising a single detail of quality.' },
              { icon: <ShieldCheck size={32} />, title: 'Premium Quality', desc: 'Rigorous quality checks at every stage to ensure perfect color reproduction.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group"
              >
                <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Our Premium <span className="text-brand-blue">Services</span></h2>
              <div className="w-24 h-1 bg-brand-gold rounded-full"></div>
            </div>
            <Link to="/services" className="text-brand-blue font-semibold hover:text-brand-gold flex items-center gap-2 mt-6 md:mt-0">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Offset Printing', img: '/images/prints.png' },
              { name: 'Digital Printing', img: '/images/prints.png' },
              { name: 'Packaging Solutions', img: '/images/machine.png' },
              { name: 'Labels & Pouches', img: '/images/prints.png' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{service.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">High-quality, precision-driven {service.name.toLowerCase()} tailored to your specific business requirements.</p>
                  <Link to="/services" className="text-brand-gold font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-20 relative overflow-hidden bg-brand-blue text-white">
        <motion.div className="absolute inset-0 opacity-10" style={{ y: sectionBgY }}>
          <img src="/images/machine.png" alt="Background Texture" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Uncompromising Quality in Every Print</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                At Hindustan Offset, we believe that your printed materials are a direct reflection of your brand's quality. That's why we utilize the finest inks, premium papers, and cutting-edge machinery to ensure your vision is realized flawlessly.
              </p>
              <ul className="space-y-4 mb-10">
                {['100% Color Accuracy Guaranteed', 'Eco-Friendly Inks & Materials', 'Strict Quality Control Processes', 'Dedicated Account Managers'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-gold" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <button className="bg-white text-brand-blue font-bold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                  Discover Our Story
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="/images/machine.png" alt="Our Quality" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/50 to-transparent"></div>
              </div>
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 bg-brand-gold text-brand-blue p-6 rounded-xl shadow-2xl hidden md:block"
              >
                <div className="text-4xl font-extrabold mb-1">10k+</div>
                <div className="font-semibold">Projects Delivered</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Trusted By <span className="text-brand-gold">Leading Brands</span></h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We are proud to serve some of India's most recognized and respected brands across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {[
              'Color Essence', 'Dabur India', 'Patanjali', 'Mascot Health Series',
              'Cimera Care', 'Eureka Forbes', 'Mahindra & Mahindra', 'Exide Industries',
              'Havells India', 'Protech Telelinks', 'Oscar Remedies', 'BML Parenteral Drugs',
              'Rivpra Formulation', 'Oteria', 'Orgatre', 'Gainz 4 Forever',
              'Signoraware', 'Trueware', 'Pritam International', 'Safecone Lifescience',
              'KTL', 'National Plasto Moulding', 'Cello'
            ].map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-brand-gray border border-gray-200 rounded-xl p-4 flex items-center justify-center text-center hover:border-brand-gold hover:shadow-lg transition-all cursor-default group"
              >
                <span className="text-xs sm:text-sm font-semibold text-brand-dark-gray group-hover:text-brand-blue transition-colors leading-tight">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-black to-brand-blue text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Start Your <span className="text-brand-gold">Print Project?</span></h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get in touch with our experts today for a custom quote. We are ready to bring your ideas to life.</p>
        <Link to="/contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-brand-gold text-brand-blue font-bold text-xl rounded-full shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:bg-white transition-colors"
          >
            Request a Quote Now
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
