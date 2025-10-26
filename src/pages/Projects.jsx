// src/pages/Projects.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects-data"; // <-- Import from new file
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Case Studies", "Art", "Web Development"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="projects-page">
      <h2 className="projects-heading">
        SELECT{" "}
        {categories.map((categ) => (
          <button
            key={categ}
            onClick={() => setFilter(categ)}
            className={`filter-btn ${filter === categ ? "active" : ""}`}
          >
            {categ}
          </button>
        ))}
        FROM Projects;
      </h2>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <Link to={project.link} key={project.id} className="project-card">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
            />
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
