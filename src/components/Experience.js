import React from 'react';

const experiences = [
  {
    hash: 'a3f8c21',
    title: 'Software Engineer',
    company: 'miniOrange',
    team: 'Privilege Access Management — PAM Team',
    location: 'Pune, Maharashtra',
    period: 'Feb 2025 – Present',
    current: true,
  },
  {
    hash: 'd9e7f12',
    title: 'Software Engineer Intern',
    company: 'miniOrange',
    team: 'Privilege Access Management — PAM Team',
    location: 'Pune, Maharashtra',
    period: 'Aug 2024 – Jan 2025',
    current: false,
  },
];

const Experience = () => (
  <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '180px', height: '180px', bottom: '20%', right: '5%', opacity: 0.1 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">experience</h2>

      {/* git log header */}
      <div style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <i className="fab fa-git-alt" style={{ color: '#f1502f' }} />
        <span style={{ color: 'var(--accent-primary)' }}>git log</span>
        <span>--oneline --graph --all</span>
      </div>

      {/* git log entries */}
      <div style={{ maxWidth: '760px' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="git-log-line">
            {/* Graph track */}
            <div className="git-track">
              <div className="git-node" />
              {i < experiences.length - 1 && <div className="git-pipe" />}
            </div>

            {/* Commit box */}
            <div className="git-content-box">
              {/* Hash + branch badge */}
              <div className="git-hash-row">
                <span className="git-hash">commit {exp.hash}</span>
                {exp.current && (
                  <span className="git-branch-badge">HEAD → main, origin/main</span>
                )}
              </div>

              {/* Title */}
              <div className="git-commit-title">
                {exp.title}{' '}
                <span style={{ color: 'var(--accent-primary)' }}>@ {exp.company}</span>
              </div>

              {/* Meta */}
              <div className="git-meta">
                <b>Date: </b>{exp.period}
              </div>

              {/* Commit body */}
              <div style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-color)',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.78rem',
              }}>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;{exp.team}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '5px', fontSize: '0.68rem' }} />
                  {exp.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
