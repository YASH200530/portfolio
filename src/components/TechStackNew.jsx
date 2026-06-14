import "./styles/TechStackNew.css";
// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack = [
    // Row 1 - 6 items
    [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    ],
    // Row 2 - 5 items
    [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
    ],
    // Row 3 - 4 items
    [
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    ],
    // Row 4 - 3 items
    [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
        { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" },
        { name: "MS Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png", url: "https://www.microsoft.com/excel" },
    ]
];
const TechStackNew = () => {
    return (<div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm"/>
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (<div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (<a key={techIndex} href={tech.url} target="_blank" rel="noopener noreferrer" className="techstack-item" title={tech.name} data-cursor="disable">
                  <img src={tech.icon} alt={tech.name}/>
                  <span>{tech.name}</span>
                </a>))}
            </div>))}
        </div>
      </div>
    </div>);
};
export default TechStackNew;
