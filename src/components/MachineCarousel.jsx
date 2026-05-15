import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, ArrowUpRight } from 'lucide-react';
import { machines } from '../data/machinesData';
import { Link } from 'react-router-dom';

const MachineCarousel = () => {
  // Featured machines for carousel
  const featuredMachines = machines.filter(m => [1, 2, 7, 3, 6, 8].includes(m.id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredMachines.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredMachines.length) % featuredMachines.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const activeMachine = featuredMachines[currentIndex];

  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Zap size={14} />
              Production Power
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              Our <span className="text-brand-gold">Infrastructure.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all duration-500"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all duration-500"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Machine Image */}
              <div className="w-full lg:w-3/5 h-[350px] lg:h-[550px] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl relative group">
                <img 
                  src={activeMachine.image} 
                  alt={activeMachine.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => { e.target.src = '/images/hero.png' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Machine Details */}
              <div className="w-full lg:w-2/5 space-y-10">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none group">
                    {activeMachine.name}
                  </h3>
                  <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    {activeMachine.shortDesc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Strength</div>
                    <div className="text-white text-sm font-bold">{activeMachine.strength}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Category</div>
                    <div className="text-white text-sm font-bold uppercase tracking-wider">
                      {activeMachine.category}
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex flex-wrap gap-4">
                  <Link 
                    to="/our-machines"
                    className="px-10 py-5 bg-brand-gold text-brand-blue text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-glow-gold flex items-center gap-3"
                  >
                    View All Machinery <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {featuredMachines.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-16 bg-brand-gold' : 'w-4 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineCarousel;
