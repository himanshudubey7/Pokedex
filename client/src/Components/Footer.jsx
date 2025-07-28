import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Pokédex | Built by Shreya Madeshiya</p>
      <div className="social-icons">
        <a href="https://github.com/shreyaMadeshiya" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shreyaMadeshiya" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/shreyaMadeshiya" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

