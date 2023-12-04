import "../styles/Footer.css";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
