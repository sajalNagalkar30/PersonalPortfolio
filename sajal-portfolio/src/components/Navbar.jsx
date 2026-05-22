import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/personalInfo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled, activeSection } = useScrollAnimation();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          {personalInfo.firstName}<span>.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              <FaRocket /> Hire Me
            </a>
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