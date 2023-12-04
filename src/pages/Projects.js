import "../styles/Projects.css";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projectList">
        <ProjectItem name="Project 1" image={Proj1} />
        <ProjectItem name="Project 2" image={Proj2} />
      </div>
    </div>
  );
}

export default Projects;
