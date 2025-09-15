import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      {/* Navbar */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand" aria-label="Home">
            <span className="brand-dot" aria-hidden="true" />
            <h2 className="brand-text">Simran Utradi</h2>
          </a>

          {/* <div className="nav-links" aria-label="Social links">
            <a
              href="https://www.instagram.com/explorewith_simi?igsh=MTRtYmV0YnM3enJmNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram logo"
                className="icon"
              />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/simran-utradi-2081b2135?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link linkedin"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn logo"
                className="icon"
              />
              <span>LinkedIn</span>
            </a>
          </div> */}
        </div>
      </nav>

      {/* Main section */}
      <main className="main">
        <div className="container hero">
          {/* Left text */}
          <section className="hero-text">
            <h1>Hi, I am Simran Utradi</h1>
            <p>
              A Successful story, yet to be written!
            </p>

            <div className="cta">
              <a
                className="btn"
                href="https://www.instagram.com/explorewith_simi?igsh=MTRtYmV0YnM3enJmNQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Instagram
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/simran-utradi-2081b2135?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open LinkedIn
              </a>
            </div>
          </section>

          {/* Right image */}
          <section className="hero-image-wrap">
            <img
              src="/Simran.JPG"
              alt="Simran Utradi"
              className="hero-image"
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © 2025 Simran Utradi. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
