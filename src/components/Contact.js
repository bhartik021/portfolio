import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '20%', left: '3%', opacity: 0.2 }}></div>
      <div className="decorative-shape shape-circle" style={{ width: '180px', height: '180px', bottom: '15%', right: '8%', opacity: 0.1 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">contacts</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              lineHeight: '1.6',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card-modern">
              <h3 style={{ 
                color: 'var(--text-primary)',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '500',
                marginBottom: '25px',
                letterSpacing: '-0.01em'
              }}>
                Message me here
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <i className="fab fa-linkedin" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--accent-primary)', flexShrink: 0 }}></i>
                  <a href="https://www.linkedin.com/in/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2vw, 0.95rem)', fontWeight: '400', letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
                    LinkedIn: bhartik021
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <i className="fas fa-envelope" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'var(--accent-primary)', flexShrink: 0 }}></i>
                  <a href="mailto:bhartik021@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2vw, 0.95rem)', fontWeight: '400', letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
                    bhartik021@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
