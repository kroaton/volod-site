// Particle effect configurations
const particleConfigs = {
    // 1 - Mouse Repulsion
    '1': {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    },
    
    // 2 - Color Gradients
    '2': {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#667eea', '#764ba2', '#f093fb', '#c471f5', '#f5576c'] },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 4,
                random: true,
                anim: { enable: true, speed: 3, size_min: 0.5, sync: false }
            },
            line_linked: { enable: false },
            move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: false },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } }
            }
        },
        retina_detect: true
    },
    
    // 3 - Constellation Effect
    '3': {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: false },
            size: { value: 2, random: true },
            line_linked: {
                enable: true,
                distance: 120,
                color: '#667eea',
                opacity: 0.8,
                width: 2,
                shadow: { enable: true, blur: 5, color: '#667eea' }
            },
            move: { enable: true, speed: 0.5, direction: 'none', random: true, straight: false, out_mode: 'bounce' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    },
    
    // 4 - Shape Morphing
    '4': {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: {
                type: ['circle', 'triangle', 'polygon'],
                polygon: { nb_sides: 5 }
            },
            opacity: { value: 0.5, random: false },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'bubble' },
                onclick: { enable: true, mode: 'repulse' },
                resize: true
            },
            modes: {
                bubble: { distance: 250, size: 8, duration: 2, opacity: 0.8 },
                repulse: { distance: 400, duration: 0.4 }
            }
        },
        retina_detect: true
    },
    
    // 5 - Snow Fall (Gravity)
    '5': {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 2,
                direction: 'bottom',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'bubble' },
                onclick: { enable: true, mode: 'repulse' },
                resize: true
            },
            modes: {
                bubble: { distance: 200, size: 6, duration: 0.3, opacity: 1 },
                repulse: { distance: 200, duration: 0.4 }
            }
        },
        retina_detect: true
    },
    
    // 6 - Bubble Mode
    '6': {
        particles: {
            number: { value: 40, density: { enable: false } },
            color: { value: ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff'] },
            shape: { type: 'circle' },
            opacity: {
                value: 0.3,
                random: true,
                anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 50,
                random: true,
                anim: { enable: true, speed: 2, size_min: 5, sync: false }
            },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'bubble' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                bubble: { distance: 250, size: 100, duration: 2, opacity: 0.8 },
                push: { particles_nb: 1 }
            }
        },
        retina_detect: true
    },
    
    // 7 - Fireworks (Explosion on click)
    '7': {
        particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'] },
            shape: { type: 'circle' },
            opacity: {
                value: 1,
                random: false,
                anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 3, size_min: 0.1, sync: false }
            },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: false },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                push: { particles_nb: 30 }
            }
        },
        retina_detect: true
    },
    
    // 8 - Slow Float
    '8': {
        particles: {
            number: { value: 20, density: { enable: false } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.2,
                random: true,
                anim: { enable: true, speed: 0.3, opacity_min: 0.05, sync: false }
            },
            size: {
                value: 80,
                random: true,
                anim: { enable: true, speed: 1, size_min: 40, sync: false }
            },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'bounce',
                bounce: true
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize: true
            }
        },
        retina_detect: true
    },
    
    // 9 - Strong Vortex + Repulsion
    '9': {
        particles: {
            number: { value: 250, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: true },
            size: { value: 2, random: true },
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
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { 
                    distance: 200, 
                    duration: 1.2,
                    speed: 0.5,
                    factor: 100,
                    easing: 'ease-out-quad',
                    maxSpeed: 50
                },
                push: { particles_nb: 10 }
            }
        },
        retina_detect: true
    },
    
    // 0 - Original/Default
    '0': {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 1200 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    }
};

// Initialize with default config
let currentEffect = '0';
if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particleConfigs[currentEffect]);
    
    // Add effect indicator
    const indicator = document.createElement('div');
    indicator.id = 'effect-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 14px;
        z-index: 1001;
        display: none;
    `;
    document.body.appendChild(indicator);
    
    // Keyboard event listener
    document.addEventListener('keydown', (e) => {
        // Check if it's a number key (0-9)
        if (e.key >= '0' && e.key <= '9' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            currentEffect = e.key;
            
            // Destroy current particles instance
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
            
            // Apply new configuration
            particlesJS('particles-js', particleConfigs[currentEffect]);
            
            // Show indicator
            const effectNames = {
                '1': 'Mouse Repulsion',
                '2': 'Color Gradients',
                '3': 'Constellation',
                '4': 'Shape Morphing',
                '5': 'Snow Fall',
                '6': 'Bubble Mode',
                '7': 'Fireworks (click for explosions)',
                '8': 'Slow Float',
                '9': 'Strong Vortex + Repulsion',
                '0': 'Original'
            };
            
            indicator.textContent = `Effect: ${effectNames[currentEffect]} [${currentEffect}]`;
            indicator.style.display = 'block';
            
            // Hide indicator after 2 seconds
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 2000);
        }
    });
}