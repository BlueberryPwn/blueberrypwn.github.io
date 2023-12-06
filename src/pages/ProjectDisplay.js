import "../styles/ProjectDisplay.css";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.imageDesc} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Tooltip title="Visit the repository of this project!">
        <IconButton
          aria-label="visit"
          onClick={() => window.open(project.link)}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ProjectDisplay;
