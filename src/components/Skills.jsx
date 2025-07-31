import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 max-w-5xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2 text-indigo-500">Languages</h3>
          <ul className="list-disc list-inside">
            <li>C</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-indigo-500">Web Interface</h3>
          <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-indigo-500">Framework</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-indigo-500">Database</h3>
          <ul className="list-disc list-inside">
            <li>SQL</li>
            <li>MS Access</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-indigo-500">Tools</h3>
          <ul className="list-disc list-inside">
            <li>VS Code</li>
            <li>PyCharm</li>
            <li>MySQL</li>
            <li>Power BI</li>
            <li>Tableau</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
