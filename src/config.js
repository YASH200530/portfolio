export const config = {
    developer: {
        name: "Yash Singh",
        fullName: "Yash Singh",
        title: "Full-Stack Developer",
        description: "Full-Stack Developer building modern, high-performance web applications. Passionate about interactive designs, robust architectures, and clean code.",
        image: "/images/WhatsApp Image 2026-06-14 at 2.01.41 AM.jpeg"
    },
    social: {
        github: "YASH200530",
        email: "yashabhi.30@gmail.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "Hey, I'm Yash — a final year CSE student at JIIT who actually enjoys coding (yes, really). I build full-stack web apps using the MERN stack and I care a lot about writing code that works well, not just code that works. Late nights debugging, figuring out why the backend won't talk to the frontend, and that satisfying moment when everything finally clicks — that's kind of my thing. I'm looking for an internship or full-time role where I can contribute to something meaningful and keep getting better every day."
    },
    projects: [
        {
            id: 1,
            title: "AgroVision: AI-Powered Crop Disease Detection",
            category: "AI / Full Stack",
            technologies: "React, TypeScript, Python, OpenCV, FastAPI, Tailwind CSS",
            image: "/images/project-3.webp",
            video: "/video/agrovision.mp4",
            github: "https://github.com/YASH200530/AgroVision",
            description: "An AI-powered agricultural monitoring platform that uses computer vision to analyze crop health, detect plant diseases early, and optimize irrigation."
        },
        {
            id: 2,
            title: "Codex",
            category: "Collaborative IDE / Sandbox",
            technologies: "React, Node.js, Docker, TypeScript",
            image: "/images/project-1.webp",
            video: "/video/Trading-demo.mp4",
            github: "https://github.com/YASH200530/Codex",
            description: "A collaborative online IDE and code compiler featuring real-time code sharing, a multi-language execution sandbox using Docker, and an AI-powered code assistant."
        },
        {
            id: 3,
            title: "SmartSched",
            category: "Time Table / Scheduling",
            technologies: "React, Node.js, MongoDB, Express",
            image: "/images/project-2.webp",
            video: "/video/smartsched.mp4",
            github: "https://github.com/YASH200530/SmartSched",
            description: "An intelligent academic and task scheduling platform utilizing constraint-satisfaction algorithms to auto-generate optimized timetables and team meeting slots based on availability."
        }
    ],
    contact: {
        email: "yashabhi.30@gmail.com",
        github: "https://github.com/YASH200530",
        linkedin: "https://www.linkedin.com/in/yash-singh-267a65319/",
        twitter: "",
        facebook: "",
        instagram: "",
        web3forms_key: "" // Get a free access key from https://web3forms.com/ to send emails directly
    },
    skills: {
        develop: {
            title: "BACKEND & SYSTEM",
            description: "Building scalable systems and secure APIs",
            details: "Building scalable web backends using Node.js, Express, and MongoDB. Caching queries, configuring PostgreSQL databases, and deploying containerized microservices.",
            tools: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Git"]
        },
        design: {
            title: "FRONTEND & UI",
            description: "Creating responsive, interactive user interfaces",
            details: "Crafting modern web frontends using React, Next.js, and CSS/Tailwind. Incorporating smooth animations (GSAP, Framer Motion) and interactive 3D assets (Three.js).",
            tools: ["React", "Next.js", "TailwindCSS", "Three.js", "GSAP", "Framer Motion", "HTML5/CSS3", "Figma"]
        }
    }
};
