import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0 24px',
    }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left: code logo + tagline */}
          <div className="col-lg-4 col-12 mb-4 mb-lg-0" style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              fontWeight: 700,
              marginBottom: '8px',
            }}>
              <span style={{ color: 'var(--accent-secondary)' }}>{'<'}</span>
              <span style={{ color: 'var(--text-primary)' }}>BK</span>
              <span style={{ color: 'var(--accent-secondary)' }}>{' />'}</span>
            </div>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontFamily: "'Fira Code', monospace",
              letterSpacing: 0,
              margin: 0,
            }}>
              <span style={{ color: 'var(--accent-secondary)' }}>// </span>
              software engineer &amp; full stack dev
            </p>
          </div>

          {/* Center: copyright */}
          <div className="col-lg-4 col-12 mb-4 mb-lg-0" style={{ textAlign: 'center' }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontFamily: "'Fira Code', monospace",
              margin: 0,
              letterSpacing: 0,
            }}>
              © {year} Bharti Kumari
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontFamily: "'Fira Code', monospace",
              marginTop: '4px',
              letterSpacing: 0,
            }}>
              <span style={{ color: 'var(--accent-primary)' }}>built with</span> React ♥
            </p>
          </div>

          {/* Right: social icons */}
          <div className="col-lg-4 col-12" style={{ textAlign: 'center' }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              fontFamily: "'Fira Code', monospace",
            }}>
              find me on
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              {[
                { href: 'https://github.com/bhartik021', icon: 'fab fa-github', label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/bhartik021/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                { href: 'https://leetcode.com/u/bhartik021/', icon: 'fas fa-code', label: 'LeetCode' },
                { href: 'https://medium.com/@bhartik021', icon: 'fab fa-medium', label: 'Medium' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.25rem',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
