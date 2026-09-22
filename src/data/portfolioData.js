export const profile = {
  name: 'Ganesh Kumar Chavala',
  role: 'Java Full Stack Developer',
  location: 'Vijayawada, Andhra Pradesh',
  email: 'ganeshkumar.chavala@gmail.com',
  phone: '+91 63035 70495',
  github: 'https://github.com/ganeshkumarbuilds',
  linkedin: 'https://linkedin.com/in/ganeshchavala',
  tagline:
    "I build web platforms end to end — Spring Boot and PostgreSQL on the backend, React and TypeScript on the front, with AI woven in where it earns its place. My favorite kind of project is one that can prove it works, not just claim it.",
  about:
    "I'm a third-year B.Tech student in AI & Machine Learning, working as a Java Full Stack Developer with hands-on experience across Spring Boot, React, PostgreSQL, and Python-based AI services. My internship and personal projects share a common thread: production-grade features — JWT authentication, RESTful APIs, real deployments — combined with AI integrated where it genuinely helps, not bolted on for show.",
}

export const pipeline = [
  { label: 'Plan', desc: 'Scope the requirement, pick the stack, sketch the architecture.', accent: true },
  { label: 'Build', desc: 'Spring Boot / React implementation, real data, real auth.', accent: false },
  { label: 'Verify', desc: 'Build passes, tests pass, nothing is taken on faith.', accent: true },
  { label: 'Ship', desc: 'Deployed and reachable, not just running on localhost.', accent: false },
]

export const projects = [
  {
    name: 'MediCompare',
    github: 'https://github.com/ganeshkumarbuilds/medicompare-ai.git',
    demo: 'https://client-iota-one-53.vercel.app/',
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring AI', 'PostgreSQL', 'React (Vite)', 'Docker'],
    bullets: [
      'Full-stack healthcare platform for comparing hospitals with a deterministic 0–100 scoring model and a grounded AI verdict via Spring AI + OpenRouter.',
      'Real-time booking system with conflict-protected slot availability and an admin approval workflow, secured end to end with JWT.',
    ],
  },
  {
    name: 'AI Forest Fire Detection & Monitoring',
    github: 'https://github.com/ganeshkumarbuilds/forest-fire-detector.git',
    demo: 'https://frontend-fire-detector.vercel.app/',
    tags: ['Python', 'TensorFlow', 'Flask', 'React', 'Vite', 'Tailwind CSS'],
    bullets: [
      'Fire / no-fire image classifier using MobileNetV2 transfer learning with confidence scoring, served through a Flask REST API.',
      'Grad-CAM explainability layer plus a live monitoring dashboard with geolocation mapping and automated critical-risk alerts.',
    ],
  },
  {
    name: 'VeriReview',
    github: 'https://github.com/ganeshkumarbuilds/verireview.git',
    demo: 'https://verireview-jet.vercel.app/',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Python', 'FastAPI', 'LangGraph', 'Docker', 'React + TS'],
    bullets: [
      'Turns a plain-English requirement into a built, tested, and reviewed codebase through a four-agent pipeline — Planner, Coding, Verified, Review — where nothing is marked verified without real build/test evidence.',
      'Spring Boot backend orchestrating a separate Python FastAPI + LangGraph AI microservice, with Docker-sandboxed execution and deterministic static analysis merged against AI-proposed findings.',
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    org: 'KodeBloom Technology & Services Pvt. Ltd., Secunderabad, Telangana',
    date: 'May – Jun 2026',
    bullets: [
      'Built and deployed full-stack web applications using Java, Spring Boot, and React.js, delivering scalable features for production-level projects with RESTful APIs and JWT-based authentication.',
      'Worked on AI-integrated features, applying LLM APIs and data-driven components alongside responsive React.js UI development.',
      'Collaborated via Git and GitHub in a cross-functional Agile team, resolving bugs and shipping feature enhancements under mentor guidance.',
    ],
  },
]

export const skills = [
  { title: 'Backend (Java)', items: 'Spring Boot, Spring Security, Spring Data JPA, Hibernate, Spring AI, Maven, RESTful APIs, JWT Authentication, Flyway' },
  { title: 'Frontend', items: 'React.js, TypeScript, Vite, Tailwind CSS, Responsive Web Design' },
  { title: 'Databases', items: 'PostgreSQL, MySQL, MongoDB' },
  { title: 'AI / Machine Learning', items: 'TensorFlow, MobileNetV2 (Transfer Learning), Grad-CAM Explainability, OpenRouter API, LangGraph, LLM Integration' },
  { title: 'DevOps & Tools', items: 'Docker, Git, GitHub, Postman, Vercel, Render' },
  { title: 'Core Concepts', items: 'DSA, OOP, MVC Architecture, Microservices, Agile Development' },
]

export const education = [
  {
    title: 'B.Tech — Artificial Intelligence & Machine Learning',
    meta: 'DVR & DR.HS MIC College of Technology, Kanchikacherla, Andhra Pradesh · Expected May 2028 · CGPA 7.8/10',
  },
]

export const outreach = {
  title: 'Community Outreach — AI Awareness Session',
  date: 'Apr 2026',
  desc: 'Conducted an interactive session for school students on how Artificial Intelligence is transforming industries and the importance of AI literacy for the next generation.',
}

export const certifications = [
  {
    title: 'Industry 4.0 & IIoT (Elite) — NPTEL, IIT Kharagpur',
    org: 'IIoT architecture, smart manufacturing, cyber-physical systems',
    date: 'Apr 2026',
    link: 'https://drive.google.com/file/d/1N8OMDA6ImLWmb3AT5O4F8OS2Zu14Tp_W/view?usp=sharing',
  },
  {
    title: 'Explore Machine Learning using Python — Infosys Springboard',
    org: 'Python-based ML fundamentals, model building, applied data science workflows',
    date: 'Jun 2026',
    link: 'https://drive.google.com/file/d/1fuVU-KvRhMIoEqxeC7UOYNM2PtOdyyHh/view?usp=sharing',
  },
  {
    title: 'InnoGenesis Hackathon 5.0 — Agentic AI Track',
    org: 'RVR & JC NRI Institute of Technology · National-level hackathon',
    date: 'Aug 2026',
    link: 'https://drive.google.com/file/d/1-ZwmEK_WxCyTxhbHYRKOc_KVEaa72BOy/view?usp=drive_link',
  },
  {
    title: 'ChatGPT Codex Hackathon — BlocksBlock',
    org: 'AI-coding-agent focused hackathon',
    date: '2026',
    link: 'https://drive.google.com/file/d/15RYdgoVEM7Nq4gv6YVpk5Y4yi1PUPG-9/view?usp=sharing',
  },
]