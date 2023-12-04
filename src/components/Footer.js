import "../styles/Footer.css";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
  );
}

export default Footer;
