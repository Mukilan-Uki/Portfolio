import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="about-card glass-card">
              <h3 className="about-card-title">Who I Am</h3>
              <p className="about-card-text">
                Mukilan is currently pursuing a BSc (Hons) in Software Engineering at NSBM Green University while continuing to build practical experience in modern web development and UI/UX design. He has completed diplomas in Information Technology (DIIT), English (DIE), and Full Stack Development, strengthening both his technical and communication skills.
                Passionate about creating clean, modern, and user-focused digital experiences, Mukilan enjoys working on frontend development, branding-focused websites, and creative tech projects that combine functionality with visual storytelling.
              </p>
              <div className="signature">
                <span>Mukilan</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="about-card glass-card">
              <div className="achievement-badge">
                <h1 className="achievement-percent">120%</h1>
                <p>Average increase in client engagement in first 6 months</p>
              </div>
              <img
                src="/assets/mukilan2.jpeg"
                alt="Mukilan"
                className="about-image"
              />
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="about-card glass-card">
              <div className="image-container">
                <img
                  src="/assets/mukilanWithBg.jpg"
                  alt="Mukilan"
                  className="about-image-circle"
                />
              </div>

              <div className="about-list">
                <div className="about-list-item">
                  <div className="list-icon">
                    <i className="fas fa-chess-knight"></i>
                  </div>
                  <p>
                    Recognized achievement as a Royal College chess certificate
                    holder, reflecting problem-solving ability, strategy, and
                    discipline.
                  </p>
                </div>

                <div className="about-list-item">
                  <div className="list-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <p>
                    Long-term ambition: pursue higher studies abroad through
                    opportunities such as the DAAD scholarship and contribute to
                    impactful solutions in the global IT industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
