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
  - `css/style.min.css` - Minified CSS (dark theme)
  - `js/main.js` - Particles config (160 desktop/50 mobile)
  - `js/particles.min.js` - Particles library
  - `files/photo.jpg` - Profile photo (28KB)

## Key Features

- **Dark Mode**: Slate backgrounds (#0f172a), blue accents (#60a5fa)
- **Particles**: Vortex effect with mouse repulsion, mobile-optimized
- **Performance**: Scripts deferred, mobile detection, reduced particles
- **Security**: CSP headers via `_headers` file for GitHub Pages
- **Accessibility**: Skip links, ARIA labels, semantic HTML

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

## Optimization Checklist

```bash
# Check asset sizes
ls -lh assets/**/*

# Test performance
# - Should score 90+ on Lighthouse
# - Particles: 160 desktop, 50 mobile
# - Images: width/height attributes set
# - Scripts: defer attribute

# Security headers (_headers file):
# - CSP, X-Frame-Options, cache control
# - Assets cached 1 year, HTML 1 hour
```

## Quick Commands

```bash
# Minify CSS after changes
cat assets/css/style.css | tr -d '\n' | sed 's/  */ /g' > assets/css/style.min.css

# Test locally
python -m http.server 8000
```