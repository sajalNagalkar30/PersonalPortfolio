import React, { useState } from 'react';
import {
  FaMapMarkerAlt, FaBriefcase, FaCheckCircle,
  FaChevronDown, FaChevronUp,
} from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState({ '0-0': true });

  const toggleProject = (expIdx, projIdx) => {
    const key = `${expIdx}-${projIdx}`;
    setExpandedProject((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Career</span>
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-description">
            4.4+ years building production-ready applications for real users
          </p>
        </div>

        <div className="experience-cards">
          {experiences.map((exp, expIdx) => (
            <div className={`exp-card ${exp.current ? 'current' : ''}`} key={expIdx}>
              {exp.current && <div className="current-badge">CURRENT</div>}

              <div className="exp-card-header">
                <div className="exp-icon"><FaBriefcase /></div>
                <div className="exp-header-text">
                  <h3>{exp.title}</h3>
                  <p className="exp-subtitle">{exp.subtitle}</p>
                </div>
                <div className="exp-date-badge">{exp.date}</div>
              </div>

              <div className="exp-company-info">
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-location">
                  <FaMapMarkerAlt /> {exp.location}
                </p>
              </div>

              <p className="exp-description">{exp.description}</p>

              {exp.projects.map((proj, projIdx) => {
                const key = `${expIdx}-${projIdx}`;
                const isOpen = expandedProject[key];

                return (
                  <div className="exp-project-block" key={projIdx}>
                    <div
                      className="exp-project-header"
                      onClick={() => toggleProject(expIdx, projIdx)}
                    >
                      <div className="exp-project-title-row">
                        <h4 className="exp-project-name">🚀 {proj.name}</h4>
                        <div className="exp-project-tags">
                          {proj.tags.map((t, i) => (
                            <span key={i} className="exp-proj-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                      <button className="expand-btn" aria-label="Toggle details">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    <p className="exp-project-desc">{proj.description}</p>

                    {isOpen && (
                      <div className="exp-project-details">
                        <div className="exp-key-results">
                          {proj.keyResults.map((kr, i) => (
                            <div className="key-result-item" key={i}>
                              <span className="key-result-value">{kr.value}</span>
                              <span className="key-result-label">{kr.label}</span>
                            </div>
                          ))}
                        </div>

                        <ul className="exp-achievements-list">
                          {proj.achievements.map((achievement, i) => (
                            <li key={i}>
                              <FaCheckCircle className="check-icon" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="exp-tags">
                          {proj.tags2.map((tag, i) => (
                            <span className="exp-tag" key={i}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;