export const profile = {
  name: "Md. Meadul Islam",
  shortName: "Meadul",
  monogram: "MI",
  title: "Backend & AI Engineer",
  location: "Dhaka, Bangladesh",
  email: "mdmeadulislam@gmail.com",
  phone: "+880 1329-529581",
  resume: "/cv-software-engineer.pdf",
  summary:
    "AI/ML-focused software engineer building scalable backend systems, REST APIs, LLM-powered applications, recommendation engines, and AI-driven product search. I like turning messy, real-world problems into systems that are fast, measurable, and actually shipped.",
  links: [
    { label: "GitHub", href: "https://github.com/Md-Meadul-Islam", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-meadul-islam-497738178",
      icon: "linkedin",
    },
    { label: "LeetCode", href: "https://leetcode.com/u/mdmeadulislam/", icon: "code" },
    {
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/mdmeadulislam",
      icon: "terminal",
    },
  ],
} as const;

export const heroStats = [
  { value: "120+", label: "LeetCode problems" },
  { value: "20K+", label: "Products indexed" },
  { value: "3", label: "Products shipped" },
  { value: "3.53", label: "CGPA / 4.00" },
] as const;

export const marqueeItems = [
  "Python",
  "Node.js",
  "TypeScript",
  "LLM APIs",
  "Embeddings",
  "RAG",
  "MCP",
  "Vector Search",
  "Redis",
  "MongoDB",
  "Kafka",
  "Docker",
  "PyTorch",
  "Next.js",
  "Socket.IO",
] as const;

export const experience = [
  {
    company: "Ai2 Technologies Limited",
    role: "Backend Engineer",
    location: "London, United Kingdom",
    period: "Nov 2024 — Jun 2026",
    context:
      "Product engineering for a multi-tenant CMS and e-commerce platform, plus AI features across the catalogue.",
    bullets: [
      "Built a local LLM-based data crawler and browser extension that keeps products updated on a scheduler.",
      "Shipped an MCP server and LLM chatbot for conversational product search.",
      "Designed collaborative and content-based product recommendation systems.",
      "Reduced runtime and space complexity through modern data structures and query optimization.",
      "Worked with Redis, Firebase, and Socket.IO for real-time features and caching.",
      "Maintained the parent API server-side application powering customer CMS and e-commerce platforms.",
      "Integrated Stripe recurring payments for domain-user subscriptions.",
    ],
    stack: ["Node.js", "Python", "MongoDB", "Redis", "Socket.IO", "Stripe"],
  },
] as const;

export const projects = [
  {
    slug: "ukbd",
    index: "01",
    name: "UKBD App",
    kind: "E-commerce · AI search",
    period: "Mar 2026 — Sep 2026",
    company: "Ai2 Technologies Limited",
    description:
      "An e-commerce platform with a conversational product search layer: a local LLM crawler keeps the catalogue fresh, an LLM chatbot answers shopping questions, and a vector recommendation engine ranks 20K+ products by meaning, not just keywords.",
    highlights: [
      "Local LLM data crawler with scheduled product updates",
      "LLM chatbot for product search and analysis",
      "Vector recommendation engine over a 20K+ product catalogue",
      "Custom dictionary for misspelled-word correction",
    ],
    stack: ["Node.js", "MongoDB", "Python", "React.js", "Next.js"],
    href: "https://popular.ukbd.app/",
    linkLabel: "Visit live site",
    featured: true,
  },
  {
    slug: "cab-finder",
    index: "02",
    name: "Cab Finder",
    kind: "Ride sharing · Real-time",
    period: "Mar 2025 — Oct 2025",
    company: "Ai2 Technologies Limited",
    description:
      "A ride-sharing backend designed end-to-end: schema, REST APIs for Android and web clients, and real-time dispatch and presence on top of Redis, Firebase, and sockets.",
    highlights: [
      "Complete backend architecture and database schema",
      "REST APIs serving Android and web clients",
      "Redis, Firebase, and real-time socket communication",
      "Query and API optimizations to cut time-space complexity",
    ],
    stack: ["Node.js", "MongoDB", "React.js", "Next.js"],
    href: null,
    linkLabel: null,
    featured: true,
  },
  {
    slug: "mess-manager",
    index: "03",
    name: "Mess-Manager",
    kind: "Hostel management · RBAC",
    period: "Jan 2023 — Apr 2023",
    company: "Personal project",
    description:
      "A role-based hostel management system for managers and roommates, with an approval workflow so data only changes through reviewed requests.",
    highlights: [
      "Role-based management for managers and roommates",
      "Request-based update system for controlled data changes",
      "Authentication built with Laravel Breeze",
    ],
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    href: "https://github.com/Md-Meadul-Islam/Mess-Manager.git",
    linkLabel: "View on GitHub",
    featured: true,
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "Microservices"],
  },
  {
    label: "AI & Generative AI",
    items: [
      "LLM API integration",
      "Embeddings",
      "Vector search",
      "RAG pipelines",
      "MCP",
      "AI chatbots",
    ],
  },
  {
    label: "Machine Learning",
    items: [
      "Scikit-learn",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Feature engineering",
      "Model evaluation",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "Infrastructure & Tools",
    items: [
      "Docker",
      "Redis",
      "Kafka",
      "Firebase",
      "Socket.IO",
      "Nginx",
      "AWS",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    label: "Core Concepts",
    items: [
      "Data structures & algorithms",
      "System design",
      "API optimization",
      "Caching",
      "Asynchronous programming",
    ],
  },
] as const;

export const achievements = [
  "Solved 120+ algorithmic problems on LeetCode.",
  "Strong problem-solving skills across graphs, trees, dynamic programming, and arrays.",
  "Active on LeetCode and HackerRank.",
] as const;

export const certificates = [
  {
    name: "Complete AI/ML — Batch Prime 2.0",
    issuer: "Apna College, India (Online)",
    period: "Mar 2026 — Sep 2026",
  },
] as const;

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    school: "Sonargaon University, Dhaka, Bangladesh",
    period: "Apr 2019 — Nov 2025",
    result: "CGPA 3.53 / 4.00",
  },
  {
    degree: "BBA in Management Studies",
    school: "Apex College, India (Online)",
    period: "Apr 2018 — May 2023",
    result: "CGPA 4.25 / 5.00",
  },
] as const;

