import { motion } from 'framer-motion';
import { clientFiles } from '../data/assetsData';

// Dynamically load all client logo names from public/images/clients/ directory
const loadClients = () => {
  return clientFiles.map(filename => {
    const clientName = filename.substring(0, filename.lastIndexOf('.'));
    return clientName;
  });
};

const clients = loadClients().sort((a, b) => a.localeCompare(b));

const TrustedPartners = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-50">
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Trusted Partners</h2>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
      </div>

      <div className="relative logo-fade-left">
        <div className="flex gap-8 marquee-left w-max py-12">
          {[...clients, ...clients].map((client, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -10,
                rotateX: 10,
                rotateY: 10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              style={{ perspective: 1000 }}
              className="flex-shrink-0 w-48 h-32 bg-white rounded-3xl flex flex-col items-center justify-center p-6 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:border-brand-gold/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-12 flex items-center justify-center mb-3">
                <img
                  src={`/images/clients/${encodeURIComponent(client)}.png`}
                  alt={`${client} logo`}
                  className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <span className="hidden text-[8px] font-black text-brand-blue/20 uppercase tracking-tighter">Logo</span>
              </div>
              
              <div className="w-full transition-all duration-300 transform group-hover:translate-z-10">
                <span className="text-[10px] font-black text-brand-blue/40 group-hover:text-brand-blue uppercase tracking-widest text-center block leading-tight transition-colors">
                  {client}
                </span>
                <div className="w-0 group-hover:w-6 h-0.5 bg-brand-gold mx-auto mt-1 rounded-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
