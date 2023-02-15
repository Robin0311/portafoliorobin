import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../styles/Footer.css";
import Nav from "react-bootstrap/Nav";


function Footer() {
  return (
    <div className="footer">
      <Nav className="socialMedia">
        <Nav.Link href="https://mail.google.com/mail/u/1/#inbox?compose=new" target={"_blank"}>
          <EmailIcon  />
        </Nav.Link>

        <Nav.Link href="https://github.com/Robin0311" target={"_blank"}>
          <GitHubIcon />
        </Nav.Link>

        <Nav.Link href="https://www.linkedin.com/in/robinson-cerrato/" target={"_blank"}>
          <LinkedInIcon />
        </Nav.Link>

        <Nav.Link href="https://api.whatsapp.com/send/?phone=123456789&text&type=phone_number&app_absent=0" target={"_blank"}>
          <WhatsAppIcon />
        </Nav.Link>
      </Nav>

      <p> &copy; 2023 PortafolioRobinson.com</p>
    </div>
  );
}

export default Footer;
