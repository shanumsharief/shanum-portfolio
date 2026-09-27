import AboutSection from "../components/AboutSection";
import GhostLink from "../components/GhostLink";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section id="home" className="hero">
        <div className="home-inner">

          <p className="home-kicker">
            &gt; building something that turns data into something useful
            <span className="typing-cursor" />
          </p>

          <h1 className="home-name">
            Khadeeja
            <br />
            Shanum
          </h1>

          <div className="home-info">
            <p>AI &amp; Data Science Student</p>
            <p>Open to internships &amp; graduate opportunities</p>
          </div>

          <div className="home-actions">
            <a href="#projects" className="home-primary">
              See my work
            </a>

            <a href="#contact" className="home-secondary">
              Get in touch
            </a>
          </div>

        </div>

        <GhostLink />
      </section>

      {/* RESERVES SCROLL SPACE FOR FIXED HERO */}
      <div className="hero-spacer" />

      {/* ABOUT */}
      <AboutSection />

      {/* SKILLS */}
      <SkillsSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}