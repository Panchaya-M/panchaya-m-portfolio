import responsiveDevices from "../assets/images/responsive-devices.png";
import laptop from "../assets/images/laptop.png";
import Carousel from "./Carousel";

const About = () => {
  const images = [
    {
      name: "responsive-devices",
      src: responsiveDevices,
    },
    {
      name: "laptop",
      src: laptop,
    },
  ];

  return (
    <section id="about">
      <div className="container flex flex-col-reverse md:flex-row justify-between gap-4">
        <div className="flex-1 flex justify-center items-center relative">
          <Carousel slides={images} percent_width="70" autoSlide={true} />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2>About Me</h2>
          <p>
            Hey there! I'm a frontend developer with a passion for building
            clean, responsive, and user-friendly web applications.
          </p>
          <p>
            With a few years of experience, I've had the chance to work on some
            exciting projects that sharpened my ability to think critically and
            code efficiently.
          </p>
          <p>
            I’m always up for a challenge and love diving into new frameworks
            and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
