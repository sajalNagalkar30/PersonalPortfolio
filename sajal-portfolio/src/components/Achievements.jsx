import React from 'react';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section className="section achievements-section">
      <div className="glow-orb glow-orb-achievements"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Numbers That Matter</span>
          <h2 className="section-title">
            Key <span>Achievements</span>
          </h2>
          <p className="section-description">
            Real impact delivered through quality engineering
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div
                className="achievement-icon"
                style={{
                  background: `${item.color}20`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="achievement-number" style={{ color: item.color }}>
                {item.number}
              </h3>
              <h4 className="achievement-label">{item.label}</h4>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;