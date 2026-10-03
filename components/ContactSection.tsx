export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        <div className="contact-number">
          04
        </div>

        <div className="contact-content">
          <p className="contact-kicker">
            CONTACT
          </p>

          <h2>
            Let&apos;s make
            <br />
            something useful.
          </h2>

          <p className="contact-intro">
            Open to internships, graduate opportunities, and
            interesting projects in AI, data, and machine learning.
          </p>

          <div className="contact-actions">

            <a
              href="mailto:shanumsharief@gmail.com"
              className="contact-email"
            >
              shanumsharief@gmail.com
              <span>↗</span>
            </a>

            <a
              href="https://github.com/shanumsharief"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-github"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>

          <p className="contact-location">
            India · Open to internships &amp; graduate opportunities
          </p>
        </div>

    

      </div>
    </section>
  );
}