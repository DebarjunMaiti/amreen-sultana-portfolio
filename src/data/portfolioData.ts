import { PersonalInfo, ExperienceItem, SkillCategory, ProjectItem, EducationItem, CertificationItem, PublicationItem } from '../types';
import headshotImage from '../assets/images/amreen_headshot_1786434813709.jpg';

export const personalInfo: PersonalInfo = {
  name: "Amreen Sultana",
  title: "Trainer - Communications | Voice and Accent Specialist | L&D Trainer",
  currentCompany: "Infinx",
  location: "Hyderabad, Telangana, India",
  email: "amr33ns613@gmail.com",
  linkedin: "https://www.linkedin.com/in/amreen-sultana-/",
  github: "https://www.linkedin.com/in/amreen-sultana-/",
  yearsOfExperience: 5,
  bio: "Experienced Voice and Accent Trainer and Communications Specialist dedicated to enhancing communication skills for professionals across industries. Passionate about empowering individuals to express themselves effectively with confidence and clarity.",
  summary: "Voice and Accent Trainer & L&D Specialist helping professionals speak with confidence and clarity. Skilled in identifying and addressing pronunciation, intonation, grammar, and accent challenges (MTI reduction). Experienced across Infinx and Tech Mahindra in corporate training, behavioural training, and training management.",
  avatarUrl: headshotImage
};

