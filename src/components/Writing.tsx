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
    title: "What can we learn from that time Homer Simpson designed a car?",
    category: "Product Management",
    description: "What can Homer Simpson teach us? Usually not much – but there's actually quite a bit we can learn from that one time he designed a car.",
    date: "July 30, 2020",
    readTime: "11 Min Read",
    link: "/writing/homer-simpson-car"
  },
  {
    title: "Want to improve your interviews? Try a NERF gun.",
    category: "Management",
    description: "Interviews are stressful no matter if you're the candidate or interviewer. This is how we used a NERF gun to relieve that stress and conduct better interviews.",
    date: "September 13, 2017",
    readTime: "11 Min Read",
    link: "/writing/nerf-gun-interviews"
  },
  {
    title: "Lessons in hiring: How Ryan Gosling helped in Hulu's battle with culture vampires.",
    category: "Management",
    description: "Culture vampires plague many teams from within, creating unpleasant working conditions for their peers. This is a story about how 'Ryan Gosling' helped us defeat them at Hulu.",
    date: "August 4, 2016",
    readTime: "10 Min Read",
    link: "/writing/culture-vampires"
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