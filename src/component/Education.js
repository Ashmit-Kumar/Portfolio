import React from "react";
import "./styles/Education.css"; // Custom styles

function Education() {
  const educationData = [
    {
        date: "2021-2024",
        title: "B.E In Computer Engineering",
        percentage: "8.4 CGPA",
        icon: "🎓", // Alternatively, use a class for a custom icon
    },
    {
      date: "2018-2021",
      title: "Diploma In Computer Engineering",
      percentage: "91.20%",
      icon: "🎓",
    },
    {
        date: "2018-2021",
        title: "Diploma In Computer Engineering",
        percentage: "91.20%",
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
              <p className="detail">{item.percentage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
