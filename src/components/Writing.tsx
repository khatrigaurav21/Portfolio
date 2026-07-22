import { motion } from 'framer-motion';

interface Article {
  title: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "The Provider's Prison: When Everyone's Counting On You",
    link: 'https://medium.com/@khatri.gaurav_52663/the-providers-prison-when-everyone-s-counting-on-you-0f5de3565971'
  },
  {
    title: "The Golden Nugget That Turned Into Fool's Gold",
    link: 'https://medium.com/@khatri.gaurav_52663/the-golden-nugget-that-turned-into-fools-gold-a212d7bf1ec0'
  }
];

const Writing = () => {
  return (
    <section id="writing" className="px-6 sm:px-10 lg:px-20 py-14 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 shrink-0">Off-hours writing</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          {articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-amber-400 underline decoration-white/20 underline-offset-4 transition-colors"
            >
              {article.title}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Writing;
