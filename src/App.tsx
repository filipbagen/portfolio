import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <main className="flex flex-col items-center gap-24 p-5">
      <Hero />
      <AboutMe />
    </main>
  );
}

export default App;
