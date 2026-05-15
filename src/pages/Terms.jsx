import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="pt-24 min-h-screen bg-brand-gray pb-20">
      <SEO 
        title="Terms & Conditions"
        description="Terms and Conditions for using Hindustan Offset Printers services and website."
        keywords="terms and conditions, Hindustan Offset terms, printing terms of service"
        canonicalUrl="/terms"
      />
      {/* Header */}
      <section className="py-24 text-center relative overflow-hidden bg-white">
        <motion.div style={{ y: headerY }} className="absolute inset-0 opacity-[0.03]">
          <img src="/images/machine/HP Indigo 6K.avif" alt="Background" className="w-full h-[150%] object-cover" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-black">Terms & <span className="text-brand-blue">Conditions</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The rules and guidelines for using our services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto prose prose-brand">
          <h2 className="text-2xl font-bold mb-4 text-brand-blue">1. Agreement to Terms</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            By accessing our website and using our printing services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">2. Printing Services</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We strive to provide the highest quality printing services. However, due to the nature of the printing process, exact color matching and perfect registration are not always guaranteed. We will work with you to ensure you are satisfied with the final product within industry standards.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Proofs must be approved before printing commences.</li>
            <li>We are not responsible for errors in approved proofs.</li>
            <li>Turnaround times are estimates and not guarantees.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">3. Payment Terms</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Payment must be made according to the terms agreed upon in your invoice or quote. Typically, a deposit is required before work begins, with the balance due upon completion or delivery.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use all content provided to us for printing. You agree to indemnify us against any claims of infringement arising from the printing of your materials.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In no event shall Hindustan Offset Printers, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-brand-blue mt-8">6. Changes</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
