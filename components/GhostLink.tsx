"use client";

export default function GhostLink() {
  const handleClick = () => {
  document.querySelector(".scroll-transition")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <button
      className="ghost-button"
      onClick={handleClick}
      aria-label="Scroll to About"
    >
      <div className="line-ghost-wrap">
        <svg
          viewBox="0 0 80 90"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ghost-outline"
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
          />

          <ellipse
            className="ghost-blush"
            cx="20"
            cy="46"
            rx="4"
            ry="3"
          />

          <ellipse
            className="ghost-blush"
            cx="60"
            cy="46"
            rx="4"
            ry="3"
          />

          <ellipse
            className="ghost-eye"
            cx="30"
            cy="40"
            rx="3.2"
            ry="4"
          />

          <ellipse
            className="ghost-eye"
            cx="50"
            cy="40"
            rx="3.2"
            ry="4"
          />
        </svg>
      </div>
    </button>
  );
}