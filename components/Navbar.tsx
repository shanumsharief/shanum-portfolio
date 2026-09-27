"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(about);

    return () => observer.disconnect();
  }, []);

  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`site-nav ${visible ? "visible" : ""}`}>
      {/* LOGO */}
      <a
        href="#home"
        className="logo"
        onClick={goHome}
      >
        KS.
      </a>

      {/* NAVIGATION */}
      <div className="nav-links">
        <a
          href="#home"
          onClick={goHome}
        >
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#projects">
          Work
        </a>

        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}