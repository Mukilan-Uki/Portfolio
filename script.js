const portfolioData = {
    projects: [
        { 
            title: "To-Do List Website", 
            subtitle: "Responsive Design", 
            image: "assets/project1.JPG",
            description: "A fully functional to-do list application with drag & drop, filtering, and local storage.",
            technologies: ["HTML", "CSS", "JavaScript", "Local Storage"]
        },
        { 
            title: "Making Ghost", 
            subtitle: "Responsive Design", 
            image: "assets/project2.JPG",
            description: "A creative platform for ghost animation and interactive storytelling.",
            technologies: ["HTML", "CSS", "JavaScript", "Canvas API"]
        },
        { 
            title: "Hello There", 
            subtitle: "Responsive Design", 
            image: "assets/project3.JPG",
            description: "A modern landing page with smooth animations and interactive elements.",
            technologies: ["HTML", "CSS", "JavaScript", "GSAP"]
        },
        { 
            title: "Ukis Dreamspace", 
            subtitle: "Responsive Design", 
            image: "assets/project4.JPG",
            description: "A portfolio website for Dreamspace Academy showcasing student projects.",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
    ],
    skills: [
        { name: "Frontend", level: 95 },
        { name: "Backend", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Tools", level: 75 }
    ]
};

const projectsGrid = document.getElementById('projectsGrid');
const projectDots = document.getElementById('projectDots');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const navbar = document.querySelector('.glass-nav');
const progressBars = document.querySelectorAll('.progress-bar');

document.addEventListener('DOMContentLoaded', function() {
    initializeProjects();
    initializeProgressBars();
    initializeScrollEvents();
    initializeForm();
    initializeFloatingElements();
    initializeTypingEffect();
});

function initializeProjects() {
    projectsGrid.innerHTML = '';
    projectDots.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-card';
        projectCard.setAttribute('data-index', index);
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <button class="btn btn-primary-glass mt-3 view-project-btn" data-index="${index}">View Details</button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => scrollToProject(index));
        projectDots.appendChild(dot);
    });
    
    // Initialize project navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentProject = 0;
    
    prevBtn.addEventListener('click', () => {
        currentProject = (currentProject - 1 + portfolioData.projects.length) % portfolioData.projects.length;
        scrollToProject(currentProject);
    });
    
    nextBtn.addEventListener('click', () => {
        currentProject = (currentProject + 1) % portfolioData.projects.length;
        scrollToProject(currentProject);
    });
    
    // Initialize view project buttons
    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showProjectModal(index);
        });
    });
}

// Scroll to specific project
function scrollToProject(index) {
    const projectCards = document.querySelectorAll('.project-card');
    const dots = document.querySelectorAll('.dot');
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    // Scroll to project
    projectCards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
    
    // Update current project index
    currentProject = index;
}

// Show project modal
function showProjectModal(index) {
    const project = portfolioData.projects[index];
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'projectModal';
    modal.innerHTML = `
        <div class="modal-dialog text-light modal-dialog-centered modal-lg">
            <div class="modal-content glass-card" style="box-sizing: border-box;
            height: 940px;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <div class="modal-header border-0">
                    <h5 class="modal-title">${project.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-4">
                    <h6>Description</h6>
                    <p>${project.description}</p>
                    <h6 class="mt-3">Technologies Used</h6>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        ${project.technologies.map(tech => `<span class="badge bg-primary">${tech}</span>`).join('')}
                    </div>
                    <h6>Project Details</h6>
                    <p>This project showcases responsive design principles and modern web development techniques. It's fully functional and optimized for all devices.</p>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-glass" data-bs-dismiss="modal">Close</button>
                    <a href="#" class="btn btn-primary-glass">View Live Demo</a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Initialize and show modal
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    // Remove modal from DOM after it's hidden
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

// Initialize progress bars
function initializeProgressBars() {
    // Set initial width to 0
    progressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// Animate progress bars when in viewport
function animateProgressBars() {
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.parentElement.getBoundingClientRect();
        
        // Check if element is in viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Animate to target width
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, 200);
        }
    });
}

// Initialize scroll events
function initializeScrollEvents() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // Animate progress bars when in view
        animateProgressBars();
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Back to top button
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
                
                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize contact form
function initializeForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || document.querySelector('#contactForm input[type="text"]').value;
            const email = formData.get('email') || document.querySelector('#contactForm input[type="email"]').value;
            const message = formData.get('message') || document.querySelector('#contactForm textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showAlert('Please fill in all fields.', 'danger');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Please enter a valid email address.', 'danger');
                return;
            }
            
            // Show success message (in a real app, you would send this to a server)
            showAlert('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // In a real application, you would send the data to a server here
            console.log('Form submitted:', { name, email, message });
        });
    }
}

// Show alert message
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} form-alert`;
    alert.textContent = message;
    
    // Add alert to form
    contactForm.prepend(alert);
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Initialize floating elements animation
function initializeFloatingElements() {
    const floatElements = document.querySelectorAll('.float-element');
    
    // Add random animation delays
    floatElements.forEach((el, index) => {
        // Randomize animation duration and delay
        const duration = 3 + Math.random() * 2; // 3-5 seconds
        const delay = index * 0.5; // Stagger delay
        
        el.style.animationDuration = `${duration}s`;
        el.style.animationDelay = `${delay}s`;
    });
}

// Initialize typing effect for hero title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    const letters = originalText.split('');
    
    // Clear the text
    heroTitle.textContent = '';
    
    // Type out the text
    letters.forEach((letter, index) => {
        setTimeout(() => {
            heroTitle.textContent += letter;
            
            // Add a subtle bounce effect
            heroTitle.style.transform = 'scale(1.1)';
            setTimeout(() => {
                heroTitle.style.transform = 'scale(1)';
            }, 100);
        }, index * 100);
    });
}

// Add CSS for tech tags and form alert
const style = document.createElement('style');
style.textContent = `
    .tech-tag {
        display: inline-block;
        background: rgba(255, 255, 255, 0.2);
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        margin-right: 5px;
        margin-bottom: 5px;
    }
    
    .form-alert {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1000;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .modal-content.glass-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
    }
    
    .modal-backdrop {
        backdrop-filter: blur(5px);
    }
    
    .badge.bg-primary {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)) !important;
    }
`;
document.head.appendChild(style);

// Add event listener for DOM fully loaded
window.addEventListener('load', function() {
    // Animate progress bars on page load if they're already in view
    animateProgressBars();
    
    // Add a subtle entrance animation to elements
    const animatedElements = document.querySelectorAll('.glass-card, .section-title, .section-subtitle');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});