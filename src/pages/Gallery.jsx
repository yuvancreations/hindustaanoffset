import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';

const categories = ['All', 'Offset Prints', 'Packaging', 'Corporate', 'Labels'];

const galleryImages = [
  { id: 1, src: '/images/prints.png', category: 'Offset Prints', title: 'Premium Magazines' },
  { id: 2, src: '/images/hero.png', category: 'Corporate', title: 'Corporate Brochure' },
  { id: 3, src: '/images/prints.png', category: 'Labels', title: 'Cosmetics Labels' },
  { id: 4, src: '/images/machine.png', category: 'Packaging', title: 'Custom Product Box' },
  { id: 5, src: '/images/prints.png', category: 'Offset Prints', title: 'Art Catalogue' },
  { id: 6, src: '/images/hero.png', category: 'Corporate', title: 'Business Stationery Set' },
];

const Gallery = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-brand-gray pb-20">
      <SEO 
        title="Gallery & Portfolio"
        description="View our portfolio of offset prints, premium packaging, labels, and corporate branding produced by Hindustan Offset Printers."
        keywords="printing portfolio, offset prints gallery, packaging examples, corporate branding portfolio"
        canonicalUrl="/gallery"
      />
      {/* Header */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-[0.03]">
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-black">Our <span className="text-brand-blue">Gallery</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our finest printing works. Quality you can see and feel.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === category 
                ? 'bg-brand-blue text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-brand-gray border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Simulation */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer h-72"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.title}</h3>
                  <p className="text-brand-gold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-brand-gold">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
