import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
            <WhatsAppIcon />
            <EmailIcon />
            <GitHubIcon />
            <LinkedInIcon />
      </div>
      <p> &copy; 2023 PortafolioRobinson.com</p>
    </div>
  );
}

export default Footer;
