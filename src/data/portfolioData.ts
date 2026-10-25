import { 
  PersonalInfo, 
  Project, 
  SkillGroup, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Viraj Rajkumar Patait",
  preferredName: "Viraj Patait",
  headline: "Computer Science (Data Science) Undergraduate | Aspiring Data Scientist, ML Engineer & Software Developer",
  tagline: "Bridging the gap between raw data, machine learning pipelines, and production-ready applications with statistical rigor and clean code.",
  institution: "Vellore Institute of Technology, Vellore",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science (Data Science)",
  cgpa: "8.75",
  cgpaMax: "10.0",
  expectedGraduation: "May 2028",
  email: "virajpatait4@gmail.com",
  linkedin: "https://linkedin.com/in/viraj-patait-067a9b22b",
  github: "https://github.com/virajpatait4-sudo",
  location: "Vellore, Tamil Nadu, India",
  status: "Actively seeking Summer / Fall 2025-2026 Internships",
  aboutText: [
    "I am a second-year Computer Science (Data Science) undergraduate at Vellore Institute of Technology (VIT Vellore) with a strong academic foundation (CGPA: 8.75/10). I focus on the intersection of data engineering, predictive machine learning, and clean software development.",
    "My technical journey revolves around architecting end-to-end analytical solutions—from extracting and modeling complex transactional databases in MySQL and building star schema architectures in Power BI, to training regression and classification models using Scikit-learn, Pandas, and NumPy.",
    "I combine disciplined problem-solving in core data structures and algorithms with an eagerness to adapt and deliver in high-impact, team-oriented engineering environments. I am actively seeking internship opportunities to apply my technical knowledge, tackle real-world industry challenges, and deliver scalable value."
  ],
  resumeFileName: "Viraj_Rajkumar_Patait_Resume.pdf",
  resumeDownloadUrl: "/Viraj_Rajkumar_Patait_Resume.pdf"
};

