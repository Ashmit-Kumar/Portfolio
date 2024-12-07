import React from "react";
import "./styles/Education.css"; // Custom styles

function Education() {
  const educationData = [
    {
      date: "2022-2026",
      title: "Bachelors of Technology",
      institution: "AKTU Kanpur, Uttar Pradesh",
      percentage: "CGPA: 7.7",
      icon: "🎓", // Alternatively, use a class for a custom icon
    },
    {
      date: "2018-2021",
      title: "Intermediate",
      institution: "St. Thomas School, ISC",
      subjects: "Physics, Chemistry, Mathematics",
      percentage: "86.25%",
      icon: "🎓",
    },
    {
      date: "2016-2018",
      title: "High School",
      institution: "St. Thomas School, ICSE",
      percentage: "89.8%",
      icon: "🎓",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-column">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <span className="icon">{item.icon}</span>
              <h3>{item.date}</h3>
              <p className="title">{item.title}</p>
              <p className="institution">{item.institution}</p>
              {item.subjects && <p className="subjects">{item.subjects}</p>}  {/* Render subjects if available */}
              <p className="detail">{item.percentage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
