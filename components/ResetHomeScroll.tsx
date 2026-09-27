"use client";

import { useEffect } from "react";

export default function ResetHomeScroll() {
  useEffect(() => {
    // Remove any #about / #skills / etc. from the URL on refresh.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    // Prevent browser scroll restoration.
    window.history.scrollRestoration = "manual";

    // Force Home position.
    window.scrollTo(0, 0);

    // Run again after the browser finishes its initial restoration.
    const frame1 = requestAnimationFrame(() => {
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
    };
  }, []);

  return null;
}