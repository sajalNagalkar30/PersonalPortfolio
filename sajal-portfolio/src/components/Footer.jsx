import React from 'react';
import {
  FaHeart, FaGithub, FaLinkedinIn,
  FaEnvelope, FaPhone, FaMapMarkerAlt,
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  const servicesList = [
    { name: 'Flutter Apps', href: '#services' },
    { name: 'React.js Web', href: '#services' },
    { name: 'Node.js Backend', href: '#services' },
    { name: 'Firebase', href: '#services' },
    { name: 'Security & Auth', href: '#services' },
    { name: 'CI/CD & DevOps', href: '#services' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <span className="footer-logo">
              {personalInfo.firstName}<span className="footer-logo-dot">.</span>
            </span>
            <p>
              Flutter Developer &amp; Full Stack Engineer with{' '}
              {personalInfo.stats.yearsExperience}+ years of experience. Building
              production apps serving {personalInfo.stats.activeUsers} users with{' '}
              {personalInfo.stats.crashFreeRate} crash-free rates.
            </p>
            <div className="footer-tags">
              <span>Flutter</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className="footer-social">
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
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {servicesList.map((s, idx) => (
                <li key={idx}><a href={s.href}>{s.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <FaEnvelope />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <FaPhone />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li>
                <FaGithub />
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  @{personalInfo.githubUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>{personalInfo.name}</strong>. Built with{' '}
            <FaHeart className="heart-icon" /> using React.js
          </p>
          <div className="footer-bottom-right">
            <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;