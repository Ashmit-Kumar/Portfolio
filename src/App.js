import React from "react";
import Sidebar from "./component/Sidebar";
import MainSection from "./component/MainSection";
import About from "./component/AboutMe";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact.js";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="sections">
        <MainSection />
        <About />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
