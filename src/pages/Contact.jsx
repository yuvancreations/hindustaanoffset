import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  Sparkles, MessageSquare, Globe, ArrowRight, 
  User, Building2, Smartphone, Map, ClipboardList,
  Layers, Package, Calendar, Timer, IndianRupee,
  HelpCircle, ExternalLink, Shield, Star
} from 'lucide-react';
import { useState, useRef } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 500], ["0%", "20%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 4000);
    }, 2000);
  };

  const services = [
    "Offset Printing", "Digital Printing", "Brochure Printing", "Catalogue Printing",
    "Visiting Card Printing", "Pouches Printing", "Protein Powder Labels",
    "Cosmetics Labels", "Pharma Labels", "Liquor Labels", "Packaging Printing",
    "Sticker Printing", "Corporate Branding Material", "Customized Printing Solutions", "Other"
  ];

  return (
    <div className="bg-brand-gray min-h-screen pb-24 overflow-hidden">
      <SEO 
        title="B2B Printing Inquiry | The Hindustan Offset Printers"
        description="Elite industrial printing inquiry system for global brands. Request quotes for high-volume labels, packaging, and digital offset services."
        keywords="premium printing contact, B2B printing quotes, luxury packaging inquiry, Haridwar industrial printing"
        canonicalUrl="/contact"
      />

      {/* Ultra-Premium Hero Section */}
      <section className="relative pt-52 pb-44 bg-brand-black text-white overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: heroBgY }}
            className="absolute inset-0 opacity-40"
          >
            <img src="/images/hero.png" alt="Industrial Excellence" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/40 to-brand-gray"></div>
          </motion.div>
          
          {/* Floating Animated Orbs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, -50, 0],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -80, 0], 
              y: [0, 100, 0],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px]"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <Sparkles size={16} className="text-brand-gold animate-pulse" />
              <span className="text-brand-gold text-xs font-black uppercase tracking-[0.4em]">Elite Business Inquiry</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter uppercase italic leading-[0.85]">
              Let's <span className="text-brand-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">Collaborate.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed tracking-tight">
              Bridging decades of heritage with future-ready precision. Your high-volume printing partner for global excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-12 -mt-32 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Premium Info Column */}
          <div className="lg:w-[35%] space-y-10">
            {/* Glass Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Phone />, title: 'Executive Line', details: ['+91 7060332238', '+91 8171114207'], sub: 'Available 24/7 for urgent quotes', color: 'text-brand-gold' },
                { icon: <Mail />, title: 'Corporate Mail', details: ['hindustanoffset@gmail.com'], sub: 'Response within 2 business hours', color: 'text-brand-blue' },
                { icon: <Map />, title: 'Headquarters', details: ['Santosh Vihar, Arya Nagar, Jwalapur'], sub: 'Haridwar, Uttarakhand 249407', color: 'text-brand-gold' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,1)' }}
                  className="bg-white/90 backdrop-blur-2xl p-10 rounded-[3rem] border border-white shadow-2xl group transition-all duration-500"
                >
                  <div className={`w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center ${item.color} mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-inner`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-3">{item.title}</h4>
                  <div className="mb-2">
                    {item.details.map((text, i) => (
                      <p key={i} className="text-xl font-black text-brand-blue tracking-tighter">{text}</p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Premium Map Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white overflow-hidden h-[450px] relative group"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.7422037190574!2d78.11545627546054!3d29.929285074983054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909477000000001%3A0x6b74686411516f2b!2sThe%20Hindustan%20Offset%20Printers!5e0!3m2!1sen!2sin!4v1715788000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none"></div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-10">
                <a href="#" className="bg-brand-blue text-white w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest shadow-2xl hover:bg-brand-gold hover:text-brand-blue transition-all">
                  Navigate to Press <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Ultra-Attractive Inquiry Form */}
          <div className="lg:w-[65%]">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-24 rounded-[5rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.2)] border border-gray-50 relative overflow-hidden"
            >
              {/* Form Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 mb-20">
                <div className="flex items-center gap-4 mb-8 text-brand-gold">
                  <div className="w-12 h-[2px] bg-brand-gold"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.6em]">Premium B2B Lead System</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter uppercase italic leading-[0.9] mb-8">
                  Get An <br /> <span className="text-brand-gold drop-shadow-xl">Instant Quote.</span>
                </h2>
                <p className="text-gray-400 font-bold text-lg max-w-xl">Complete the strategic brief below, and our senior engineers will analyze your production needs.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                {/* Form Sections with Floating Labels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { label: 'Full Name', placeholder: 'Alexander Pierce', icon: <User size={16} /> },
                    { label: 'Company Name', placeholder: 'Global Pharmaceuticals Ltd', icon: <Building2 size={16} /> },
                    { label: 'Business Email', placeholder: 'exec@company.com', icon: <Mail size={16} /> },
                    { label: 'Contact Number', placeholder: '+91 98XXX XXXXX', icon: <Smartphone size={16} /> }
                  ].map((field, i) => (
                    <div key={i} className="group space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6 group-focus-within:text-brand-gold transition-colors">{field.label}</label>
                      <div className="relative">
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-brand-gold transition-colors">
                          {field.icon}
                        </div>
                        <input 
                          type="text" 
                          placeholder={field.placeholder} 
                          className="w-full bg-gray-50 border-0 rounded-3xl pl-16 pr-8 py-5 text-brand-blue font-black focus:ring-4 focus:ring-brand-gold/10 focus:bg-white transition-all placeholder:text-gray-200"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Primary Service</label>
                    <select className="w-full bg-gray-50 border-0 rounded-3xl px-8 py-5 text-brand-blue font-black focus:ring-4 focus:ring-brand-gold/10 focus:bg-white transition-all appearance-none cursor-pointer">
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Quantity Requirement</label>
                    <input type="text" placeholder="e.g. 1 Million Units" className="w-full bg-gray-50 border-0 rounded-3xl px-8 py-5 text-brand-blue font-black focus:ring-4 focus:ring-brand-gold/10 focus:bg-white transition-all placeholder:text-gray-200" />
                  </div>
                </div>

                <div className="group space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Detailed Project Brief</label>
                  <textarea rows="5" placeholder="Describe your material specs, size, and urgency..." className="w-full bg-gray-50 border-0 rounded-[3rem] px-8 py-8 text-brand-blue font-black focus:ring-4 focus:ring-brand-gold/10 focus:bg-white transition-all placeholder:text-gray-200 resize-none"></textarea>
                </div>

                <div className="pt-10">
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(212,175,55,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formState !== 'idle'}
                    className={`w-full py-8 rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 relative overflow-hidden ${
                      formState === 'success' ? 'bg-green-500 text-white' : 'bg-brand-blue text-white group'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'idle' ? (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
                          Secure Quote <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </motion.div>
                      ) : formState === 'sending' ? (
                        <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Processing...</motion.div>
                      ) : (
                        <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-4">
                          Brief Submitted <CheckCircle2 size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  
                  <div className="mt-10 flex items-center justify-center gap-4 text-gray-400">
                    <Shield size={16} className="text-brand-gold" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">100% Data Confidentiality Guaranteed</span>
                  </div>
                </div>
              </form>

              {/* Ultra Success Overlay */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                    className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center p-20 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-32 h-32 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center mb-12 shadow-glow-gold"
                    >
                      <CheckCircle2 size={64} />
                    </motion.div>
                    <h3 className="text-6xl font-black text-brand-blue mb-6 uppercase tracking-tighter italic leading-none">Brief <br /> <span className="text-brand-gold">Accepted.</span></h3>
                    <p className="text-gray-500 font-bold text-xl mb-12 max-w-sm leading-relaxed">Our senior production desk is now analyzing your brief. Expect a response within 120 minutes.</p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setFormState('idle')}
                      className="px-16 py-5 bg-brand-blue text-white rounded-full font-black text-xs uppercase tracking-widest shadow-2xl"
                    >
                      Return to Form
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corporate Badges */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {[
              { icon: <Star />, title: '5-Star Quality', desc: 'Zero defect output' },
              { icon: <Timer />, title: 'Rapid Desk', desc: '120m Response time' },
              { icon: <IndianRupee />, title: 'Direct Scale', desc: 'Industrial pricing' },
              { icon: <Globe />, title: 'Global reach', desc: 'PAN India delivery' }
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 border border-gray-50">
                  {badge.icon}
                </div>
                <h5 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-1 italic">{badge.title}</h5>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
