export interface Profile {
  name: string;
  initials: string;
  role: string;
  subRole: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  resumeSummary: string;
  extraSummaryLine: string;
  github: string;
  linkedin: string;
  portfolio: string;
  resumePdf: string;
  quickFacts: { label: string; value: string }[];
  quote: string;
  idCard: {
    idNo: string;
    dept: string;
    validTill: string;
    backLines: string[];
  };
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  num: string;
}

export interface SkillItem {
  atomicNumber: number;
  symbol: string;
  name: string;
  family: string;
  iconName: string;
  isBrand: boolean;
  projects: string[];
}

export interface SkillGroup {
  name: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  liveUrl?: string;
  paperUrl?: string;
}

export interface CertificationItem {
  index: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: 'experience' | 'education';
  details: string[];
  technologies?: string[];
}

export interface AchievementItem {
  index: string;
  logo: string;
  platform: string;
  label: string;
  caption: string;
  detail: string;
  number: number;
  numberSuffix?: string;
  brandColor?: string;
}

export const PROFILE: Profile = {
  name: "Abdul Tayab",
  initials: "AT",
  role: "Software Engineer | AI/ML Engineer | Full-Stack Python Developer",
  subRole: "Creative Developer | AI & Web Technologies",
  email: "abdultayab696@gmail.com",
  phone: "+92 312 0393552",
  phoneHref: "tel:+923120393552",
  location: "Karachi, Pakistan",
  resumeSummary:
    "Software Engineering graduate with a strong interest in Artificial Intelligence, Machine Learning, Cybersecurity, and Data Analytics. Built a diverse technical foundation through academic coursework, professional certifications, hands-on projects, and practical software development.",
  extraSummaryLine:
    "Completed specialized training in Machine Learning, AI, NLP, Cloud Technologies, and Cybersecurity from leading global institutions and technology providers.",
  github: "https://github.com/AbdulTayab123",
  linkedin: "https://www.linkedin.com/in/abdul-tayab-0a723a388/",
  portfolio: "https://abdultayab.netlify.app/",
  resumePdf: "/Abdul_Tayab_CV.pdf",
  quickFacts: [
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Education", value: "B.E. Software Engineering (2026)" },
    { label: "Institution", value: "Iqra University, Karachi" },
    { label: "Current Role", value: "Full-Stack & Systems Engineer (NFTCipher)" },
    { label: "Email", value: "abdultayab696@gmail.com" },
  ],
  quote:
    "Seeking graduate study opportunities to further develop technical expertise, gain international academic exposure, and contribute to innovative technology-driven solutions.",
  idCard: {
    idNo: "AT-2026-SE",
    dept: "Software Engineering",
    validTill: "2026",
    backLines: [
      "B.E. Software Engineering, Iqra University",
      "Full-Stack & Systems Engineer at NFTCipher",
      "Author of 3 Research Manuscripts in Agentic AI & Forensics",
      "Best Project Award Winner (AutoApplyPro 2023)",
      "150+ Algorithmic & Programming Problems Solved",
    ],
  },
};

export const NAV: NavItem[] = [
  { id: "about", label: "About", href: "#about", num: "01" },
  { id: "skills", label: "Skills", href: "#skills", num: "02" },
  { id: "work", label: "Work", href: "#work", num: "03" },
  { id: "certifications", label: "Certifications", href: "#certifications", num: "04" },
  { id: "experience", label: "Experience", href: "#experience", num: "05" },
  { id: "achievements", label: "Achievements", href: "#achievements", num: "06" },
  { id: "contact", label: "Contact", href: "#contact", num: "07" },
];

