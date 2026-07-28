import { motion } from 'framer-motion';
import { Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import { contact } from '../data/profile';
import Magnetic from './Magnetic';

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-20 py-28 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-amber-400/90 mb-6">{contact.hook}</p>

          <Magnetic strength={0.25}>
            <a
              href={`mailto:${contact.email}`}
              data-cursor="say hi"
              className="inline-block text-4xl sm:text-6xl lg:text-7xl font-medium text-white hover:text-amber-400 transition-colors leading-tight break-all"
            >
              Let&rsquo;s fix something.
            </a>
          </Magnetic>

          <p className="mt-6 text-gray-400">
            <a href={`mailto:${contact.email}`} className="hover:text-amber-400 transition-colors">
              {contact.email}
            </a>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              <span>{contact.phone}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Linkedin size={16} aria-hidden="true" />
              <span>linkedin.com/in/kha3gaurav</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
