# Portfolio Content Guide

Use this guide to update your portfolio with your real information.

## 1. **Personal Information (Hero & About)**
- **File**: `src/sections/Hero.jsx`
  - Update `<h1>` with your tagline.
  - Update `<p>` with your bio summary.
- **File**: `src/sections/About.jsx`
  - Update the `<img>` src with your photo (place image in `public/images/` or use a URL).
  - Update the paragraphs `<p>` with your full bio.
  - Update the tech stack list.

## 2. **Experience**
- **File**: `src/sections/Experience.jsx`
- Locate the `experiences` array.
- Add your jobs in the following format:
  ```javascript
  {
    company: "Company Name",
    role: "Your Title",
    period: "YYYY - Present",
    description: "Key achievements..."
  }
  ```

## 3. **Projects**
- **File**: `src/sections/Projects.jsx`
- Locate the `projects` array.
- For each project, ensure you use the correct URL format:
  - **GitHub Pages / Sub-sites**: If your project is hosted at `alexhuynh1999.github.io/project-name`, use that full URL.
  ```javascript
  {
    title: "Camera Scheduler",
    description: "Description...",
    tech: ["Tech 1", "Tech 2"],
    github: "https://github.com/alexhuynh1999/camera-scheduler",
    external: "https://alexhuynh1999.github.io/camera-scheduler/", // Link to the live site
    image: "URL_TO_IMAGE"
  }
  ```

## 4. **Contact**
- **File**: `src/sections/Contact.jsx`
  - Update the `mailto:` email address.

## 5. **Social Links**
- **File**: `src/components/Footer.jsx`
  - Update `href` attributes for Github, Linkedin, etc.