export const SKILLS: SkillItem[] = [
  // Programming Languages
  { atomicNumber: 1, symbol: "Py", name: "Python", family: "Languages", iconName: "python", isBrand: true, projects: ["X_aVision", "AI Cyber Threat Detection", "Car Rental Platform", "AI Navigation"] },
  { atomicNumber: 2, symbol: "Ja", name: "Java", family: "Languages", iconName: "java", isBrand: true, projects: ["Car Rental Platform", "DSA Problem Solving"] },
  { atomicNumber: 3, symbol: "Js", name: "JavaScript", family: "Languages", iconName: "javascript", isBrand: true, projects: ["NFTCipher Web Systems", "AutoApplyPro", "PHP Web Dev Intern"] },
  { atomicNumber: 4, symbol: "Ts", name: "TypeScript", family: "Languages", iconName: "typescript", isBrand: true, projects: ["Car Rental Platform", "Modern Web Apps"] },
  { atomicNumber: 5, symbol: "Da", name: "Dart", family: "Languages", iconName: "dart", isBrand: true, projects: ["Cross-Platform Apps"] },
  { atomicNumber: 6, symbol: "Ph", name: "PHP", family: "Languages", iconName: "php", isBrand: true, projects: ["Interns Pakistan Web Apps"] },
  { atomicNumber: 7, symbol: "Sq", name: "SQL", family: "Languages", iconName: "mysql", isBrand: true, projects: ["Deloitte Simulations", "NFTCipher Backend", "AutoApplyPro"] },
  { atomicNumber: 8, symbol: "C", name: "C", family: "Languages", iconName: "c", isBrand: true, projects: ["Systems Fundamentals & DSA"] },

  // AI/ML & Data
  { atomicNumber: 9, symbol: "Ml", name: "Machine Learning", family: "AI/ML & Data", iconName: "ml", isBrand: false, projects: ["Cyber Threat Detection", "Blockchain Forensics", "AutoApplyPro"] },
  { atomicNumber: 10, symbol: "Dl", name: "Deep Learning", family: "AI/ML & Data", iconName: "dl", isBrand: false, projects: ["X_aVision DICOM Analysis", "Anomaly Detection"] },
  { atomicNumber: 11, symbol: "Nl", name: "NLP & LLMs", family: "AI/ML & Data", iconName: "nlp", isBrand: false, projects: ["Agentic AI Framework", "NFTCipher AI Chatbots", "X_aVision"] },
  { atomicNumber: 12, symbol: "Cv", name: "Computer Vision", family: "AI/ML & Data", iconName: "cv", isBrand: false, projects: ["Navigation Assistance", "X_aVision DICOM"] },
  { atomicNumber: 13, symbol: "Tf", name: "TensorFlow", family: "AI/ML & Data", iconName: "tensorflow", isBrand: true, projects: ["AI Cyber Threat Detection"] },
  { atomicNumber: 14, symbol: "Pt", name: "PyTorch", family: "AI/ML & Data", iconName: "pytorch", isBrand: true, projects: ["Deep Learning Models"] },
  { atomicNumber: 15, symbol: "Sk", name: "Scikit-learn", family: "AI/ML & Data", iconName: "scikitlearn", isBrand: true, projects: ["Network Anomaly Analysis"] },
  { atomicNumber: 16, symbol: "Np", name: "NumPy & Pandas", family: "AI/ML & Data", iconName: "numpy", isBrand: true, projects: ["Data Analytics & Preprocessing"] },
  { atomicNumber: 17, symbol: "Tb", name: "Tableau", family: "AI/ML & Data", iconName: "tableau", isBrand: true, projects: ["Deloitte Data Analytics"] },

  // Cybersecurity
  { atomicNumber: 18, symbol: "Ns", name: "Network Security", family: "Cybersecurity", iconName: "netsec", isBrand: false, projects: ["Agentic AI Threat Detection", "Deloitte Cybersecurity"] },
  { atomicNumber: 19, symbol: "Td", name: "Threat Detection", family: "Cybersecurity", iconName: "threat", isBrand: false, projects: ["Agentic AI Threat Framework", "Anomaly Detection"] },
  { atomicNumber: 20, symbol: "Id", name: "Intrusion Detection", family: "Cybersecurity", iconName: "ids", isBrand: false, projects: ["Network Monitoring & Analysis"] },
  { atomicNumber: 21, symbol: "Lx", name: "Linux Security", family: "Cybersecurity", iconName: "linuxsec", isBrand: false, projects: ["Secure Systems & Backend Services"] },
  { atomicNumber: 22, symbol: "Bf", name: "Blockchain Forensics", family: "Cybersecurity", iconName: "forensics", isBrand: false, projects: ["Digital Asset Tracing Framework", "1st Place Hackathon 2024"] },

  // Software & Backend
  { atomicNumber: 23, symbol: "Re", name: "React", family: "Software & Backend", iconName: "react", isBrand: true, projects: ["NFTCipher Web Systems", "Car Rental Platform", "X_aVision"] },
  { atomicNumber: 24, symbol: "Nx", name: "Next.js", family: "Software & Backend", iconName: "nextjs", isBrand: true, projects: ["Car Rental Platform"] },
  { atomicNumber: 25, symbol: "No", name: "Node.js", family: "Software & Backend", iconName: "nodejs", isBrand: true, projects: ["NFTCipher Backend", "AutoApplyPro"] },
  { atomicNumber: 26, symbol: "Ex", name: "Express.js", family: "Software & Backend", iconName: "express", isBrand: true, projects: ["NFTCipher APIs", "AutoApplyPro"] },
  { atomicNumber: 27, symbol: "Dj", name: "Django & FastAPI", family: "Software & Backend", iconName: "django", isBrand: true, projects: ["X_aVision DICOM Platform"] },
  { atomicNumber: 28, symbol: "Ap", name: "REST & GraphQL", family: "Software & Backend", iconName: "restapi", isBrand: false, projects: ["NFTCipher APIs", "AutoApplyPro", "X_aVision"] },

  // Databases
  { atomicNumber: 29, symbol: "My", name: "MySQL", family: "Databases", iconName: "mysql", isBrand: true, projects: ["NFTCipher Databases", "AutoApplyPro", "Interns Pakistan"] },
  { atomicNumber: 30, symbol: "Pg", name: "PostgreSQL", family: "Databases", iconName: "postgresql", isBrand: true, projects: ["Relational Database Systems"] },
  { atomicNumber: 31, symbol: "Mg", name: "MongoDB", family: "Databases", iconName: "mongodb", isBrand: true, projects: ["Car Rental Platform"] },
  { atomicNumber: 32, symbol: "Fb", name: "Firebase", family: "Databases", iconName: "firebase", isBrand: true, projects: ["NFTCipher Real-time Chatbots"] },
  { atomicNumber: 33, symbol: "Rd", name: "Redis", family: "Databases", iconName: "redis", isBrand: true, projects: ["Caching & Session Management"] },

  // Cloud & DevOps
  { atomicNumber: 34, symbol: "Aw", name: "AWS", family: "Cloud & DevOps", iconName: "aws", isBrand: true, projects: ["NFTCipher Cloud Infrastructure", "Car Rental Cloud"] },
  { atomicNumber: 35, symbol: "Az", name: "Azure", family: "Cloud & DevOps", iconName: "azure", isBrand: true, projects: ["Azure NLP & Cloud Services", "NFTCipher Cloud"] },
  { atomicNumber: 36, symbol: "Dk", name: "Docker", family: "Cloud & DevOps", iconName: "docker", isBrand: true, projects: ["Car Rental Microservices Containerization"] },
  { atomicNumber: 37, symbol: "Gt", name: "Git & GitHub", family: "Cloud & DevOps", iconName: "git", isBrand: true, projects: ["All Open Source & Team Repositories"] },
  { atomicNumber: 38, symbol: "Ji", name: "Jira & Trello", family: "Cloud & DevOps", iconName: "jira", isBrand: true, projects: ["Agile Project Management"] },

  // Concepts
  { atomicNumber: 39, symbol: "Ds", name: "Data Structures & Algorithms", family: "Concepts", iconName: "dsa", isBrand: false, projects: ["150+ Solved Algorithmic Problems"] },
  { atomicNumber: 40, symbol: "Oo", name: "Object-Oriented Programming", family: "Concepts", iconName: "oop", isBrand: false, projects: ["Full-Stack Architecture & Systems"] },
  { atomicNumber: 41, symbol: "Sd", name: "System Design", family: "Concepts", iconName: "sysdesign", isBrand: false, projects: ["Scalable Web & Cloud Systems"] },
  { atomicNumber: 42, symbol: "Ag", name: "Agentic AI Systems", family: "Concepts", iconName: "agentic", isBrand: false, projects: ["Cyber Threat Detection Research Manuscript"] },
];

