import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Education</h2>
      <ul className="space-y-4 max-w-3xl mx-auto text-gray-800">
        <li>
          <strong>B.E. in Computer Science & Engineering (AI & ML)</strong><br />
          MITE, CGPA: 8.65 (2022–Present)
        </li>
        <li>
          <strong>Senior Secondary (12th), DPUE</strong><br />
          Percentage: 91.5% (2020–2022)
        </li>
        <li>
          <strong>SSLC, KSEEB</strong><br />
          Percentage: 95.36% (2017–2020)
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4 text-center">Internship</h2>
      <div className="max-w-3xl mx-auto text-gray-800">
        <p>
          <strong>Edunet TechSaksham</strong> (Feb 2025 – Mar 2025)<br />
          <em>AI-powered Resume Screening and Ranking System</em><br />
          Automated candidate selection using Python, improving efficiency and reducing bias.
        </p>
      </div>

      <div className="text-center mt-6">
        <a
          href="../4MT22CI028_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
