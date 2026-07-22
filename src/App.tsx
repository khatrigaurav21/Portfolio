import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsBand from './components/SkillsBand';
import EducationSection from './components/EducationSection';
import Writing from './components/Writing';
import ContactSection from './components/ContactSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <FeaturedWork />
        <ExperienceTimeline />
        <SkillsBand />
        <EducationSection />
        <Writing />
        <ContactSection />
      </main>
      <footer className="px-6 sm:px-10 lg:px-20 py-10 border-t border-white/10 text-center">
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Gaurav Khatri. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
