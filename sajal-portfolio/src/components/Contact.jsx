import React, { useState } from 'react';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaPaperPlane, FaGithub, FaLinkedinIn,
  FaClock, FaBriefcase, FaCheckCircle, FaExclamationCircle,
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', phone: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHFSNVqX2eaWEyUIyvzd5xivmrW61vIWXAmQyZozc/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FaPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: null },
    { icon: <FaClock />, label: 'Notice Period', value: personalInfo.noticePeriod, href: null },
    { icon: <FaBriefcase />, label: 'Work Mode', value: personalInfo.workMode, href: null },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="glow-orb glow-orb-contact"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-description">
            Open to opportunities in {personalInfo.locationOptions} | {personalInfo.workMode}
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>
              Let's Build Something{' '}
              <span className="highlight">Amazing Together</span>
            </h3>
            <p>
              Available for new opportunities — Flutter mobile apps, React.js web
              platforms, Node.js backends, or full-stack solutions. Let's discuss
              how I can help bring your ideas to life.
            </p>

            <div className="contact-details">
              {contactItems.map((item, idx) =>
                item.href ? (
                  <a href={item.href} className="contact-item" key={idx}>
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-item-info">
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="contact-item" key={idx}>
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-item-info">
                      <h4>{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="social-links">
              <a href={personalInfo.github} className="social-link" target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            {submitStatus === 'success' && (
              <div className="submit-success">
                <FaCheckCircle /> Thank you! Message sent successfully. I'll reply soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submit-error">
                <FaExclamationCircle /> Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text" name="name" placeholder="John Doe"
                    value={formData.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email" name="email" placeholder="john@example.com"
                    value={formData.email} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text" name="subject" placeholder="Flutter App / React Web / Full Stack"
                    value={formData.subject} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                    value={formData.phone} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project — Flutter app, React web, or full-stack solution?"
                  value={formData.message} onChange={handleChange} required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><span className="spinner"></span> Sending...</>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;