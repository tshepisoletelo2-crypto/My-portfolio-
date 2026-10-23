/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - TSHEPISO LETELO
 * ICT Student | Aspiring Software Developer
 * Clean, modular, beginner-friendly vanilla JavaScript (ES6+)
 * Safe execution: checks element existence before attaching listeners or running logic.
 * ==========================================================================
 */

// Run scripts after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initDynamicYear();
  initActiveNavLink();
  initMobileNavigation();
  initBackToTop();
  initScrollReveal();
  initSkillBars();
  initProjects();
  initContactForm();
});

/**
 * --------------------------------------------------------------------------
 * 1. DYNAMIC COPYRIGHT YEAR
 * Updates footer year dynamically, while keeping 2026 as static fallback.
 * --------------------------------------------------------------------------
 */
function initDynamicYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear.toString();
  }
}

/**
 * --------------------------------------------------------------------------
 * 2. ACTIVE NAVIGATION LINK
 * Detects current page filename from URL and highlights matching nav link.
 * --------------------------------------------------------------------------
 */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  // Extract the filename from current URL pathname (e.g., 'about.html')
  let path = window.location.pathname.split('/').pop();
  if (!path || path === '') {
    path = 'index.html'; // Default to home page
  }

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;

    // Remove any query strings or hashes
    const cleanHref = linkHref.split('?')[0].split('#')[0];

    if (cleanHref === path) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 3. MOBILE NAVIGATION (HAMBURGER MENU)
 * Toggles responsive menu, updates ARIA attributes, and closes on link click or ESC.
 * --------------------------------------------------------------------------
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  function toggleMenu(isOpen) {
    const currentState = toggleBtn.classList.contains('is-active');
    const newState = typeof isOpen === 'boolean' ? isOpen : !currentState;

    toggleBtn.classList.toggle('is-active', newState);
    navMenu.classList.toggle('is-open', newState);
    toggleBtn.setAttribute('aria-expanded', newState ? 'true' : 'false');

    // Prevent background scroll when mobile menu is open
    document.body.style.overflow = newState ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking on any navigation link
  const menuLinks = navMenu.querySelectorAll('.nav-link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * --------------------------------------------------------------------------
 * 4. BACK TO TOP BUTTON
 * Shows button when scrolled down > 300px and scrolls smoothly to top on click.
 * --------------------------------------------------------------------------
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 5. SCROLL-REVEAL ANIMATIONS
 * Adds subtle fade-in / slide-up animations using IntersectionObserver.
 * --------------------------------------------------------------------------
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // If user prefers reduced motion, show immediately without animation
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * --------------------------------------------------------------------------
 * 6. SKILL BARS ANIMATION
 * Animates progress bar widths when skills section scrolls into view.
 * --------------------------------------------------------------------------
 */
function initSkillBars() {
  const progressBars = document.querySelectorAll('.skill-progress');
  if (!progressBars.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') || '0%';
        bar.style.width = targetWidth;
        obs.unobserve(bar);
      }
    });
  }, {
    threshold: 0.2
  });

  progressBars.forEach(bar => observer.observe(bar));
}

/**
 * --------------------------------------------------------------------------
 * 7. PROJECTS DATA & DYNAMIC RENDERING / FILTERING
 *
 * TO CUSTOMIZE YOUR PROJECTS & REPLACE URLS:
 * Edit the projects array below. Replace demoUrl and githubUrl "#" values
 * with your actual GitHub repository links and live project demo links!
 * --------------------------------------------------------------------------
 */
const projectsData = [
  {
    id: 1,
    title: 'Student Society Membership System',
    description: 'A comprehensive web application designed to manage student society members, tiered membership types, society activities, calendar events, and merchandise inventory tracking.',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    category: ['web', 'database'],
    image: 'image.png',
    imageAlt: 'Student Society Membership System interface preview',
    // CHANGE YOUR LINKS HERE:
    demoUrl: '#',   // Replace '#' with live demo link if available (e.g., https://my-society-demo.com)
    githubUrl: '#'  // Replace '#' with your GitHub repo (e.g., https://github.com/tshepisoletelo/society-system)
  },
  {
    id: 2,
    title: 'Bus Tracking System (GoTrack)',
    description: 'An intuitive public transport interface enabling commuters to track real-time bus locations, check upcoming arrival estimates, view route stops, and receive schedule alerts.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: ['web'],
    image: 'images/project2.jpg',
    imageAlt: 'GoTrack Smart Transit Bus Tracking System interface preview',
    // CHANGE YOUR LINKS HERE:
    demoUrl: '#',   // Replace '#' with live demo link if available
    githubUrl: '#'  // Replace '#' with your GitHub repo (e.g., https://github.com/tshepisoletelo/bus-tracker)
  },
  {
    id: 3,
    title: 'University Fee Calculator',
    description: 'A desktop application developed with Java and JavaFX that calculates academic tuition fees according to enrolled credit modules, residency status, and financial assistance options.',
    tags: ['Java', 'JavaFX'],
    category: ['java'],
    image: 'images/project3.jpg',
    imageAlt: 'JavaFX 21 - University Fee Calculator desktop interface preview',
    // CHANGE YOUR LINKS HERE:
    demoUrl: '#',   // Replace '#' with project release / demo video link
    githubUrl: '#'  // Replace '#' with your GitHub repo (e.g., https://github.com/tshepisoletelo/fee-calculator)
  },
  {
    id: 4,
    title: 'Student Management System',
    description: 'An administrative desktop software solution that stores, updates, searches, and generates academic records, grading data, and course enrollments with secure MySQL storage.',
    tags: ['Java', 'MySQL'],
    category: ['java', 'database'],
    image: 'images/project4.jpg',
    imageAlt: 'Student Management System database UI preview',
    // CHANGE YOUR LINKS HERE:
    demoUrl: '#',   // Replace '#' with project release / demo video link
    githubUrl: '#'  // Replace '#' with your GitHub repo (e.g., https://github.com/tshepisoletelo/student-management)
  },
  {
    id: 5,
    title: 'Activity-Bank-Account-',
    description: 'An object-oriented banking simulation application implementing secure account management, balance inquiries, deposit and withdrawal transactions, overdraft calculations, and chronological account activity logs.',
    tags: ['Java', 'OOP', 'Data Structures'],
    category: ['java', 'database'],
    image: 'images/project5.jpg',
    imageAlt: 'Activity-Bank-Account- system interface preview',
    // CHANGE YOUR LINKS HERE:
    demoUrl: '#',   // Replace '#' with project release / demo video link
    githubUrl: '#'  // Replace '#' with your GitHub repo
  }
];

function initProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!projectsGrid) return;

  // Render project cards from the projectsData array
  function renderProjects(filter = 'all') {
    const filteredProjects = projectsData.filter(project => {
      if (filter === 'all') return true;
      return project.category.includes(filter);
    });

    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filteredProjects.map(project => {
      const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
      
      return `
        <article class="project-card reveal is-revealed" data-category="${project.category.join(' ')}">
          <div class="project-image-wrap">
            <img 
              src="${project.image}" 
              alt="${project.imageAlt}" 
              class="project-img"
              loading="lazy"
              onerror="this.onerror=null; this.src='images/${project.image.replace('.jpg', '.svg')}';"
            />
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
            <div class="project-actions">
              <a href="${project.demoUrl}" class="btn btn-primary btn-sm" aria-label="View ${project.title} project details">
                View Project ↗
              </a>
              <a href="${project.githubUrl}" class="btn btn-outline btn-sm" aria-label="View ${project.title} GitHub repository">
                GitHub ↗
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Initial render
  renderProjects('all');

  // Filter button click handlers
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter') || 'all';

      // Update active button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Re-render matching projects
      renderProjects(filterValue);
    });
  });
}

/**
 * --------------------------------------------------------------------------
 * 8. CONTACT FORM VALIDATION & FEEDBACK
 *
 * Validates:
 * 1. Empty fields (Name, Email, Subject, Message)
 * 2. Invalid email format (Standard regex pattern)
 * 3. Message length (< 10 characters)
 *
 * NOTE FOR CONNECTING A REAL FORM SERVICE:
 * This is currently a front-end only validator. To connect to an active backend
 * email service without running a server, you can:
 * - Option A: Use Formspree (https://formspree.io): Change <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
 * - Option B: Use Web3Forms (https://web3forms.com): Add <input type="hidden" name="access_key" value="YOUR_KEY">
 * - Option C: Use EmailJS (https://www.emailjs.com) SDK in this function.
 * --------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusBanner = document.getElementById('formStatus');

  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Helper function to set inline error
  function setError(inputElement, errorMessage) {
    inputElement.classList.add('is-invalid');
    const errorDisplay = document.getElementById(`${inputElement.id}-error`);
    if (errorDisplay) {
      errorDisplay.textContent = errorMessage;
    }
  }

  // Helper function to clear inline error
  function clearError(inputElement) {
    inputElement.classList.remove('is-invalid');
    const errorDisplay = document.getElementById(`${inputElement.id}-error`);
    if (errorDisplay) {
      errorDisplay.textContent = '';
    }
  }

  // Email validation regex (standard format verification)
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  // Clear errors on user input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        clearError(input);
        if (statusBanner) {
          statusBanner.style.display = 'none';
        }
      });
    }
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent standard page reload

    let isValid = true;
    let firstInvalidInput = null;

    // 1. Validate Name
    if (!nameInput.value.trim()) {
      setError(nameInput, 'Please enter your full name.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
      clearError(nameInput);
    }

    // 2. Validate Email
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      setError(emailInput, 'Please enter your email address.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else if (!isValidEmail(emailValue)) {
      setError(emailInput, 'Please enter a valid email address (e.g. name@domain.com).');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
      clearError(emailInput);
    }

    // 3. Validate Subject
    if (!subjectInput.value.trim()) {
      setError(subjectInput, 'Please enter a message subject.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = subjectInput;
    } else {
      clearError(subjectInput);
    }

    // 4. Validate Message (Must not be empty and at least 10 characters)
    const messageValue = messageInput.value.trim();
    if (!messageValue) {
      setError(messageInput, 'Please enter your message.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = messageInput;
    } else if (messageValue.length < 10) {
      setError(messageInput, 'Please enter a message with at least 10 characters.');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = messageInput;
    } else {
      clearError(messageInput);
    }

    // Focus on first invalid field if validation failed
    if (!isValid) {
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      return;
    }

    // If all validation rules passed:
    if (statusBanner) {
      statusBanner.className = 'form-status is-success';
      statusBanner.innerHTML = `
        <strong>✓ Validation Successful!</strong><br />
        Your message details are complete and formatted correctly. 
        <em>(Note: As this is a front-end portfolio demonstration, no backend email service was invoked. Please reach out directly to 
        <a href="mailto:tshepisoletelo2@gmail.com" style="text-decoration: underline; font-weight: 600;">tshepisoletelo2@gmail.com</a> 
        or connect Formspree/EmailJS as detailed in the README).</em>
      `;
      statusBanner.style.display = 'block';
      statusBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Reset the form fields
    form.reset();
  });
}
