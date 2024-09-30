import { SKILLS } from "../constants/constants";

/* eslint-disable react/prop-types */
const Title = ({ icon, title }) => {
  return (
    <div className="flex-column items-center">
      <i className={`${icon} text-aqua text-xl`}></i>
      <h3 className="title text-white mb-2">{title}</h3>
    </div>
  );
};

const Skills = () => {
  const skills = SKILLS;

  return (
    <section id="skills">
      <div className="container flex flex-col gap-4">
        <h2>My Skills</h2>

        <div>
          <Title icon="fa-solid fa-code" title="Frontend Development" />
          {skills.map(skill => (
            <img key={skill.name} src={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
