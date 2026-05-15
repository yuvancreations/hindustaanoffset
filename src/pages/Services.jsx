import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Image as ImageIcon, BookOpen, CreditCard, ShoppingBag, Stamp, Tag, FlaskConical, Droplets, Pill, Wine, Package2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const servicesData = [
  { icon: <Layers size={40} />, title: 'Offset Printing', desc: 'High-volume printing with unmatched color fidelity and crispness for magazines, books, and large runs.' },
  { icon: <ImageIcon size={40} />, title: 'Digital Printing', desc: 'Fast turnaround, high-quality printing for short runs, personalized items, and immediate requirements.' },
  { icon: <BookOpen size={40} />, title: 'Brochure & Catalogue', desc: 'Premium multi-page brochures and catalogues that showcase your products with elegance.' },
  { icon: <CreditCard size={40} />, title: 'Visiting Cards', desc: 'Luxury business cards with premium finishes like gold foil, embossing, and spot UV.' },
  { icon: <ShoppingBag size={40} />, title: 'Packaging Printing', desc: 'Custom boxes, cartons, and packaging solutions that enhance your product\'s retail appeal.' },
  { icon: <Tag size={40} />, title: 'Labels & Stickers', desc: 'High-quality adhesive labels and stickers in various shapes, sizes, and finishes.' },
  { icon: <Stamp size={40} />, title: 'Corporate Branding', desc: 'Complete corporate stationery including letterheads, envelopes, bill books, and folders.' },
  { icon: <Package2 size={40} />, title: 'Pouches Printing', desc: 'High-quality custom pouch printing for food, pharma, and consumer goods with premium finishes.' },
  { icon: <FlaskConical size={40} />, title: 'Protein Powder Labels', desc: 'Durable, vibrant supplement labels for protein powders, pre-workouts, and health products.' },
  { icon: <Droplets size={40} />, title: 'Cosmetics Labels', desc: 'Premium cosmetic packaging labels that elevate your beauty brand with luxury print quality.' },
  { icon: <Pill size={40} />, title: 'Pharma Labels', desc: 'Compliant pharmaceutical labels with precise detail, barcodes, and regulatory-grade printing.' },
  { icon: <Wine size={40} />, title: 'Liquor Labels', desc: 'Premium liquor bottle labels combining rich color reproduction with premium foil and UV effects.' },
];

const Services = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="pt-24 min-h-screen bg-brand-gray">
      <SEO 
        title="Our Services"
        description="Comprehensive printing solutions including offset printing, digital printing, packaging solutions, brochures, and more by Hindustan Offset Printers."
        keywords="printing services, offset printing services, digital printing services, packaging solutions, corporate stationery, Haridwar printers"
        canonicalUrl="/services"
      />
      {/* Header */}
      <section className="py-32 bg-brand-black text-white text-center relative overflow-hidden">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-10">
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-brand-gold">Services</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive printing solutions tailored to elevate your brand's presence in the market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gray rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  
                  <Link to="/contact" className="inline-block">
                    <span className="text-brand-blue font-bold text-sm border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors">
                      Inquire Now
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Working <span className="text-brand-gold">Process</span></h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-gold/20 -translate-y-1/2 z-0"></div>

            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your specific requirements and finalizing the specs.' },
              { step: '02', title: 'Pre-Press', desc: 'Design verification, proofing, and preparing for the print run.' },
              { step: '03', title: 'Printing', desc: 'Executing the print job on our advanced high-speed machines.' },
              { step: '04', title: 'Finishing & Delivery', desc: 'Cutting, binding, quality check, and on-time delivery.' }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 mx-auto bg-brand-black border-4 border-brand-gold rounded-full flex items-center justify-center text-2xl font-bold text-brand-gold mb-6 shadow-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm px-4">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
