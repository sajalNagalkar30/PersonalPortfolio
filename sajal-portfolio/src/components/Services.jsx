import React from 'react';
import { services } from '../data/services';

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">
            My <span>Services</span>
          </h2>
          <p className="section-description">
            End-to-end development services backed by 4.4+ years of production experience
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;