const Hero = () => {
  return (
    <section id="home" className="bg-hero">
      <div className="container flex-column justify-center">
        <p>Hello, I'm</p>
        <h1>Panchaya M.</h1>
        <h2 className="text-white">Frontend Developer</h2>
        <a className="btn text-xs sm:text-base" href="#contact">
          <i className="fa-solid fa-paper-plane pr-2 sm:pr-3"></i>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
