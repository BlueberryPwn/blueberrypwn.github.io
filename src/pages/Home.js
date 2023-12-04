import "../styles/Home.css";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Nshoan!</h2>
        <div className="prompt">
          <p>
            Aspiring full stack developer looking to create, learn and solve new
            problems.
          </p>
          <EmailIcon
            onClick={(event) =>
              (window.location.href = "mailto:nshoan99@gmail.com")
            }
          />
          <GitHubIcon
            onClick={(event) =>
              window.open("https://github.com/ChasAcademy-Nshoan-Abdlwafa")
            }
          />
          <LinkedInIcon
            onClick={(event) =>
              window.open("https://www.linkedin.com/in/nshoan-a-853878208/")
            }
          />
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
