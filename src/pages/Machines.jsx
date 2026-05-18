import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Cpu, Activity, LayoutGrid, List, ArrowRight, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { machines, machineCategories } from '../data/machinesData';
import SEO from '../components/SEO';

const Machines = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedMachine, setSelectedMachine] = useState(null);

  const filteredMachines = activeCategory === 'all' 
    ? machines 
    : machines.filter(m => m.category === activeCategory);

  return (
    <div className="bg-brand-gray min-h-screen">
      <SEO 
        title="Our Machines"
        description="Explore the world-class printing infrastructure at The Hindustan Offset Printers. High-speed offset, digital, and flexo machinery."
        keywords="printing machines, HP Indigo 6K, Komori Lithrone, Flexo Press, Industrial Printing Infrastructure"
        canonicalUrl="/our-machines"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/machine/HP Indigo 6K.avif" alt="Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
              <Settings size={14} className="animate-spin-slow" />
              Industrial Powerhouse
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase italic">
              Production <span className="text-brand-gold">Precision.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              High-performance industrial machinery delivering uncompromised print quality across advanced Digital and Flexo technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Controls */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === 'all' ? 'bg-brand-blue text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                All Machinery
              </button>
              {machineCategories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat.id ? 'bg-brand-blue text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 bg-gray-100 p-1.5 rounded-full">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-white text-brand-blue shadow-sm' : 'text-gray-400'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-white text-brand-blue shadow-sm' : 'text-gray-400'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Display */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" 
                : "space-y-10"
              }
            >
              {filteredMachines.map((machine, idx) => (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`group bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Image Part */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'lg:w-2/5 h-[300px] lg:h-auto' : 'h-[350px]'}`}>
                    <img 
                      src={machine.image} 
                      alt={machine.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.target.src = '/images/hero.png' }}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-brand-black/80 backdrop-blur-md text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                        {machineCategories.find(c => c.id === machine.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content Part */}
                  <div className={`p-10 ${viewMode === 'list' ? 'lg:w-3/5' : ''} flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-brand-blue tracking-tight group-hover:text-brand-gold transition-colors">{machine.name}</h3>
                        <div className="w-10 h-10 bg-brand-gray rounded-xl flex items-center justify-center text-brand-blue opacity-50 group-hover:opacity-100 transition-all flex-shrink-0 ml-4">
                          <Zap size={20} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Power</div>
                          <div className="text-xs font-bold text-brand-blue">{machine.power}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quality</div>
                          <div className="text-xs font-bold text-brand-blue">{machine.quality}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-brand-gold">
                        <Shield size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Industrial Grade</span>
                      </div>
                      <button 
                        onClick={() => setSelectedMachine(machine)}
                        className="text-brand-blue hover:text-brand-gold flex items-center gap-2 text-xs font-black uppercase tracking-widest group/btn"
                      >
                        Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Detail Modal Pop-up */}
      <AnimatePresence>
        {selectedMachine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMachine(null)}
              className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[3rem] border border-gray-100 max-w-4xl w-full overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMachine(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-brand-gray text-brand-blue hover:bg-brand-gold hover:text-brand-blue rounded-full flex items-center justify-center transition-all z-20"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden bg-brand-gray flex items-center justify-center">
                <img
                  src={selectedMachine.image}
                  alt={selectedMachine.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/hero.png' }}
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-brand-black/80 backdrop-blur-md text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                    {machineCategories.find(c => c.id === selectedMachine.category)?.name}
                  </span>
                </div>
              </div>

              {/* Specs Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-black text-brand-gold bg-brand-blue px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
                      Industrial Equipment
                    </span>
                    <h3 className="text-3xl font-black text-brand-blue tracking-tight leading-none">
                      {selectedMachine.name}
                    </h3>
                  </div>

                  <div className="border-t border-gray-100 pt-6 space-y-6">
                    <div className="space-y-2">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Zap size={14} className="text-brand-gold" />
                        Power (Production Speed)
                      </div>
                      <div className="text-xs font-bold text-brand-blue bg-brand-gray p-4 rounded-2xl border border-gray-50">
                        {selectedMachine.power}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Cpu size={14} className="text-brand-gold" />
                        Print Quality & Precision
                      </div>
                      <div className="text-xs font-bold text-brand-blue bg-brand-gray p-4 rounded-2xl border border-gray-50">
                        {selectedMachine.quality}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to={`/contact?machine=${encodeURIComponent(selectedMachine.name)}`}
                    onClick={() => setSelectedMachine(null)}
                    className="w-full text-center px-8 py-5 bg-brand-gold text-brand-blue hover:bg-brand-blue hover:text-white font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all shadow-glow-gold flex items-center justify-center gap-3"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Machines;
