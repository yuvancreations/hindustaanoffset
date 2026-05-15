import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Layers, Image as ImageIcon, BookOpen, CreditCard, 
  ShoppingBag, Stamp, Tag, FlaskConical, Droplets, 
  Pill, Wine, Package2, ArrowRight, Sparkles, 
  Settings, Zap, ShieldCheck, Microscope, 
  Truck, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const servicesData = [
  { icon: <Layers />, title: 'Offset Mastery', desc: 'Precision high-volume printing with unmatched color fidelity for global leading brands.', sector: 'High Volume' },
  { icon: <ImageIcon />, title: 'Digital Precision', desc: 'Ultra-HD short runs and personalized printing with rapid 24-hour turnaround.', sector: 'Fast Track' },
  { icon: <ShoppingBag />, title: 'Elite Packaging', desc: 'Bespoke structural mono-cartons that turn unboxing into a premium brand event.', sector: 'Luxury' },
  { icon: <BookOpen />, title: 'Premium Catalogs', desc: 'Luxury multi-page catalogs crafted with bespoke paper and specialized finishes.', sector: 'Corporate' },
  { icon: <Pill />, title: 'Pharma Precision', desc: 'Compliant, zero-defect labeling with integrated track-and-trace security.', sector: 'Healthcare' },
  { icon: <Droplets />, title: 'Cosmetic Luxury', desc: 'Ultra-premium labels featuring metallic foils, embossing, and UV spot effects.', sector: 'Beauty' },
  { icon: <FlaskConical />, title: 'Supplement Labels', desc: 'High-impact labeling for wellness, designed to dominate competitive retail shelves.', sector: 'Wellness' },
  { icon: <Wine />, title: 'Liquor Branding', desc: 'The pinnacle of bottle aesthetics—rich textures with elite print finishes.', sector: 'Beverage' },
  { icon: <Tag />, title: 'Technical Labels', desc: 'High-performance adhesive solutions for extreme industrial environments.', sector: 'Industrial' },
  { icon: <Package2 />, title: 'Pouch Engineering', desc: 'Specialized flexible packaging for food and pharma with barrier protection.', sector: 'Packaging' },
  { icon: <CreditCard />, title: 'Executive Cards', desc: 'Corporate identity—featuring gold foil, embossing, and silk-touch textures.', sector: 'Identity' },
  { icon: <Stamp />, title: 'Brand Stationery', desc: 'Cohesive corporate universe engineered for institutional prestige.', sector: 'Institutional' },
];

const Services = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="bg-brand-gray min-h-screen overflow-hidden">
      <SEO 
        title="Industrial Printing Services | The Hindustan Offset Printers"
        description="Elite printing solutions for Pharma, Cosmetics, and Luxury Brands. Offset, Digital, and specialized packaging services."
        keywords="industrial printing services, pharma labels, luxury packaging, offset printing Haridwar, digital printing services"
        canonicalUrl="/services"
      />

      {/* Ultra-Premium Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-brand-black overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img src="/images/machine/HP Indigo 6K.avif" alt="Services" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-gray"></div>
        </motion.div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
              <Settings size={16} className="animate-spin-slow" />
              Strategic Solutions
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
              Service <br /> <span className="text-brand-gold drop-shadow-2xl">Portfolio.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Industrial excellence across every substrate. Engineered for global brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialization Sectors */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: <Microscope />, title: 'Pharmaceuticals', desc: 'Zero-defect compliance printing with high-security labeling for medical manufacturers.' },
              { icon: <Zap />, title: 'FMCG & Retail', desc: 'High-impact packaging and labels designed to dominate shelf-space in seconds.' },
              { icon: <Sparkles />, title: 'Luxury Goods', desc: 'Exquisite finishes, foils, and textures for brands that command a premium price.' }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/90 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white shadow-2xl group transition-all"
              >
                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tighter italic">{sector.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-gold"></div>
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">Core Competencies</span>
            <div className="w-8 h-[2px] bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue uppercase tracking-tighter italic">Deep <span className="text-brand-gold">Capabilities.</span></h2>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Sector Tag */}
                <div className="absolute top-8 right-8">
                  <span className="px-3 py-1 bg-brand-gray rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400">
                    {service.sector}
                  </span>
                </div>

                <div className="w-20 h-20 bg-brand-gray rounded-3xl flex items-center justify-center text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner">
                  {/* Scaling the icons from servicesData */}
                  {Object.assign({}, service.icon, { props: { ...service.icon.props, size: 40 } })}
                </div>
                <h3 className="text-2xl font-black text-brand-blue mb-6 tracking-tight uppercase italic group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">{service.desc}</p>
                
                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                  <Link to="/contact" className="text-brand-blue font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                    Details <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="w-10 h-10 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Process Flow */}
      <section className="py-32 bg-brand-black text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter leading-none">
                The <span className="text-brand-gold">Industrial</span> <br /> Workflow.
              </h2>
              <p className="text-gray-400 text-lg font-light">Four stages of precision engineering, designed for zero-defect production.</p>
            </div>
            <div className="flex items-center gap-4 text-brand-gold">
              <ShieldCheck size={32} />
              <div className="text-left">
                <div className="text-[10px] font-black uppercase tracking-widest">QC Standard</div>
                <div className="text-sm font-bold text-white">ISO 9001:2015</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-14 left-0 w-full h-[1px] bg-white/10 z-0"></div>

            {[
              { step: '01', title: 'Strategy', desc: 'Detailed analysis of material specs and brand vision.', icon: <Settings /> },
              { step: '02', title: 'Pre-Press', desc: 'Spectral color management for absolute accuracy.', icon: <Microscope /> },
              { step: '03', title: 'Execution', desc: 'Precision printing on advanced industrial presses.', icon: <Zap /> },
              { step: '04', title: 'Finishing', desc: 'Zero-defect quality check and luxury finishes.', icon: <CheckCircle2 /> }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-brand-gold/40 transition-all group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold mb-8 text-xl font-black group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                  {process.step}
                </div>
                <h3 className="text-xl font-black mb-4 tracking-widest uppercase italic group-hover:text-brand-gold transition-colors">{process.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{process.desc}</p>
                <div className="text-brand-gold opacity-30 group-hover:opacity-100 transition-opacity">
                  {process.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-brand-gray rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 opacity-5">
              <Truck size={300} className="text-brand-blue" />
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-8 uppercase tracking-tighter italic leading-none">
                PAN India <br /> <span className="text-brand-gold">Delivery.</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium mb-10 leading-relaxed">
                Operating from our strategic base in Haridwar, we provide seamless logistics and delivery to brands across India.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Real-time Tracking', 'Bulk Shipping', 'Express Logistics'].map(item => (
                  <div key={item} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                    <CheckCircle2 size={16} className="text-brand-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative z-10">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-8 bg-brand-blue text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-gold hover:text-brand-blue transition-all"
                >
                  Start Your Project <ArrowRight size={20} className="inline ml-2" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
