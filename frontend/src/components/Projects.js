import React, { useState } from "react";
import DisasterAlertSystem from "../assets2/DisasterAlertSystem.JPG";
import CubeCake from "../assets2/cubeCakeShop.png";
import Zenzo from "../assets2/zenzo.png";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Cube Cake - Custom Cake Builder",
      subtitle: "Full-stack e-commerce platform",
      image: CubeCake,
      description:
        "A full-stack web application allowing users to customize cakes (base, frosting, size) with user authentication, shop registration, and order management system. Deployed with Vercel frontend + Render backend.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Vercel",
        "REST API",
        "JWT Authentication",
      ],
      link: "https://cube-cake-deploy.vercel.app/",
      note: "Live — backend cold start may take 30 seconds",
    },
    {
      title: "ZENZO Studio - Cinematic and Branding Portfolio",
      subtitle: "Portfolio website for a creative studio",
      image: Zenzo,
      description:
        "A portfolio website showcasing ZENZO Studio's cinematic and branding work, featuring a sleek design and smooth navigation to highlight their creative projects.",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      link: "https://mukilan-uki.github.io/zenzoStudioDemo/",
      note: "Live demo",
    },
    {
      title: "Cinema Ticket Booking Web Page Design",
      subtitle: "Responsive dark prototype",
      image: "/assets/project1.JPG",
      description:
        "A Figma-designed cinema ticket booking experience with mobile-first, dark UI styling and clean hierarchy.",
      technologies: ["Figma", "UI/UX", "Responsive Design"],
      link: "https://mukilan-uki.github.io/Disaster-alert-system/",
      note: "Design showcase",
    },
    {
      title: "Disaster Alert System",
      subtitle: "Realtime API dashboard",
      image: DisasterAlertSystem,
      description:
        "A realtime alert dashboard built with React and extensible API integration for fast incident visibility.",
      technologies: ["React", "Bootstrap", "API Integration"],
      link: "https://mukilan-uki.github.io/Disaster-alert-system/",
      github: "https://github.com/Mukilan-Uki/Disaster-alert-system",
    },
    {
      title: "To-Do List Website",
      subtitle: "Simple productivity layout",
      image: "/assets/project3.JPG",
      description:
        "A responsive task management landing page built to demonstrate clean information flow and CTA usability.",
      technologies: ["Figma", "HTML", "CSS"],
      note: "UI concept",
    },
    {
      title: "Dressing Shopping Website",
      subtitle: "E-commerce concept",
      image: "/assets/project4.JPG",
      description:
        "A modern online shopping landing page designed to help users find outfits quickly with an intuitive grid layout.",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      note: "Prototype site",
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
            {projects.map((project, index) => {
              let cardPosition = "hidden";
              if (index === currentProject) cardPosition = "active";
              else if (
                index ===
                (currentProject - 1 + projects.length) % projects.length
              )
                cardPosition = "prev";
              else if (index === (currentProject + 1) % projects.length)
                cardPosition = "next";

              return (
                <div
                  key={index}
                  className={`project-card glass-card position-${cardPosition}`}
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
                    <button
                      className="btn btn-primary-glass mt-3 view-project-btn"
                      onClick={() => handleViewProject(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
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
          <div
            className="modal-dialog modal-dialog-centered modal-fullscreen-custom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content glass-card">
              <div className="modal-header border-0">
                <div className="modal-title-section">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <p className="modal-subtitle">{selectedProject.subtitle}</p>
                </div>
                <div className="modal-header-actions">
                  <button
                    type="button"
                    className="btn btn-outline-glass btn-back"
                    onClick={closeModal}
                  >
                    <i className="fas fa-arrow-left"></i> Back
                  </button>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-project-image"
                  />
                </div>
                <div className="modal-details">
                  <div className="modal-section">
                    <h6 className="modal-section-title">About This Project</h6>
                    <p className="modal-description">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="modal-section">
                    <h6 className="modal-section-title">Technologies Used</h6>
                    <div className="technologies-container">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge bg-primary me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-section">
                    <h6 className="modal-section-title">Links</h6>
                    <div className="d-flex gap-3 flex-wrap">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-glass"
                        >
                          <i className="fas fa-external-link-alt"></i> View Live
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-glass"
                        >
                          <i className="fab fa-github"></i> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                  {selectedProject.note && (
                    <div className="modal-note">
                      <i className="fas fa-info-circle"></i>{" "}
                      {selectedProject.note}
                    </div>
                  )}
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
