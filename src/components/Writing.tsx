import { Link } from 'react-router-dom';

interface Article {
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "The Provider's Prison: When Everyone's Counting On You",
    category: "Personal Growth",
    description: "A personal reflection on the pressures of being the person everyone relies on, and the path to breaking free.",
    date: "June 23,2025",
    readTime: "5 Min Read",
    link: "https://medium.com/@khatri.gaurav_52663/the-providers-prison-when-everyone-s-counting-on-you-0f5de3565971"
  },
  {
    title: "The Golden Nugget That Turned Into Fool's Gold",
    category: "Personal Growth",
    description: "A personal reflection on the rille effects of chasing the golden nugget, and the path to breaking free",
    date: "June 20, 2025",
    readTime: "3 Min Read",
    link: "https://medium.com/@khatri.gaurav_52663/the-golden-nugget-that-turned-into-fools-gold-a212d7bf1ec0"
  }
];

/*
  Demoted from a full two-card feature section to a slim, secondary strip.
  This keeps the homepage focused on the PM/BA case studies (what recruiters
  scan for first) while still surfacing your writing for anyone who wants it.
  If you add PM/BA-relevant posts later, consider promoting this section back up.
*/
const Writing = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Writing</h2>
          <Link to="/writing" className="text-sm text-blue-600 hover:text-blue-800">
            See all &rarr;
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {articles.slice(0, 2).map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="flex-1 text-sm text-gray-600 hover:text-gray-900 underline decoration-gray-300 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
