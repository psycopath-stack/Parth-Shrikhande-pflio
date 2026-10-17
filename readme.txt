Visual Identity & Theme
Color Discipline (60-30-10):
60% Obsidian Canvas: #050507 (deep dark field) and #090a0f (viewport background).
30% Structural Surfaces: #0f131a card surfaces, #1a202c hairline borders (1px solid rgba(255, 255, 255, 0.08)), muted slate text (#94a3b8).
10% Emerald Accent: #10b981 (primary accent), #34d399 (hover highlights), subtle #10b98122 glow gradients.
Top Bar Contract (1-Row, 3-Zone):
Zone 1: Wordmark PARTH SHRIKHANDE in bold geometric typography.
Zone 2: Navigation links (About, Projects, Experience, Skills, Contact) with subtle hover states.
Zone 3: Primary Action button (Get in Touch or Download CV).
Typography:
Headings: Plus Jakarta Sans / Outfit with tight tracking and balanced wraps.
Body: DM Sans / Plus Jakarta Sans for clean, effortless legibility.
Numbers/Metrics: Tabular monospace figures (font-mono tabular-nums).
Motion & Smoothness:
Motion with Framer Motion (motion/react) using compositor-only transitions (transform, opacity).
Three.js animation loop using MathUtils.damp for lag-free pointer inertia.
No layout reflows or heavy scroll-blocking scripts.
3. Key Product Decisions & Trade-Offs
Decision 1: Procedural Three.js 3D Neural Particle Canvas
Approach: Built with vanilla Three.js using BufferGeometry and custom line segments connecting nodes within dynamic proximity thresholds, modulated by mouse cursor position.
Why: Delivers the signature moncy.dev 3D visual spectacle with zero external 3D asset downloads (no broken 404s, instant load time, high 60fps performance on both mobile and desktop).
Alternative Considered: External 3D GLTF models, which risk missing assets, large download size, and stuttering.
Decision 2: In-App Interactive Project Simulators
Approach: Each project card triggers an interactive modal equipped with a realistic functional mini-simulator (e.g. WiFi CSI sensing waveform visualizer, AI summary generator with sample text presets, and customer churn risk scoring tool).
Why: Bridges the gap between reading a resume line and witnessing real engineering intuition. Recruiters can test the application live.
Decision 3: Zero-Pill & Anti-Slop Discipline
Approach: Unboxed metadata tags separated by · and clean segmented controls for project categories. No spammy fake compiler tags, code comment headers, or pulse badges.
4. Technical Architecture & Data Strategy
code
Code
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
Component & State Mapping
HeroSection.tsx: Mounts WebGL canvas inside isolated useRef. Tracks pointer coordinates with exponential dampening. Renders title and quick CTA buttons.
NeuralCanvas.tsx: Initializes Three.js scene, camera, PMREM generator, instanced nodes, and dynamic neural network connection lines. Auto-resizes and cleans up memory on unmount.
ProjectModal.tsx: Controls active modal view with ESC key listener, focus trap, tabbed view (Overview, Architecture, Live Simulation), and interactive controls.
SkillsSection.tsx: Filterable technical skill tags with mastery level indicator and category filters (All, Languages, Frameworks, ML/Data, Cloud & DB).
ContactSection.tsx: Form validation, instant clipboard copying for shrikhandeparth32@gmail.com with toast feedback, and direct contact options.
5. Implementation Steps (Execution Phase)
Install Dependencies:
Install three and @types/three for the 3D WebGL neural scene.
Theme & Global Styling:
Set up custom fonts (Plus Jakarta Sans and DM Sans) and cyber obsidian theme in index.html and src/index.css.
Update metadata.json and <title> with Parth Shrikhande's portfolio title and description.
Core 3D Neural Particle Engine:
Develop src/components/NeuralCanvas.tsx with optimized particle buffers, cursor tracking, and smooth 60fps rendering.
Header & Navigation:
Build 3-zone clean TopBar with smooth scroll links and mobile drawer.
Hero, About & Experience Sections:
Build responsive layout with resume data, education at Rungta College, and internship details.
Projects Bento Grid & Interactive Modals:
Implement project cards with dynamic preview stats and full-featured interactive simulation modals.
Certifications & Skills Matrix:
Build interactive filterable skill badges and verified certification badges for AWS, JPMorgan Chase, and Goldman Sachs.
Contact & Footer:
Implement functional contact form, email copy mechanism with toast, and responsive footer.
Verification:
Run compile_applet and test responsiveness across desktop (1440px), tablet, and mobile.
