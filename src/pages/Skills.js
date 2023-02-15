import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Data } from "../helpers/Data";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
     
      <div className="projectList">
        {Data.map((project, idx) => {
          return (
            <ProjectItem id={idx}  image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
