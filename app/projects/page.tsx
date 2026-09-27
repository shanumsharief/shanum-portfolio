export default function Projects() {
  return (
    <section className="page-container">
      <div className="section-label">WORK</div>

      <h1 className="page-title">Things I’ve built.</h1>

      <div className="project-card">
        <span>01</span>

        <h2>Non-Invasive Hemoglobin Estimation</h2>

        <p>
          A multi-wavelength PPG system for estimating hemoglobin concentration
          using machine learning.
        </p>

        <small>
          ESP32 · MAX30102 · Python · XGBoost · Random Forest
        </small>
      </div>

      <div className="project-card">
        <span>02</span>

        <h2>Smart Shelf Inventory</h2>

        <p>
          Computer vision based shelf monitoring and inventory detection system.
        </p>

        <small>
          Python · YOLOv8 · OpenCV · Gradio
        </small>
      </div>
    </section>
  );
}