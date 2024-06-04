export const SKILLS = [
  "Angular",
  "C#",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SCSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "Tailwind",
  "Firebase",
  "Jira",
  "AWS",
  "Azure Services",
];

export type EXPERIENCE_ENTRY = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  link: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: EXPERIENCE_ENTRY[] = [
  {
    title: "Senior Developer Consultant",
    company: "Allata",
    location: "Remote",
    startDate: "March 2021",
    endDate: "May 2024",
    link: "https://allata.com/",
    description:
      "Implemented Azure AD SSO to enhance user authentication across systems, improving security and user experience. Upgraded Node.js API for REST standards, increasing reliability and scalability. Led .NET/MySQL app optimization using AWS services, improving feature deployment with Lambda events and feature flags. Developed Angular components, enhancing UI/UX with custom data tables and forms. Overhauled front-end code for reusability and consistency, reducing redundancy.",
    tags: [
      "Angular",
      "C#",
      "TypeScript",
      "Express",
      "SQL",
      "Git",
      "Jira",
      "AWS",
      "Azure Services",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "AyeZeeWebDesign",
    location: "Remote",
    startDate: "March 2023",
    endDate: "Current",
    link: "https://ayezeewebdesigns.com?utm_source=portfolio&utm_medium=link&utm_campaign=portfolio-visit",
    description:
      "Collaborated with businesses to design and implement functional, visually appealing websites that align with client objectives ( Case Study, Shipley Events ). Developed a custom CMS using Node.js and Angular for effective content management via a RESTful API. Built a user authentication system from scratch, enhancing security and user management for client applications.",
    tags: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Angular Tower Defense",
    description:
      "Explore this Angular Tower Defense game, a highlight of my developer portfolio. It features advanced A* pathfinding and dynamic tower systems, demonstrating my Angular and responsive design skills. This project merges strategic gameplay with robust technical execution, showcasing development prowess and engaging interaction.",
    githubLink: "https://github.com/aaron-soto/angular-tower-defense",
    demoLink: "https://angular-tower-defense.vercel.app/",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Cornhole Scorer",
    description:
      "This app was created to solve a personal problem that my family and friends have a lot. Cornhole score keeping can get very difficult at parties. This app makes it easy and fun!",
    githubLink: "https://github.com/aaron-soto/cornhole-scorer",
    demoLink: "https://aaron-soto.github.io/cornhole-scorer/",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Js Confetti",
    description:
      "This project is a confetti effect made with a transparent canvas element that can be placed over a webpage to simulate confetti falling.",
    githubLink: "https://github.com/aaron-soto/js-confetti",
    demoLink: "https://aaron-soto.github.io/js-confetti/",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Web Terminal App",
    description:
      "A dynamic Angular-based web terminal simulator that replicates traditional terminal operations without executing real commands. Features include user authentication simulation, theme switching, and example data fetch commands. Designed to demonstrate Angular's capabilities while providing an interactive and visually appealing user experience.",
    githubLink: "https://www.aaronsoto.io/#!",
    demoLink: "https://www.aaronsoto.io/#!",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
  },
];
