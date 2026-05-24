import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaBriefcase, FaGithub, FaDownload, FaLinkedinIn,
  FaArrowRight,
} from 'react-icons/fa';
import { SiFlutter, SiReact, SiNodedotjs } from 'react-icons/si';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const stats = [
    { number: '4.4+', label: 'Years Experience' },
    { number: '100K+', label: 'Users Served' },
    { number: '99%', label: 'Crash-Free Rate' },
    { number: '85%', label: 'Code Coverage' },
  ];

  const techStack = [
    { icon: <SiFlutter />, name: 'Flutter', color: '#0285FE' },
    { icon: <SiReact />, name: 'React.js', color: '#61DAFB' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: '#68A063' },
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
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="about-grid">

          {/* LEFT */}
          <div className="about-left">
            {/* Code card */}
            <div className="about-code-card">
              <div className="about-code-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="about-code-block">
                <span className="code-line"><span className="code-keyword">const</span> <span className="code-var">sajal</span> <span className="code-bracket">= {'{'}</span></span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">"Sajal Nagalkar"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">role</span>: <span className="code-string">"Flutter & Full Stack"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">experience</span>: <span className="code-string">"4.4 years"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">location</span>: <span className="code-string">"Mumbai, India"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">company</span>: <span className="code-string">"Parity Cube"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">users</span>: <span className="code-string">"100K+"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">crashFree</span>: <span className="code-string">"99%"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-property">status</span>: <span className="code-string">"Available 🟢"</span>,</span>
                <span className="code-line"><span className="code-bracket">{'}'}</span>;</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="about-stats-row">
              {stats.map((s, i) => (
                <div className="about-stat" key={i}>
                  <span className="about-stat-number">{s.number}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            <h3>Flutter Developer & <span className="highlight">Full Stack Engineer</span></h3>

            <p className="about-text">
              I'm <strong>{personalInfo.name}</strong>, a Flutter Developer with{' '}
              <strong>{personalInfo.stats.yearsExperience} years</strong> of experience building
              cross-platform apps for Android & iOS, serving{' '}
              <strong>{personalInfo.stats.activeUsers} users</strong> with{' '}
              <strong>{personalInfo.stats.crashFreeRate} crash-free rates</strong>.
            </p>

            <p className="about-text">
              Currently at <strong>Parity Cube Pvt. Ltd.</strong> as a Flutter & Full Stack Developer
              in fintech. Expert in Clean Architecture, BLoC, REST APIs, Firebase, React.js, Node.js,
              and MongoDB with enterprise-level security practices.
            </p>

            {/* Tech Stack */}
            <div className="about-tech-row">
              <span className="about-tech-label">Core Stack:</span>
              {techStack.map((t, i) => (
                <span className="about-tech-chip" key={i} style={{ '--chip-color': t.color }}>
                  {t.icon} {t.name}
                </span>
              ))}
            </div>

            {/* Details grid */}
            <div className="about-details">
              {details.map((item, idx) => (
                <div className="about-detail-item" key={idx}>
                  <div className="about-detail-icon">{item.icon}</div>
                  <div className="about-detail-info">
                    <label>{item.label}</label>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together <FaArrowRight />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <FaGithub /> GitHub
              </a>
              <Link to="/resume" className="btn btn-outline">
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
