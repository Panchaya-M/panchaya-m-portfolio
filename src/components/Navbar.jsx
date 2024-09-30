const Navbar = () => {
  return (
    <nav>
      <div className="container py-0">
        <div className="flex justify-between items-center">
          <div className="text-xl text-aqua font-bold py-[10px]">
            <a href="#home">My Portfolio</a>
          </div>
          <div className="flex">
            <a className="nav-item" href="#home">
              Home
            </a>
            <a className="nav-item" href="#about">
              About
            </a>
            <a className="nav-item" href="#experiences">
              Experiences
            </a>
            <a className="nav-item" href="#skills">
              Skills
            </a>
            <a className="nav-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
