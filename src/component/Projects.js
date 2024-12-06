import React from "react";
import "./styles/Projects.css"; // Custom styles

function Projects() {
  const projectData = [
    {
      title: "Waste Management App",
      description:
        "An app to upload photos of nearby waste, allowing users to contact relevant authorities and NGOs.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      link: "#", // Add project links
    },
    {
      title: "Quiz Game with Python",
      description:
        "A multiplayer quiz game built using Python, Flask, SQL, and OpenCV for interactive gameplay.",
      technologies: ["Python", "Flask", "SQL", "OpenCV"],
      link: "#",
    },
    {
      title: "Online Admission Counseling",
      description:
        "A Java Swing application to manage online admissions using file systems as the database.",
      technologies: ["Java", "Swing"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section">
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
    </section>
  );
}

export default Projects;
