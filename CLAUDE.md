# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static HTML/CSS/JS portfolio website hosted at https://volod.xyz showcasing Vladimir Cazacu's professional profile as a Lead Technical Artist.

## Architecture & Structure

Pure static site with no build process required:

- **HTML Pages**: 
  - `index.html` - Homepage with hero section and particles effect
  - `cv.html` - CV/resume page
  - `posts.html` - Blog posts listing
  - `404.html` - Error page

- **Assets** (`assets/` directory):
  - `css/style.css` - All styling
  - `js/main.js` - Particles configuration
  - `js/particles.min.js` - Particles library
  - `files/photo.jpg` - Profile photo
  - `files/cv.pdf` - Downloadable CV

## Local Development

Simply open `index.html` in a web browser or use any static server:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# Or just open index.html directly
```

## Deployment

The site is configured for GitHub Pages deployment with custom domain volod.xyz (CNAME file present). Any changes pushed to the repository are automatically deployed.