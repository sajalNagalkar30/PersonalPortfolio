import React from 'react';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaBriefcase, FaGithub, FaDownload, FaLinkedinIn,
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const highlights = [
    { icon: '🎯', text: 'Clean Architecture & BLoC Pattern Expert' },
    { icon: '⚡', text: '85% Code Coverage with TDD Approach' },
    { icon: '🚀', text: 'CI/CD Pipelines — 60% Faster Deployments' },
    { icon: '🔐', text: 'Enterprise Security — SSL Pinning & JWT Auth' },
    { icon: '🏆', text: 'Star of the Quarter Award — Q4 2021' },
    { icon: '🌍', text: 'Active Flutter Open Source Contributor' },
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-image-section">
            <div className="about-image-container">
              <div className="about-image-box">
                <div className="about-pattern"></div>
                <div className="about-inner-box">
                  <div className="about-code-block">
                    <span className="code-line">
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-var">sajal</span> ={' '}
                      <span className="code-bracket">{'{'}</span>
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">name</span>:{' '}
                      <span className="code-string">"Sajal Nagalkar"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">role</span>:{' '}
                      <span className="code-string">"Flutter & Full Stack"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">experience</span>:{' '}
                      <span className="code-string">"4.4 years"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">location</span>:{' '}
                      <span className="code-string">"Mumbai, India"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">company</span>:{' '}
                      <span className="code-string">"Parity Cube"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">users</span>:{' '}
                      <span className="code-string">"100K+"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">crashFree</span>:{' '}
                      <span className="code-string">"99%"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">openSource</span>:{' '}
                      <span className="code-string">"Active 🟢"</span>,
                    </span>
                    <span className="code-line">
                      &nbsp;&nbsp;<span className="code-property">status</span>:{' '}
                      <span className="code-string">"Available 🟢"</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-bracket">{'}'}</span>;
                    </span>
                  </div>
                </div>
              </div>

              <div className="experience-badge">
                <span className="number">{personalInfo.stats.yearsExperience}+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h3>
              Flutter Developer &amp;{' '}
              <span className="highlight">Full Stack Engineer</span>
            </h3>

            <p className="about-text">
              I'm <strong>{personalInfo.name}</strong>, a dedicated Flutter Developer
              with <strong>{personalInfo.stats.yearsExperience} years</strong> of hands-on
              experience designing, developing, and deploying cross-platform mobile
              applications for Android and iOS. I've successfully delivered apps
              serving over <strong>{personalInfo.stats.activeUsers} users</strong> with{' '}
              <strong>{personalInfo.stats.crashFreeRate} crash-free rates</strong>.
            </p>

            <p className="about-text">
              Currently at <strong>Parity Cube Pvt. Ltd.</strong> as a Flutter &amp;
              Full Stack Developer in the fintech domain. Proficient in Clean
              Architecture, BLoC, REST API integration, and Firebase. Expanded into
              full-stack with <strong>React.js, Node.js, and MongoDB</strong> —
              including enterprise security with JWT, SSL pinning, and CI/CD pipelines.
            </p>

            <div className="about-highlights">
              {highlights.map((item, idx) => (
                <div className="highlight-item" key={idx}>
                  <span className="highlight-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="about-details">
              <div className="about-detail-item">
                <div className="icon"><FaMapMarkerAlt /></div>
                <div className="info">
                  <label>Location</label>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="icon"><FaEnvelope /></div>
                <div className="info">
                  <label>Email</label>
                  <span>{personalInfo.email}</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="icon"><FaPhone /></div>
                <div className="info">
                  <label>Phone</label>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="icon"><FaBriefcase /></div>
                <div className="info">
                  <label>Experience</label>
                  <span>{personalInfo.stats.yearsExperience}+ Years</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="icon"><FaGithub /></div>
                <div className="info">
                  <label>GitHub</label>
                  <span>{personalInfo.githubUsername}</span>
                </div>
              </div>
              <div className="about-detail-item">
                <div className="icon"><FaLinkedinIn /></div>
                <div className="info">
                  <label>Work Mode</label>
                  <span>Remote / Hybrid</span>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together <FaDownload />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;