import React from "react";
import Sidebar from "./component/Sidebar";
import MainSection from "./component/MainSection";
import About from "./component/AboutMe";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact.js";
import Skills from "./component/Skills.js";
function App() {
  return (
    <div className="app">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"></link>

      <Sidebar />
      <div className="sections">

        <MainSection />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
