import { About, Experience, Hero, Navbar, Skills } from "./components";

function App() {
  return (
    <div className="bg-richBlack text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
