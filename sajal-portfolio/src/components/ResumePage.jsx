import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaExpand } from 'react-icons/fa';
import '../styles/resume.css';

const PDF_URL = process.env.PUBLIC_URL + '/resume/SajalNagalkar_Resume.pdf';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="resume-topbar">
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to Portfolio
        </Link>
        <div className="resume-topbar-actions">
          <a href={PDF_URL} target="_blank" rel="noreferrer" className="open-btn">
            <FaExpand /> Open in New Tab
          </a>
          <a href={PDF_URL} download="SajalNagalkar_Resume.pdf" className="download-btn">
            <FaDownload /> Download PDF
          </a>
        </div>
      </div>

      <div className="pdf-viewer-wrapper">
        <iframe
          src={PDF_URL}
          title="Sajal Nagalkar Resume"
          className="pdf-iframe"
        />
      </div>
    </div>
  );
};

export default ResumePage;
