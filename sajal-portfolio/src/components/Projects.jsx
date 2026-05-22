import React, { useState } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaStar,
} from 'react-icons/fa';
import { projects, projectFilters } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : activeFilter === 'Featured'
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Open Source Work</span>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-description">
            Personal projects from my GitHub — Flutter, Full Stack &amp; React
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            <FaGithub /> @{personalInfo.githubUsername}
          </a>
        </div>

        <div className="projects-filter">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'Featured' && <FaStar />}
              {filter}
              {filter !== 'All' && filter !== 'Featured' && (
                <span className="filter-count">
                  {projects.filter((p) => p.category === filter).length}
                </span>
              )}
              {filter === 'Featured' && (
                <span className="filter-count">
                  {projects.filter((p) => p.featured).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="projects-grid-new">
          {filteredProjects.map((project) => (
            <div
              className={`project-card-new ${project.featured ? 'project-featured' : ''}`}
              key={project.id}
            >
              <div
                className="project-card-header"
                style={{ background: project.gradient }}
              >
                <div className="project-card-icon">{project.icon}</div>
                <div className="project-card-meta">
                  {project.badge && (
                    <span className={`project-badge badge-${project.badge.toLowerCase()}`}>
                      {project.badge}
                    </span>
                  )}
                  <span className="project-year-badge">
                    <FaCalendarAlt /> {project.year}
                  </span>
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-description">{project.description}</p>

                <div className="project-key-highlights">
                  {project.highlights.map((h, i) => (
                    <span className="key-highlight-item" key={i}>✓ {h}</span>
                  ))}
                </div>

                <div className="project-tags-new">
                  {project.tags.slice(0, 6).map((tag, idx) => (
                    <span className="project-tag-new" key={idx}>{tag}</span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="project-tag-more">+{project.tags.length - 6}</span>
                  )}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-github"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.hasLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-live"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;