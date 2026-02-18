# Positivus — Frontend Intern Assessment

A pixel-perfect React implementation of the Positivus digital marketing agency website, built as part of the Bits and Volts Pvt. Ltd. frontend intern assessment.

---

## What This Is

This is a responsive, component-based website built in React.js that replicates a Figma design. It covers everything from the navbar down to the footer, with interactive sections like an accordion and a testimonial carousel.

---

## Tech Used

- **React.js** (Create React App)
- **Plain CSS** (scoped per component, no external CSS framework)
- **Google Fonts** — Space Grotesk
- **SVG** — all illustrations and icons are hand-coded SVGs, no image files

---

## Project Structure

```
positivus/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Partners.jsx
│   │   ├── Services.jsx
│   │   ├── WorkingProcess.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.js
└── package.json
```

---

## How to Run

Make sure you have **Node.js** installed, then:

```bash
# Clone the repository
git clone https://github.com/AmbikaMandhaniya/positivus.git

# Move into the project folder
cd positivus

# Install dependencies
npm install

# Start development server
npm start
```

Open **http://localhost:3000** in your browser.

```bash
# Build for production
npm run build
```

---

## Design Decisions

- **No UI library used** — CSS is written manually per component to stay close to the Figma design without any framework overhead.
- **No image files** — every illustration (megaphone, globe, charts) is a custom inline SVG, keeping the project lightweight.
- **Scoped styles** — each component manages its own `<style>` tag so there are no global conflicts.
- **Responsive** — layout adapts cleanly at 1024px (tablet) and 640px (mobile) breakpoints.

---
