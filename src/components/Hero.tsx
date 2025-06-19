const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=man"
            alt="Profile"
            className="mx-auto mb-4 w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
            Gaurav Khatri
            <span className="wave inline-block" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <style>{`
            .wave {
              animation: wave-animation 2s infinite;
              transform-origin: 70% 70%;
              display: inline-block;
            }
            @keyframes wave-animation {
              0% { transform: rotate(0deg); }
              10% { transform: rotate(14deg); }
              20% { transform: rotate(-8deg); }
              30% { transform: rotate(14deg); }
              40% { transform: rotate(-4deg); }
              50% { transform: rotate(10deg); }
              60% { transform: rotate(0deg); }
              100% { transform: rotate(0deg); }
            }
          `}</style>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm Gaurav Khatri — a problem-solver at heart with over 15 years of experience leading cross-functional teams and projects across banking, fintech, and customer service.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            From driving client onboarding automation at RBS to implementing real-time analytics dashboards at Illion and leading digital service transformation at Betfair, I've consistently helped businesses solve complex problems, reduce costs, and improve customer outcomes.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            My work spans project management, stakeholder engagement, risk and compliance, and process automation — across fast-paced, regulated environments. I'm now focused on roles in Project Management and Business Analysis, where I can use my leadership, analytical mindset, and delivery experience to make a meaningful impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/kha3gaurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Connect with me on LinkedIn
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 