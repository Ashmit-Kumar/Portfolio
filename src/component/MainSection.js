import React from "react";
import './styles/MainSection.css';
import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
function MainSection() {
  return (
    <div className="main-section">
      <div className="avatar-img">
        <img src="https://i.ibb.co/zS38BWV/9434621.png" alt="Ashmit Kumar" />
      </div>
      <h1>Ashmit Kumar</h1>
      <p>I am a Full-Stack Developer</p>
      <div className="social-links">
        <a href="https://github.com/Ashmit-Kumar" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/ashmitkumar1020/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
        <a className="email" href="mailto:ashmit.kumar@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={25} />
        </a>
      </div>
      <a href="/Ashmit_Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume">Resume</button>
      </a>
      {ScrollDown}
      <Shapes/>
    </div>
  );
}

export default MainSection;
