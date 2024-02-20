import React, { useState } from "react";
import { projects } from "../Data/ProjectsData";

function Project() {
  const [clickedProject, setClickedProject] = useState(null);

  function displayProjectInfo(project) {
    return (
      <div className="projectInfo">
        <h2 className="projectTitle">{project.title}</h2>
        <div className="paragraph">
          <p className="projectDescription">{project.description}</p>
        </div>
        <div className="projectStackContainer">
          {project.stack.map((techData) => (
            <div className="projectStack" key={techData.tech}>
              <img
                className="projectStackImages"
                src={techData.image}
                alt={techData.tech}
              />
            </div>
          ))}
        </div>
        <div className="projectLinks">
          <a href={project.github}>
            <img className="linkImg" src="/images/github.png" alt="GitHub" />
            Code
          </a>
          <a href={project.live}>
            <img className="linkImg" src="/images/Link.png" alt="Live" />
            Link
          </a>
        </div>
      </div>
    );
  }

  function handleClick(project) {
    setClickedProject(clickedProject === project ? null : project);
  }

  function displayProjects() {
    return (
      <div className="projectsMap">
        {projects.map((data) => (
          <div className="eachProjectContainer" key={data.title}>
            <div
              className="projectImageContainer"
              onClick={() => handleClick(data)}
            >
              <img
                id={data.title}
                className="projectImage"
                src={data.image}
                alt={data.title}
              />
              {clickedProject === data && (
                <div className="clickedOverlay">
                  {displayProjectInfo(clickedProject)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="projects">
      <h2 className="projectHeader">PROJECTS</h2>
      {displayProjects()}
    </div>
  );
}

export default Project;
