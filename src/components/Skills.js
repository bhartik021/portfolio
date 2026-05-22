import React from 'react';

const skillCategories = [
  {
    path: 'languages',
    color: '#ff79c6',
    icon: '📄',
    skills: ['C', 'C++', 'JavaScript', 'Python'],
  },
  {
    path: 'web-tech',
    color: '#8be9fd',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
  },
  {
    path: 'frameworks',
    color: '#50fa7b',
    icon: '⚙️',
    skills: ['ReactJS', 'Bootstrap', 'Django'],
  },
  {
    path: 'databases',
    color: '#f1fa8c',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MS SQL Server', 'Redis'],
  },
  {
    path: 'cs-fundamentals',
    color: '#bd93f9',
    icon: '📐',
    skills: ['Operating System', 'DBMS', 'Networking', 'OOP'],
  },
  {
    path: 'tools',
    color: '#ffb86c',
    icon: '🔧',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'VS Code'],
  },
];

const FileTreeCard = ({ cat }) => {
  const last = cat.skills.length - 1;
  return (
    <div className="file-tree-card">
      {/* Folder header */}
      <div className="file-tree-header">
        <span className="editor-dot dot-red"   />
        <span className="editor-dot dot-yellow"/>
        <span className="editor-dot dot-green" />
        <span style={{ marginLeft: '8px', color: cat.color }}>
          {cat.icon}&nbsp;
          <span style={{ color: cat.color }}>/{cat.path}</span>
        </span>
      </div>

      {/* File list */}
      <div className="file-tree-body">
        {cat.skills.map((skill, i) => (
          <div key={i} className="tree-row">
            <span className="tree-prefix">{i === last ? '└──' : '├──'}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '300px', height: '300px', top: '50%', left: '2%',  opacity: 0.08 }} />
    <div className="dotted-pattern" style={{ width: '200px', height: '200px', bottom: '10%', right: '10%', opacity: 0.08 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">skills</h2>

      {/* Top: explorer title bar */}
      <div style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <i className="fas fa-folder-open" style={{ color: 'var(--accent-primary)' }} />
        <span style={{ color: 'var(--accent-primary)' }}>EXPLORER</span>
        <span style={{ color: 'var(--border-color)' }}>—</span>
        <span>~/portfolio/skills</span>
      </div>

      <div className="row">
        {skillCategories.map((cat, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-12 mb-4 anim" style={{ transitionDelay: `${i * 0.1}s` }}>
            <FileTreeCard cat={cat} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
