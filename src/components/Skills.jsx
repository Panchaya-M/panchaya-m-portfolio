import { SKILLS, SOFT_SKILLS } from "../constants/constants";

/* eslint-disable react/prop-types */
const Title = ({ icon, title }) => {
  return (
    <div className="flex flex-row sm:flex-col items-center">
      <i className={`${icon} text-aqua text-lg sm:text-xl pr-3 sm:pr-0`}></i>
      <h3 className="title text-white sm:mb-2">{title}</h3>
    </div>
  );
};

const FESkills = ({ skills }) => {
  return (
    <>
      <div className="flex justify-center">
        <Title icon="fa-solid fa-code" title="Frontend Development" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-10 mt-5">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="card-mini flex-column items-center justify-center sm:justify-between w-[75px] h-[75px] sm:w-[110px] sm:h-auto"
          >
            <img
              key={skill.name}
              src={skill.image}
              className="h-[40px] sm:h-[60px]"
            />
            <p className="text-aqua hidden sm:block">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const SoftSkills = ({ skills }) => {
  return (
    <>
      <div className="flex sm:justify-center">
        <Title icon="fa-solid fa-user-group" title="Soft Skills" />
      </div>
      <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-6 sm:ml-[6rem]">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

// const LanguageSkill = () => {
//   return (
//     <>
//       <Title icon="fa-solid fa-globe" title="Language Skill" />
//       <p>
//         I can use English to communicate in daily life and be able to write and
//         read to understand the importance of general messages.
//       </p>
//     </>
//   );
// };

const Skills = () => {
  const skills = SKILLS;
  const softSkills = SOFT_SKILLS;

  return (
    <section id="skills">
      <div className="container flex flex-col gap-4">
        <h2>My Skills</h2>

        <div>
          <FESkills skills={skills} />

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-10 mt-5">
            <div className="flex-1 card-outline flex-column md:mx-[3rem]">
              <SoftSkills skills={softSkills} />
            </div>

            {/* <div className="flex-1 card flex-column">
              <LanguageSkill />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
