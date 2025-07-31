import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Contact</h2>

      <div className="max-w-xl mx-auto text-center text-gray-800 space-y-4">
        <p>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:ahmanish03@gmail.com" className="text-indigo-600 hover:underline">
            ahmanish03@gmail.com
          </a>
        </p>
        <p><strong>📞 Phone:</strong> +91 99649 63003</p>
        <p>
          <strong>🔗 LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/manish-a-h-73498a215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            linkedin.com/in/manish-a-h-73498a215
          </a>
        </p>
        <p>
          <strong>💻 GitHub:</strong>{" "}
          <a
            href="https://github.com/manish-a-h"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            github.com/manish-a-h
          </a>
        </p>
        <p><strong>🏠 Address:</strong> ‘Gurukripa’ House, Hosmar post, Idu village, Karkala Taluk, Udupi Dist.</p>
      </div>
    </section>
  );
}
