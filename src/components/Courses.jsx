import React from "react";

export default function Courses() {
  return (
    <section id="courses" className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Courses & Workshops</h2>

      <ul className="list-disc list-inside text-gray-800 space-y-2 max-w-3xl mx-auto">
        <li>Introduction to Machine Learning – NPTEL, 2024</li>
        <li>Programming, Data Structures and Algorithms using Python – NPTEL, 2023</li>
        <li>Introduction to IoT – NPTEL, 2022</li>
        <li>The Future of Innovation: Generative AI & Prompt Engineering – MITE Workshop, 2025</li>
        <li>Innovative Web Application Development using Angular Framework – MITE Workshop, 2025</li>
        <li>Programming in Java – NPTEL, 2025</li>
      </ul>
    </section>
  );
}
