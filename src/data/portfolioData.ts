import { Project, Experience, Education, Certification, SkillCategory } from '../types/portfolio';

export const personalInfo = {
  name: 'Parth Shrikhande',
  shortName: 'Parth',
  title: 'AI/ML & Full-Stack Developer',
  headline: 'Crafting Scalable AI & Modern Digital Experiences',
  location: 'Bhilai, Chhattisgarh, India',
  phone: '+91 8839879661',
  email: 'shrikhandeparth32@gmail.com',
  summary:
    'Motivated AIML diploma graduate seeking Software Development, Web Development, or AI/ML roles. Passionate about building scalable applications and solving real-world problems.',
  bio:
    'Specializing in the intersection of Artificial Intelligence, Machine Learning, and high-performance Web Engineering. Experienced with full-stack development using Python, React, Node.js, and cloud ecosystems, complemented by hands-on engineering internships at BS Digital Technology and Techonet.',
  status: 'Open to Opportunities',
  stats: [
    { label: 'Degree Period', value: '2022–2025' },
    { label: 'Featured Projects', value: '3+' },
    { label: 'Industry Internships', value: '2' },
    { label: 'Key Certifications', value: '3' },
  ],
};

export const educationData: Education = {
  degree: 'Diploma in Artificial Intelligence & Machine Learning',
  institution: 'Rungta College of Engineering & Technology',
  period: '2022 – 2025',
  location: 'Bhilai, Chhattisgarh',
  description:
    'Intensive curriculum focused on neural architectures, machine learning algorithms, statistical data analysis, computer vision foundations, software engineering, and database systems.',
  coursework: [
    'Machine Learning & Deep Learning',
    'Data Structures & Algorithms',
    'Computer Networks & Protocols',
    'Database Management (SQL/NoSQL)',
    'Full Stack Web Development',
    'AI Ethics & Scalable Computing',
  ],
};

