import "../styles/Home.css";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Nshoan</h2>
        <div className="prompt">
          <p>
            Aspiring full stack developer looking to learn and take on new
            challenges.
          </p>
          <Tooltip title="Visit my GitHub profile!">
            <IconButton
              aria-label="visit"
              onClick={() =>
                window.open("https://github.com/ChasAcademy-Nshoan-Abdlwafa")
              }
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit my LinkedIn profile!">
            <IconButton
              aria-label="visit"
              onClick={() =>
                window.open("https://www.linkedin.com/in/nshoan-a-853878208/")
              }
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Backend</h2>
            <span>.NET, MS SQL & PostgreSQL</span>
          </li>
          <li className="item">
            <h2>Frontend</h2>
            <span>CSS, HTML & React</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C#, JavaScript & SQL</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
