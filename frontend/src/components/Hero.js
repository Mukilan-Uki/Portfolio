import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <p className="hero-subtitle">
                <span className="year">2025</span>
                <span className="separator"></span>
                Software Engineer
              </p>

              <div className="stats-container mb-4">
                <div className="stat-box glass-card">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-text">Hours working experience</p>
                </div>
                <div className="stat-box glass-card">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-text">Projects Completed</p>
                </div>
              </div>

              <h1 className="hero-title">Mukilan</h1>
              <h2 className="hero-subtitle-large">Software Engineer Undergraduate</h2>

              <div className="hero-btns mt-4">
                <a href="#projects" className="btn btn-primary-glass">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-glass">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-container">
              <div className="image-wrapper glass-card">
                <img
                  src="/assets/mukilan.png"
                  alt="Mukilan"
                  className="hero-image"
                />
                <div className="image-glow"></div>
              </div>
              <div className="floating-elements">
                <div className="float-element el1 glass-card">React</div>
                <div className="float-element el2 glass-card">Node.js</div>
                <div className="float-element el3 glass-card">UI/UX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
