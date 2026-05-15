import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
    e.target.reset();
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-gray pb-20">
      <SEO
        title="Contact Us"
        description="Get in touch with Hindustan Offset Printers for custom quotes, inquiries, or to discuss your next big printing project."
        keywords="contact Hindustan Offset, printing quote, printing inquiries, Haridwar printers contact"
        canonicalUrl="/contact"
      />
      {/* Header */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-[0.03]">
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-black">Contact <span className="text-brand-blue">Us</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch for custom quotes, inquiries, or to discuss your next big project.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-2xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold rounded-bl-full -mr-20 -mt-20 opacity-20"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Santosh Vihar, Arya Nagar, Jwalapur, Uttarakhand 249407</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-gray-300 text-sm">7060332238</p>
                    <p className="text-gray-300 text-sm">8171114207</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-gray-300 text-sm">hindustanoffset@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-black mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you with a quote as soon as possible.</p>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-3 border border-green-200"
                >
                  <CheckCircle size={20} />
                  <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="[EMAIL_ADDRESS]" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                    <option>Select a Service</option>
                    <option>Offset Printing</option>
                    <option>Digital Printing</option>
                    <option>Packaging Solutions</option>
                    <option>Corporate Stationery</option>
                    <option>Pouches Printing</option>
                    <option>Protein Powder Labels</option>
                    <option>Cosmetics Labels</option>
                    <option>Pharma Labels</option>
                    <option>Liquor Labels</option>
                    <option>Brochure & Catalogue</option>
                    <option>Visiting Cards</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message / Requirement Details *</label>
                  <textarea required rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none" placeholder="Please describe your printing needs in detail..."></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:bg-brand-black transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-brand-black px-2">Find us on Map</h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gray-200">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13783.336495689718!2d78.1189498083889!3d29.93923058966952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909477e6f8efb9f%3A0x6b4fb4c1b9f7a77d!2sJwalapur%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
