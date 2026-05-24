import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRocket, FaFileAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/personalInfo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled, activeSection } = useScrollAnimation();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
  ];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          {personalInfo.firstName}<span>.</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              {isHome ? (
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-scroll-btn ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={`/#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="nav-resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              <FaFileAlt /> Resume
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-cta"
            >
              <FaRocket /> Hire Me
            </button>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
