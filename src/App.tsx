// App.tsx
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col gap-12 items-center max-w-7xl">
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
