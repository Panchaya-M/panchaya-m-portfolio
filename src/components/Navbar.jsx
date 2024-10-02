/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Menus = ({ onclick }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <a className="nav-item" href="#home" onClick={onclick}>
        Home
      </a>
      <a className="nav-item" href="#about" onClick={onclick}>
        About
      </a>
      <a className="nav-item" href="#experiences" onClick={onclick}>
        Experiences
      </a>
      <a className="nav-item" href="#skills" onClick={onclick}>
        Skills
      </a>
      <a className="nav-item" href="#contact" onClick={onclick}>
        Contact
      </a>
    </div>
  );
};

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      // If the menu is open and click is outside of both the menu and button
      if (
        openMenus &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpenMenus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenus]);

  return (
    <nav>
      <div className="container py-0">
        <div className="flex justify-between items-center">
          <div className="text-xl text-aqua font-bold py-[10px]">
            <a href="#home">My Portfolio</a>
          </div>

          <div className="hidden sm:block">
            <Menus />
          </div>

          {/* mobile */}
          <div className="sm:hidden">
            <button ref={buttonRef} onClick={() => setOpenMenus(!openMenus)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <dialog
        open
        className={`sm:hidden backdrop-sepia-0 bg-black/40 mr-0 ${
          openMenus ? "w-full" : "w-0 delay-[50ms]"
        } h-screen z-[1000]`}
      >
        <div
          ref={menuRef}
          className={`bg-richBlack text-white max-w-64 h-full ml-auto ${
            openMenus ? "w-64 delay-[50ms]" : "w-0"
          } transition-all`}
        >
          <Menus onclick={() => setOpenMenus(false)} />
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
