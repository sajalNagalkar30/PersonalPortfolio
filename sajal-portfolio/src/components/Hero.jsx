import React from 'react';
import {
  FaArrowRight, FaGithub, FaLinkedinIn, FaEnvelope, FaDownload,
} from 'react-icons/fa';
import { SiFlutter, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  const displayText = useTypingEffect(personalInfo.typingTitles);

  return (
    <section className="hero" id="home">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="hero-grid-bg"></div>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Freelance &amp; Full-Time
          </div>

          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">
            <span className="typing-text">{displayText}</span>
          </h2>

          <p className="hero-description">
            Flutter Developer with <strong>{personalInfo.stats.yearsExperience} years</strong> of
            experience building cross-platform apps serving{' '}
            <strong>{personalInfo.stats.activeUsers} users</strong> with{' '}
            <strong>{personalInfo.stats.crashFreeRate} crash-free rates</strong>. Full-stack
            capabilities with React.js, Node.js &amp; MongoDB. Currently at{' '}
            <strong>Parity Cube</strong>.
          </p>

          <div className="hero-tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-icons">
              <span className="tech-icon-wrapper flutter-bg" title="Flutter">
                <SiFlutter />
              </span>
              <span className="tech-icon-wrapper react-bg" title="React.js">
                <SiReact />
              </span>
              <span className="tech-icon-wrapper node-bg" title="Node.js">
                <SiNodedotjs />
              </span>
              <span className="tech-icon-wrapper mongo-bg" title="MongoDB">
                <SiMongodb />
              </span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FaDownload /> Hire Me
            </a>
          </div>

          <div className="hero-social">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${personalInfo.email}`} title="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{personalInfo.stats.yearsExperience}+</div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{personalInfo.stats.activeUsers}</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{personalInfo.stats.crashFreeRate}</div>
              <div className="stat-label">Crash-Free</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{personalInfo.stats.codeCoverage}</div>
              <div className="stat-label">Code Coverage</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg">
              <div className="hero-avatar">
                <div className="avatar-icon">👨‍💻</div>
                <div className="avatar-name">{personalInfo.firstName}</div>
                <div className="avatar-role">Flutter &amp; Full Stack Dev</div>
              </div>
            </div>

            <div className="floating-card floating-card-1">
              <div className="floating-icon flutter"><SiFlutter /></div>
              <div className="floating-card-text">
                <h4>Flutter</h4>
                <p>4.4+ Years</p>
              </div>
            </div>

            <div className="floating-card floating-card-2">
              <div className="floating-icon react"><SiReact /></div>
              <div className="floating-card-text">
                <h4>React.js</h4>
                <p>Full Stack</p>
              </div>
            </div>

            <div className="floating-card floating-card-3">
              <div className="floating-icon node"><SiNodedotjs /></div>
              <div className="floating-card-text">
                <h4>Node.js</h4>
                <p>Backend</p>
              </div>
            </div>

            <div className="floating-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Star of Quarter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;