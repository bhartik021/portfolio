import React from 'react';

const links = [
  {
    type: 'linkedin',
    url:  'linkedin.com/in/bhartik021',
    href: 'https://www.linkedin.com/in/bhartik021/',
    color: '#0a66c2',
    bg:   'rgba(10,102,194,0.08)',
  },
  {
    type: 'email',
    url:  'bhartik021@gmail.com',
    href: 'mailto:bhartik021@gmail.com',
    color: '#a855f7',
    bg:   'rgba(168,85,247,0.08)',
  },
  {
    type: 'leetcode',
    url:  'leetcode.com/u/bhartik021',
    href: 'https://leetcode.com/u/bhartik021/',
    color: '#ffa116',
    bg:   'rgba(255,161,22,0.08)',
  },
];

const Contact = () => (
  <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '20%', left: '3%', opacity: 0.1 }} />
    <div className="decorative-shape shape-circle" style={{ width: '180px', height: '180px', bottom: '15%', right: '8%', opacity: 0.06 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">contacts</h2>

      <div style={{ maxWidth: '560px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '20px' }}>
          I'm open to freelance opportunities and full-time roles. If you have a
          project, question, or just want to say hi — reach out.
        </p>

        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 2.1, marginBottom: '28px' }}>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>response_time: &lt; 24h</div>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>open_to: full-time &amp; freelance</div>
          <div><span style={{ color: 'var(--accent-secondary)' }}>// </span>location: Pune, India</div>
        </div>

        <div className="terminal-window anim" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal-header">
            <span className="editor-dot dot-red" />
            <span className="editor-dot dot-yellow" />
            <span className="editor-dot dot-green" />
            <span className="terminal-title">contacts.sh</span>
          </div>

          <div className="terminal-body" style={{ padding: '18px 22px' }}>

            {/* command line */}
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem', marginBottom: '18px' }}>
              <span style={{ color: 'var(--accent-primary)' }}>$ </span>
              <span style={{ color: 'var(--text-secondary)' }}>cat .links</span>
            </div>

            {/* column headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr 70px',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              paddingBottom: '8px',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '6px',
            }}>
              <span>type</span>
              <span>url</span>
              <span style={{ textAlign: 'right' }}>status</span>
            </div>

            {/* link rows */}
            {links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr 70px',
                  alignItems: 'center',
                  padding: '10px 8px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background 0.18s',
                  marginLeft: '-8px',
                  marginRight: '-8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = link.bg; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                {/* type */}
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.8rem',
                  color: link.color,
                  fontWeight: 600,
                }}>
                  {link.type}
                </span>

                {/* url */}
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ color: 'var(--text-muted)', marginRight: '6px' }}>→</span>
                  {link.url}
                </span>

                {/* status */}
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '5px',
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.72rem',
                  color: '#50fa7b',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#50fa7b',
                    boxShadow: '0 0 5px #50fa7b',
                    flexShrink: 0,
                  }} />
                  open
                </span>
              </a>
            ))}

            {/* cursor */}
            <div style={{
              marginTop: '14px',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-color)',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ color: 'var(--accent-primary)' }}>$ </span>
              <span className="typing-cursor" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
