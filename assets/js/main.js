// Initialize particles.js with vortex + repulsion effect
if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: 250, 
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
                value: 2, 
                random: true 
            },
            line_linked: { 
                enable: true, 
                distance: 100, 
                color: '#ffffff', 
                opacity: 0.2, 
                width: 1 
            },
            move: {
                enable: true,
                speed: 4,
                direction: 'none',
                random: false,
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
                    enable: true, 
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
                    particles_nb: 10 
                }
            }
        },
        retina_detect: true
    });
}