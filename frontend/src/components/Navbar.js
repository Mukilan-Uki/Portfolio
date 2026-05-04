import React, { useState } from "react";

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top glass-nav">
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          <img src="/assets/logo.svg" alt="Logo" className="logo" />
          <span className="brand-name">Mukilan Vasantharaj</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                href="#skills"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="call-btn ms-lg-4">
            <a href="tel:+94779673118" className="btn btn-glass">
              <i className="fas fa-phone-alt me-2"></i>Whatsapp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
