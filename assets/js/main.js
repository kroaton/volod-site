// Initialize particles.js after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        // Detect mobile device
        const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Adjust particle count based on device
        const particleCount = isMobile ? 50 : 120;
        
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
                    value: '#ffffff' 
                },
                shape: { 
                    type: 'circle' 
                },
                opacity: { 
                    value: 0.7, 
                    random: true 
                },
                size: { 
                    value: 2.8, 
                    random: true 
                },
                line_linked: { 
                    enable: !isMobile, // Disable lines on mobile for performance
                    distance: 100, 
                    color: '#ffffff', 
                    opacity: 0.2, 
                    width: 1 
                },
                move: {
                    enable: true,
                    speed: isMobile ? 2 : 4, // Slower on mobile
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'bounce',
                    bounce: false,
                    attract: { 
                        enable: !isMobile, // Disable vortex on mobile
                        rotateX: 3000, 
                        rotateY: 3000 
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { 
                        enable: !isMobile, // Disable hover effects on mobile
                        mode: 'repulse' 
                    },
                    onclick: { 
                        enable: true, 
                        mode: 'push' 
                    },
                    resize: true
                },
                modes: {
                    repulse: { 
                        distance: 130, 
                        duration: 1.2,
                        speed: 0.5,
                        factor: 100,
                        easing: 'ease-out-quad'
                    },
                    push: { 
                        particles_nb: isMobile ? 4 : 10 
                    }
                }
            },
            retina_detect: true
        });
    }
});