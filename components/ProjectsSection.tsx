"use client";

import { useState } from "react";

type Project = {
  number: string;
  title: string;
  year: string;
  image: string;
  tagline: string;
  description: string;
  focus: string;
  tech: string[];
  status: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Non-invasive\nHemoglobin Estimation",
    year: "2026",
    image: "/images/projects/hemoglobin.jpg",
    tagline:
      "A PPG-based system for estimating hemoglobin without conventional blood sampling.",
    description:
      "A multi-wavelength PPG system exploring red and infrared signals, signal processing, feature extraction, and ensemble regression for non-invasive hemoglobin estimation.",
    focus:
      "ESP32-based acquisition → PPG processing → feature extraction → regression",
    tech: ["ESP32", "MAX30102", "Python", "XGBoost"],
    status: "Currently building",
  },

  {
    number: "02",
    title: "Smart Shelf\nInventory",
    year: "2025",
    image: "/images/projects/shelf.jpg",
    tagline:
      "A vision system that sees what’s on the shelf — and what’s running out.",
    description:
      "A multi-class computer vision system that detects products, counts visible inventory, checks stock thresholds, and raises low-stock alerts in real time.",
    focus:
      "Detection → counting → threshold checking → low-stock alerts",
    tech: ["Python", "YOLOv8", "OpenCV", "Gradio"],
    status: "Built",
  },

  {
    number: "03",
    title: "DSA\nAdventure",
    year: "2026",
    image: "/images/projects/dsa.jpg",
    tagline:
      "Turning data structures and algorithms into a progression-based learning experience.",
    description:
      "An interactive learning platform built around visual gates, trials, progression, and playful interactions designed to make DSA feel more approachable.",
    focus:
      "Visual learning → progression → interaction → practice",
    tech: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    status: "Currently building",
  },

  {
    number: "04",
    title: "F1 Performance\nAnalysis",
    year: "2026",
    image: "/images/projects/f1.jpg",
    tagline:
      "Exploring the patterns behind race performance, consistency, and results.",
    description:
      "A data analysis project using Formula 1 race and driver data to explore performance patterns through statistical analysis and visualisation.",
    focus:
      "Race data → performance analysis → patterns → visualisation",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    status: "In progress",
  },
];

export default function ProjectsSection() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const toggleFlip = (index: number) => {
    setFlipped((current) =>
      current === index ? null : index
    );
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="projects-inner">

          {/* HEADER */}
          <div className="projects-header">
            <div className="projects-number">
              04
            </div>

            <div className="projects-heading">
              <p className="projects-kicker">
                SELECTED WORK
              </p>

              <h2>
                Things I&apos;ve
                <br />
                been building.
              </h2>
            </div>

            <p className="projects-intro">
              A collection of projects across machine learning,
              computer vision, data, and the things I&apos;m
              currently experimenting with.
            </p>
          </div>

          {/* POLAROIDS */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className={`project-polaroid ${
                  flipped === index ? "is-flipped" : ""
                }`}
              >
                <div className="project-card-inner">

                  {/* ================= FRONT ================= */}
                  <div className="project-card-face project-card-front">

                    <div className="project-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title.replace("\n", " ")}
                      />

                      <span className="project-photo-number">
                        {project.number}
                      </span>
                    </div>

                    <div className="project-card-content">
                      <div className="project-title-block">

                        <h3>
                          {project.title
                            .split("\n")
                            .map((line, i) => (
                              <span key={line}>
                                {line}
                                {i === 0 && <br />}
                              </span>
                            ))}
                        </h3>

                        <p className="project-year">
                          {project.year}
                        </p>

                      </div>

                      <span className="project-arrow">
                        ↗
                      </span>
                    </div>

                    {/* HOVER INFO */}
                    <div className="project-hover-info">

                      <p>
                        {project.tagline}
                      </p>

                      <div className="project-tech">
                        {project.tech.map((item) => (
                          <span key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* ================= BACK ================= */}
                  <div className="project-card-face project-card-back">

                    <div className="project-back-top">
                      <span>
                        {project.number}
                      </span>

                      <span>
                        {project.year}
                      </span>
                    </div>

                    <h3>
                      {project.title
                        .split("\n")
                        .map((line, i) => (
                          <span key={line}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                    </h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tech project-tech-back">
                      {project.tech.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-back-actions">

                      <button
                        type="button"
                        className="project-back-button"
                        onClick={() => toggleFlip(index)}
                      >
                        ↶ back
                      </button>

                      <button
                        type="button"
                        className="project-link"
                        onClick={() => openProject(project)}
                      >
                        VIEW PROJECT ↗
                      </button>

                    </div>

                  </div>
                </div>

                {/* FLIP CONTROL */}
                <button
                  type="button"
                  className="project-flip-button"
                  onClick={() => toggleFlip(index)}
                  aria-label={`Flip ${project.title.replace(
                    "\n",
                    " "
                  )} card`}
                >
                  flip ↗
                </button>

              </article>
            ))}
          </div>

          <p className="projects-note">
            hover to inspect · flip to explore
          </p>

        </div>
      </section>

      {/* =========================================
          PROJECT POSTCARD
      ========================================= */}

      {selectedProject && (
        <div
          className="project-postcard-overlay"
          onClick={closeProject}
        >
          <div
            className="project-postcard"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}
            <button
              type="button"
              className="project-postcard-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ×
            </button>

            {/* STAMP */}
            <div className="postcard-stamp">
              {selectedProject.number}
            </div>

            {/* HEADER */}
            <p className="postcard-kicker">
              PROJECT / {selectedProject.year}
            </p>

            <h3>
              {selectedProject.title
                .split("\n")
                .map((line, i) => (
                  <span key={line}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
            </h3>

            <div className="postcard-divider" />

            {/* ABOUT */}
            <div className="postcard-section">
              <span className="postcard-label">
                ABOUT
              </span>

              <p>
                {selectedProject.description}
              </p>
            </div>

            {/* FOCUS */}
            <div className="postcard-section">
              <span className="postcard-label">
                FOCUS
              </span>

              <p>
                {selectedProject.focus}
              </p>
            </div>

            {/* STACK */}
            <div className="postcard-section">
              <span className="postcard-label">
                STACK
              </span>

              <div className="postcard-tech">
                {selectedProject.tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* STATUS */}
            <div className="postcard-section postcard-status">
              <span className="postcard-label">
                STATUS
              </span>

              <span>
                {selectedProject.status}
              </span>
            </div>

            {/* FOOTER */}
            <div className="postcard-footer">
              <span>
                KS. / SELECTED WORK
              </span>

              <button
                type="button"
                onClick={closeProject}
              >
                CLOSE ↗
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}