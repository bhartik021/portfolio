import React from 'react';

const stats = [
  { key: 'articles_published', value: '150+', color: '#f1fa8c' },
  { key: 'total_views',        value: '90K+', color: '#50fa7b' },
  { key: 'yrs_experience',     value: '2+',   color: '#8be9fd' },
  { key: 'technologies',       value: '6+',   color: '#ff79c6' },
  { key: 'top_50_awards',      value: '3',    color: '#ffb86c' },
  { key: 'cgpa',               value: '9.61', color: '#bd93f9' },
];

const Quote = () => (
  <section style={{ padding: '40px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
    <div className="container">

      {/* prompt label */}
      <div style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.72rem',
        color: 'var(--text-muted)',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        <span style={{ color: '#50fa7b' }}>bharti</span>
        <span>@portfolio</span>
        <span style={{ color: '#8be9fd' }}> ~/stats</span>
        <span style={{ color: 'var(--accent-primary)' }}> $</span>
        <span> uptime --portfolio</span>
      </div>

      {/* stats grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1px',
        background: 'var(--border-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        {stats.map((s) => (
          <div
            key={s.key}
            style={{
              background: 'var(--bg-primary)',
              padding: '20px 16px',
              textAlign: 'center',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-tertiary)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
          >
            <div style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
              fontWeight: 700,
              color: s.color,
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {s.key.replace(/_/g, ' ')}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Quote;
