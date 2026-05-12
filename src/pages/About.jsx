import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Flag, Users, Award } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="pt-24 min-h-screen bg-brand-gray">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-blue text-white overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10" style={{ y: heroBgY }}>
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About <span className="text-brand-gold">Us</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Decades of printing excellence, driven by passion, precision, and technology.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hero.png" alt="Our Story" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-black">Our <span className="text-brand-blue">Story</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the printing industry in Uttarakhand, <strong>The Hindustan Offset Printers</strong> has grown from a humble beginning to becoming the region's most trusted name in premium printing services.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Over the years, we have continuously upgraded our infrastructure, embracing the latest in offset and digital printing technologies. Our commitment to quality, timely delivery, and customer satisfaction has earned us a loyal clientele ranging from local businesses to large corporate houses.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <div className="text-4xl font-bold text-brand-blue mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
                  <div className="text-4xl font-bold text-brand-blue mb-2">10k+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden">
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
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] p-10 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To provide unparalleled printing solutions that empower businesses to communicate their brand message effectively. We strive to deliver exceptional quality, value, and service in every project we undertake, maintaining the highest standards of professional ethics.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1A1A1A] p-10 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flag size={120} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black mb-6">
                  <Flag size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the leading and most innovative printing press in India, recognized for our state-of-the-art technology, sustainable practices, and unwavering commitment to excellence. We aim to set new benchmarks in the printing industry.
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
