import "../styles/Footer.css";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
  );
}

export default Footer;
