import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      team: 'Privilege Access Management - PAM Team',
      company: 'miniOrange',
      location: 'Pune, Maharashtra',
      period: 'February 2025 – Present'
    },
    {
      title: 'Software Engineer Intern',
      team: 'Privilege Access Management - PAM Team',
      company: 'miniOrange',
      location: 'Pune, Maharashtra',
      period: 'August 2024 – January 2025'
    }
  ];

  return (
    <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="decorative-shape shape-circle" style={{ width: '200px', height: '200px', top: '15%', left: '3%', opacity: 0.1 }}></div>
      <div className="dotted-pattern" style={{ width: '180px', height: '180px', bottom: '20%', right: '5%', opacity: 0.15 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">experience</h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <div key={index} className="col-lg-6 col-md-12 col-12 mb-4">
              <div className="card-modern" style={{ height: '100%' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '15px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '500',
                    marginBottom: '10px',
                    letterSpacing: '-0.02em'
                  }}>
                    {exp.title}
                  </h3>
                  <span style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                    fontWeight: '400',
                    whiteSpace: 'nowrap'
                  }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <p style={{ 
                    color: 'var(--accent-primary)', 
                    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                    fontWeight: '500',
                    marginBottom: '5px',
                    letterSpacing: '-0.01em'
                  }}>
                    {exp.company}
                  </p>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                    fontWeight: '400',
                    marginBottom: '5px',
                    letterSpacing: '-0.01em'
                  }}>
                    {exp.team}
                  </p>
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                    fontWeight: '400',
                    letterSpacing: '-0.01em'
                  }}>
                    {exp.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
