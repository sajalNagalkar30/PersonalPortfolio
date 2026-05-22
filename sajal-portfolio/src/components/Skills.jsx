import React from 'react';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="glow-orb glow-orb-skills"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-description">
            Expertise across mobile, web, backend, security &amp; DevOps technologies
          </p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3 className="skills-category-title">
                <span className="cat-icon">{category.icon}</span>
                {category.title}
                {category.isNew && <span className="new-badge">NEW</span>}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <span className="skill-icon">{skill.icon}</span>
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-level">{skill.level}%</p>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;