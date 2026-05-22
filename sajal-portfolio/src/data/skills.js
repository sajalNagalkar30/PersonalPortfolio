import {
  FaMobile, FaGlobe, FaDatabase, FaTools,
  FaCode, FaCloud, FaFlask, FaShieldAlt,
} from 'react-icons/fa';
import React from 'react';

export const skillCategories = [
  {
    title: 'Mobile Development',
    icon: React.createElement(FaMobile),
    skills: [
      { name: 'Flutter', level: 95, icon: '💙' },
      { name: 'Dart', level: 93, icon: '🎯' },
      { name: 'Android', level: 88, icon: '🤖' },
      { name: 'iOS', level: 80, icon: '🍎' },
      { name: 'FlutterFlow', level: 82, icon: '⚡' },
      { name: 'Cross-Platform', level: 92, icon: '🔄' },
    ],
  },
  {
    title: 'Web Development',
    icon: React.createElement(FaGlobe),
    isNew: true,
    skills: [
      { name: 'React.js', level: 88, icon: '⚛️' },
      { name: 'Node.js', level: 82, icon: '💚' },
      { name: 'Express.js', level: 80, icon: '🚂' },
      { name: 'JavaScript ES6+', level: 90, icon: '🟨' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨' },
      { name: 'Vite', level: 80, icon: '⚡' },
    ],
  },
  {
    title: 'Architecture & Patterns',
    icon: React.createElement(FaCode),
    skills: [
      { name: 'Clean Architecture', level: 92, icon: '🏛️' },
      { name: 'MVVM', level: 90, icon: '📐' },
      { name: 'BLoC', level: 95, icon: '🧱' },
      { name: 'GetX', level: 85, icon: '⚡' },
      { name: 'Provider', level: 88, icon: '🎁' },
      { name: 'SOLID Principles', level: 87, icon: '💎' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: React.createElement(FaDatabase),
    skills: [
      { name: 'REST APIs', level: 92, icon: '🔌' },
      { name: 'GraphQL', level: 78, icon: '📊' },
      { name: 'WebSockets', level: 82, icon: '🔄' },
      { name: 'MQTT', level: 80, icon: '📡' },
      { name: 'OAuth 2.0 / JWT', level: 88, icon: '🔐' },
      { name: 'Dio', level: 90, icon: '🎯' },
    ],
  },
  {
    title: 'Firebase & Database',
    icon: React.createElement(FaCloud),
    skills: [
      { name: 'Firebase Firestore', level: 92, icon: '🔥' },
      { name: 'Firebase Auth', level: 90, icon: '🔑' },
      { name: 'Crashlytics', level: 88, icon: '📉' },
      { name: 'MongoDB', level: 82, icon: '🍃' },
      { name: 'SQLite', level: 85, icon: '🗄️' },
      { name: 'Hive', level: 85, icon: '🐝' },
    ],
  },
  {
    title: 'Security',
    icon: React.createElement(FaShieldAlt),
    skills: [
      { name: 'SSL Pinning', level: 85, icon: '🔒' },
      { name: 'JWT Auth', level: 90, icon: '🎫' },
      { name: 'Secure Storage', level: 88, icon: '🛡️' },
      { name: 'bcryptjs', level: 82, icon: '🔓' },
      { name: 'Helmet.js', level: 78, icon: '⛑️' },
      { name: 'Token Rotation', level: 85, icon: '🔁' },
    ],
  },
  {
    title: 'Testing & QA',
    icon: React.createElement(FaFlask),
    skills: [
      { name: 'Unit Testing', level: 88, icon: '🧪' },
      { name: 'Widget Testing', level: 85, icon: '🧬' },
      { name: 'Integration Testing', level: 82, icon: '🔗' },
      { name: 'Mockito', level: 85, icon: '🎭' },
      { name: 'TDD', level: 80, icon: '✅' },
      { name: 'BrowserStack', level: 75, icon: '🌐' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: React.createElement(FaTools),
    skills: [
      { name: 'GitHub Actions', level: 88, icon: '⚙️' },
      { name: 'Codemagic', level: 88, icon: '🔮' },
      { name: 'Git / GitHub', level: 92, icon: '🐙' },
      { name: 'Postman', level: 90, icon: '📬' },
      { name: 'Jira', level: 85, icon: '📋' },
      { name: 'Figma', level: 78, icon: '🎨' },
    ],
  },
];