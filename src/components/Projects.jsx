import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Projects</h2>

      <div className="space-y-8 max-w-4xl mx-auto text-gray-800">

        {/* Project 1 */}
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold text-indigo-700">
            AI-powered Navigation & TTS Assistant for the Visually Impaired
          </h3>
          <p className="mt-2">
            This ongoing group project enhances mobility for visually impaired individuals using real-time object
            detection and voice feedback. Lightweight, offline-capable, and highly portable.
          </p>
          <p className="mt-2 text-sm italic text-gray-500">
            Technologies: YOLOv5, Raspberry Pi, Python, Text-to-Speech
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold text-indigo-700">
            E-commerce Product Recommender System
          </h3>
          <p className="mt-2">
            Built a personalized recommender engine using user-based and item-based collaborative filtering.
            Developed a responsive Streamlit web app for real-time product suggestions.
          </p>
          <p className="mt-2 text-sm italic text-gray-500">
            Technologies: Python, Streamlit, Cosine Similarity
          </p>
          <div className="mt-3">
            <a
              href="https://github.com/manish-a-h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
