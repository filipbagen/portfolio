import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <main className="flex flex-col items-center gap-12 p-5 mx-auto max-w-[1440px]">
      <Hero />
      <div className="flex flex-col gap-12 items-center max-w-6xl">
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}

export default App;
