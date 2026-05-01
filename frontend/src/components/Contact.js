import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="section-subtitle">Let's work together</p>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-card glass-card">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3 className="contact-title">Contact Information</h3>
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h5>Email</h5>
                        <p>mvasantharaj1972@gmail.com</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h5>Phone</h5>
                        <p>+94 74 3086 099</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h5>Location</h5>
                        <p>08/ Main Street, Santhively, Batticaloa</p>
                      </div>
                    </div>

                    <div className="social-links mt-4">
                      <a
                        href="https://github.com/Mukilan-Uki"
                        className="social-link"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mukilan-vasantharaj-640992372/"
                        className="social-link"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/mukilan_vasantharaj?igsh=d29mcXlxOXhrZWN6"
                        className="social-link"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control glass-input"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control glass-input"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control glass-input"
                        rows="4"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-glass w-100"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
