import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '50px 0 30px',
    }}>
      <div className="container">
        <div className="row">
          {/* Left Column - Logo and Info */}
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <h3 style={{ 
              color: 'var(--text-primary)', 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: '500',
              marginBottom: '15px',
              letterSpacing: '-0.02em',
              textAlign: 'center'
            }}>
              Bharti Kumari
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
              marginBottom: '5px',
              fontWeight: '400',
              letterSpacing: '-0.01em',
              textAlign: 'center'
            }}>
              <a href="mailto:bhartik021@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', wordBreak: 'break-word' }}>
                bhartik021@gmail.com
              </a>
            </p>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
              fontWeight: '400',
              letterSpacing: '-0.01em',
              textAlign: 'center'
            }}>
              Software Engineer and Full Stack Developer
            </p>
          </div>

          {/* Center Column - Copyright */}
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0" style={{ textAlign: 'center' }}>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              © Copyright {currentYear}. Made by Bharti Kumari
            </p>
          </div>

          {/* Right Column - Media/Social */}
          <div className="col-lg-4 col-md-12 col-12" style={{ textAlign: 'center' }}>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              fontWeight: '500',
              marginBottom: '15px',
              letterSpacing: '-0.01em'
            }}>
              Media
            </h4>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <a href="https://github.com/bhartik021" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                <i className="fas fa-code"></i>
              </a>
              <a href="https://medium.com/@bhartik021" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
