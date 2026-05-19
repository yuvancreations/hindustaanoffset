import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Sparkles, ZoomIn, Grid, Image as ImageIcon, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { galleryFiles } from '../data/assetsData';

// Dynamically load gallery images based on folder structure in /public/gallery/
const loadGalleryImages = () => {
  return galleryFiles.map((filePath, index) => {
    const parts = filePath.split('/');
    const category = parts[0] || 'General';
    const filenameWithExt = parts[1] || '';
    const filename = filenameWithExt.substring(0, filenameWithExt.lastIndexOf('.')) || filenameWithExt;
    
    // Clean and professional title casing
    const title = filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    // Browser relative path from the served root folder
    const src = `/gallery/${filePath}`;

    // Formulate a premium industrial description based on category
    let desc = '';
    let finishing = 'Premium Matte & Spot UV';
    let quality = 'High-Definition Industrial';

    switch (category) {
      case 'Pharma Labels':
        desc = `Ultra-precise pharmaceutical labelling engineered with highly legible typography, sterilization-compatible substrates, and medical-grade security adhesives. Fully compliant with global healthcare regulatory guidelines.`;
        finishing = 'Aqueous Coated & Sterile';
        quality = 'FDA-Compliant Medical Grade';
        break;
      case 'Cosmetics Labels':
        desc = `Stunning boutique cosmetics and personal care labels built with moisture-resistant films, bespoke hot metallic foil accents, and rich tactile coatings that elevate shelf presence and visual prestige.`;
        finishing = 'Metallic Hot Foil & Soft Touch';
        quality = 'Luxury Retail Standard';
        break;
      case 'Labels':
        desc = `High-speed roll-fed self-adhesive commercial labels offering elite ink adhesion, robust environmental resistance, and vivid multi-color definition for FMCG and retail goods.`;
        finishing = 'Gloss Varnish & Die-Cut';
        quality = 'FMCG Corporate Standard';
        break;
      case 'Packaging':
        desc = `Exquisite luxury rigid packaging, mono cartons, and structural presentation boxes. Engineered for superior structural strength, custom box liners, and high-impact tactile branding embellishments.`;
        finishing = 'Embossed Gold Foil & Velvet Matte';
        quality = 'Luxury Structural Board';
        break;
      case 'Pouches':
        desc = `Next-generation flexible stand-up pouch packaging offering superior oxygen/moisture barrier properties, custom resealable zippers, and full-bleed high-fidelity flexographic or digital prints.`;
        finishing = 'High-Barrier Matte Laminate';
        quality = 'Premium Food-Safe Grade';
        break;
      case 'Offset Printing':
        desc = `Premium high-volume commercial offset printing for catalogs, booklets, and corporate publications. Delivered with absolute color fidelity, perfect sheet registration, and premium paper weights.`;
        finishing = 'Double-Sided Satin Coated';
        quality = 'Corporate Premium Print';
        break;
      case 'Brochure Printing':
        desc = `Elite corporate brochure and marketing collaterals meticulously bound and finished. Includes dynamic fold patterns, spot UV highlights, and thick, luxurious cover boards.`;
        finishing = 'Soft-Touch Matte & Spot UV';
        quality = 'Elite Executive Grade';
        break;
      default:
        desc = `Precision commercial print execution showcasing exceptional detail resolution, vibrant color ranges, and elite material finishing.`;
        finishing = 'Custom Coated & Varnished';
        quality = 'High-Definition Commercial';
    }

    return {
      id: index + 1,
      src,
      category,
      title,
      desc,
      finishing,
      quality
    };
  });
};

const galleryImages = loadGalleryImages();

