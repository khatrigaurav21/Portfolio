import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsHomeSection from './components/ProjectsHomeSection';
import Writing from './components/Writing';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import WritingsPage from './pages/WritingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProjectsHomeSection />
                <Writing />
              </>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/writing" element={<WritingsPage />} />
          </Routes>
        </main>
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div className="max-w-5xl mx-auto text-center text-gray-500">
            <p>© {new Date().getFullYear()} Gaurav Khatri. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;