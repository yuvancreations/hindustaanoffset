import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="pt-24 min-h-screen bg-brand-gray pb-20">
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Hindustan Offset Printers detailing how we collect, use, and protect your information."
        keywords="privacy policy, Hindustan Offset privacy, printing data protection"
        canonicalUrl="/privacy-policy"
      />
      {/* Header */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-[0.03]">
          <img src="/images/machine.png" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-black">Privacy <span className="text-brand-blue">Policy</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we handle your information with the utmost care.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto prose prose-brand">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">1. Introduction</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to Hindustan Offset Printers. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">2. Data We Collect</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">3. How We Use Your Data</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">4. Data Security</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">5. Contact Us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            If you have any questions about this privacy policy, please contact us at <strong>hindustanoffset@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