export const impactStories = [
  {
    id: "01",
    title: "Search that understands what people mean",
    project: "UKBD App",
    problem:
      "Catalogue search breaks the moment a shopper misspells a word or describes a product instead of typing its name.",
    action:
      "Built an MCP server and an LLM-powered chatbot for product search, backed by vector search and a custom dictionary for misspelled-word correction.",
    receipt:
      "Natural-language product discovery across a 20K+ item catalogue, integrated into the live storefront.",
    tags: ["MCP", "LLM", "Vector search"],
  },
  {
    id: "02",
    title: "Recommendations at catalogue scale",
    project: "UKBD App · Ai2",
    problem:
      "Keyword matching was leaving relevant products unseen on a catalogue with more than 20,000 items.",
    action:
      "Designed collaborative and content-based recommenders, then built a vector-based engine on product embeddings to rank by semantic relevance.",
    receipt:
      "A recommendation layer that works from product meaning, not just exact matches.",
    tags: ["Embeddings", "RecSys", "Python"],
  },
  {
    id: "03",
    title: "A real-time ride-sharing backbone",
    project: "Cab Finder",
    problem:
      "Riders and drivers needed a consistent, responsive backend across Android and web clients.",
    action:
      "Owned the backend architecture and schema, built scalable REST APIs, and wired Redis, Firebase, and Socket.IO for live updates.",
    receipt:
      "One backend serving two client platforms with real-time communication and optimized queries.",
    tags: ["Node.js", "Socket.IO", "Redis"],
  },
  {
    id: "04",
    title: "Subscription revenue, wired in",
    project: "Ai2 platform",
    problem:
      "The parent platform needed recurring billing for domain-user subscriptions without a manual workflow.",
    action:
      "Integrated Stripe's recurring payment system into the existing API platform and subscription flow.",
    receipt:
      "Automated recurring billing running inside the production CMS and e-commerce platform.",
    tags: ["Stripe", "Billing", "API"],
  },
] as const;

export const bragMetrics = [
  { value: "120+", label: "LeetCode problems solved", detail: "Graphs, trees, DP, arrays" },
  { value: "20K+", label: "Products indexed", detail: "Embeddings + vector search" },
  { value: "3", label: "Products shipped", detail: "Production and personal" },
  { value: "20", label: "Months in production", detail: "Ai2 Technologies" },
] as const;

export const skillMatrix = [
  { name: "Node.js / Express", level: 92 },
  { name: "LLM integration / RAG", level: 88 },
  { name: "MongoDB / data modeling", level: 88 },
  { name: "Python / ML tooling", level: 82 },
  { name: "System design / APIs", level: 85 },
  { name: "React / Next.js", level: 80 },
] as const;

export const principles = [
  {
    title: "Make the model earn its place",
    body: "AI is a component, not a personality. If a query, index, or cache solves it more cheaply, it wins.",
  },
  {
    title: "Optimize what users feel",
    body: "Complexity work matters when it shows up as faster search, fresher data, or fewer dropped real-time events.",
  },
  {
    title: "Ship the boring parts",
    body: "Schemas, retries, scheduling, and observability are what turn a demo into something a business can run on.",
  },
] as const;
