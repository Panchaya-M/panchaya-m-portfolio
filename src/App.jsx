import { About, Contact, Experience, Hero, Navbar, Skills } from "./components";

function App() {
  return (
    <div className="bg-richBlack text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
