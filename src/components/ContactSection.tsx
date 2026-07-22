import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { contact } from '../data/profile';

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-20 py-28">
      <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-amber-400/90 mb-3">Get in touch</p>
        <h2 className="text-3xl sm:text-4xl font-medium text-white mb-10">{contact.hook}</h2>

        <div className="space-y-4">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
            <Mail size={18} aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
            <Phone size={18} aria-hidden="true" />
            <span>{contact.phone}</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors">
            <Linkedin size={18} aria-hidden="true" />
            <span>linkedin.com/in/kha3gaurav</span>
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
