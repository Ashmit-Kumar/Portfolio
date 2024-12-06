import React from "react";
import "./styles/AboutMe.css";

function AboutMe() {

    const skills = [
        { name: "Development", percentage: 90 },
        { name: "DevOps", percentage: 40 },
        { name: "DSA", percentage: 40 },
    ];
  return (
    <div className="about-me">
      <div className="intro">
        <img
          src="https://i.ibb.co/zS38BWV/9434621.png"
          alt="Ashmit Kumar"
          className="avatar"
        />
        <h2>About Me</h2>
        <p>
          I am eager to pursue a dynamic career in IT, leveraging my software
          development and UX design skills in challenging and innovative
          projects.
        </p>
        <button className="download-resume">Resume</button>
      </div>

      
      {skills.map((skill, index) => (
  <div key={index} className="skill">
    <p>{skill.name}</p>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
    </div>
  </div>
))}
      <div className="qualities">
        <div className="quality">
          <span>🔥</span>
          <p>Hardworking</p>
        </div>
        <div className="quality">
          <span>🏆</span>
          <p>Resilient</p>
        </div>
        <div className="quality">
          <span>🧠</span>
          <p>Problem Solver</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