export const projectsData: Project[] = [
  {
    id: 'ai-summarizer',
    title: 'AI Summarizer & Content Generator',
    category: 'fullstack',
    categoryLabel: 'Full-Stack AI Application',
    tagline: 'Intelligent multi-document distillation with token-optimized GPT pipelines',
    description:
      'Built a full-stack AI application for article summarization and content generation. Integrates OpenAI API with a reactive, low-latency UI built with React.js, Tailwind CSS, and a Node.js/Python backend.',
    bullets: [
      'Built a full-stack AI application for article summarization and content generation.',
      'Engineered responsive web client using React.js and Tailwind CSS with real-time text streaming.',
      'Designed Python and Node.js microservice architecture with rate limiting, prompt optimization, and caching.',
      'Implemented token compression techniques reducing inference payload overhead by up to 35%.',
    ],
    techStack: ['Python', 'React.js', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'REST APIs'],
    date: '2024',
    simulationType: 'ai-summarizer',
    highlights: [
      { label: 'Processing Speed', value: '< 1.4s' },
      { label: 'Token Efficiency', value: '+35%' },
      { label: 'Export Formats', value: 'MD, PDF, TXT' },
    ],
    architecture: {
      frontend: 'React.js + Tailwind CSS with dynamic markdown rendering and streaming hooks',
      backend: 'Node.js Express gateway with Python worker services for text preprocessing',
      model: 'OpenAI GPT API with custom system prompts for structured key takeaway extraction',
      pipeline: [
        'Document input / URL ingestion',
        'Text normalization & chunk segmentation',
        'OpenAI API token-optimized summarization',
        'Real-time streaming to React UI with formatting',
      ],
    },
  },
  {
    id: 'wifi-sensing',
    title: 'Real-Time WiFi Human Sensing Software',
    category: 'ai',
    categoryLabel: 'Applied AI & CSI Processing',
    tagline: 'Camera-free ambient human motion detection utilizing WiFi Channel State Information',
    description:
      'Developed a WiFi CSI based human sensing system for motion detection without cameras. Applied ML models for activity recognition and built a real-time monitoring dashboard in Flask and Python.',
    bullets: [
      'Developed a WiFi CSI based human sensing system for motion detection without cameras.',
      'Applied ML models for activity recognition and built a real-time monitoring dashboard.',
      'Extracted raw Channel State Information (CSI) subcarriers to model multi-path Doppler shifts.',
      'Achieved camera-free privacy-preserving ambient tracking with high temporal fidelity.',
    ],
    techStack: ['Python', 'TensorFlow', 'NumPy', 'Flask', 'CSI Data Processing', 'Signal Processing'],
    date: '2024–2025',
    simulationType: 'wifi-sensing',
    highlights: [
      { label: 'Privacy Standard', value: '100% Zero Camera' },
      { label: 'Subcarriers Tracked', value: '64 Channels' },
      { label: 'Latency', value: '~45ms' },
    ],
    architecture: {
      frontend: 'Real-time Canvas & SVG dashboard with live spectrogram and activity telemetry',
      backend: 'Flask Python REST & streaming pipeline processing raw IEEE 802.11n CSI packets',
      model: 'TensorFlow 1D-CNN + BiLSTM neural network trained on normalized phase/amplitude shifts',
      pipeline: [
        'Raw WiFi CSI packet interception',
        'Phase unwrapping & Hampel filter denoising',
        'Time-frequency spectrogram extraction',
        'TensorFlow inference & activity classification',
      ],
    },
  },
  {
    id: 'churn-analysis',
    title: 'Predictive Customer Churn Analysis',
    category: 'ml',
    categoryLabel: 'Machine Learning & Analytics',
    tagline: 'End-to-end churn prediction pipeline enabling data-driven retention strategies',
    description:
      'Built ML model to predict customer churn and support retention strategies. Utilized Python, Scikit-Learn, and Pandas to perform exploratory data analysis, feature engineering, and model validation.',
    bullets: [
      'Built ML model to predict customer churn and support retention strategies.',
      'Conducted exhaustive exploratory data analysis (EDA) and correlation matrix mapping using Pandas.',
      'Trained and benchmarked multiple classification algorithms (Logistic Regression, Random Forest, Gradient Boosting).',
      'Engineered key customer risk factors and retention threshold indicators.',
    ],
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Visualization', 'Machine Learning'],
    date: '2023–2024',
    simulationType: 'churn-analysis',
    highlights: [
      { label: 'Model ROC-AUC', value: '0.89' },
      { label: 'Recall on High Risk', value: '87.4%' },
      { label: 'Feature Importance', value: 'Contract & Tenure' },
    ],
    architecture: {
      frontend: 'Interactive risk simulator with dynamic sliders and cohort risk calculation',
      backend: 'Scikit-Learn serialized pipeline with automated preprocessing and imputation',
      model: 'Tuned ensemble classifier evaluating customer tenure, monthly spend, and service usage',
      pipeline: [
        'Data ingestion & missing value imputation',
        'Feature encoding & scaling (StandardScaler)',
        'Class imbalance handling with SMOTE',
        'Probability threshold calibration & risk scoring',
      ],
    },
  },
];

