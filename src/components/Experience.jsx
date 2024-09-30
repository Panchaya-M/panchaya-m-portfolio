/* eslint-disable react/prop-types */
import { useState } from "react";
import { EXPERIENCES } from "../constants/constants";

const CompanyHeader = ({ company, start, end, job_position }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="title mb-2">{company}</h3>
        <p className="mb-2">
          {start} - {end}
        </p>
      </div>
      <p className="text-lg">{job_position}</p>
    </div>
  );
};

const Responsibilities = ({ responsibilities }) => {
  return (
    <div>
      <h4 className="sub-title font-semibold">Responsibilities:</h4>
      <ul className="list-disc pl-6">
        {responsibilities.map((responsibility, responsibilityIndex) => (
          <li key={responsibilityIndex}>
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = ({ intro, projects }) => {
  return (
    <>
      <p className="mt-4">{intro}:</p>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex}>
          <div className="flex justify-between border-b-[1px] border-aqua mb-2">
            <h4 className="sub-title">{project.name}:</h4>
          </div>
          <p>{project.details}</p>
        </div>
      ))}
    </>
  );
};

const TechnologiesUse = ({ technologies }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      <h4 className="sub-title font-semibold">Technologies Used:</h4>
      <ul className="flex flex-wrap gap-4">
        {technologies.map((tech, techIndex) => (
          <li key={techIndex} className="bubble">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpandToggle = ({ isExpand, onclick }) => {
  return (
    <div className="expand-toggle">
      {isExpand ? (
        <button className="flex items-center gap-2" onClick={() => onclick}>
          Hide <i className="fa-solid fa-chevron-up mt-1"></i>
        </button>
      ) : (
        <button className="flex items-center gap-2" onClick={() => onclick}>
          More Details
          <i className="fa-solid fa-chevron-down animate-bounce mt-1"></i>
        </button>
      )}
    </div>
  );
};

const Experience = () => {
  const experiences = EXPERIENCES;
  // Store the index of the expanded experience
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleVisibility = index => {
    // If the clicked item is already expanded, collapse it, otherwise expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experiences">
      <div className="container flex flex-col gap-4">
        <h2>My Experiences</h2>

        {experiences.map((experience, i) => (
          <div key={i} className="card-outline flex flex-col gap-4">
            <CompanyHeader
              company={experience.company}
              start={experience.start}
              end={experience.end}
              job_position={experience.job_position}
            />

            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                expandedIndex === i ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <Responsibilities
                responsibilities={experience.responsibilities}
              />

              <Projects
                intro={experience.projects_intro}
                projects={experience.projects}
              />

              <TechnologiesUse technologies={experience.technologies_use} />
            </div>

            <ExpandToggle
              isExpand={expandedIndex === i}
              onclick={() => toggleVisibility(i)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
