import React from 'react';

const Contact = () => (
  <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '20%', left: '3%', opacity: 0.1 }} />
    <div className="decorative-shape shape-circle" style={{ width: '180px', height: '180px', bottom: '15%', right: '8%', opacity: 0.06 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">contacts</h2>

      <div style={{ maxWidth: '560px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '20px' }}>
          I'm open to freelance opportunities and full-time roles. If you have a project,
          question, or just want to say hi — reach out.
        </p>

        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 2.1, marginBottom: '24px' }}>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>response_time: &lt; 24h</div>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>open_to: full-time &amp; freelance</div>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>location: Pune, India</div>
        </div>

        {/* Direct links */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="editor-dot dot-red" />
            <span className="editor-dot dot-yellow" />
            <span className="editor-dot dot-green" />
            <span className="terminal-title">direct links</span>
          </div>
          <div className="terminal-body" style={{ padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(10,102,194,0.12)', border: '1px solid rgba(10,102,194,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fab fa-linkedin" style={{ color: '#0a66c2', fontSize: '0.95rem' }} />
              </div>
              <a href="https://www.linkedin.com/in/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', wordBreak: 'break-all' }}>
                linkedin.com/in/bhartik021
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fas fa-envelope" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }} />
              </div>
              <a href="mailto:bhartik021@gmail.com" style={{ color: 'var(--accent-primary)', fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', wordBreak: 'break-all' }}>
                bhartik021@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