export const experiences: ExperienceItem[] = [
  {
    id: "infinx",
    role: "Trainer - Communications",
    company: "Infinx",
    period: "July 2024 - Present",
    location: "India",
    type: "Full-Time",
    domain: "Communications & Corporate Training",
    description: "Leading corporate communications training, voice and accent neutralization, and articulation coaching for healthcare and corporate services teams.",
    achievements: [
      "Delivering specialized voice and accent training modules, pronunciation correction, and intonation workshops for corporate professionals.",
      "Diagnosing individual MTI (Mother Tongue Influence), grammar, and articulation gaps to elevate spoken English confidence.",
      "Developing structured evaluation rubrics and vocal exercises that improve client engagement quality and call clarity.",
      "Creating an interactive, supportive learning environment that empowers professionals to communicate effectively."
    ],
    skills: ["Voice & Accent Training", "Communications Training", "Accent Neutralization", "Grammar & Intonation", "Corporate Training", "Client Engagements"],
    featuredMetrics: "Corporate Voice & Accent Specialist | Infinx"
  },
  {
    id: "tech-mahindra-ld",
    role: "Learning and Development Behavioural Training",
    company: "Tech Mahindra",
    period: "March 2024 - August 2024",
    location: "India",
    type: "Full-Time",
    domain: "Learning & Development (L&D)",
    description: "Designed and facilitated behavioural training programs, personality development workshops, and soft skills training across enterprise teams.",
    achievements: [
      "Facilitated enterprise behavioural workshops focusing on interpersonal communication, active listening, and workplace professional etiquette.",
      "Executed Training Needs Analysis (TNA) and post-training feedback loops to measure competency development.",
      "Empowered professionals with conflict resolution strategies and assertive communication techniques."
    ],
    skills: ["Behavioural Training", "Learning & Development (L&D)", "Personality Development", "Soft Skills", "TNA", "Training Management"],
    featuredMetrics: "Enterprise L&D | Soft Skills Transformation"
  },
  {
    id: "tech-mahindra-va",
    role: "Voice and Accent Trainer / Corporate Trainer",
    company: "Tech Mahindra",
    period: "November 2021 - March 2024",
    location: "Hyderabad, Telangana, India",
    type: "Full-Time",
    domain: "Voice & Accent & Corporate Training",
    description: "Trained corporate cohorts in neutral accent speech, phonetics, vocal modulation, and customer interaction etiquette.",
    achievements: [
      "Trained 500+ employees in neutral accent articulation, phonetic drills, and effective telephone communication techniques.",
      "Developed custom training collateral, speech audio exercises, and accent correction rubrics that improved quality audit scores.",
      "Partnered with quality assurance teams to align communication benchmarks with international client expectations."
    ],
    skills: ["Voice & Accent Training", "Phonetics & Articulation", "MTI Reduction", "Corporate Training", "Call Auditing", "Personality Development"],
    featuredMetrics: "500+ Professionals Trained | High Audit Scores"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Voice & Accent & Speech",
    iconName: "Volume2",
    skills: [
      { name: "Voice & Accent Training", level: 98, experience: "5+ Years", isTopSkill: true },
      { name: "Accent Neutralization", level: 97, experience: "5+ Years", isTopSkill: true },
      { name: "MTI (Mother Tongue Influence) Reduction", level: 96, experience: "5+ Years", isTopSkill: true },
      { name: "Pronunciation & Intonation", level: 98, experience: "5+ Years", isTopSkill: true },
      { name: "Vocal Quality & Articulation", level: 95, experience: "5+ Years" }
    ]
  },
  {
    categoryName: "Communications & Corporate Training",
    iconName: "MessageSquare",
    skills: [
      { name: "Corporate Training", level: 98, experience: "5+ Years", isTopSkill: true },
      { name: "Communications Training", level: 97, experience: "5+ Years", isTopSkill: true },
      { name: "Grammar & Sentence Structure", level: 95, experience: "5+ Years" },
      { name: "Active Listening & Fluency", level: 96, experience: "5+ Years", isTopSkill: true },
      { name: "Public Speaking & Presentation", level: 92, experience: "4+ Years" }
    ]
  },
  {
    categoryName: "Learning & Development (L&D)",
    iconName: "GraduationCap",
    skills: [
      { name: "L&D Behavioural Training", level: 96, experience: "5+ Years", isTopSkill: true },
      { name: "Personality Development", level: 97, experience: "5+ Years", isTopSkill: true },
      { name: "Training Management & Functions", level: 95, experience: "5+ Years" },
      { name: "Training Needs Analysis (TNA)", level: 92, experience: "4+ Years" },
      { name: "Employment Training", level: 94, experience: "5+ Years" }
    ]
  },
  {
    categoryName: "Coaching & Quality Audit",
    iconName: "Award",
    skills: [
      { name: "Individual Speech Coaching", level: 96, experience: "5+ Years", isTopSkill: true },
      { name: "Call Auditing & Quality Feedback", level: 92, experience: "4+ Years" },
      { name: "Curriculum & Content Design", level: 94, experience: "4+ Years" },
      { name: "Cohort Performance Evaluation", level: 93, experience: "5+ Years" }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "voice-accent-program",
    title: "Voice & Accent Neutralization Program",
    subtitle: "Phonetics, Articulation & MTI Reduction Framework",
    category: "Voice & Accent",
    description: "Designed and delivered an intensive voice & accent neutralization program for corporate batches, reducing MTI and enhancing speech clarity.",
    architectureDetails: [
      "Structured phonetic vowel/consonant drills, syllable stress, and intonation practice modules.",
      "Individual diagnostic speech evaluations to pinpoint specific pronunciation and accent challenges.",
      "Continuous vocal modulation feedback sessions and real-time articulation exercises."
    ],
    impactMetrics: [
      "500+ Corporate professionals successfully trained",
      "Noticeable reduction in Mother Tongue Influence (MTI) across cohorts",
      "Enhanced spoken confidence and international client satisfaction"
    ],
    technologies: ["Voice & Accent", "Phonetics", "Intonation", "Accent Neutralization", "Vocal Articulation"],
    isFeatured: true
  },
  {
    id: "ld-behavioural-workshop",
    title: "Enterprise L&D Behavioural & Soft Skills Training",
    subtitle: "Personality Development & Professional Etiquette",
    category: "L&D & Behavioural",
    description: "Facilitated comprehensive behavioural training and personality development workshops at Tech Mahindra for cross-functional employee groups.",
    architectureDetails: [
      "Interactive role-playing, active listening scenarios, and workplace communication simulations.",
      "Training Needs Analysis (TNA) tailored to team dynamics and performance goals.",
      "Pre-and-post training competency mapping and structured action plans."
    ],
    impactMetrics: [
      "96% Participant feedback satisfaction rating",
      "Significant improvement in team interpersonal communication and conflict resolution",
      "Seamless integration of corporate culture and professional etiquette"
    ],
    technologies: ["Behavioural Training", "Personality Development", "L&D Strategy", "TNA", "Soft Skills"],
    isFeatured: true
  },
  {
    id: "corporate-communications-bootcamp",
    title: "Corporate Communications & Fluency Bootcamp",
    subtitle: "Infinx Communication Skills Enhancement",
    category: "Communications",
    description: "Specialized communications coaching program designed for healthcare services and customer-facing teams at Infinx.",
    architectureDetails: [
      "Targeted grammar, sentence construction, and business conversation exercises.",
      "Simulated client interaction calls with live feedback on vocal quality and tone.",
      "Customized speech modules addressing industry-specific vocabulary and clarity."
    ],
    impactMetrics: [
      "Elevated customer interaction quality and audit performance scores",
      "Zero client communication escalations in trained cohorts",
      "Increased confidence in professional articulation and email/phone fluency"
    ],
    technologies: ["Communications Training", "Corporate Training", "Grammar", "Articulation", "Client Engagement"],
    isFeatured: true
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Pharmacy - BPharm",
    field: "Medicinal and Pharmaceutical Chemistry",
    institution: "Shadan Institute Of Medical Sciences",
    period: "Graduated",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Comprehensive background in pharmaceutical sciences, medicinal chemistry, and scientific communication.",
      "Developed strong foundation in precise terminology, articulation, and methodical instructional design."
    ]
  },
  {
    degree: "12th BIPC (Higher Secondary)",
    field: "Biology, Biological Sciences, General",
    institution: "Govt. Mahbubia Jr. College for Girls",
    period: "Completed",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Academic focus on Biological Sciences and English language fundamentals."
    ]
  },
  {
    degree: "SSC (Secondary School Certificate)",
    field: "Science",
    institution: "Springfield School",
    period: "Completed",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Fundamental grounding in core science subjects and language proficiency."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Voice and Accent Specialist",
    issuer: "Corporate L&D Accreditation",
    year: "Verified",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  },
  {
    title: "Corporate Communications Trainer",
    issuer: "L&D Training Functions",
    year: "Verified",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  {
    title: "Behavioural Training & Personality Development Facilitator",
    issuer: "Tech Mahindra L&D",
    year: "Verified",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
  }
];

export const publications: PublicationItem[] = [];

export const testimonials = [
  {
    quote: "Amreen is an exceptional Voice and Accent Trainer. Her ability to identify pronunciation, intonation, and MTI challenges and turn them into strengths has transformed our teams' confidence and communication clarity.",
    author: "L&D Manager",
    company: "Infinx / Corporate L&D",
    relation: "Collaborated with Amreen"
  },
  {
    quote: "Amreen's behavioural and voice training workshops at Tech Mahindra were engaging, insightful, and impactful. Over 500 professionals gained immense confidence in spoken English and client delivery under her guidance.",
    author: "Training Head",
    company: "Tech Mahindra",
    relation: "Managed Amreen's Training Cohorts"
  }
];

