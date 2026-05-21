import React from 'react';

const projects = [
  {
    title: 'SummarizeMe',
    filename: 'summarize-me.jsx',
    description: 'A summarizer app that provides clear and concise summaries of lengthy articles in 100 words.',
    tech: ['React.js', 'Redux Toolkit', 'Local Storage'],
    codeLink: 'https://github.com/bhartik021/summarizeme',
    liveLink: 'https://summarizeme-coral.vercel.app/',
  },
  {
    title: 'Movie Hub',
    filename: 'movie-hub.jsx',
    description: 'Web Application using ReactJS and OMDb API that fetches and displays movie information.',
    tech: ['React.js', 'OMDb API', 'Bootstrap'],
    codeLink: 'https://github.com/bhartik021/movie-hub',
    liveLink: 'https://movie-hub-sepia.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle background decoration */}
    <div className="dotted-pattern" style={{ width: '180px', height: '180px', bottom: '20%', left: '4%', opacity: 0.12 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div
        className="projects-header"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '12px' }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>projects</h2>
        <a
          href="https://github.com/bhartik021"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-link"
          style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.82rem, 2vw, 0.92rem)', fontFamily: "'Fira Code', monospace", whiteSpace: 'nowrap' }}
        >
          <i className="fab fa-github" style={{ marginRight: '6px' }} />view all on GitHub&nbsp;<span style={{ color: 'var(--accent-primary)' }}>→</span>
        </a>
      </div>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-12 mb-4">
            {/* Editor window chrome */}
            <div className="editor-window">
              <div className="editor-header">
                <span className="editor-dot dot-red" />
                <span className="editor-dot dot-yellow" />
                <span className="editor-dot dot-green" />
                <span className="editor-filename">{project.filename}</span>
              </div>
              <div className="editor-body">
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                  fontWeight: 600,
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                  fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className="skill-pill" style={{ fontSize: '0.78rem', padding: '3px 10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
