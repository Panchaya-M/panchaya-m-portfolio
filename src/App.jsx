import { About, Experience, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="bg-richBlack text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
