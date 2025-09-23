// Initialize particles.js after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile device
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-open')) {
                    navMenu.classList.remove('is-open');
                    navToggle.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                navToggle.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    
    // Mouse position tracking for interactive effects
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Advanced Particle System with 3D depth
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        const particleCount = isMobile ? 65 : 160;
        
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: particleCount, 
                    density: { 
                        enable: true, 
                        value_area: 800 
                    } 
                },
                color: { 
                    value: ['#9333ea', '#c084fc', '#a855f7', '#ff006e', '#00d4ff']
                },
                shape: { 
                    type: ['circle', 'triangle', 'edge'],
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: { 
                    value: 0.6, 
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: { 
                    value: 3, 
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: { 
                    enable: true,
                    distance: isMobile ? 150 : 120,
                    color: '#9333ea', 
                    opacity: 0.3, 
                    width: 1.5
                },
                move: {
                    enable: true,
                    speed: isMobile ? 1.5 : 2.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'bounce',
                    bounce: false,
                    attract: { 
                        enable: true,
                        rotateX: 3000,
                        rotateY: 3000
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { 
                        enable: !isMobile,
                        mode: ['repulse', 'bubble']
                    },
                    onclick: { 
                        enable: true, 
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: { 
                        distance: 100,
                        duration: 0.4
                    },
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 0.4,
                        opacity: 0.8,
                        speed: 3
                    },
                    push: { 
                        particles_nb: isMobile ? 3 : 6
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Subtle parallax effect for hero content
    const heroContent = document.querySelector('.hero-content');
    const hero = document.querySelector('.hero');
    
    if (!isMobile && heroContent && hero) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 150;  // Reduced from 50 to 150 (3x more subtle)
            const y = (e.clientY - window.innerHeight / 2) / 150;  // Reduced from 50 to 150 (3x more subtle)
            
            heroContent.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger animations for child elements
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.about, .skills-grid, .experience-item');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });
    
    // Subtle magnetic cursor effect for links
    if (!isMobile) {
        const magneticElements = document.querySelectorAll('.social-links a, .nav-menu a');
        
        magneticElements.forEach(elem => {
            elem.addEventListener('mousemove', (e) => {
                const rect = elem.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                elem.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;  // Reduced effect
            });
            
            elem.addEventListener('mouseleave', () => {
                elem.style.transform = '';
            });
        });
    }
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Performance monitoring for animations
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('Page animations initialized successfully');
        });
    }
});




