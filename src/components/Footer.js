import "../styles/Footer.css";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>chasacademy-nshoan-abdlwafa.github.io</p>
    </div>
  );
}

export default Footer;
