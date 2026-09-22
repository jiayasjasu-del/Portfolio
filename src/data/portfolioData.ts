import { PersonalInfo, AboutHighlight, SkillCategory, Project, EducationItem, CertificationItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "MUHAMMAD JIYAS M",
  role: "B.Tech CSE (AI & ML) Student | Aspiring Data Engineer & AI Practitioner",
  eyebrow: "B.Tech CSE (AI & ML) Student",
  location: "Kerala, India",
  phone: "+91 98464 76572",
  email: "jiayasjasu@gmail.com",
  github: "https://github.com/jiayasjasu-del",
  linkedin: "https://www.linkedin.com/in/muhammad-jiyas-m-b932ba38a",
  shortDescription: "I build data-driven and AI-powered applications using Python, Machine Learning, Deep Learning, Generative AI, and modern development tools.",
  aboutText1: "I am Muhammad Jiyas M, a first-year B.Tech Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning through the NIAT program at Joy University. I have completed an Advanced Diploma in Data Engineering, Generative AI & Big Data and enjoy turning ideas into practical AI and data-driven applications.",
  aboutText2: "My interests include Machine Learning, Deep Learning, Data Engineering, Computer Vision, Natural Language Processing, and Generative AI. I learn primarily by building projects, experimenting with technologies, and deploying working applications.",
  aboutText3: "My goal is to grow into a strong AI and Data Engineering practitioner capable of building scalable, useful, and intelligent software systems."
};

export const aboutHighlights: AboutHighlight[] = [
  {
    id: "ai-ml",
    title: "AI & ML",
    description: "Machine Learning, Deep Learning, Computer Vision and NLP",
    iconName: "Cpu"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Python, SQL, ETL, Apache Spark and BigQuery",
    iconName: "Database"
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    description: "LLM applications, Prompt Engineering and AI assistants",
    iconName: "Sparkles"
  },
  {
    id: "project-learning",
    title: "Project-Based Learning",
    description: "Learning by designing, developing and deploying practical applications",
    iconName: "Code2"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy"]
  },
  {
    category: "Machine Learning",
    skills: ["Regression", "Classification", "Random Forest", "XGBoost", "TF-IDF", "Anomaly Detection"]
  },
  {
    category: "AI & NLP",
    skills: ["Generative AI", "Natural Language Processing", "Prompt Engineering", "Sentiment Analysis"]
  },
  {
    category: "Deep Learning",
    skills: ["LSTM", "Autoencoders", "Computer Vision"]
  },
  {
    category: "Data Engineering",
    skills: ["ETL Pipelines", "Apache Spark", "BigQuery"]
  },
  {
    category: "Development & Tools",
    skills: ["Streamlit", "REST APIs", "Power BI", "Tableau", "Git", "GitHub", "Jupyter Notebook"]
  },
  {
    category: "Cloud & Deployment",
    skills: ["Streamlit Cloud", "REST APIs", "Docker Basics"]
  }
];

export const projects: Project[] = [
  {
    id: "failsight-ai",
    name: "FailSight AI — Advanced Edition",
    status: "Completed",
    year: "2026",
    badge: "Live",
    technologies: [
      "Python",
      "Streamlit",
      "Deep Learning",
      "Machine Learning",
      "Anomaly Detection",
      "LSTM",
      "Sentiment Analysis"
    ],
    description: "A Streamlit-based product failure and warranty analytics platform designed to analyze product reliability, detect anomalies, forecast future failures, and generate actionable insights.",
    capabilities: [
      "Product failure analytics",
      "Warranty analytics",
      "Anomaly detection",
      "LSTM forecasting",
      "Sentiment analysis",
      "Interactive analytics dashboard",
      "AI-assisted insights"
    ],
    githubUrl: null, // "Code coming soon"
    demoUrl: null
  },
  {
    id: "ai-detection-chatbot",
    name: "AI Detection System with Chatbot",
    status: "In Progress",
    year: "2026",
    badge: "In Progress",
    technologies: [
      "Computer Vision",
      "Deep Learning",
      "Generative AI",
      "Python"
    ],
    description: "An AI-powered detection system combining computer vision and deep learning with an integrated conversational assistant. The system is being developed to detect visual information and allow users to interact with the system using natural language.",
    capabilities: [
      "Computer Vision",
      "Deep Learning",
      "AI Assistant",
      "Generative AI",
      "Natural-language interaction"
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "resume-screener",
    name: "Resume Screener",
    status: "Completed",
    year: "2025",
    badge: "Completed",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Scikit-learn",
      "Streamlit"
    ],
    description: "An AI-powered resume screening application that analyzes resumes against job descriptions and produces relevance-based matching using NLP and TF-IDF techniques.",
    capabilities: [
      "Resume analysis",
      "Job-description matching",
      "NLP processing",
      "TF-IDF similarity",
      "Candidate ranking"
    ],
    githubUrl: null,
    demoUrl: null
  },
  {
    id: "expense-analyzer",
    name: "Expense Analyzer",
    status: "Completed",
    year: "2025",
    badge: "Completed",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Streamlit"
    ],
    description: "An interactive expense analytics application that processes transaction data, categorizes spending, visualizes financial patterns, and generates budgeting insights.",
    capabilities: [
      "Transaction analysis",
      "Expense categorization",
      "Data visualization",
      "Spending insights",
      "Interactive dashboard"
    ],
    githubUrl: null,
    demoUrl: null
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "NIAT Program, Joy University",
    location: "Kerala, India",
    status: "Currently Pursuing",
    current: true,
    focus: "Specializing in Artificial Intelligence and Machine Learning with active project development in data systems, neural networks, and computer vision."
  },
  {
    degree: "Advanced Diploma — Data Engineering, Generative AI & Big Data",
    institution: "Certification Program",
    location: "Kerala, India",
    status: "Completed",
    current: false,
    focus: "Comprehensive training in big data processing, Apache Spark, Google BigQuery, ETL pipeline development, and LLM applications."
  }
];

export const certifications: CertificationItem[] = [
  {
    provider: "IBM",
    title: "Python for Data Science",
    year: "2026",
    tag: "Data Science"
  },
  {
    provider: "IBM",
    title: "Machine Learning with Python",
    year: "2026",
    tag: "Machine Learning"
  },
  {
    provider: "Cognitive Class",
    title: "Machine Learning with Python",
    year: "2026",
    tag: "Applied ML"
  },
  {
    provider: "Forage",
    title: "British Airways Data Science Job Simulation",
    year: "2026",
    tag: "Industry Simulation"
  },
  {
    provider: "Cognitive Class",
    title: "Python 101 for Data Science",
    year: "2025",
    tag: "Programming"
  }
];

export const currentlyExploring: string[] = [
  "Advanced Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Generative AI",
  "AI Agents",
  "Data Engineering",
  "Cloud & Deployment",
  "Scalable AI Applications"
];
