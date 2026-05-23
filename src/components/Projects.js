import React from 'react';

const projects = [
  {
    title: 'SummarizeMe',
    description: 'A summarizer app that provides clear and concise summaries of lengthy articles in 100 words.',
    tech: ['React.js', 'Redux Toolkit', 'Local Storage'],
    codeLink: 'https://github.com/bhartik021/summarizeme',
    liveLink: 'https://summarizeme-lake.vercel.app/',
  },
  {
    title: 'Movie Hub',
    description: 'Web Application using ReactJS and OMDb API that fetches and displays movie information.',
    tech: ['React.js', 'OMDb API', 'Bootstrap'],
    codeLink: 'https://github.com/bhartik021/movie-hub',
    liveLink: 'https://movie-hub-tan-sigma.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '180px', height: '180px', bottom: '20%', left: '4%', opacity: 0.12 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '12px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>projects</h2>
        <a
          href="https://github.com/bhartik021"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.82rem, 2vw, 0.92rem)', fontFamily: "'Fira Code', monospace", whiteSpace: 'nowrap' }}
        >
          <i className="fab fa-github" style={{ marginRight: '6px' }} />
          view all on GitHub&nbsp;<span style={{ color: 'var(--accent-primary)' }}>→</span>
        </a>
      </div>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
            <div
              className="anim project-card"
              style={{
                transitionDelay: `${index * 0.13}s`,
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderTop: '3px solid var(--accent-primary)',
                borderRadius: '0 0 10px 10px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(168,85,247,0.12)';
                e.currentTarget.style.borderTopColor = 'var(--accent-secondary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderTopColor = 'var(--accent-primary)';
              }}
            >
              {/* header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <i className="fas fa-folder-open" style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }} />
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: 600,
                  fontFamily: "'Fira Code', monospace",
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}>
                  {project.title}
                </h3>
              </div>

              {/* description */}
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                marginBottom: '20px',
                flex: 1,
              }}>
                {project.description}
              </p>

              {/* tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="skill-pill" style={{ fontSize: '0.78rem', padding: '3px 10px' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem' }}
                >
                  <i className="fas fa-external-link-alt" style={{ marginRight: '6px', fontSize: '0.75rem' }} />
                  live demo
                </a>
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.82rem' }}
                  >
                    <i className="fab fa-github" style={{ marginRight: '6px' }} />
                    source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
