import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SummarizeMe',
      description: 'A summarizer app that provides clear and concise summaries of lengthy articles in 100 words.',
      tech: ['React.js', 'Redux Toolkit', 'Local Storage'],
      codeLink: 'https://github.com/bhartik021/summarizeme',
      liveLink: 'https://summarizeme-coral.vercel.app/',
      logo: '📝'
    },
    {
      title: 'Movie Hub',
      description: 'Web Application using ReactJS and OMDb API that fetches movie information.',
      tech: ['React.js', 'OMDb API', 'Bootstrap'],
      codeLink: 'https://github.com/bhartik021/movie-hub',
      liveLink: 'https://movie-hub-sepia.vercel.app/',
      logo: '🎬'
    }
  ];

  return (
    <section id="projects" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="decorative-shape shape-square" style={{ width: '120px', height: '120px', top: '15%', right: '5%', opacity: 0.08 }}></div>
      <div className="dotted-pattern" style={{ width: '180px', height: '180px', bottom: '20%', left: '4%', opacity: 0.15 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="projects-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '15px' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>projects</h2>
          <a href="#projects" className="view-all-link" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2vw, 1rem)', whiteSpace: 'nowrap' }}>
            View all <span style={{ color: 'var(--accent-primary)' }}>→</span>
          </a>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card-modern" style={{ height: '100%' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                    marginBottom: '15px',
                    width: 'clamp(50px, 10vw, 60px)',
                    height: 'clamp(50px, 10vw, 60px)',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {project.logo}
                  </div>
                  <h3 style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '500',
                    marginBottom: '15px',
                    letterSpacing: '-0.02em'
                  }}>
                    {project.title}
                  </h3>
                </div>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                  fontWeight: '400',
                  letterSpacing: '-0.01em'
                }}>
                  {project.description}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px',
                    fontSize: 'clamp(0.8rem, 2vw, 0.85rem)',
                    color: 'var(--text-muted)'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        padding: '4px 8px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '4px',
                        border: '1px solid var(--border-color)',
                        whiteSpace: 'nowrap'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}
                  >
                    Live <span style={{ marginLeft: '5px' }}>→</span>
                  </a>
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}
                    >
                      Code <span style={{ marginLeft: '5px' }}>→</span>
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
};

export default Projects;
