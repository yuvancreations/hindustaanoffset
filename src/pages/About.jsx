import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Target, Flag, Users, Award, Shield, Sparkles, Star, X, Briefcase, GraduationCap, Quote } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [selectedPillar, setSelectedPillar] = useState(null);

  const pillars = [
    {
      name: 'Mr. Pradeep Bhatia',
      role: 'Founder',
      image: '/images/hero.png',
      bio: 'The visionary who laid the foundation of Hindustan Offset with a commitment to quality and integrity.',
      achievements: ['Founded in 1997', 'Established Regional Leadership', 'Visionary Excellence'],
      quote: 'Quality is not an act, it is a habit that defines our legacy.'
    },
    {
      name: 'Mr. Bhatia',
      role: 'Co-Founder',
      image: '/images/hero.png',
      bio: 'Driving the expansion and technological adoption that transformed the press into an industrial leader.',
      achievements: ['Technological Modernization', 'Strategic Growth', 'Operational Excellence'],
      quote: 'Innovation is the heartbeat of industrial printing.'
    },
    {
      name: 'Sagar Bhatia',
      role: 'Managing Director',
      image: '/images/hero.png',
      bio: 'Overseeing modern operations and ensuring that every client receives world-class service and precision.',
      achievements: ['Digital Transformation', 'Global Standards Compliance', 'Client Relationship Management'],
      quote: 'Precision is the bridge between a vision and its reality.'
    },
    {
      name: 'Manas Bhatia',
      role: 'Director',
      image: '/images/hero.png',
      bio: 'Fostering innovation and diversifying services to meet the evolving needs of modern brands.',
      achievements: ['Market Diversification', 'Brand Strategy', 'Sustainable Printing Practices'],
      quote: 'The future of printing is sustainable and luxury-focused.'
    }
  ];

  return (
    <div className="bg-brand-gray min-h-screen">
      <SEO
        title="About Us"
        description="Learn about the Hindustan Offset Printers's decades of printing excellence, driven by passion, precision, and technology."
        keywords="about Hindustan Offset, printing excellence, printing technology, printing history Haridwar"
        canonicalUrl="/about"
      />
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-black text-white overflow-hidden">
        <motion.div className="absolute inset-0 opacity-30" style={{ y: heroBgY }}>
          <img src="/images/hero.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black"></div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              Our Legacy Story
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Excellence Since <span className="text-brand-gold">1997.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Nearly three decades of mastery, redefining industrial printing with every impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-50">
                <img src="/images/hero.png" alt="Our Story" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-blue">Our <span className="text-brand-gold">Heritage.</span></h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in <strong>1997</strong>, The Hindustan Offset Printers has evolved into an industrial leader serving India's most respected brands.
              </p>
              <p className="text-gray-500 mb-10 text-base leading-relaxed">
                We believe that your printed materials are a direct reflection of your brand. Our journey is built on zero-defect quality and high-speed execution.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand-gold/30 transition-all">
                  <div className="text-4xl font-bold text-brand-blue mb-2">10k+</div>
                  <div className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Projects</div>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand-gold/30 transition-all">
                  <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
                  <div className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence (Leadership) */}
      <section className="py-24 bg-brand-gray overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-4 tracking-tighter italic uppercase">Pillars of <span className="text-brand-gold">Excellence</span></h2>
            <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full mb-6 shadow-glow-gold"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">The visionary leadership steering our decades of success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedPillar(pillar)}
                className="relative cursor-pointer group"
              >
                {/* Image Card */}
                <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group-hover:border-brand-gold transition-all duration-500">
                  <img
                    src={pillar.image}
                    alt={pillar.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 backdrop-blur-sm">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="space-y-2"
                    >
                      <h4 className="text-2xl font-black text-white tracking-tight leading-none">{pillar.name}</h4>
                      <p className="text-brand-gold text-xs font-black uppercase tracking-[0.2em]">{pillar.role}</p>
                      <div className="pt-4 flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                        <span>View Profile</span>
                        <div className="w-8 h-[1px] bg-white/20"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Default Info (Visible when not hovered) */}
                <div className="mt-8 text-center group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className="text-xl font-black text-brand-blue tracking-tight">{pillar.name}</h4>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">{pillar.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-2xl"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-10"
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-10 right-10 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row min-h-[600px]">
                {/* Modal Image */}
                <div className="lg:w-2/5 relative">
                  <img src={selectedPillar.image} alt={selectedPillar.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent lg:hidden"></div>
                </div>

                {/* Modal Content */}
                <div className="lg:w-3/5 p-10 md:p-20 overflow-y-auto max-h-[90vh] lg:max-h-none">
                  <div className="mb-12">
                    <span className="text-brand-gold text-xs font-black uppercase tracking-[0.4em] mb-4 block">Executive Profile</span>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue tracking-tighter leading-none mb-4">{selectedPillar.name}</h2>
                    <p className="text-brand-blue/60 font-black uppercase tracking-[0.2em] text-sm">{selectedPillar.role}</p>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center gap-3 mb-6 text-brand-blue">
                        <Briefcase size={20} className="text-brand-gold" />
                        <h4 className="text-sm font-black uppercase tracking-widest">Professional Journey</h4>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed font-medium italic">"{selectedPillar.bio}"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-brand-gray p-8 rounded-[2.5rem] border border-gray-100">
                        <div className="flex items-center gap-3 mb-6 text-brand-blue">
                          <Award size={20} className="text-brand-gold" />
                          <h4 className="text-xs font-black uppercase tracking-widest">Key Milestones</h4>
                        </div>
                        <ul className="space-y-3">
                          {selectedPillar.achievements.map((a, i) => (
                            <li key={i} className="text-xs font-bold text-gray-700 flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                        <Quote className="absolute top-4 right-4 opacity-10 scale-150 group-hover:scale-125 transition-transform" />
                        <div className="relative z-10">
                          <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-brand-gold">Leadership Voice</h4>
                          <p className="text-base font-medium leading-relaxed italic">"{selectedPillar.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 opacity-5"
        >
          <Target size={300} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 opacity-5"
        >
          <Flag size={300} />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-black mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Our Mission</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  To provide unparalleled printing solutions that empower businesses to communicate their brand message effectively. We strive to deliver exceptional quality, value, and service in every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flag size={120} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-black mb-8">
                  <Flag size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Our Vision</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  To be the leading and most innovative printing press in India, recognized for our state-of-the-art technology, sustainable practices, and unwavering commitment to excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
