const skills = [
  {
    number: "01",
    title: "LANGUAGES",
    items: "Python · Java · C++",
  },
  {
    number: "02",
    title: "MACHINE LEARNING",
    items:
      "PyTorch · TensorFlow · Scikit-learn · XGBoost · Random Forest",
  },
  {
    number: "03",
    title: "COMPUTER VISION",
    items: "OpenCV · YOLOv8",
  },
  {
    number: "04",
    title: "DATA",
    items: "Pandas · NumPy · MySQL",
  },
  {
    number: "05",
    title: "TOOLS",
    items: "Git · GitHub · Jupyter · VS Code",
  },
];

export default function Skills() {
  return (
    <section className="page-container">
      <div className="section-label">SKILLS / TOOLKIT</div>

      <h1 className="page-title">
        Things I
        <br />
        work with.
      </h1>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.number}>
            <span className="skill-number">{skill.number}</span>

            <div>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}