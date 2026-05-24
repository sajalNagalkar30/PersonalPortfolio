import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDownload, FaArrowLeft, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaGithub, FaLinkedinIn,
  FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate,
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import '../styles/resume.css';

const ResumePage = () => {
  return (
    <div className="resume-page">
      {/* Top Bar */}
      <div className="resume-topbar">
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to Portfolio
        </Link>
        <a
          href="/resume/SajalNagalkar_Resume.pdf"
          download
          className="download-btn"
        >
          <FaDownload /> Download PDF
        </a>
      </div>

      {/* Resume Container */}
      <div className="resume-wrapper">
        <div className="resume-doc">

          {/* Header */}
          <div className="resume-header">
            <div className="resume-header-left">
              <h1>{personalInfo.name}</h1>
              <p className="resume-tagline">{personalInfo.tagline}</p>
            </div>
            <div className="resume-header-right">
              <a href={`mailto:${personalInfo.email}`}><FaEnvelope /> {personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone}`}><FaPhone /> {personalInfo.phone}</a>
              <span><FaMapMarkerAlt /> {personalInfo.location}</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /> {personalInfo.linkedinUsername}</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"><FaGithub /> {personalInfo.githubUsername}</a>
            </div>
          </div>

          {/* Summary */}
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-summary">{personalInfo.bio.long}</p>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-skills-grid">
              {[
                { label: 'Mobile', value: 'Flutter, Dart, Android, iOS, FlutterFlow, Cross-Platform' },
                { label: 'Web', value: 'React.js, Node.js, Express.js, JavaScript ES6+' },
                { label: 'Architecture', value: 'Clean Architecture, MVVM, BLoC, GetX, Provider, SOLID' },
                { label: 'Backend & APIs', value: 'REST APIs, GraphQL, WebSockets, MQTT, Dio, OAuth 2.0' },
                { label: 'Firebase', value: 'Crashlytics, Analytics, FCM, Remote Config, Auth, Firestore' },
                { label: 'Databases', value: 'MongoDB, Firebase Firestore, SQLite, AsyncStorage' },
                { label: 'Testing & QA', value: 'Unit, Widget, Integration Testing, Mockito, TDD, LambdaTest' },
                { label: 'DevOps & CI/CD', value: 'Codemagic, GitHub Actions, GitLab CI, Git, Jira, Figma' },
                { label: 'Integrations', value: 'Razorpay, WebEngage, Branch.io, Deep Linking, BLE, IoT' },
              ].map((skill, i) => (
                <div className="resume-skill-row" key={i}>
                  <span className="skill-label">{skill.label}:</span>
                  <span className="skill-value">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title"><FaBriefcase /> Professional Experience</h2>

            <div className="resume-job">
              <div className="resume-job-header">
                <div>
                  <h3>Flutter Developer & Full Stack Developer</h3>
                  <p className="resume-company">Parity Cube Pvt. Ltd. — Mumbai, India</p>
                </div>
                <span className="resume-date">June 2024 – Present</span>
              </div>
              <p className="resume-job-desc">Developing Flutter mobile apps and contributing to the React.js/Node.js web platform in the fintech domain.</p>
              <div className="resume-project-block">
                <p className="resume-project-name">🚀 LetsEarn — Mobile App & Web Platform</p>
                <ul>
                  <li>Designed complete mobile architecture using Clean Architecture + BLoC, reducing feature dev time by 40%</li>
                  <li>Built LetsEarn website using React.js — reusable components, responsive layouts, and backend API integration</li>
                  <li>Developed RESTful APIs using Node.js and Express.js for mobile + web platforms</li>
                  <li>Implemented deep linking via Branch.io + FCM push notifications, improving user engagement by 25%</li>
                  <li>Resolved Android 64K method limit through ProGuard/R8 optimization, reducing APK size by 35%</li>
                  <li>Achieved 85% code coverage; Codemagic CI/CD reduced deployment time by 60%</li>
                </ul>
                <div className="resume-tags">
                  {['Flutter','React.js','Node.js','BLoC','Dio','Branch.io','FCM','Codemagic'].map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="resume-project-block">
                <p className="resume-project-name">🛒 Zingoy — Mobile App Enhancement & Maintenance</p>
                <ul>
                  <li>Maintained production app for 50,000+ active users with zero-downtime deployments</li>
                  <li>Integrated Razorpay supporting UPI, cards, mobile wallets, and net banking</li>
                  <li>Implemented Firebase Analytics + WebEngage SDK, improving user retention by 18%</li>
                  <li>Achieved 22% stability improvement, 30% faster startup, and 25% memory reduction</li>
                  <li>Resolved 50+ issues via Crashlytics across 50+ device configurations on LambdaTest</li>
                </ul>
                <div className="resume-tags">
                  {['Flutter','BLoC','Razorpay','WebEngage','Firebase Analytics','LambdaTest'].map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <div>
                  <h3>Junior Software Engineer (Flutter Developer)</h3>
                  <p className="resume-company">Network Components Private Limited — Pune, Maharashtra</p>
                </div>
                <span className="resume-date">August 2021 – May 2024</span>
              </div>
              <p className="resume-job-desc">Developed IoT-based mobile applications for smart home automation. Collaborated with hardware engineers for connected device interfaces.</p>
              <div className="resume-project-block">
                <p className="resume-project-name">🏠 Enviroklenz & Clouzer Edge — IoT Smart Home Apps</p>
                <ul>
                  <li>Delivered 3 IoT Flutter apps serving 5,000+ installations with a shared reusable component library</li>
                  <li>Built control interfaces for lights, HVAC, motorized shades, and air purifiers</li>
                  <li>Implemented BLE and WiFi provisioning with secure pairing flows and firmware update capabilities</li>
                  <li>Integrated MQTT and WebSockets for bi-directional communication between app and IoT devices</li>
                  <li>Achieved 75% code coverage and reduced critical bugs by 35%</li>
                </ul>
                <div className="resume-tags">
                  {['Flutter','Dart','BLoC','BLE','MQTT','WebSockets','Firebase'].map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title"><FaGraduationCap /> Education</h2>
            <div className="resume-edu-grid">
              <div className="resume-edu-item">
                <h3>Bachelor of Engineering in Computer Engineering</h3>
                <p>Savitribai Phule Pune University (SPPU), Pune, Maharashtra</p>
                <span>2017 – 2020</span>
              </div>
              <div className="resume-edu-item">
                <h3>Diploma in Information Technology</h3>
                <p>Government Polytechnic, Amravati, Maharashtra</p>
                <span>2014 – 2017</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h2 className="resume-section-title"><FaTrophy /> Certifications & Awards</h2>
            <div className="resume-cert-grid">
              <div className="resume-cert-item">
                <FaTrophy className="cert-icon award" />
                <div>
                  <h3>Star of the Quarter — Q4 2021</h3>
                  <p>Network Components Pvt. Ltd. — Recognized for outstanding performance in IoT application development.</p>
                </div>
              </div>
              <div className="resume-cert-item">
                <FaCertificate className="cert-icon cert" />
                <div>
                  <h3>Android App Development Certification</h3>
                  <p>TataStrive — Certified in Android development fundamentals, UI design patterns, and mobile best practices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="resume-section">
            <h2 className="resume-section-title">Additional Information</h2>
            <div className="resume-additional">
              <div><strong>Locations:</strong> {personalInfo.locationOptions}</div>
              <div><strong>Work Mode:</strong> {personalInfo.workMode}</div>
              <div><strong>Notice Period:</strong> {personalInfo.noticePeriod}</div>
              <div><strong>Languages:</strong> {personalInfo.languages.join(', ')}</div>
              <div><strong>Open Source:</strong> {personalInfo.openSource}</div>
              <div><strong>Work Auth:</strong> {personalInfo.workAuth}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
