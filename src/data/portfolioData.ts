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
  headline: "Computer Science (Data Science) Undergraduate",
  institution: "Vellore Institute of Technology, Vellore",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science (Data Science)",
  cgpa: "8.75",
  cgpaMax: "10.0",
  email: "virajpatait4@gmail.com",
  linkedin: "https://linkedin.com/in/viraj-patait-067a9b22b",
  github: "https://github.com/virajpatait4-sudo",
  location: "Vellore, Tamil Nadu, India",
  status: "Open to Summer / Fall 2025–2026 Internships",
  bio: [
    "Second-year Computer Science (Data Science) undergraduate at Vellore Institute of Technology with a strong academic record (CGPA: 8.75/10). Demonstrates a consistent commitment to learning and academic excellence, along with the ability to adapt and perform effectively in dynamic, team-oriented environments.",
    "Seeking internship opportunities to apply technical knowledge in machine learning, data engineering, business intelligence, and software development, strengthen problem-solving skills, and gain practical industry experience."
  ],
  resumeDownloadUrl: "/Viraj_Rajkumar_Patait_Resume.pdf"
};

export const projects: Project[] = [
  {
    id: "ecommerce-analytics",
    title: "E-Commerce Sales Customer Analytics Dashboard",
    subtitle: "Power BI • MySQL • DAX • Data Modeling • Excel",
    category: "Data Analytics & BI",
    summary: "Built an interactive Power BI dashboard extracting transactional data from MySQL to analyze sales, retention, and inventory trends.",
    problemStatement: "Retail stakeholders require unified visibility across transactional records to monitor sales velocity, customer retention rates, and inventory status.",
    technologies: ["Power BI", "MySQL", "DAX", "Data Modeling", "Excel"],
    contributions: [
      "Built an e-commerce Power BI dashboard to analyze sales, retention, and inventory trends.",
      "Extracted and preprocessed transactional data from MySQL using optimized SQL queries.",
      "Designed a star schema data model and authored custom DAX measures for core KPIs.",
      "Created interactive reports with drill-throughs and dynamic filters for business insights."
    ],
    keyHighlights: [
      "Relational Star Schema Data Architecture",
      "Custom DAX Calculated Measures for Business KPIs",
      "Dynamic Multi-level Drill-through Reports"
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    previewType: "ecommerce-bi"
  },
  {
    id: "uk-accident-severity",
    title: "UK Road Accident Severity Prediction",
    subtitle: "Python • Scikit-learn • Pandas • STATS19 Dataset",
    category: "Machine Learning",
    summary: "Developed a machine learning classifier on the official UK STATS19 dataset to predict road accident severity and analyze key influencing factors.",
    problemStatement: "Analyzing high-dimensional road collision records to predict incident severity levels and uncover underlying risk factors related to road, weather, and light conditions.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Decision Tree"],
    contributions: [
      "Developed a machine learning model to predict road accident severity using the UK STATS19 dataset.",
      "Performed data preprocessing, feature engineering, and one-hot encoding for model training.",
      "Trained and evaluated a Random Forest classifier using accuracy, precision, recall, and F1-score.",
      "Visualized feature importance to identify key factors influencing accident severity."
    ],
    keyHighlights: [
      "UK STATS19 National Dataset Analysis",
      "Decision Tree & Random Forest Classification",
      "Multi-metric Model Evaluation & Feature Importance"
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    previewType: "road-accident"
  },
  {
    id: "food-delivery-prediction",
    title: "Food Delivery Time Prediction",
    subtitle: "Python • Pandas • Scikit-learn • Regression Modeling",
    category: "Machine Learning",
    summary: "Developed a regression model to estimate urban food delivery arrival times based on distance, traffic conditions, and weather factors.",
    problemStatement: "Accurately predicting on-demand food delivery durations under volatile urban traffic and meteorological conditions.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest Regressor", "Linear Regression"],
    contributions: [
      "Developed a regression model to estimate food delivery arrival times based on distance, traffic, and weather conditions.",
      "Conducted exploratory data analysis, handling missing values, outlier detection, and feature scaling using Pandas and NumPy.",
      "Trained and tuned regression models (Linear Regression, Random Forest Regressor) to capture non-linear relationships.",
      "Evaluated model accuracy using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² score."
    ],
    keyHighlights: [
      "Exploratory Data Analysis & Outlier Detection",
      "Random Forest Regressor & Linear Regression Comparison",
      "Evaluation with MAE, RMSE, and R² Score"
    ],
    githubUrl: "https://github.com/virajpatait4-sudo",
    previewType: "food-delivery"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages for software engineering, algorithms, and data modeling.",
    skills: [
      { name: "Python", category: "Data Science & Scripting" },
      { name: "Java", category: "Object-Oriented Programming" },
      { name: "C / C++", category: "Systems & DSA" },
      { name: "JavaScript", category: "Web Development" },
      { name: "SQL", category: "Relational Queries" },
      { name: "R", category: "Statistical Computing" }
    ]
  },
  {
    id: "data-ml",
    title: "Machine Learning & Data Science",
    icon: "Brain",
    description: "Supervised learning, data preparation, and model evaluation libraries.",
    skills: [
      { name: "Scikit-learn", category: "ML Modeling" },
      { name: "Random Forest Regressor & Classifier", category: "Ensemble Models" },
      { name: "Linear Regression & Decision Trees", category: "Supervised Learning" },
      { name: "Pandas & NumPy", category: "Data Manipulation" },
      { name: "Matplotlib & Seaborn", category: "Data Visualization" },
      { name: "Feature Scaling & One-Hot Encoding", category: "Data Preprocessing" }
    ]
  },
  {
    id: "analytics-bi",
    title: "Databases & Business Intelligence",
    icon: "BarChart3",
    description: "Relational data architectures, querying, and interactive reporting.",
    skills: [
      { name: "MySQL", category: "Relational Database Management" },
      { name: "Power BI", category: "Business Intelligence Dashboards" },
      { name: "DAX Measures", category: "Data Analysis Expressions" },
      { name: "Star Schema Modeling", category: "Dimensional Modeling" },
      { name: "Microsoft Excel", category: "Data Analysis & Spreadsheets" }
    ]
  },
  {
    id: "tools-systems",
    title: "Tools & Software Environments",
    icon: "Wrench",
    description: "Development tools, version control, and programming environments.",
    skills: [
      { name: "Git & GitHub", category: "Version Control" },
      { name: "VS Code", category: "Code Editor" },
      { name: "Notepad++ & IDLE", category: "Development Utilities" },
      { name: "HTML & CSS", category: "Frontend Foundations" }
    ]
  },
  {
    id: "cloud-genai",
    title: "Cloud & Generative AI Badges",
    icon: "Cloud",
    description: "Verified foundational certifications earned through Google Cloud and Udemy.",
    skills: [
      { name: "Introduction to Responsible AI", category: "Google Cloud Skill Badge (2025)" },
      { name: "Introduction to Large Language Models", category: "Google Cloud Skill Badge (2025)" },
      { name: "Introduction to Generative AI", category: "Google Cloud Skill Badge (2025)" },
      { name: "AI & ML in Business", category: "Udemy Course Certification" }
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "gravitas-riviera",
    role: "Volunteer – Halls & Refreshment Team",
    organization: "Vellore Institute of Technology, Vellore",
    division: "Gravitas & Riviera Flagship Events",
    period: "Jul 2024 – Present",
    location: "Vellore, Tamil Nadu",
    type: "Volunteering Experience",
    description: "Served on the operations and logistics team for VIT's flagship university festivals, managing venue arrangements and attendee coordination.",
    responsibilities: [
      "Supported operations for large-scale technical and cultural festivals with high participant turnout.",
      "Collaborated with student volunteers and faculty coordinators to ensure smooth event execution."
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    id: "vit",
    institution: "Vellore Institute of Technology, Vellore",
    degree: "Bachelor of Technology (B.Tech)",
    stream: "Computer Science (Data Science)",
    period: "Jul 2024 – May 2028",
    location: "Vellore, Tamil Nadu",
    score: "8.75 / 10",
    scoreType: "CGPA",
    status: "In Progress (Second Year)",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (Java, C++)",
      "Database Systems & MySQL",
      "Computer Networks",
      "Data Science Foundations (NumPy, Pandas, R)",
      "Machine Learning Principles"
    ]
  },
  {
    id: "class-12",
    institution: "New Times International School",
    degree: "Senior Secondary (Class XII)",
    period: "Jun 2022 – May 2024",
    score: "82%",
    scoreType: "Percentage",
    status: "Completed"
  },
  {
    id: "class-10",
    institution: "St. Arnold's Central School",
    degree: "Secondary School (Class X)",
    period: "2010 – 2022",
    score: "91.5%",
    scoreType: "Percentage",
    status: "Completed"
  }
];

export const certificationItems: CertificationItem[] = [
  {
    id: "udemy-aiml",
    title: "Artificial Intelligence and Machine Learning in Business",
    issuer: "Udemy",
    category: "Machine Learning & Strategy",
    skills: ["AI Business Applications", "Machine Learning Concepts"]
  },
  {
    id: "gcp-responsible-ai",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Cloud AI",
    skills: ["Responsible AI Principles", "AI Governance"]
  },
  {
    id: "gcp-llm",
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Cloud AI",
    skills: ["LLM Fundamentals", "Transformer Models"]
  },
  {
    id: "gcp-genai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skill Badges",
    year: "2025",
    category: "Cloud AI",
    skills: ["Generative AI Foundations", "Cloud Applications"]
  }
];

export const achievementItems: AchievementItem[] = [
  {
    id: "cgpa",
    title: "Academic Excellence — 8.75/10 CGPA",
    issuer: "Vellore Institute of Technology",
    description: "Maintained a consistent academic record with a cumulative GPA of 8.75/10 in B.Tech Computer Science (Data Science)."
  },
  {
    id: "fest-volunteer",
    title: "Selected Volunteer for Flagship Events",
    issuer: "Gravitas & Riviera Festivals, VIT Vellore",
    description: "Selected as an official operational volunteer for VIT's flagship technical fest (Gravitas) and cultural fest (Riviera)."
  }
];
