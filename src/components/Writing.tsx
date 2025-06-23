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
    date: "October 26, 2023",
    readTime: "5 Min Read",
    link: "https://medium.com/@khatri.gaurav_52663/the-providers-prison-when-everyone-s-counting-on-you-0f5de3565971"
  },
  {
    title: "The Golden Nugget That Turned Into Fool's Gold",
    category: "Product Management",
    description: "Placeholder description.",
    date: "Date",
    readTime: "Time",
    link: "#"
  }
];

const Writing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Writing</h2>
          <Link to="/writing" className="text-blue-600 hover:text-blue-800">
            See all &rarr;
          </Link>
        </div>
        <div className="space-y-8">
          {articles.slice(0, 2).map((article, index) => (
            <article key={index} className="border-b border-gray-200 pb-8 last:border-0">
              <a href={article.link} className="block hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium text-gray-900">{article.category}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing; 