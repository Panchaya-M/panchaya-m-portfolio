import { SKILLS, SOFT_SKILLS } from "../constants/constants";

/* eslint-disable react/prop-types */
const Title = ({ icon, title }) => {
  return (
    <div className="flex-column items-center">
      <i className={`${icon} text-aqua text-xl`}></i>
      <h3 className="title text-white mb-2">{title}</h3>
    </div>
  );
};

const FESkills = ({ skills }) => {
  return (
    <>
      <Title icon="fa-solid fa-code" title="Frontend Development" />
      <div className="flex flex-wrap justify-center gap-4 px-10 mt-5">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="card-mini flex-column items-center justify-between w-[110px]"
          >
            <img key={skill.name} src={skill.image} height="60px" />
            <p className="text-aqua">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const SoftSkills = ({ skills }) => {
  return (
    <>
      <Title icon="fa-solid fa-user-group" title="Soft Skills" />
      <ul className="list-disc pl-6">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const LanguageSkill = () => {
  return (
    <>
      <Title icon="fa-solid fa-globe" title="Language Skill" />
      <p>
        I can use English to communicate in daily life and be able to write and
        read to understand the importance of general messages.
      </p>
    </>
  );
};

const Skills = () => {
  const skills = SKILLS;
  const softSkills = SOFT_SKILLS;

  return (
    <section id="skills">
      <div className="container flex flex-col gap-4">
        <h2>My Skills</h2>

        <div>
          <FESkills skills={skills} />

          <div className="flex flex-wrap justify-center gap-4 px-10 mt-5">
            <div className="flex-1 card flex-column">
              <SoftSkills skills={softSkills} />
            </div>

            <div className="flex-1 card flex-column">
              <LanguageSkill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
