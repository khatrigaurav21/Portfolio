const ResumePage = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
        <p className="text-lg text-gray-700 mb-6">Download my latest resume below.</p>
        <div className="space-x-4">
          <a
            href="/Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kha3gaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg shadow hover:bg-[#006399] transition-colors duration-200"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumePage; 