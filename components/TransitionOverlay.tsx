"use client";

import { useEffect, useRef, useState } from "react";

export default function TransitionOverlay() {
  const [playing, setPlaying] = useState(false);

  const fired = useRef(false);
  const skipTransition = useRef(false);

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let finishTimer: ReturnType<typeof setTimeout> | null = null;
    let snapTimer: ReturnType<typeof setTimeout> | null = null;
    let skipTimer: ReturnType<typeof setTimeout> | null = null;

    /*
     * When the user intentionally navigates to another section,
     * don't trigger the Home → About transition while the smooth
     * scroll passes through About.
     */
    const handleNavigationClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const link = target?.closest("a[href]");

      if (!link) return;

      const href = link.getAttribute("href");

      if (
        href === "#projects" ||
        href === "#skills" ||
        href === "#contact"
      ) {
        skipTransition.current = true;

        if (skipTimer) {
          clearTimeout(skipTimer);
        }

        skipTimer = setTimeout(() => {
          skipTransition.current = false;
        }, 2000);
      }
    };

    document.addEventListener(
      "click",
      handleNavigationClick
    );

    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    const handleScroll = () => {
      if (fired.current) return;

      // Intentional navigation — do nothing.
      if (skipTransition.current) return;

      if (about.getBoundingClientRect().top < window.innerHeight) {
        fired.current = true;

        setPlaying(true);

        lockScroll();

        /*
         * Wait until the dark overlay completely covers
         * the screen, then move to the exact About position.
         */
        snapTimer = setTimeout(() => {
          const aboutTop =
            about.getBoundingClientRect().top +
            window.scrollY;

          window.scrollTo({
            top: aboutTop,
            behavior: "auto",
          });
        }, 600);

        finishTimer = setTimeout(() => {
          setPlaying(false);
          unlockScroll();
        }, 1600);

        window.removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      document.removeEventListener(
        "click",
        handleNavigationClick
      );

      if (snapTimer) {
        clearTimeout(snapTimer);
      }

      if (finishTimer) {
        clearTimeout(finishTimer);
      }

      if (skipTimer) {
        clearTimeout(skipTimer);
      }

      unlockScroll();
    };
  }, []);

  return (
    <div
      className={`transition-overlay ${
        playing ? "playing" : ""
      }`}
      aria-hidden="true"
    >
      <span className="overlay-line">
        $ cd ./about
        <span className="overlay-cursor" />
      </span>
    </div>
  );
}