export const experienceData: Experience[] = [
  {
    id: 'bs-digital',
    role: 'Intern',
    company: 'BS Digital Technology',
    period: 'Internship',
    type: 'Internship',
    location: 'Bhilai, Chhattisgarh',
    bullets: [
      'Assisted in technology-driven projects and full-stack software initiatives.',
      'Worked on technical problem-solving, debugging, and project implementation.',
      'Collaborated with senior engineers on client requirements and code reviews.',
      'Gained practical experience with deployment workflows, APIs, and modern development standards.',
    ],
    skills: ['Python', 'JavaScript', 'Problem Solving', 'Web Development', 'Git & GitHub'],
  },
  {
    id: 'techonet',
    role: 'Intern',
    company: 'Techonet',
    period: 'Internship',
    type: 'Internship',
    location: 'Remote / Hybrid',
    bullets: [
      'Contributed to development-related tasks and agile software workflows.',
      'Assisted in building modular frontend components and backend API endpoints.',
      'Participated in sprint standups, bug tracking, and automated testing tasks.',
      'Implemented clean coding practices and version control branch management.',
    ],
    skills: ['JavaScript', 'Node.js', 'REST APIs', 'Software Workflows', 'Version Control'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90, note: 'Core ML, Data Science & Backend' },
      { name: 'JavaScript (ES6+)', level: 88, note: 'Modern Web, React & Node.js' },
      { name: 'SQL', level: 82, note: 'Relational querying & database design' },
      { name: 'HTML5 / CSS3', level: 90, note: 'Semantic markup & responsive styling' },
    ],
  },
  {
    title: 'Frontend Engineering',
    skills: [
      { name: 'React.js', level: 88, note: 'Hooks, State Management, SPAs' },
      { name: 'Tailwind CSS', level: 92, note: 'Utility-first design & responsive UIs' },
      { name: 'Modern CSS & Animations', level: 84, note: 'Smooth micro-interactions & transitions' },
      { name: 'Three.js / WebGL', level: 80, note: 'Interactive 3D scenes & canvas rendering' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 84, note: 'Server-side runtime & asynchronous architecture' },
      { name: 'REST APIs', level: 88, note: 'RESTful API architecture & integration' },
      { name: 'Flask', level: 80, note: 'Lightweight Python microservices' },
      { name: 'Express.js', level: 82, note: 'API routing & middleware pipeline' },
    ],
  },
  {
    title: 'AI, ML & Data Science',
    skills: [
      { name: 'Machine Learning', level: 86, note: 'Supervised, Unsupervised & Ensembles' },
      { name: 'TensorFlow', level: 80, note: 'Neural networks & deep learning models' },
      { name: 'NumPy & Pandas', level: 90, note: 'Data manipulation & numerical computation' },
      { name: 'Scikit-Learn', level: 88, note: 'Model training, tuning & evaluation' },
      { name: 'CSI Data Processing', level: 82, note: 'WiFi Channel State Information analysis' },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'MongoDB', level: 82, note: 'NoSQL document modeling & queries' },
      { name: 'MySQL', level: 84, note: 'Relational schemas, joins & normalization' },
      { name: 'AWS Basics', level: 78, note: 'EC2, S3, IAM, Cloud fundamentals' },
      { name: 'Git & GitHub', level: 88, note: 'Version control, branching & collaboration' },
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'jpmc',
    title: 'Full Stack Development Certification',
    issuer: 'JPMorgan Chase & Co.',
    credentialBadge: 'JPMC-FS-2024',
    skillsCovered: [
      'React.js UI Engineering',
      'Python Backend Services',
      'Real-Time Financial Data Streaming',
      'System Architecture & Testing',
    ],
    verificationNote:
      'Completed comprehensive engineering simulations covering dynamic trader dashboards, Perspective data visualization, and microservice integration.',
    highlights: [
      'Engineered live financial data visualization graph feeds',
      'Implemented clean unit testing suites for component reliability',
      'Optimized UI data update cycle for high frequency feeds',
    ],
  },
  {
    id: 'aws',
    title: 'Cloud Computing Engineer Certification',
    issuer: 'Amazon Web Services (AWS)',
    credentialBadge: 'AWS-CCE-VERIFIED',
    skillsCovered: [
      'AWS Cloud Infrastructure',
      'Compute (EC2, Lambda)',
      'Storage & Buckets (S3)',
      'Security & IAM Roles',
      'Cloud Networking (VPC)',
    ],
    verificationNote:
      'Demonstrated fundamental cloud architecture proficiency, scalable infrastructure provisioning, cost management, and secure identity policies.',
    highlights: [
      'Designed multi-tier cloud architectures for web applications',
      'Configured secure IAM roles and policy-based resource access',
      'Learned elasticity, load balancing, and auto-scaling principles',
    ],
  },
  {
    id: 'goldman-sachs',
    title: 'Backend Development Program Completion',
    issuer: 'Goldman Sachs (via Forage)',
    credentialBadge: 'GS-FORAGE-BE-2024',
    skillsCovered: [
      'Backend Systems Engineering',
      'Cryptographic Hashing & Security',
      'Relational Database Modeling',
      'API Security & Authorization',
    ],
    verificationNote:
      'Completed industry-grade simulation focused on password hashing, API security controls, database optimization, and high-reliability backend design.',
    highlights: [
      'Implemented robust password hashing and credential verification algorithms',
      'Audited REST APIs for security vulnerabilities and access leaks',
      'Engineered database schema constraints for transaction consistency',
    ],
  },
];
