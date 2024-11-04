import { About, Contact, Experience, Hero, Navbar, Skills } from "./components";
import cv from "./assets/files/cv.pdf"

function App() {
  return (
    <div className="bg-richBlack text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <div className="flex justify-center items-center">
        <a className="btn text-xs sm:text-base"
          href={cv} download="cv-panchaya.pdf">
          <i className="fa-solid fa-file-arrow-down pr-2 text-sm sm:text-xl"></i>
          Download CV
        </a>
      </div>
      <Contact />
    </div>
  );
}

export default App;
