import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++','JavaScript','Python']
    },
    {
      title: 'Web Technologies',
      skills: ['HTML/CSS', 'JavaScript', 'ReactJS']
    },
    {
      title: 'Framework/Libraries',
      skills: ['Bootstrap', 'ReactJS', 'Django']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MS SQL Server', 'Redis']
    },
    {
      title: 'CS Fundamentals',
      skills: ['Operating System', 'DBMS', 'Computer Networking', 'OOPS']
    },
    {
      title: 'Tools/Technologies',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="decorative-shape shape-triangle" style={{ width: '200px', height: '200px', top: '10%', left: '5%', borderBottomWidth: '200px', borderLeftWidth: '100px', borderRightWidth: '100px', opacity: 0.08 }}></div>
      <div className="decorative-shape shape-circle" style={{ width: '250px', height: '250px', bottom: '15%', right: '3%', opacity: 0.1 }}></div>
      <div className="dotted-pattern" style={{ width: '300px', height: '300px', top: '50%', left: '2%', opacity: 0.15 }}></div>
      <div className="dotted-pattern" style={{ width: '200px', height: '200px', bottom: '10%', right: '10%', opacity: 0.15 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card-modern" style={{ height: '100%' }}>
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                  fontWeight: '500',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '15px',
                  letterSpacing: '-0.01em'
                }}>
                  {category.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '10px'
                }}>
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      style={{
                        padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 2vw, 12px)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                        fontWeight: '400',
                        letterSpacing: '-0.01em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
