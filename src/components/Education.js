import React from 'react';

const educations = [
  {
    degree: 'BTech — Electronics & Communication Engineering',
    institution: 'Rajasthan Technical University',
    location: 'Kota, Rajasthan',
    period: 'Dec 2021 – Jun 2024',
    grade: '9.61 / 10.00',
    gradeLabel: 'CGPA',
    color: 'var(--accent-primary)',
  },
  {
    degree: 'Diploma — Computer Science & Engineering',
    institution: 'Government Polytechnic College',
    location: 'Kota, Rajasthan',
    period: 'Aug 2018 – Sep 2021',
    grade: '75.89%',
    gradeLabel: 'Percentage',
    color: '#8be9fd',
  },
];

const Education = () => (
  <section id="education" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '220px', height: '220px', top: '20%', left: '3%', opacity: 0.08 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">education</h2>

      <div style={{ maxWidth: '700px', position: 'relative', paddingLeft: '48px' }}>

        {/* vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '16px',
          bottom: '16px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-primary), #8be9fd)',
          opacity: 0.35,
        }} />

        {educations.map((edu, i) => (
          <div key={i} className="anim anim-left" style={{ transitionDelay: `${i * 0.18}s`, position: 'relative', marginBottom: i < educations.length - 1 ? '36px' : 0 }}>

            {/* node */}
            <div className="timeline-node" style={{
              position: 'absolute',
              left: '-40px',
              top: '18px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: edu.color,
              border: '3px solid var(--bg-primary)',
              boxShadow: `0 0 10px ${edu.color}55`,
              zIndex: 1,
              animationDelay: `${i * 0.18 + 0.3}s`,
            }} />

            {/* card */}
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderLeft: `3px solid ${edu.color}`,
              borderRadius: '0 10px 10px 0',
              padding: '20px 24px',
              transition: 'box-shadow 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* degree */}
              <h3 style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(0.95rem, 2.2vw, 1.08rem)',
                fontWeight: 600,
                marginBottom: '8px',
                lineHeight: 1.4,
              }}>
                {edu.degree}
              </h3>

              {/* institution */}
              <div style={{
                color: edu.color,
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.82rem',
                marginBottom: '12px',
                fontWeight: 500,
              }}>
                {edu.institution}
              </div>

              {/* meta row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}>
                <span>
                  <i className="fas fa-map-marker-alt" style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                  {edu.location}
                </span>
                <span>
                  <i className="fas fa-calendar-alt" style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                  {edu.period}
                </span>
                <span style={{ color: edu.color, fontWeight: 600 }}>
                  {edu.gradeLabel}: {edu.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
