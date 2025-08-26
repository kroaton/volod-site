# CLAUDE.md

Project instructions for Claude Code (claude.ai/code) when working with this repository.

## Overview

Static portfolio website for Vladimir Cazacu (Technical Artist/Game Developer) at https://volod.xyz

## Structure

```
├── index.html          # Homepage with particles
├── cv.html            # Resume page
├── posts.html         # Blog listing
├── 404.html          # Error page
├── robots.txt        # AI crawler blocking
└── assets/
    ├── css/
    │   ├── themes.css      # Midnight Purple theme
    │   └── typography.css  # Space Grotesk font
    ├── js/
    │   ├── main.js         # Particles: 160 desktop/65 mobile
    │   └── particles.min.js
    └── files/
        └── photo.jpg       # Profile photo (28KB)
```

## Design System

- **Theme**: Midnight Purple (#240e45 → #0f0825 gradient)
- **Accent**: #9333ea (purple particles/borders)
- **Typography**: Space Grotesk (300-600 weights)
- **Particles**: Purple with lines, vortex effect enabled on all devices

## Development

```bash
# Local server
python -m http.server 8000

# Deploy: Auto via GitHub Pages on push to master
```

## Key Points

- No build process - pure HTML/CSS/JS
- Mobile optimized (65 particles, 150px line distance)
- AI crawlers blocked via robots.txt
- Social links: x.com/volodXYZ, linkedin.com/in/volodXYZ/