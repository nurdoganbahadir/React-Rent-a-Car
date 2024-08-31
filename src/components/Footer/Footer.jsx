import React from "react";
import "./footer.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-contact">
        <div className="contact-me">
          <h5>Contact Me</h5>
          <p>📞: 0555 555 55 55</p>
          <p>📨: nurdoganbahadirr@gmail.com</p>
        </div>
        <div>
          <h5>Links</h5>
          <a href="https://github.com/nurdoganbahadir">
            <FaSquareGithub className="github-icons" />
          </a>
          <a href="">
            <FaLinkedin className="linkedIn-icons" />
          </a>
        </div>
      </div>
      <p className="text-secondary">Created by Nurdoğan Bahadır</p>
    </footer>
  );
};

export default Footer;