export const SKILL_FAMILIES: string[] = [
  "All",
  "Languages",
  "AI/ML & Data",
  "Cybersecurity",
  "Software & Backend",
  "Databases",
  "Cloud & DevOps",
  "Concepts",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "object-detection",
    index: "01",
    title: "Real-Time Computer Vision & Object Detection",
    kicker: "Computer Vision • Deep Learning",
    description:
      "Developed a computer vision application for real-time object detection, image analysis, and confidence scoring.",
    features: [
      "Real-time object detection with live camera feed",
      "Bounding boxes with confidence scoring",
      "Multi-class image analysis using TensorFlow.js",
      "Interactive image upload and analysis dashboard",
    ],
    tech: ["Python", "C++", "React", "TypeScript", "TensorFlow.js", "OpenCV"],
    liveUrl: "https://objectdetectionproject.netlify.app/",
  },
  {
    id: "linux-ids",
    index: "02",
    title: "Cybersecurity, Linux & Intrusion Detection",
    kicker: "Cybersecurity • Log Analysis",
    description:
      "Built a security analysis platform for Linux log monitoring, suspicious activity detection, and network intrusion analysis.",
    features: [
      "Real-time Linux log monitoring and parsing",
      "Anomaly detection with Scikit-learn models",
      "Network intrusion analysis and pattern matching",
      "Security dashboard with live alerts",
    ],
    tech: ["Python", "C", "Linux", "FastAPI", "Scikit-learn", "React"],
    liveUrl: "https://linuxids.netlify.app/",
  },
  {
    id: "navsight-ai",
    index: "03",
    title: "NavSight AI — Visual Assistance for Blind Users",
    kicker: "AI Accessibility • Computer Vision",
    description:
      "Developed an AI-powered accessibility application for scene descriptions, text recognition, and voice-based assistance.",
    features: [
      "AI-powered scene descriptions from camera input",
      "OCR-based text recognition with voice output",
      "Voice-based interaction using Web Speech API",
      "Gemini API integration for visual understanding",
    ],
    tech: ["Python", "React", "TypeScript", "Gemini API", "OCR", "Web Speech API"],
    liveUrl: "https://navsightaiproject.netlify.app/",
  },
  {
    id: "civitwin-ai",
    index: "04",
    title: "CiviTwin AI — Civil Engineering & Construction Intelligence",
    kicker: "Construction Tech • AI Vision",
    description:
      "Created an AI-assisted construction platform for site image analysis, project progress tracking, and bill of quantities (BOQ) cost estimation.",
    features: [
      "AI-powered construction site image analysis",
      "Automated project progress tracking",
      "BOQ cost estimation with Pandas processing",
      "Gemini API for construction intelligence",
    ],
    tech: ["Python", "React", "TypeScript", "FastAPI", "Pandas", "Gemini API"],
    liveUrl: "https://civitwinai.netlify.app/",
  },
  {
    id: "paperpilot-ai",
    index: "05",
    title: "PaperPilot AI — Research Intelligence Workspace",
    kicker: "RAG • Research AI",
    description:
      "Built an AI research assistant for PDF analysis, evidence-based question answering, and scientific paper comparison.",
    features: [
      "PDF parsing with section-level extraction",
      "RAG-based evidence-backed question answering",
      "Multi-paper comparison and synthesis",
      "Citation tracking with source references",
    ],
    tech: ["Python", "React", "TypeScript", "FastAPI", "Gemini API", "RAG"],
    liveUrl: "https://paperpilotai.netlify.app/",
  },
  {
    id: "modelforge-ai",
    index: "06",
    title: "ModelForge AI — Machine Learning & Data Science Studio",
    kicker: "AutoML • Data Science",
    description:
      "Developed an ML platform for dataset analysis, regression, classification, model evaluation, and predictive analytics.",
    features: [
      "Automated dataset profiling and preprocessing",
      "Regression and classification model training",
      "Model evaluation metrics (Accuracy, F1, RMSE)",
      "Predictive analytics with interactive visualizations",
    ],
    tech: ["Python", "C++", "React", "TypeScript", "Pandas", "NumPy", "Scikit-learn"],
    liveUrl: "https://modelforgeai.netlify.app/",
  },
  {
    id: "ai-xray-hospital",
    index: "07",
    title: "AI X-Ray & Hospital Management System",
    kicker: "Medical AI • Healthcare Platform",
    description:
      "Designed an AI-assisted medical imaging and hospital management platform for X-ray review, patient records, and clinical reporting.",
    features: [
      "AI-assisted X-ray image analysis with OpenCV",
      "Comprehensive patient record management",
      "Clinical reporting with structured templates",
      "PostgreSQL-backed healthcare data storage",
    ],
    tech: ["Python", "C++", "React", "TypeScript", "Django", "OpenCV", "PostgreSQL"],
    liveUrl: "https://aixrayhospital.netlify.app/",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { index: "01", title: "Machine Learning Specialization", issuer: "DeepLearning.AI & Stanford Online", date: "Sep 2026", verifyUrl: "https://coursera.org/verify/specialization/LCMNFRIIJNDC" },
  { index: "02", title: "Machine Learning with Python", issuer: "IBM", date: "Sep 2026", verifyUrl: "https://coursera.org/verify/5KRZKW8G8HVN" },
  { index: "03", title: "Advanced Topics in Artificial Intelligence", issuer: "University of Illinois Urbana-Champaign", date: "Aug 2026", verifyUrl: "https://coursera.org/verify/5OIJ4R7FQKX7" },
  { index: "04", title: "Natural Language Processing in Microsoft Azure", issuer: "Microsoft", date: "Aug 2026", verifyUrl: "https://coursera.org/verify/0GGA8BJMMVUE" },
  { index: "05", title: "Cyber Attack Countermeasures", issuer: "New York University", date: "Aug 2026", verifyUrl: "https://coursera.org/verify/SWQLHPWGS0VC" },
  { index: "06", title: "Google Cybersecurity Professional Certificate", issuer: "Google", date: "Aug 2025", verifyUrl: "https://coursera.org/verify/professional-cert/2PFR0IUQ0QXH" },
  { index: "07", title: "Google Prompting Essentials", issuer: "Google", date: "2025" },
  { index: "08", title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", date: "2026" },
  { index: "09", title: "Python Programming Essentials", issuer: "Rice University", date: "2026" },
  { index: "10", title: "IELTS Writing Section Skills Mastery", issuer: "University of California, Irvine", date: "2026" },
  { index: "11", title: "IELTS Listening and Speaking Sections Skills Mastery", issuer: "University of California, Irvine", date: "2026" },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "exp-1",
    period: "Sep 2025 – Present",
    title: "Full-Stack and Systems Engineer",
    organization: "NFTCipher",
    type: "experience",
    details: [
      "Worked as a part-time client-based Full-Stack and Systems Engineer, developing web systems, backend services, databases, and secure APIs.",
      "Integrated AI-powered chatbots for customer interaction and automated system responses, alongside cloud-based databases and services on AWS and Azure.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "JavaScript", "Firebase", "AI/LLM APIs", "AWS", "Azure", "Git", "GitHub", "REST APIs"],
  },
  {
    id: "exp-2",
    period: "Aug 2025 – Nov 2025",
    title: "Technology, Data Analytics & Cybersecurity",
    organization: "Deloitte Australia",
    type: "experience",
    details: [
      "Completed practical job simulations in data analytics, technology, and cybersecurity, applying Python, SQL, Excel, and Tableau.",
    ],
    technologies: ["Python", "SQL", "Excel", "Tableau", "Cybersecurity", "Data Analytics"],
  },
  {
    id: "edu-1",
    period: "2022 – 2026",
    title: "Bachelor of Engineering (B.E.) in Software Engineering",
    organization: "Iqra University, Karachi",
    location: "Karachi, Pakistan",
    type: "education",
    details: [
      "Relevant Coursework: Artificial Intelligence, Machine Learning, Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, Software Engineering, Cybersecurity, Web Engineering, and System Design.",
      "Achieved Best Project Award (2023) for AutoApplyPro platform.",
      "Conducted faculty-supervised research resulting in 3 manuscripts in Agentic AI & Forensics.",
    ],
  },
  {
    id: "exp-3",
    period: "Jul 2024 – Aug 2024",
    title: "PHP Web Developer Intern",
    organization: "Interns Pakistan",
    type: "experience",
    details: [
      "Developed web applications using PHP, MySQL, HTML, CSS, and JavaScript, with frontend/backend integration and database operations.",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "vol-1",
    period: "Oct 2022 – Aug 2025",
    title: "Student Lead & Event Coordinator",
    organization: "Iqra Ushers Club & Tech Community",
    type: "education",
    details: [
      "Participated in university event management, student coordination, guest assistance, and academic, cultural, and institutional events.",
      "Organized technology sessions, programming competitions, hackathons, and collaborative student activities.",
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    index: "01 / 07",
    logo: "leetcode",
    platform: "LeetCode & Algorithmic Problem Solving",
    label: "Data Structures & Algorithms",
    caption: "Solved 40+ coding problems on LeetCode.",
    detail: "Problem solving across Arrays, Graphs, Trees, Dynamic Programming",
    number: 40,
    numberSuffix: "+",
    brandColor: "#FFA116",
  },
  {
    index: "02 / 07",
    logo: "nasa",
    platform: "NASA Space Apps Challenge 2025",
    label: "Global Space Tech Hackathon",
    caption: "Developed tech-driven solutions for real-world Earth and space challenges",
    detail: "International participant solving complex open data problems",
    number: 2025,
    numberSuffix: "",
    brandColor: "#0B3D91",
  },
  {
    index: "03 / 07",
    logo: "lablab",
    platform: "lablab.ai AI Hackathon 2025",
    label: "AI Agents on Arc with USDC",
    caption: "Participated in global hackathon including NYC build event",
    detail: "Autonomous AI Agents development with web3/USDC integration",
    number: 2025,
    numberSuffix: "",
    brandColor: "#000000",
  },
  {
    index: "04 / 07",
    logo: "university",
    platform: "1st Place – Inter-University Hackathon 2024",
    label: "Blockchain Academic Records Solution",
    caption: "Achieved First Place among regional university teams",
    detail: "Designed immutable academic credential verification on blockchain",
    number: 1,
    numberSuffix: "st",
    brandColor: "#0052CC",
  },
  {
    index: "05 / 07",
    logo: "university",
    platform: "Best Project Award – AutoApplyPro (2023)",
    label: "Faculty Recognition",
    caption: "Awarded Best Project at Iqra University",
    detail: "AI-assisted resume generation & job application management platform",
    number: 2023,
    numberSuffix: "",
    brandColor: "#10B981",
  },
  {
    index: "06 / 07",
    logo: "university",
    platform: "Research Manuscripts Published / Under Review",
    label: "Peer-Reviewed & Academic Papers",
    caption: "3 Research Manuscripts in Agentic AI, Evidence Intelligence & Forensics",
    detail: "IJCEDS 2026 manuscript under review & digital evidence frameworks",
    number: 3,
    numberSuffix: " Paper(s)",
    brandColor: "#6366F1",
  },
  {
    index: "07 / 07",
    logo: "geeksforgeeks",
    platform: "GeeksforGeeks Problem Solving",
    label: "Data Structures & Algorithms",
    caption: "Solved 40+ coding problems on GeeksforGeeks.",
    detail: "Core CS fundamentals, algorithms & data structures practice",
    number: 40,
    numberSuffix: "+",
    brandColor: "#2F8D46",
  },
];

export const RESEARCH_MANUSCRIPTS = [
  {
    authors: "Abdul Tayab, Farhan Ali",
    year: "2026",
    title: "A Secure Agentic AI Framework for Autonomous Cyber Threat Detection, Reasoning, and Response",
    journal: "International Journal of Computer Engineering and Data Science (IJCEDS), 2026",
    status: "Under Review",
    url: "https://abdultayab696.blogspot.com/2026/09/a-secure-agentic-ai-framework-for.html",
  },
  {
    authors: "Abdul Tayab",
    year: "2026",
    title: "A Unified AI-Driven Digital Evidence Intelligence Framework for Cyber Threat Detection, Forensic Attribution, and Attack Reconstruction",
    journal: "Journal Manuscript",
    status: "Manuscript Prepared for Publication Consideration",
    url: "https://abdultayab696.blogspot.com/2026/09/a-unified-ai-driven-digital-evidence.html",
  },
  {
    authors: "Abdul Tayab",
    year: "2026",
    title: "An AI-Driven Blockchain Forensics Framework for Detecting and Tracing Illicit Digital Asset Transactions",
    journal: "Journal Manuscript",
    status: "Manuscript Prepared for Publication Consideration",
    url: "https://abdultayab696.blogspot.com/2026/10/an-ai-driven-blockchain-forensics.html",
  },
];

export const REFERENCES = [
  {
    name: "Dr. Ali Akbar Siddique",
    title: "Associate Professor, FYP Coordinator",
    dept: "Department of Bachelor of Engineering, Iqra University",
    email: "ali.siddiqui@iqra.edu.pk",
  },
  {
    name: "Dr. Rizwan Munir",
    title: "Associate Professor",
    dept: "Department of Software Engineering, Iqra University",
    email: "rizwan.munir@iqra.edu.pk",
  },
];