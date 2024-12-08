import React from "react";
import { FaHome, FaUser, FaGraduationCap, FaTrophy, FaEnvelope, FaClipboardList } from "react-icons/fa"; // Importing icons
import { Link } from "react-scroll"; // Importing Link from react-scroll for smooth scrolling
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FaHome size={30} />
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <FaUser size={30} />
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>
            <FaGraduationCap size={30} />
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <FaClipboardList size={30} />
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            <FaTrophy size={30} />
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <FaEnvelope size={30} />
          </Link>
        </li>
      </ul>
      <p className="footer">© Ashmit Kumar, 2024-2025</p>
    </div>
  );
}

export default Sidebar;
