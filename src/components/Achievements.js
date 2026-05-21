import React from 'react';

const achievements = [
  {
    hash: 'f1a2b3c',
    iconType: 'emoji',
    icon: '🏆',
    title: 'Smart India Hackathon',
    description: 'Selected as National Finalist among 44,000+ teams nationwide, organised by Ministry of Education (MHRD).',
  },
  {
    hash: 'e4d5c6b',
    iconType: 'amazon',
    title: 'Amazon ML Summer School',
    description: 'Chosen by Amazon as an ML Summer Mentee from over 40,000+ applicants across India.',
  },
  {
    hash: 'a7b8c9d',
    iconType: 'samsung',
    title: 'Samsung Solve for Tomorrow',
    description: 'Ranked in the Top 50 teams across India out of 18,000+ competing teams.',
  },
  {
    hash: 'd2e3f4a',
    iconType: 'emoji',
    icon: '✍️',
    title: 'Technical Writing',
    description: 'Published 150+ technical articles across platforms accumulating over 90,000 views.',
  },
];

const Achievements = () => (
  <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '10%', right: '4%', opacity: 0.08 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">achievements</h2>

      {/* git log label */}
      <div style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <i className="fas fa-trophy" style={{ color: '#f1fa8c' }} />
        <span style={{ color: 'var(--accent-primary)' }}>git log</span>
        <span>--tags --oneline</span>
      </div>

      <div className="row">
        {achievements.map((a, i) => (
          <div key={i} className="col-lg-6 col-12 mb-4">
            <div className="editor-window" style={{ height: 'auto' }}>
              {/* editor chrome */}
              <div className="editor-header">
                <span className="editor-dot dot-red"   />
                <span className="editor-dot dot-yellow"/>
                <span className="editor-dot dot-green" />
                <span className="editor-filename">{a.hash}</span>
              </div>

              <div className="editor-body" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>
                  {a.iconType === 'emoji' && a.icon}
                  {a.iconType === 'amazon' && (
                    <i className="fab fa-amazon" style={{ color: '#FF9900', fontSize: '1.8rem' }} />
                  )}
                  {a.iconType === 'samsung' && (
                    <span style={{
                      fontFamily: "'Fira Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.08em',
                      color: '#1428A0',
                      background: 'rgba(20,40,160,0.1)',
                      border: '1px solid rgba(20,40,160,0.3)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                      lineHeight: 1.4,
                    }}>
                      SAMSUNG
                    </span>
                  )}
                </span>
                <div>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                    fontWeight: 600,
                    marginBottom: '8px',
                    fontFamily: "'Fira Code', monospace",
                    letterSpacing: '-0.01em',
                  }}>
                    {a.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.92rem)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {a.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
