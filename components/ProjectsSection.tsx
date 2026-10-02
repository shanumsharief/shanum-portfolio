"use client";

import { useState } from "react";

type Project = {
  number: string;
  title: string;
  year: string;
  image: string;
  tagline: string;
  description: string;
  shortDescription: string;
  focus: string;
  tech: string[];
  status: string;
  github?: string;
  demo?: string;
  metrics?: string;
  demoImage?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Non-invasive\nHemoglobin Estimation",
    year: "2026",
    image: "/images/projects/hemoglobin-hardware.png",

    tagline:
      "A PPG-based system for estimating hemoglobin without conventional blood sampling.",

    description:
      "A multi-wavelength PPG system exploring red and infrared signals, signal processing, feature extraction, and ensemble regression for non-invasive hemoglobin estimation.",

    shortDescription:
      "ESP32 + MAX30102 system for non-invasive hemoglobin estimation using PPG.",

    focus:
      "ESP32-based acquisition → PPG processing → feature extraction → regression",

    tech: ["ESP32", "MAX30102", "Python", "XGBoost"],

    status: "Currently building",

    metrics:
      "1,024 samples · 50 Hz · R Ratio: 0.7376 · hardware cost < ₹1,000",
  },

  {
    number: "02",
    title: "Smart Shelf\nInventory",
    year: "2025",
    image: "/images/projects/shelf.png",

    tagline:
      "A vision system that sees what’s on the shelf — and what’s running out.",

    description:
      "A multi-class computer vision system that detects products, counts visible inventory, checks stock thresholds, and raises low-stock alerts in real time.",

    shortDescription:
      "YOLOv8 system for product detection, counting, and low-stock alerts.",

    focus:
      "Detection → counting → threshold checking → low-stock alerts",

    tech: ["Python", "YOLOv8", "OpenCV", "Gradio"],

    status: "Built",

    github:
      "https://github.com/shanumsharief/smart-shelf-inventory",

    demo:
      "https://github.com/shanumsharief/smart-shelf-inventory/blob/main/demo/demo.jpeg",

    demoImage:
      "https://raw.githubusercontent.com/shanumsharief/smart-shelf-inventory/main/demo/demo.jpeg",

    metrics:
      "Validation: 26.15% mAP@50 · 14.27% mAP@50–95",
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
                        alt={project.title.replace(
                          "\n",
                          " "
                        )}
                        style={{
                          objectPosition:
                            project.number === "01"
                              ? "10% 100%"
                              : "80% 70%",
                        }}
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
                      {project.shortDescription}
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
                        onClick={() =>
                          openProject(project)
                        }
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

            {/* DEMO IMAGE */}
            {selectedProject.demoImage && (
              <div className="postcard-section">
                <span className="postcard-label">
                  DEMO
                </span>

                <img
                  src={selectedProject.demoImage}
                  alt="Smart Shelf Inventory demo"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    marginTop: "14px",
                    objectFit: "contain",
                  }}
                />
              </div>
            )}

            {/* FOCUS */}
            <div className="postcard-section">
              <span className="postcard-label">
                FOCUS
              </span>

              <p>
                {selectedProject.focus}
              </p>
            </div>

            {/* RESULTS */}
            {selectedProject.metrics && (
              <div className="postcard-section">
                <span className="postcard-label">
                  RESULTS
                </span>

                <p>
                  {selectedProject.metrics}
                </p>
              </div>
            )}

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

            {/* LINKS */}
            {(selectedProject.github ||
              selectedProject.demo) && (
              <div className="postcard-section">
                <span className="postcard-label">
                  LINKS
                </span>

                <div
                  className="project-link-group"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "32px",
                  }}
                >
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GITHUB ↗
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      VIEW DEMO ↗
                    </a>
                  )}
                </div>
              </div>
            )}

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