# Parth Shrikhande — Creative AI/ML & Full-Stack Developer Portfolio (moncy.dev Clone)

A high-performance, responsive clone of **moncy.dev** tailored with **Parth Shrikhande**'s professional profile, education, technical projects, internships, and cloud/backend certifications. It features a Cyber Dark aesthetic with emerald accents, a 60fps Three.js interactive 3D Neural Particle Mesh, smooth page transitions, and deep interactive project simulation modals.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed in Phase 1 and govern the architectural and visual direction:

- **Confirmed Aesthetic Direction**: Cyber Dark styling with sleek obsidian surfaces (`#050505` / `#0a0b0d`), subtle structural hairline borders (`#1a1f26`), and refined emerald glowing accents (`#10b981` / `#34d399`).
- **Confirmed 3D Hero Centerpiece**: High-fidelity Three.js Interactive 3D Neural Particle Mesh that tracks cursor position with smooth exponential damping, rotating neural synapses, and pulsing synaptic connections.
- **Confirmed Exploration Flow**: Interactive Project Modals with live interactive simulations (interactive AI summarizer, WiFi CSI motion sensing radar/spectrogram visualization, customer churn risk calculator) and technical architecture breakdowns.
- **Resume Integration**: 100% faithful representation of Parth Shrikhande's education at Rungta College of Engineering & Technology, internships at BS Digital Technology and Techonet, AWS / JPMorgan Chase / Goldman Sachs certifications, and full skill matrix.

---

## 1. Overview & Core Concept

- **What It Does**: Presents Parth Shrikhande's software engineering and AI/ML portfolio with the cinematic impact, fluid animations, and high craft of `moncy.dev`. Visitors can explore his background, interact with real-time 3D graphics, test interactive project simulations directly in modals, view detailed career milestones, and connect seamlessly.
- **Target Audience / Persona**: Tech recruiters, engineering hiring managers, founders, and technical collaborators looking for an ambitious AIML diploma graduate proficient in Python, React, Node.js, ML models, and cloud technologies.
- **Key Value**: Replaces generic static resume pages with an immersive, memorable creative portfolio that demonstrates frontend mastery, 3D WebGL capability, and applied AI/ML engineering.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & First Impression**:
   - Visitors land on a full-viewport hero screen featuring oversized typography (`clamp(2.5rem, 5vw, 4.5rem)`), Parth's title ("AI/ML & FULL-STACK DEVELOPER"), a location indicator ("Bhilai, Chhattisgarh, India"), quick action CTAs ("Explore Projects", "View Resume", "Get in Touch"), and the 3D Neural Mesh rotating and reacting in real-time to pointer movements.
   - Below the hero split is a high-impact horizontal KPI proof strip: `2022–2025 AIML Diploma`, `3+ AI/ML Projects`, `2 Industry Internships`, `3 Top Certifications`.
2. **About & Background**:
   - Concise summary with education breakdown at Rungta College of Engineering & Technology, core competencies, and animated skill clusters (Languages, Frontend, Backend, AI/ML, Cloud & Tools).
3. **Featured Projects (moncy.dev Bento Grid & Detail Modal)**:
   - Bento-style project cards with smooth hover parallax and taglists:
     1. **AI Summarizer & Content Generator**: Full-stack application with interactive prompt summarizer simulation, bullet extraction, and token metrics.
     2. **Real-Time WiFi Human Sensing Software**: CSI data processing pipeline with interactive radar wave simulation detecting presence without cameras.
     3. **Predictive Customer Churn Analysis**: Machine learning classification pipeline with live interactive churn probability slider and confusion matrix metrics.
   - Clicking any project opens a clean, full-screen interactive modal with architecture diagrams, live demo widget, tech badges, and key accomplishments.
4. **Experience & Internships Timeline**:
   - Editorial chronological timeline highlighting **BS Digital Technology** and **Techonet** with key contributions, tools utilized, and problem-solving highlights.
5. **Certifications & Accreditations**:
   - Verified credential showcase for JPMorgan Chase (Full Stack), AWS (Cloud Computing Engineer), and Goldman Sachs / Forage (Backend Development Program) with modal verification views.
6. **Contact & Connect**:
   - Fast direct email copy button with instant feedback, interactive contact inquiry form, direct phone link (`+91 8839879661`), direct email (`shrikhandeparth32@gmail.com`), and social links.

### Visual Identity & Theme
- **Color Discipline (60-30-10)**:
  - *60% Obsidian Canvas*: `#050507` (deep dark field) and `#090a0f` (viewport background).
  - *30% Structural Surfaces*: `#0f131a` card surfaces, `#1a202c` hairline borders (`1px solid rgba(255, 255, 255, 0.08)`), muted slate text (`#94a3b8`).
  - *10% Emerald Accent*: `#10b981` (primary accent), `#34d399` (hover highlights), subtle `#10b98122` glow gradients.
- **Top Bar Contract (1-Row, 3-Zone)**:
  - Zone 1: Wordmark `PARTH SHRIKHANDE` in bold geometric typography.
  - Zone 2: Navigation links (`About`, `Projects`, `Experience`, `Skills`, `Contact`) with subtle hover states.
  - Zone 3: Primary Action button (`Get in Touch` or `Download CV`).
- **Typography**:
  - Headings: `Plus Jakarta Sans` / `Outfit` with tight tracking and balanced wraps.
  - Body: `DM Sans` / `Plus Jakarta Sans` for clean, effortless legibility.
  - Numbers/Metrics: Tabular monospace figures (`font-mono tabular-nums`).
