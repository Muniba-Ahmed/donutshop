import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="a">
          {" "}
          <FacebookIcon />
        </a>
        <a href="a">
          {" "}
          <TwitterIcon />
        </a>
        <a href="a">
          {" "}
          <InstagramIcon />
        </a>
        <a href="a">
          {" "}
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
