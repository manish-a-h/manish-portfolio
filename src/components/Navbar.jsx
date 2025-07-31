import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-indigo-600">Manish A H</h1>
        <ul className="flex space-x-4 text-gray-700">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#resume" className="hover:text-indigo-600">Resume</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#courses" className="hover:text-indigo-600">Courses</a></li>
          <li><a href="#achievements" className="hover:text-indigo-600">Achievements</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
