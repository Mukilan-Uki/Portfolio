import React, { useState } from "react";
import DisasterAlertSystem from "../assets2/DisasterAlertSystem.JPG";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Cinema Ticket Booking Web Page Design",
      subtitle: "Responsive & Dark theme Design",
      image: "/assets/project1.JPG",
      description:
        "It isn't a full functional ticket booking web site. Its a prototype(Figma Design).",
      technologies: ["Figma", "Some other web sides"],
    },
    {
      title: "Disaster Alert System",
      subtitle: "Using realtime API to get the data and show it in a web page",
      image: DisasterAlertSystem,
      description: (
        <a
          href="https://mukilan-uki.github.io/Disaster-alert-system/"
          className="btn btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      ),
      technologies: ["React", "Bootstrap", "API Integration"],
    },
    {
      title: "To-Do list web side",
      subtitle: "Responsive & Light theme Design",
      image: "/assets/project3.JPG",
      description: "A modern life's important thing, Its only a web design",
      technologies: ["Figma", "Some other web sides"],
    },
    {
      title: "Dressing shopping web site",
      subtitle: "Responsive Design",
      image: "/assets/project4.JPG",
      description: "It is created for save your time to shopping",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const scrollToProject = (index) => {
    setCurrentProject(index);
    const projectCards = document.querySelectorAll(".project-card");
    if (projectCards[index]) {
      projectCards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = (currentProject - 1 + projects.length) % projects.length;
    setCurrentProject(newIndex);
    scrollToProject(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentProject + 1) % projects.length;
    setCurrentProject(newIndex);
    scrollToProject(newIndex);
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">Check out my recent work</p>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card glass-card"
                data-index={index}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="btn btn-primary-glass mt-3 view-project-btn"
                    onClick={() => handleViewProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="project-navigation">
            <button className="nav-btn prev-btn" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="project-dots">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentProject ? "active" : ""}`}
                  onClick={() => scrollToProject(index)}
                ></div>
              ))}
            </div>
            <button className="nav-btn next-btn" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {showModal && selectedProject && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content glass-card">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid mb-3"
                />
                <p>{selectedProject.description}</p>
                <div className="technologies">
                  <strong>Technologies:</strong>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-primary me-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
