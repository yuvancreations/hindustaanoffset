import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Maximize, Zap, CheckCircle2 } from 'lucide-react';

const machines = [
  {
    name: 'Heidelberg Speedmaster',
    type: '4-Color Offset Press',
    image: '/images/machine.png',
    desc: 'The pinnacle of offset printing technology, offering unmatched speed and color consistency for large volume runs.',
    features: ['Up to 15,000 sheets per hour', 'Automated color control', 'Perfect registration', 'Eco-friendly operation']
  },
  {
    name: 'Konica Minolta AccurioPress',
    type: 'Digital Production Press',
    image: '/images/hero.png',
    desc: 'State-of-the-art digital press for on-demand, high-quality short runs and variable data printing.',
    features: ['High-resolution output (3600 x 1200 dpi)', 'Extensive media support', 'Inline finishing options', 'Quick turnaround time']
  },
  {
    name: 'Polar High-Speed Cutter',
    type: 'Finishing Equipment',
    image: '/images/machine.png',
    desc: 'Precision cutting machine ensuring millimeter-perfect finishing for all printed materials.',
    features: ['Programmable cutting sequences', 'Optical cutting line indicator', 'High-speed operation', 'Maximum safety standards']
  }
];

const Machines = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="pt-24 min-h-screen bg-brand-gray pb-20">
      {/* Header */}
      <section className="py-24 text-center bg-brand-black text-white relative overflow-hidden">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-20">
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-brand-gold">Infrastructure</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powered by world-class technology to deliver perfection in every print.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-black mb-4">Advanced Machinery for <span className="text-brand-blue">Superior Results</span></h2>
              <p className="text-gray-600 leading-relaxed">
                At Hindustan Offset, we believe that the quality of print is directly proportional to the quality of machines used. We have heavily invested in importing the best printing and finishing equipment from globally renowned manufacturers.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-blue rounded-full flex items-center justify-center text-brand-gold mb-3">
                  <Settings size={28} />
                </div>
                <h4 className="font-bold">Latest Tech</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-blue rounded-full flex items-center justify-center text-brand-gold mb-3">
                  <Maximize size={28} />
                </div>
                <h4 className="font-bold">High Capacity</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-blue rounded-full flex items-center justify-center text-brand-gold mb-3">
                  <Zap size={28} />
                </div>
                <h4 className="font-bold">Fast Speed</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machines List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {machines.map((machine, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={machine.image} alt={machine.name} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue font-bold px-4 py-1 rounded-full text-sm">
                      {machine.type}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-3xl font-bold text-brand-black mb-2">{machine.name}</h3>
                  <div className="w-16 h-1 bg-brand-blue mb-6"></div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {machine.desc}
                  </p>
                  <h4 className="text-xl font-bold mb-4 text-brand-black">Key Capabilities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {machine.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Machines;
