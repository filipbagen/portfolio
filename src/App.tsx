import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Archive from './components/Archive';

const MainPage = () => (
  <div className="flex flex-col md:gap-16 gap-4">
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="items-center md:px-5 pt-5 mx-auto max-w-7xl">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
