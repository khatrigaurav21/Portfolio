import React from 'react';

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
        date: "June 23, 2025",
        readTime: "5 Min Read",
        link: "https://medium.com/@khatri.gaurav_52663/the-providers-prison-when-everyone-s-counting-on-you-0f5de3565971"
      },
      {
        title: "The Golden Nugget That Turned Into Fool's Gold",
        category: "Personal Growth",
        description: "Placeholder description.",
        date: "June 20, 2025",
        readTime: "3 Min Read",
        link: "https://medium.com/@khatri.gaurav_52663/the-golden-nugget-that-turned-into-fools-gold-a212d7bf1ec0"
      }
];

const WritingsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">All Writings</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 block"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="font-semibold text-indigo-600">{article.category}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WritingsPage; 