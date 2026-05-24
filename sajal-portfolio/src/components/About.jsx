import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaBriefcase, FaGithub, FaDownload, FaLinkedinIn,
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const highlights = [
    { icon: '🎯', text: 'Clean Architecture & BLoC Expert' },
    { icon: '⚡', text: '85% Code Coverage with TDD' },
    { icon: '🚀', text: 'CI/CD — 60% Faster Deployments' },
    { icon: '🔐', text: 'SSL Pinning & JWT Auth' },
    { icon: '🏆', text: 'Star of the Quarter — Q4 2021' },
    { icon: '🌍', text: 'Active Flutter Open Source' },
  ];

  const details = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location },
    { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email },
    { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone },
    { icon: <FaBriefcase />, label: 'Experience', value: `${personalInfo.stats.yearsExperience}+ Years` },
    { icon: <FaGithub />, label: 'GitHub', value: personalInfo.githubUsername },
    { icon: <FaLinkedinIn />, label: 'Work Mode', value: personalInfo.workMode },
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
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">"Sajal Nagalkar"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">role</span>: <span className="code-string">"Flutter & Full Stack"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">experience</span>: <span className="code-string">"4.4 years"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">location</span>: <span className="code-string">"Mumbai, India"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">company</span>: <span className="code-string">"Parity Cube"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">users</span>: <span className="code-string">"100K+"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">crashFree</span>: <span className="code-string">"99%"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">openSource</span>: <span className="code-string">"Active 🟢"</span>,</span>
                    <span className="code-line">&nbsp;&nbsp;<span className="code-property">status</span>: <span className="code-string">"Available 🟢"</span>,</span>
                    <span className="code-line"><span className="code-bracket">{'}'}</span>;</span>
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
            <h3>Flutter Developer &amp; <span className="highlight">Full Stack Engineer</span></h3>

            <p className="about-text">
              I'm <strong>{personalInfo.name}</strong>, a dedicated Flutter Developer with{' '}
              <strong>{personalInfo.stats.yearsExperience} years</strong> of hands-on experience
              building cross-platform apps serving over{' '}
              <strong>{personalInfo.stats.activeUsers} users</strong> with{' '}
              <strong>{personalInfo.stats.crashFreeRate} crash-free rates</strong>.
            </p>

            <p className="about-text">
              Currently at <strong>Parity Cube Pvt. Ltd.</strong> as a Flutter & Full Stack Developer.
              Proficient in Clean Architecture, BLoC, REST APIs, Firebase, React.js, Node.js, and MongoDB.
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
              {details.map((item, idx) => (
                <div className="about-detail-item" key={idx}>
                  <div className="icon">{item.icon}</div>
                  <div className="info">
                    <label>{item.label}</label>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together <FaDownload />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FaGithub /> GitHub
              </a>
              <Link to="/resume" className="btn btn-secondary">
                <FaDownload /> Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
