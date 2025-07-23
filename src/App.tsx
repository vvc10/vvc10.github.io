import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';
import CtaSection from './components/sections/ctasection';
import Testinomials from './components/sections/testinomials';
// import ProjectDetails from './components/sections/ProjectDetails'; // Create this component
import ProjectsPage from './pages/mywork';
import ProjectCaseStudy from './pages/projectdetails';
// import NotFound from './components/sections/NotFound'; // Create this component


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative overflow-hidden">
        <div>
          <div className="fixed inset-0 bg-background z-[-1]" />
          <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-5 z-[-1]" />

          <Header />
          <main className='bg-zinc-950'>
            <Routes>
              {/* Home route with all sections */}
              <Route path="/" element={
                <>
                  <Hero />
                  {/* <Services /> */}
                  <Projects />
                  <Testinomials />
                  <Contact />
                  <CtaSection />
                </>
              } />

              {/* Projects routes */}
              <Route path="/mywork" element={<ProjectsPage />} />
              <Route path="/mywork/:myworkId" element={<ProjectCaseStudy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;