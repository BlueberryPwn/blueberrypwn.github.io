import "../styles/Home.css";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Nshoan!</h2>
        <div className="prompt">
          <p>
            Aspiring full stack developer looking to create and learn new
            things!
          </p>
          <Tooltip title="Visit my GitHub profile!">
            <IconButton aria-label="visit">
              <GitHubIcon
                onClick={(event) =>
                  window.open("https://github.com/ChasAcademy-Nshoan-Abdlwafa")
                }
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit my LinkedIn profile!">
            <IconButton aria-label="visit">
              <LinkedInIcon
                onClick={(event) =>
                  window.open("https://www.linkedin.com/in/nshoan-a-853878208/")
                }
              />
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
