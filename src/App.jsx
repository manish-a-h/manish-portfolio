import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar />
      <Home />
      <Resume />
      <Skills />
      <Projects />
      <Courses />
      <Achievements />
      <Contact />
    </div>
  );
}
