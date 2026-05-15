import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Sparkles, ZoomIn, Grid, Image as ImageIcon, Camera, Layout, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const galleryImages = [
  { id: 1, src: '/images/prints.png', category: 'Packaging', title: 'Luxury Mono Cartons', desc: 'High-end structural packaging with gold foil finish.' },
  { id: 2, src: '/images/hero.png', category: 'Commercial', title: 'Corporate Catalogs', desc: 'Premium multi-page catalogs with soft-touch lamination.' },
  { id: 3, src: '/images/machine/HP Indigo 6K.avif', category: 'Labels', title: 'Cosmetic Labels', desc: 'Precision-cut labels with metallic inks.' },
  { id: 4, src: '/images/machine/HP Indigo 6K.avif', category: 'Digital', title: 'Variable Data Printing', desc: 'Personalized high-resolution marketing material.' },
  { id: 5, src: '/images/prints.png', category: 'Packaging', title: 'Pharma Packaging', desc: 'Strict compliance-based medical carton production.' },
  { id: 6, src: '/images/hero.png', category: 'Commercial', title: 'Brand Stationary', desc: 'Elegant letterheads and embossed business cards.' },
  { id: 7, src: '/images/machine/HP Indigo 6K.avif', category: 'Labels', title: 'Beverage Labels', desc: 'Water-resistant labels for the luxury beverage industry.' },
  { id: 8, src: '/images/prints.png', category: 'Industrial', title: 'Instruction Manuals', desc: 'High-speed monochrome technical documentation.' },
];

const Gallery = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Packaging', 'Labels', 'Commercial', 'Digital', 'Industrial'];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="bg-brand-gray min-h-screen overflow-hidden">
      <SEO 
        title="Gallery & Portfolio | The Hindustan Offset Printers"
        description="Explore our elite printing portfolio. From luxury packaging to industrial labels, see the precision of Hindustan Offset Printers."
        keywords="printing gallery, portfolio, industrial labels, luxury packaging examples, offset printing showcase"
        canonicalUrl="/gallery"
      />

      {/* Ultra-Premium Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-brand-black overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img src="/images/machine/HP Indigo 6K.avif" alt="Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-gray"></div>
        </motion.div>

        {/* Animated Background Orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">
              <Sparkles size={16} className="animate-pulse" />
              Excellence Visualized
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
              Master <span className="text-brand-gold drop-shadow-2xl">Works.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Witness the intersection of heritage craftsmanship and future-ready technology. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation & Controls */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-2xl border-y border-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative group ${
                    activeTab === cat 
                      ? 'bg-brand-blue text-white shadow-glow-blue scale-105' 
                      : 'bg-brand-gray text-gray-400 hover:text-brand-blue hover:bg-white border border-transparent hover:border-gray-100'
                  }`}
                >
                  {cat}
                  {activeTab === cat && (
                    <motion.div layoutId="tab-underline" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <Grid size={16} className="text-brand-gold" />
                {filteredImages.length} Artifacts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="break-inside-avoid relative group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-gray-100 group">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => { e.target.src = '/images/hero.png' }}
                    />
                    
                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-[1px] bg-brand-gold"></div>
                          <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">{item.category}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">{item.title}</h3>
                        <p className="text-white/60 text-xs font-medium leading-relaxed line-clamp-2">{item.desc}</p>
                        <div className="pt-4 flex items-center justify-between">
                          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                            <ZoomIn size={20} />
                          </div>
                          <span className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                            View Project <ArrowRight size={14} />
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox / Portfolio Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              whileHover={{ rotate: 90 }}
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-all z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} strokeWidth={1} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="lg:col-span-8 rounded-[3rem] overflow-hidden shadow-glow-gold relative group">
                <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto object-contain max-h-[75vh]" />
                <div className="absolute inset-0 bg-brand-blue/5"></div>
              </div>
              
              <div className="lg:col-span-4 space-y-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <ImageIcon size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">{selectedImage.category}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">{selectedImage.title}</h3>
                  <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
                </div>
                
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {selectedImage.desc}
                </p>

                <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Quality</div>
                    <div className="text-sm font-bold text-white">Industrial Grade</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Finishing</div>
                    <div className="text-sm font-bold text-white">Premium Matte</div>
                  </div>
                </div>

                <div className="pt-10">
                  <button className="w-full py-5 bg-brand-gold text-brand-blue rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-glow-gold">
                    Inquire For This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
