import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav>
        <div className="nav-links">
          <a
            href="https://www.instagram.com/explorewith_simi?igsh=MTRtYmV0YnM3enJmNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/simran-utradi-2081b2135?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
              alt="LinkedIn"
            />
            LinkedInn
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="content-wrapper">
          {/* Left Side Text */}
          <div>
            <h1>Hi, I'm Simran Utradi</h1>
            <p>
              Welcome to my portfolio. Here you will find my projects, skills,
              and professional journey.
            </p>
          </div>

          {/* Right Side Photo */}
          <div>
            <img
              src="https://via.placeholder.com/300"
              alt="Simran Utradi"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        © 2025 Simran Utradi. All Rights Reserved.
      </footer>
    </div>
  );
}
