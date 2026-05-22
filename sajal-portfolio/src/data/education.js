import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import React from 'react';

export const education = [
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Savitribai Phule Pune University (SPPU)',
    location: 'Pune, Maharashtra',
    year: '2017 – 2020',
    icon: React.createElement(FaGraduationCap),
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Government Polytechnic, Amravati',
    location: 'Maharashtra',
    year: '2014 – 2017',
    icon: React.createElement(FaGraduationCap),
  },
];

export const certifications = [
  {
    title: 'Star of the Quarter — Q4 2021',
    issuer: 'Network Components Pvt. Ltd.',
    description:
      'Recognized for outstanding performance and exceptional contributions to IoT application development projects.',
    icon: React.createElement(FaTrophy),
    type: 'award',
  },
  {
    title: 'Android App Development Certification',
    issuer: 'TataStrive',
    description:
      'Certified in Android development fundamentals, UI design patterns, and mobile application best practices.',
    icon: React.createElement(FaCertificate),
    type: 'certification',
  },
];

export const languages = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇮🇳', name: 'Marathi' },
];