const Gallery = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamically compile categories based on active folder directory names
  const categories = useMemo(() => {
    const uniqCats = [...new Set(galleryImages.map(img => img.category))].sort();
    return ['All', ...uniqCats];
  }, []);

  // Filter gallery items based on the active tab
  const filteredImages = useMemo(() => {
    return activeTab === 'All' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeTab);
  }, [activeTab]);

  // Compute number of items inside any given category tab
  const getCategoryCount = (cat) => {
    if (cat === 'All') return galleryImages.length;
    return galleryImages.filter(img => img.category === cat).length;
  };

  // Lightbox navigation handlers
  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  // Keyboard navigation & escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

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
          <img 
            src="/images/M/HP Indigo 6K.avif" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40" 
            onError={(e) => { e.target.src = '/images/hero.png' }}
          />
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
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-2xl border-y border-gray-100 py-8 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group flex items-center gap-2 ${
                    activeTab === cat 
                      ? 'bg-brand-blue text-white shadow-glow-blue scale-105' 
                      : 'bg-brand-gray text-gray-400 hover:text-brand-blue hover:bg-white border border-transparent hover:border-gray-100'
                  }`}
                >
                  {cat}
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${
                    activeTab === cat ? 'bg-brand-gold text-brand-blue' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {getCategoryCount(cat)}
                  </span>
                  {activeTab === cat && (
                    <motion.div layoutId="tab-underline" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2 bg-brand-gray px-5 py-2.5 rounded-full border border-gray-100">
                <Grid size={14} className="text-brand-gold" />
                {filteredImages.length} Showcase Items
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-[3rem] border border-gray-100 p-10">
              <ImageIcon size={48} className="mx-auto text-brand-gold mb-6 opacity-60" />
              <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight mb-2">No Images Found</h3>
              <p className="text-sm font-medium">Add high-quality image files to public/gallery/{activeTab}/ to automatically showcase them here.</p>
            </div>
          ) : (
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
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-gray-100 group transition-all duration-500 hover:shadow-2xl">
                      {/* Natural Aspect Ratio Image Wrapper */}
                      <div className="w-full bg-brand-gray relative flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className="w-full h-auto max-h-[600px] object-contain transition-transform duration-1000 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => { e.target.src = '/images/hero.png' }}
                        />
                      </div>
                      
                      {/* Premium Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-[1px] bg-brand-gold"></div>
                            <span className="text-brand-gold text-[9px] font-black uppercase tracking-[0.3em]">{item.category}</span>
                          </div>
                          <h3 className="text-xl font-black text-white tracking-tight uppercase italic">{item.title}</h3>
                          <p className="text-white/75 text-xs font-light leading-relaxed line-clamp-2">{item.desc}</p>
                          <div className="pt-3 flex items-center justify-between">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                              <ZoomIn size={16} />
                            </div>
                            <span className="text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                              Examine Material <ArrowRight size={12} />
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox / Portfolio Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button 
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white/55 hover:text-white transition-all z-[110] bg-white/5 p-3 rounded-full backdrop-blur-xl border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </motion.button>
            
            {/* Lightbox Layout */}
            <div className="relative max-w-6xl w-full flex items-center justify-between" onClick={e => e.stopPropagation()}>
              
              {/* Left Arrow Button (Desktop) */}
              <button 
                onClick={handlePrevImage}
                className="hidden md:flex absolute -left-16 lg:-left-24 text-white/40 hover:text-white transition-all w-14 h-14 bg-white/5 rounded-full items-center justify-center border border-white/10 backdrop-blur-md hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-blue/30 p-6 md:p-10 rounded-[3.5rem] border border-white/5 backdrop-blur-md"
              >
                {/* Image Container */}
                <div className="lg:col-span-7 rounded-[2.5rem] overflow-hidden bg-brand-black/40 shadow-glow-gold relative group flex items-center justify-center border border-white/5 h-[40vh] lg:h-[65vh]">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-contain max-h-[35vh] lg:max-h-[60vh] p-2 md:p-6" 
                  />
                  <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none"></div>
                </div>
                
                {/* Image Specifications & Details */}
                <div className="lg:col-span-5 space-y-6 text-white text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-brand-gold">
                      <ImageIcon size={18} />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em]">{selectedImage.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">{selectedImage.title}</h3>
                    <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                    {selectedImage.desc}
                  </p>

                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Quality Standard</div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">{selectedImage.quality}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Elite Finishing</div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">{selectedImage.finishing}</div>
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => navigate('/contact', { state: { service: selectedImage.category } })}
                      className="flex-1 py-4 bg-brand-gold text-brand-blue rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-blue transition-all shadow-glow-gold text-center cursor-pointer"
                    >
                      Inquire For This Service
                    </button>
                    {/* Mobile Navigation controls */}
                    <div className="flex justify-between md:hidden gap-3 mt-2">
                      <button 
                        onClick={handlePrevImage} 
                        className="flex-1 py-4 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={handleNextImage} 
                        className="flex-1 py-4 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Arrow Button (Desktop) */}
              <button 
                onClick={handleNextImage}
                className="hidden md:flex absolute -right-16 lg:-right-24 text-white/40 hover:text-white transition-all w-14 h-14 bg-white/5 rounded-full items-center justify-center border border-white/10 backdrop-blur-md hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold"
              >
                <ChevronRight size={32} />
              </button>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
