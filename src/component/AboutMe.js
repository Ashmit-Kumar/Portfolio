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
      <h2>About Me</h2>
      <div className="about-content">
        {/* Avatar Section */}
        <div className="avatar-container">
          <img
            src="https://i.ibb.co/zS38BWV/9434621.png"
            alt="Ashmit Kumar"
            className="avatar"
          />
        </div>

        {/* About Text and Skills Section */}
        <div className="details-container">
          <div className="about-text">
            <p>
              I am eager to pursue a dynamic career in IT, leveraging my
              software development and UX design skills in challenging and
              innovative projects.
            </p>
            <button className="download-resume">Download Resume</button>
          </div>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <p>{skill.name}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