- **Motion & Smoothness**:
  - Motion with Framer Motion (`motion/react`) using compositor-only transitions (`transform`, `opacity`).
  - Three.js animation loop using `MathUtils.damp` for lag-free pointer inertia.
  - No layout reflows or heavy scroll-blocking scripts.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Procedural Three.js 3D Neural Particle Canvas**
  - *Approach*: Built with vanilla Three.js using BufferGeometry and custom line segments connecting nodes within dynamic proximity thresholds, modulated by mouse cursor position.
  - *Why*: Delivers the signature `moncy.dev` 3D visual spectacle with zero external 3D asset downloads (no broken 404s, instant load time, high 60fps performance on both mobile and desktop).
  - *Alternative Considered*: External 3D GLTF models, which risk missing assets, large download size, and stuttering.
- **Decision 2: In-App Interactive Project Simulators**
  - *Approach*: Each project card triggers an interactive modal equipped with a realistic functional mini-simulator (e.g. WiFi CSI sensing waveform visualizer, AI summary generator with sample text presets, and customer churn risk scoring tool).
  - *Why*: Bridges the gap between reading a resume line and witnessing real engineering intuition. Recruiters can test the application live.
- **Decision 3: Zero-Pill & Anti-Slop Discipline**
  - *Approach*: Unboxed metadata tags separated by `·` and clean segmented controls for project categories. No spammy fake compiler tags, code comment headers, or pulse badges.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              APP ROOT                                  │
│       (index.html · fonts · global CSS with Tailwind v4)               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────┐                                 ┌──────────────────────┐
│  TopBar (3-Zone)     │                                 │  ProjectModal State  │
│  [Wordmark-Nav-CTA]  │                                 │  (Active Simulation) │
└──────────────────────┘                                 └──────────┬───────────┘
                                                                    │
    ┌───────────────────────────────────────────────────────────────┘
    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          MAIN CONTENT FLOW                             │
│                                                                        │
│  1. HeroSection                                                        │
│     ├── Oversized Typography & Intro Copy                              │
│     ├── Interactive 3D Neural Canvas (Three.js WebGL Mount)            │
│     └── KPI Summary Ribbon (AIML Diploma · Projects · Certifications)  │
│                                                                        │
│  2. AboutSection                                                       │
│     ├── Professional Summary & Bio                                     │
│     ├── Education: Rungta College of Engineering & Tech (2022–2025)    │
│     └── Interactive Tech Stack Matrix (Python, React, TF, AWS, etc.)   │
│                                                                        │
│  3. ProjectsSection (moncy.dev Bento Grid)                             │
│     ├── AI Summarizer & Content Generator                              │
│     ├── Real-Time WiFi Human Sensing Software                          │
│     └── Predictive Customer Churn Analysis                             │
│                                                                        │
│  4. ExperienceSection (Chronological Milestones)                       │
│     ├── BS Digital Technology (Intern)                                 │
│     └── Techonet (Intern)                                              │
│                                                                        │
│  5. CertificationsSection (Credential Cards)                           │
│     ├── JPMorgan Chase (Full Stack)                                    │
│     ├── AWS (Cloud Computing Engineer)                                 │
│     └── Goldman Sachs / Forage (Backend Development)                   │
│                                                                        │
│  6. ContactSection & Footer                                            │
│     ├── Direct Email Copy, Phone Call, Message Form                    │
│     └── Clean Human-Readable Editorial Footer                          │
└────────────────────────────────────────────────────────────────────────┘
```

### Component & State Mapping
- `HeroSection.tsx`: Mounts WebGL canvas inside isolated `useRef`. Tracks pointer coordinates with exponential dampening. Renders title and quick CTA buttons.
- `NeuralCanvas.tsx`: Initializes Three.js scene, camera, PMREM generator, instanced nodes, and dynamic neural network connection lines. Auto-resizes and cleans up memory on unmount.
- `ProjectModal.tsx`: Controls active modal view with ESC key listener, focus trap, tabbed view (Overview, Architecture, Live Simulation), and interactive controls.
- `SkillsSection.tsx`: Filterable technical skill tags with mastery level indicator and category filters (All, Languages, Frameworks, ML/Data, Cloud & DB).
- `ContactSection.tsx`: Form validation, instant clipboard copying for `shrikhandeparth32@gmail.com` with toast feedback, and direct contact options.

---

## 5. Implementation Steps (Execution Phase)

1. **Install Dependencies**:
   - Install `three` and `@types/three` for the 3D WebGL neural scene.
2. **Theme & Global Styling**:
   - Set up custom fonts (`Plus Jakarta Sans` and `DM Sans`) and cyber obsidian theme in `index.html` and `src/index.css`.
   - Update `metadata.json` and `<title>` with Parth Shrikhande's portfolio title and description.
3. **Core 3D Neural Particle Engine**:
   - Develop `src/components/NeuralCanvas.tsx` with optimized particle buffers, cursor tracking, and smooth 60fps rendering.
4. **Header & Navigation**:
   - Build 3-zone clean TopBar with smooth scroll links and mobile drawer.
5. **Hero, About & Experience Sections**:
   - Build responsive layout with resume data, education at Rungta College, and internship details.
6. **Projects Bento Grid & Interactive Modals**:
   - Implement project cards with dynamic preview stats and full-featured interactive simulation modals.
7. **Certifications & Skills Matrix**:
   - Build interactive filterable skill badges and verified certification badges for AWS, JPMorgan Chase, and Goldman Sachs.
8. **Contact & Footer**:
   - Implement functional contact form, email copy mechanism with toast, and responsive footer.
9. **Verification**:
   - Run `compile_applet` and test responsiveness across desktop (1440px), tablet, and mobile.
