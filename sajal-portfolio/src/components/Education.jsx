import React from 'react';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { education, certifications, languages } from '../data/education';

const Education = () => {
  return (
    <section className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Background</span>
          <h2 className="section-title">
            Education &amp; <span>Certifications</span>
          </h2>
        </div>

        <div className="education-grid">
          <div className="education-column">
            <h3 className="column-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div className="education-card" key={index}>
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-content">
                    <h4>{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <p className="edu-location">{edu.location}</p>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column">
            <h3 className="column-title">
              <FaAward /> Certifications &amp; Awards
            </h3>
            <div className="education-list">
              {certifications.map((cert, index) => (
                <div className={`education-card cert-card ${cert.type}`} key={index}>
                  <div className="edu-icon">{cert.icon}</div>
                  <div className="edu-content">
                    <h4>{cert.title}</h4>
                    <p className="edu-institution">{cert.issuer}</p>
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-info-grid">
          <div className="info-card">
            <h4>📍 Locations</h4>
            <p>Pune, Mumbai, Nagpur<br />Hyderabad, Bangalore</p>
          </div>
          <div className="info-card">
            <h4>💼 Work Mode</h4>
            <p>Remote / Hybrid / On-site</p>
          </div>
          <div className="info-card">
            <h4>⏳ Notice Period</h4>
            <p>Immediate to 30 Days</p>
          </div>
          <div className="info-card">
            <h4>🌐 Open Source</h4>
            <p>Active Flutter Contributor</p>
          </div>
          <div className="info-card">
            <h4>✅ Work Auth</h4>
            <p>Authorized in India</p>
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages I Speak</h3>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div className="language-card" key={index}>
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;