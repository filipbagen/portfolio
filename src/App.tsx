import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  return (
    <main className="flex flex-col items-center gap-24 p-5 mx-auto max-w-[1440px]">
      <Hero />
      <div className="flex flex-col gap-24 items-center max-w-6xl">
        <AboutMe />
        <Experience />
      </div>
    </main>
  );
}

export default App;
