import React from "react";
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><i className="icon">🏠</i></li>
        <li><i className="icon">👤</i></li>
        <li><i className="icon">🎓</i></li>
        <li><i className="icon">🏆</i></li>
        <li><i className="icon">✉️</i></li>
      </ul>
      <p className="footer">© Ashmit Kumar, 2024-2025</p>
    </div>
  );
}

export default Sidebar;
