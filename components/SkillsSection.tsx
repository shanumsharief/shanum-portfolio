"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "Machine Learning",
    skills: ["Python", "Scikit-learn", "XGBoost"],
    note: "models & prediction",
  },
  {
    number: "02",
    title: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "SciPy"],
    note: "working with data",
  },
  {
    number: "03",
    title: "Computer Vision",
    skills: ["OpenCV", "YOLOv8", "Roboflow", "Gradio"],
    note: "seeing things differently",
  },
  {
    number: "04",
    title: "Tools",
    skills: ["GitHub", "Jupyter", "VS Code", "Arduino IDE"],
    note: "building & shipping",
  },
];

export default function SkillsSection() {
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
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`skills-section ${visible ? "skills-visible" : ""}`}
    >
      <div className="skills-inner">
        <div className="skills-header">
          <div className="skills-number">03</div>

          <div className="skills-heading">
            <p className="skills-kicker">SKILLS</p>
            <h2>
              What I
              <br />
              work with.
            </h2>
          </div>

          <p className="skills-intro">
            A mix of machine learning, data, computer vision,
            and the tools I use to turn ideas into working systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.number}
              className="skill-card"
              style={
                {
                  "--card-delay": `${index * 110}ms`,
                } as React.CSSProperties
              }
            >
              <div className="skill-card-top">
                <span className="skill-card-number">{group.number}</span>
                <span className="skill-card-note">{group.note}</span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>

              <span className="skill-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <p className="skills-footer-note">hover to inspect</p>
      </div>
    </section>
  );
}