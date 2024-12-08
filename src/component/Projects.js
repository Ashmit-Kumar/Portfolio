import React from "react";
import "./styles/Projects.css"; // Custom styles

function Projects() {
  const projectData = [
    {
      title: "TastySearch",
      description:
        "TastySearch is a recipe discovery web application that allows users to search for a variety of recipes, view ingredients, and find detailed instructions.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://github.com/Ashmit-Kumar/TastySearch", // Add project link
    },
    {
      title: "Weather App",
      description:
        "A web application that provides weather information based on the user's location, utilizing APIs for real-time data and weather forecasts.",
      technologies: ["React", "OpenWeather API", "CSS"],
      link: "https://github.com/Ashmit-Kumar/Urbanwatherinsight",
    },
    {
      title: "Contact Management System",
      description:
        "A system to manage contacts, allowing users to store, update, and organize contact information. Built with user-friendly interface and secure data storage.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Ashmit-Kumar/Contact_Management_System",
    },
    {
      title: "Dockerize",
      description:
        "A project to containerize applications using Docker, ensuring consistency across different environments and making deployment simpler and faster.",
      technologies: ["Docker", "Node.js", "Nginx"],
      link: "https://github.com/Ashmit-Kumar/Dockerize_app",
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
