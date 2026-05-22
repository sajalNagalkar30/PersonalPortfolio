import {
  FaMobileAlt, FaLaptopCode, FaServer,
  FaCloud, FaCogs, FaShieldAlt,
} from 'react-icons/fa';
import React from 'react';

export const services = [
  {
    icon: React.createElement(FaMobileAlt),
    title: 'Flutter App Development',
    description: 'Cross-platform mobile apps with Clean Architecture, BLoC pattern, and 99% crash-free rates. From concept to App Store/Play Store deployment.',
    features: ['iOS, Android & Web', 'Clean Architecture', 'BLoC / Provider / GetX'],
  },
  {
    icon: React.createElement(FaLaptopCode),
    title: 'React.js Web Development',
    description: 'Modern web applications with React 19, Vite, Tailwind CSS, and seamless REST API integrations. Responsive and component-based.',
    features: ['React 19 + Vite', 'Tailwind CSS v4', 'REST API Integration'],
  },
  {
    icon: React.createElement(FaServer),
    title: 'Node.js Backend Development',
    description: 'Scalable RESTful APIs using Node.js + Express.js with JWT authentication, MongoDB, and secure token management.',
    features: ['Express.js + MongoDB', 'JWT Authentication', 'CRUD APIs'],
  },
  {
    icon: React.createElement(FaCloud),
    title: 'Firebase Integration',
    description: 'Complete Firebase ecosystem — Firestore, Auth, Cloud Messaging, Crashlytics, Analytics, and Remote Config.',
    features: ['Firestore', 'Cloud Messaging (FCM)', 'Crashlytics'],
  },
  {
    icon: React.createElement(FaShieldAlt),
    title: 'Security & Auth Implementation',
    description: 'Enterprise-level authentication with JWT refresh tokens, SSL certificate pinning, encrypted storage, and Dio interceptors.',
    features: ['JWT + Refresh Tokens', 'SSL Pinning (SHA-256)', 'Secure Storage'],
  },
  {
    icon: React.createElement(FaCogs),
    title: 'CI/CD & DevOps',
    description: 'Automated build pipelines with Codemagic and GitHub Actions — APK, IPA builds and web deployments reducing release time by 60%.',
    features: ['GitHub Actions', 'Codemagic', 'Auto Deploy'],
  },
];