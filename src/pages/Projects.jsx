// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Projects.css"; // You can style this however you like

// function Projects() {
//   const [filter, setFilter] = useState("all");

//   const categories = ["all", "case studies", "art", "web pages"];

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Case Study",
//       category: "case studies",
//       thumbnail: "https://via.placeholder.com/300x200?text=E-Commerce+Case+Study",
//       link: "/projects/ecommerce-case-study"
//     },
//     {
//       id: 2,
//       title: "Healthcare App Case Study",
//       category: "case studies",
//       thumbnail: "https://via.placeholder.com/300x200?text=Healthcare+Case+Study",
//       link: "/projects/healthcare-app"
//     },
//     {
//       id: 3,
//       title: "Digital Art Collection #1",
//       category: "art",
//       thumbnail: "https://via.placeholder.com/300x200?text=Digital+Art+1",
//       link: "/projects/digital-art-1"
//     },
//     {
//       id: 4,
//       title: "Nature Illustration",
//       category: "art",
//       thumbnail: "https://via.placeholder.com/300x200?text=Nature+Illustration",
//       link: "/projects/nature-illustration"
//     },
//     {
//       id: 5,
//       title: "Portfolio Website",
//       category: "web pages",
//       thumbnail: "https://via.placeholder.com/300x200?text=Portfolio+Website",
//       link: "/projects/portfolio-website"
//     },
//     {
//       id: 6,
//       title: "Landing Page Redesign",
//       category: "web pages",
//       thumbnail: "https://via.placeholder.com/300x200?text=Landing+Page+Redesign",
//       link: "/projects/landing-page-redesign"
//     }
//   ];

//   const filteredProjects =
//     filter === "all"
//       ? projects
//       : projects.filter((project) => project.category === filter);

//   return (
//     <div className="projects-page">
//       <h2 className="projects-heading">
//         SELECT{" "}
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`filter-btn ${filter === cat ? "active" : ""}`}
//           >
//             ({cat})
//           </button>
//         ))}
//       </h2>

//       <div className="projects-grid">
//         {filteredProjects.map((project) => (
//           <Link
//             to={project.link}
//             key={project.id}
//             className="project-card"
//           >
//             <img
//               src={project.thumbnail}
//               alt={project.title}
//               className="project-thumbnail"
//             />
//             <h3>{project.title}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;


// src/pages/Projects.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects as allProjects, categories as categoryList } from "./Projectz-data";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  // Defensive: if categories were not exported, compute from data.
  const categories = categoryList?.length
    ? categoryList
    : useMemo(() => ["all", ...Array.from(new Set(allProjects.map(p => p.category))).sort()], [allProjects]);

  const filtered = useMemo(
    () => (filter === "all" ? allProjects : allProjects.filter(p => p.category === filter)),
    [filter]
  );

  return (
    <div className="projects-page">
      <h2 className="projects-heading">
        SELECT{" "}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            aria-pressed={filter === cat}
          >
            ({cat})
          </button>
        ))}
      </h2>

      <div className="projects-grid">
        {filtered.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="project-card"
            aria-label={`Open ${project.title}`}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
              loading="lazy"
            />
            <h3 className="project-title">{project.title}</h3>
            <span className="project-chip">{project.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
