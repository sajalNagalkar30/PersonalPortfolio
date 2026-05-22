import {
  FaUsers, FaShieldAlt, FaRocket,
  FaCode, FaChartLine, FaTrophy,
} from 'react-icons/fa';
import React from 'react';

export const achievements = [
  {
    icon: React.createElement(FaUsers),
    number: '100K+',
    label: 'Active Users',
    description: 'Applications serving users across multiple platforms',
    color: '#667eea',
  },
  {
    icon: React.createElement(FaShieldAlt),
    number: '99%',
    label: 'Crash-Free Rate',
    description: 'Production-grade stability across all delivered apps',
    color: '#00d4aa',
  },
  {
    icon: React.createElement(FaCode),
    number: '85%',
    label: 'Code Coverage',
    description: 'Comprehensive testing with TDD approach',
    color: '#f093fb',
  },
  {
    icon: React.createElement(FaRocket),
    number: '60%',
    label: 'Faster Deployments',
    description: 'CI/CD pipelines with Codemagic & GitHub Actions',
    color: '#fa709a',
  },
  {
    icon: React.createElement(FaChartLine),
    number: '40%',
    label: 'Faster Development',
    description: 'Reusable components & clean architecture patterns',
    color: '#4facfe',
  },
  {
    icon: React.createElement(FaTrophy),
    number: 'Q4 2021',
    label: 'Star of the Quarter',
    description: 'Award — Network Components Pvt. Ltd.',
    color: '#fee140',
  },
];