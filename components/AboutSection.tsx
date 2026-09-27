"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about ${visible ? "about-visible" : ""}`}
    >
      <div className="about-layout">

        {/* LEFT */}
        <div className="about-content">
          <p className="about-number">01</p>

          <h1 className="about-title">
            About
          </h1>

          <div className="about-intro">
            <p>
              I’m a 7th-semester Artificial Intelligence &amp;
              Data Science student interested in building practical
              systems with machine learning, computer vision, and data.
            </p>
          </div>

          <div className="education">
            <h2>Education</h2>

            <p>
              BE — Artificial Intelligence &amp; Data Science
            </p>

            <p>
              CGPA — 8.88
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-side">

          {/* POLAROID */}
          <div className="photo-card">
            <div className="photo-card-image">
              <img
                src="/images/profile.jpg"
                alt="Khadeeja Shanum"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div className="contact-block">
            <h2>Contact</h2>

            <a
              href="mailto:shanumsharief@gmail.com"
              className="contact-link"
            >
              shanumsharief@gmail.com
            </a>

            <a
              href="https://github.com/shanumsharief"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub ↗
            </a>

        
          </div>

        </div>
      </div>

      
    </section>
  );
}