"use client";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main id="about" className="about-page">

      {/* =========================
          FIRST SCREEN
      ========================= */}

      <section className="about-layout">

        {/* LEFT SIDE */}
        <div className="about-content">

          <div className="reveal">
            <h1 className="about-title">About</h1>
          </div>

          <div className="about-intro reveal">
            <p>
              I’m a 7th-semester Artificial Intelligence &amp; Data Science
              student interested in building practical systems with machine
              learning, computer vision, and data.
            </p>
          </div>

          <div className="education reveal">
            <h2>Education</h2>

            <p>BE- Artificial Intelligence &amp; Data Science</p>
            <p>CGPA - 8.88</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-side">

          <div className="about-card reveal">

            <div className="about-card-top">

              {/* Small ghost */}
              <div className="ghost-mini" aria-hidden="true">
                <svg
                  viewBox="0 0 80 90"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
                      M10,52
                      C10,26 27,9 40,9
                      C53,9 70,26 70,52
                      L70,61
                      L57,73
                      L44,61
                      L36,61
                      L23,73
                      L10,61
                      Z
                    "
                    fill="none"
                    stroke="#2D120D"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  <ellipse
                    cx="20"
                    cy="46"
                    rx="4"
                    ry="3"
                    fill="#6B0B0C"
                    opacity="0.45"
                  />

                  <ellipse
                    cx="60"
                    cy="46"
                    rx="4"
                    ry="3"
                    fill="#6B0B0C"
                    opacity="0.45"
                  />

                  <ellipse
                    cx="30"
                    cy="40"
                    rx="3.2"
                    ry="4"
                    fill="#CDE3E8"
                    stroke="#2D120D"
                    strokeWidth="1.4"
                  />

                  <ellipse
                    cx="50"
                    cy="40"
                    rx="3.2"
                    ry="4"
                    fill="#CDE3E8"
                    stroke="#2D120D"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>

              <span className="card-mark">01</span>

            </div>

            <button className="about-contact">
              Contact
              <span>→</span>
            </button>

          </div>

        </div>

      </section>

      {/* =========================
          CURRENTLY BUILDING
      ========================= */}

      <section className="about-next reveal">

        <div className="about-next-number">
          02
        </div>

        <div className="about-next-content">

          <p className="about-next-label">
            CURRENTLY BUILDING
          </p>

          <h2>
            Non-invasive
            <br />
            hemoglobin
            <br />
            estimation.
          </h2>

          <p className="about-next-text">
            A multi-wavelength PPG system using ESP32, MAX30102,
            signal processing, and machine learning.
          </p>

          <div className="about-next-tech">
            <span>ESP32</span>
            <span>MAX30102</span>
            <span>PYTHON</span>
            <span>XGBOOST</span>
          </div>

        </div>

      </section>

      {/* =========================
          END NOTE
      ========================= */}

      <section className="about-end reveal">

        <p>
          still learning.
          <br />
          still building.
        </p>

        <span>→ next</span>

      </section>

    </main>
  );
}