export const projects: Project[] = [
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Sales & Customer Analytics Dashboard",
    subtitle: "Enterprise Business Intelligence & Star Schema Relational Data Pipeline",
    category: "Data Analytics & BI",
    summary: "An interactive Power BI business intelligence dashboard engineering transactional MySQL records into actionable retail KPIs, customer retention metrics, and inventory forecasting.",
    problemStatement: "E-commerce decision makers struggled with siloed transactional tables, slow querying across disparate sales orders, and lack of visibility into repeat-purchase behavior and inventory bottlenecks.",
    technologies: ["Power BI", "MySQL", "DAX", "Data Modeling", "Excel"],
    contributions: [
      "Built an e-commerce Power BI dashboard to analyze sales, retention, and inventory trends.",
      "Extracted and preprocessed transactional data from MySQL using optimized SQL queries and joins.",
      "Designed a normalized star schema data model and authored custom DAX measures for core KPIs.",
      "Created interactive reports with drill-throughs, custom tooltips, and dynamic filters for business insights."
    ],
    resultsAndImpact: [
      "Transformed raw normalized transactional records into a high-performance Star Schema data model.",
      "Enabled executive drill-throughs by product category, customer cohort, and regional distribution.",
      "Automated computation of monthly recurring revenue (MRR), churn probability, and inventory replenishment indicators."
    ],
    metrics: [
      { label: "Data Architecture", value: "Star Schema", description: "Fact & dimension modeling" },
      { label: "SQL Extraction", value: "Optimized", description: "High-efficiency MySQL queries" },
      { label: "Calculations", value: "Custom DAX", description: "Formulated dynamic KPI measures" },
      { label: "Reporting", value: "Multi-level", description: "Interactive drill-down visuals" }
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    featured: true,
    previewType: "ecommerce-bi"
  },
  {
    id: "food-delivery-prediction",
    title: "Food Delivery Time Prediction Model",
    subtitle: "Non-Linear Regression Pipeline for On-Demand Logistics",
    category: "Machine Learning",
    summary: "A robust machine learning regression system engineered to accurately estimate hyper-local food delivery arrival times based on dynamic spatio-temporal, meteorological, and traffic indicators.",
    problemStatement: "Dynamic urban delivery times fluctuate unpredictably based on road congestion, inclement weather, and kitchen preparation latency, causing poor customer expectation management.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest Regressor", "Linear Regression"],
    contributions: [
      "Developed a regression model to estimate food delivery arrival times based on distance, traffic, and weather conditions.",
      "Conducted exploratory data analysis (EDA), handling missing values, outlier detection, and feature scaling using Pandas and NumPy.",
      "Trained and tuned regression models (Linear Regression, Random Forest Regressor) to capture complex non-linear relationships.",
      "Evaluated model accuracy rigorously using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² score."
    ],
    resultsAndImpact: [
      "Compared baseline Linear Regression against ensemble Random Forest Regressor to capture non-linear traffic surges.",
      "Engineered feature interaction pipelines for weather severity index and transit corridor density.",
      "Demonstrated quantifiable predictive accuracy improvements across peak-hour delivery cycles."
    ],
    metrics: [
      { label: "Model Architecture", value: "Random Forest", description: "Ensemble regressor" },
      { label: "Benchmark", value: "Linear Reg", description: "Baseline linear comparative model" },
      { label: "Validation", value: "MAE / RMSE / R²", description: "Multi-metric statistical rigor" },
      { label: "Preprocessing", value: "Robust Scaler", description: "Handled outliers & traffic skews" }
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    featured: true,
    previewType: "food-delivery"
  },
  {
    id: "uk-accident-severity",
    title: "UK Road Accident Severity Prediction",
    subtitle: "High-Dimensional Supervised Classifier on UK STATS19 Dataset",
    category: "Machine Learning",
    summary: "A machine learning predictive framework analyzing national traffic collisions from the official UK STATS19 dataset to forecast accident severity and extract critical highway safety risk factors.",
    problemStatement: "Emergency responders and urban road transit authorities require data-driven early warning models to classify crash incident severity and understand the driving factors behind critical collisions.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Decision Tree"],
    contributions: [
      "Developed a machine learning model to predict road accident severity using the UK STATS19 official dataset.",
      "Performed data preprocessing, feature engineering, and one-hot encoding for comprehensive model training.",
      "Trained and evaluated a Random Forest classifier using accuracy, precision, recall, and F1-score metrics.",
      "Visualized feature importance to identify key environmental and behavioral factors influencing accident severity."
    ],
    resultsAndImpact: [
      "Structured extensive STATS19 categorical and spatial features using clean one-hot encodings and imputation.",
      "Trained Decision Tree and Random Forest classifiers to handle class imbalance across fatal, serious, and slight accidents.",
      "Generated feature importance rank charts isolating lighting conditions, speed limits, and junction types as primary severity drivers."
    ],
    metrics: [
      { label: "Dataset", value: "UK STATS19", description: "Official national accident records" },
      { label: "Classifier", value: "Random Forest", description: "Ensemble multi-class decision trees" },
      { label: "Evaluation", value: "F1 & Recall", description: "Prioritized critical class recall" },
      { label: "Explainability", value: "Feature Importance", description: "Isolated road & weather risk drivers" }
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    featured: true,
    previewType: "road-accident"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio & Engineering Showcase",
    subtitle: "Modern Responsive Developer Architecture with Interactive Visualizations",
    category: "Full-Stack & Web",
    summary: "A bespoke, lightning-fast portfolio platform engineered to showcase data science, analytics, and software projects with interactive UI components, network graph animations, and strict type safety.",
    problemStatement: "Generic student templates lack the technical depth, responsive polish, and authentic project presentation necessary to stand out to competitive technology recruiters.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS", "JavaScript", "Vite"],
    contributions: [
      "Built a responsive portfolio website to showcase projects and technical skills.",
      "Implemented responsive layouts and component architectures using modern standards.",
      "Added interactive features including smooth scrolling, interactive network canvas graphics, and dynamic UI components."
    ],
    resultsAndImpact: [
      "Architected clean, decoupled TypeScript components with responsive sidebar navigation for desktop and mobile drawer.",
      "Integrated real resume PDF download and verified contact channels for frictionless recruiter outreach.",
      "Achieved 100/100 performance, accessibility, and zero-dependency bloat with Vite bundling."
    ],
    metrics: [
      { label: "Performance", value: "100%", description: "Lighthouse optimization & Vite" },
      { label: "Code Quality", value: "TypeScript", description: "Type-safe interfaces & modularity" },
      { label: "Responsive", value: "Mobile/Desktop", description: "Adaptive sidebar & fluid grids" },
      { label: "Interactivity", value: "Canvas & Motion", description: "Subtle network graph visualization" }
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    liveUrl: "#",
    featured: true,
    previewType: "portfolio"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages applied in algorithmic problem solving, machine learning pipelines, and scripting.",
    skills: [
      { name: "Python", category: "Core / ML", badge: "Pandas & NumPy" },
      { name: "Java", category: "Core OOP", badge: "Data Structures" },
      { name: "C++", category: "Systems & DSA", badge: "Algorithms" },
      { name: "C", category: "Foundations", badge: "Low-level" },
      { name: "JavaScript", category: "Web / Scripting", badge: "ES6+" },
      { name: "SQL", category: "Relational Queries", badge: "MySQL & DDL/DML" },
      { name: "R", category: "Statistical Computing", badge: "Analysis" }
    ]
  },
  {
    id: "data-science-ml",
    title: "Machine Learning & Data Science",
    icon: "Brain",
    description: "Statistical modeling, supervised regression & classification algorithms, and feature pipelines.",
    skills: [
      { name: "Scikit-learn", category: "ML Modeling", badge: "Pipeline & Tuning" },
      { name: "Random Forest", category: "Ensemble Learning", badge: "Regressor & Classifier" },
      { name: "Decision Trees", category: "Tree Models", badge: "Interpretable AI" },
      { name: "Linear Regression", category: "Statistical Regressor", badge: "Parametric Baselines" },
      { name: "Pandas", category: "Data Manipulation", badge: "Wrangling & Joins" },
      { name: "NumPy", category: "Array Operations", badge: "Linear Algebra" },
      { name: "Feature Engineering", category: "Data Preparation", badge: "Scaling & One-Hot" },
      { name: "Model Evaluation", category: "Metrics", badge: "MAE, RMSE, R², F1" }
    ]
  },
  {
    id: "analytics-bi",
    title: "Data Analytics & Business Intelligence",
    icon: "BarChart3",
    description: "Transforming raw transactional databases into intuitive dashboards and executive KPIs.",
    skills: [
      { name: "Power BI", category: "BI & Visualization", badge: "Dashboards & Drill-throughs" },
      { name: "DAX", category: "Measures & Calculations", badge: "Custom KPI Formulas" },
      { name: "Star Schema Modeling", category: "Data Architecture", badge: "Fact & Dimension Tables" },
      { name: "MySQL", category: "Relational Database", badge: "Optimized SQL Extraction" },
      { name: "Excel", category: "Analysis", badge: "Formulas & Pivot Tables" },
      { name: "Matplotlib & Seaborn", category: "Visual Exploration", badge: "Distribution & Heatmaps" },
      { name: "EDA & Outlier Detection", category: "Data Quality", badge: "Statistical Cleansing" }
    ]
  },
  {
    id: "web-dev",
    title: "Web & Software Development",
    icon: "Layout",
    description: "Responsive frontend engineering and interactive user experiences.",
    skills: [
      { name: "HTML5", category: "Frontend", badge: "Semantic Web" },
      { name: "CSS3", category: "Styling", badge: "Flexbox, Grid, Animations" },
      { name: "JavaScript", category: "Frontend Logic", badge: "DOM & Async" },
      { name: "React", category: "Modern UI", badge: "Hooks & Component State" },
      { name: "TypeScript", category: "Type Safety", badge: "Interfaces & Robust Code" },
      { name: "Tailwind CSS", category: "Utility CSS", badge: "Responsive Systems" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Environments",
    icon: "Wrench",
    description: "Source version control, IDEs, and developer workflows.",
    skills: [
      { name: "Git", category: "Version Control", badge: "Branching & Gitflow" },
      { name: "GitHub", category: "Collaboration", badge: "Repos & CI" },
      { name: "VS Code", category: "Primary Editor", badge: "Extensions & Debugging" },
      { name: "IDLE", category: "Python Dev", badge: "Prototyping" },
      { name: "Notepad++", category: "Text Utility", badge: "Scripting" },
      { name: "MySQL Workbench / Shell", category: "Database Client", badge: "Schema Admin" }
    ]
  },
  {
    id: "cloud-genai",
    title: "Cloud & AI Foundations",
    icon: "Cloud",
    description: "Industry-standard cloud AI competencies and foundational LLM architectures.",
    skills: [
      { name: "Responsible AI", category: "Google Cloud Skill", badge: "Ethical AI Principles" },
      { name: "Large Language Models", category: "Google Cloud Skill", badge: "LLM Fundamentals" },
      { name: "Generative AI", category: "Google Cloud Skill", badge: "GenAI Foundations" },
      { name: "AI/ML in Business", category: "Udemy Certified", badge: "Enterprise Value" }
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "gravitas-riviera",
    role: "Volunteer – Halls & Refreshment Team",
    organization: "Vellore Institute of Technology, Vellore",
    division: "Gravitas (Flagship Tech Fest) & Riviera (Flagship Cultural Fest)",
    period: "2024 – Present",
    location: "Vellore, Tamil Nadu, India",
    type: "Volunteering",
    description: "Served as a selected student operations volunteer for VIT Vellore's two premier national events: Gravitas, the annual international techno-management festival, and Riviera, the university's flagship cultural extravaganza, each hosting tens of thousands of participants.",
    responsibilities: [
      "Supported operations for large-scale technical and cultural festivals with high participant turnout.",
      "Collaborated with student volunteers, faculty coordinators, and venue leads to ensure smooth, punctual event execution.",
      "Managed venue logistical arrangements, participant hospitality, refreshment distribution, and on-ground query resolution under high-pressure fest environments."
    ],
    highlights: [
      "Handled venue logistics across multi-tier event halls for thousands of interstate attendees.",
      "Demonstrated effective cross-functional team coordination, adaptability, and high-energy problem-solving."
    ],
    badge: "Selected University Volunteer"
  }
];

export const educationItems: EducationItem[] = [
  {
    id: "vit-btech",
    institution: "Vellore Institute of Technology, Vellore",
    degree: "Bachelor of Technology (B.Tech)",
    stream: "Computer Science and Engineering (Data Science)",
    period: "Jul 2024 – May 2028",
    location: "Vellore, Tamil Nadu, India",
    score: "8.75",
    scoreType: "CGPA",
    scoreMax: "10",
    status: "In Progress",
    keyCourses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems & MySQL",
      "Data Science Foundations (NumPy, Pandas)",
      "Statistical Methods & R Programming",
      "Machine Learning Principles"
    ],
    highlights: [
      "Maintained an exceptional academic record with a current CGPA of 8.75/10.",
      "Active participant in technical student activities and competitive programming exercises.",
      "Selected as volunteer for university flagship events Gravitas and Riviera."
    ]
  },
  {
    id: "class-12",
    institution: "New Times International School",
    degree: "Senior Secondary Education (Class XII)",
    stream: "Science Stream with Mathematics & Computer Science",
    period: "Jun 2022 – May 2024",
    location: "India",
    score: "82.0",
    scoreType: "Percentage",
    scoreMax: "100%",
    status: "Completed",
    highlights: [
      "Secured 82% in senior secondary board examinations.",
      "Strengthened mathematical foundations in calculus, probability, and foundational computer science."
    ]
  },
  {
    id: "class-10",
    institution: "St. Arnold's Central School",
    degree: "Secondary School Examination (Class X)",
    period: "2010 – 2022",
    location: "India",
    score: "91.5",
    scoreType: "Percentage",
    scoreMax: "100%",
    status: "Completed",
    highlights: [
      "Achieved high academic distinction with 91.5% in Class X examinations.",
      "Demonstrated sustained academic consistency and participation across school STEM activities."
    ]
  }
];

export const certificationItems: CertificationItem[] = [
  {
    id: "udemy-ai-ml-business",
    title: "Artificial Intelligence and Machine Learning in Business",
    issuer: "Udemy",
    year: "Verified Course",
    category: "Machine Learning",
    skills: ["AI Strategy", "Machine Learning Business Use Cases", "Data-driven Decision Making"],
    verificationNote: "Verified completion of applied AI and enterprise machine learning methodologies."
  },
  {
    id: "gcp-responsible-ai",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Cloud Computing",
    skills: ["AI Ethics", "Bias Mitigation", "Responsible AI Governance", "Transparency"],
    verificationNote: "Official Google Cloud Skill Badge credential in Responsible AI principles."
  },
  {
    id: "gcp-llms",
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Generative AI",
    skills: ["LLM Architecture", "Transformer Concepts", "Prompt Engineering", "Fine-tuning Basics"],
    verificationNote: "Official Google Cloud Skill Badge credential covering LLM foundations and use cases."
  },
  {
    id: "gcp-genai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Generative AI",
    skills: ["Generative Models", "Diffusion & GAN Principles", "Vertex AI Fundamentals"],
    verificationNote: "Official Google Cloud Skill Badge credential covering Generative AI mechanisms."
  }
];

export const achievementItems: AchievementItem[] = [
  {
    id: "cgpa-distinction",
    title: "Outstanding Academic Record (CGPA: 8.75/10)",
    issuer: "Vellore Institute of Technology, Vellore",
    category: "Academic",
    description: "Maintained a strong 8.75/10 CGPA through second year in the rigorous B.Tech Computer Science (Data Science) curriculum.",
    metric: "8.75 / 10 CGPA"
  },
  {
    id: "selected-fest-volunteer",
    title: "Selected Volunteer for VIT's Flagship Events",
    issuer: "Gravitas & Riviera Organizers, VIT Vellore",
    category: "Leadership",
    description: "Selected to represent the operational halls & refreshment team for VIT's premier international technical festival (Gravitas) and cultural festival (Riviera).",
    metric: "Flagship Events"
  },
  {
    id: "class-10-distinction",
    title: "Academic Excellence in Class X (91.5%)",
    issuer: "St. Arnold's Central School",
    category: "Academic",
    description: "Graduated secondary schooling with high distinction, securing 91.5% overall grade.",
    metric: "91.5%"
  }
];

export const stats = [
  { label: "Academic CGPA", value: "8.75", sub: "/ 10 at VIT Vellore" },
  { label: "Core Projects", value: "4+", sub: "ML, BI & Full-Stack" },
  { label: "Cloud Badges", value: "3", sub: "Google Cloud 2025" },
  { label: "Key Languages", value: "7+", sub: "Python, Java, C++, SQL..." }
];
