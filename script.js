// NIYOMUFASHA Benjamin - Portfolio JavaScript

// ========== DOM Elements ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');

// ========== Mobile Navigation Toggle ==========
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== Navbar Scroll Effect ==========
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (currentScroll > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ========== Smooth Scroll to Top ==========
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Active Navigation Link on Scroll ==========
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========== Typing Effect for Home Section ==========
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    typingText.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect when page loads
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ========== Animate Skills Progress Bars ==========
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

// Trigger animation on scroll
let skillsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (sectionPosition < screenPosition) {
                animateSkills();
                skillsAnimated = true;
            }
        }
    }
});

// ========== Intersection Observer for Fade-in Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.timeline-item, .experience-card, .project-card, .certificate-card, .stat-card'
);

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ========== Contact Form Handling ==========
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
        // Send form data to backend
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (data.success) {
            showNotification(data.message, 'success');
            contactForm.reset();
        } else {
            showNotification(data.message, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to send message. Please make sure the server is running.', 'error');
    } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});


// ========== Smooth Scroll for All Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Dynamic Year in Footer ==========
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} NIYOMUFASHA Benjamin. All rights reserved.`;
}

// ========== Preloader (Optional) ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========== Prevent Right Click on Images (Optional Protection) ==========
// Uncomment if you want to protect your images
/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showNotification('Image protection enabled', 'error');
    });
});
*/

// ========== Console Message ==========
console.log('%c👋 Welcome to my Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cNIYOMUFASHA Benjamin - Software Developer', 'color: #6b7280; font-size: 14px;');
console.log('%c🔍 Looking for developers? Let\'s connect!', 'color: #10b981; font-size: 14px;');

// ========== Performance Monitoring ==========
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}

// ========== Service Worker Registration (for PWA - Optional) ==========
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}
*/
