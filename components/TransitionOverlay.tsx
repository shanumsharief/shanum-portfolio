"use client";

import { useEffect, useRef, useState } from "react";

export default function TransitionOverlay() {
  const [playing, setPlaying] = useState(false);

  const fired = useRef(false);
  const skipTransition = useRef(false);
  const userInteracted = useRef(false);

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let finishTimer: ReturnType<typeof setTimeout> | null = null;
    let snapTimer: ReturnType<typeof setTimeout> | null = null;

    // Only count actual user interaction as scrolling.
    const markUserInteraction = () => {
      userInteracted.current = true;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        " ",
        "Home",
        "End",
      ];

      if (scrollKeys.includes(event.key)) {
        userInteracted.current = true;
      }
    };

    const handleNavigationClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]");

      if (!link) return;

      const href = link.getAttribute("href");

      if (
        href === "#skills" ||
        href === "#projects" ||
        href === "#contact"
      ) {
        skipTransition.current = true;
        fired.current = true;
        return;
      }

      if (href === "#home") {
        skipTransition.current = false;
        fired.current = false;
        userInteracted.current = false;
        return;
      }
    };

    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    const handleScroll = () => {
      // Ignore browser refresh / scroll restoration / programmatic scrolling.
      if (!userInteracted.current) return;

      if (fired.current) return;
      if (skipTransition.current) return;

      if (about.getBoundingClientRect().top < window.innerHeight) {
        fired.current = true;

        setPlaying(true);

        lockScroll();

        snapTimer = setTimeout(() => {
          const aboutTop =
            about.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: aboutTop,
            behavior: "auto",
          });
        }, 600);

        finishTimer = setTimeout(() => {
          setPlaying(false);
          unlockScroll();
        }, 1600);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Real user scroll/input
    window.addEventListener("wheel", markUserInteraction, {
      passive: true,
    });

    window.addEventListener("touchstart", markUserInteraction, {
      passive: true,
    });

    window.addEventListener("pointerdown", markUserInteraction, {
      passive: true,
    });

    window.addEventListener("keydown", handleKeyDown);

    document.addEventListener("click", handleNavigationClick);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", markUserInteraction);
      window.removeEventListener("touchstart", markUserInteraction);
      window.removeEventListener("pointerdown", markUserInteraction);
      window.removeEventListener("keydown", handleKeyDown);

      document.removeEventListener("click", handleNavigationClick);
      window.removeEventListener("scroll", handleScroll);

      if (snapTimer) clearTimeout(snapTimer);
      if (finishTimer) clearTimeout(finishTimer);

      unlockScroll();
    };
  }, []);

  return (
    <div
      className={`transition-overlay ${playing ? "playing" : ""}`}
      aria-hidden="true"
    >
      <span className="overlay-line">
        $ cd ./about
        <span className="overlay-cursor" />
      </span>
    </div>
  );
}