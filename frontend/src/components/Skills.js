import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const progress = bar.getAttribute("data-progress");
      bar.style.width = `${progress}%`;
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fab fa-html5"></i>
              </div>
              <h4 className="skill-title">Frontend</h4>
              <p className="skill-text">
                HTML, CSS, JavaScript, React, Bootstrap
              </p>
              <div className="skill-progress">
                <div className="progress-bar" data-progress="90"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-server"></i>
              </div>
              <h4 className="skill-title">Backend</h4>
              <p className="skill-text">Node.js, Express, MongoDB, REST APIs</p>
              <div className="skill-progress">
                <div className="progress-bar" data-progress="73"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h4 className="skill-title">UI/UX Design</h4>
              <p className="skill-text">
                Figma, Adobe XD, Wireframing, Prototyping
              </p>
              <div className="skill-progress">
                <div className="progress-bar" data-progress="84"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4 className="skill-title">Tools</h4>
              <p className="skill-text">
                Git, GitHub, VS Code, Postman, Docker
              </p>
              <div className="skill-progress">
                <div className="progress-bar" data-progress="80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
