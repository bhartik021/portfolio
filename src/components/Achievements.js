import React from 'react';

const achievements = [
  {
    iconType: 'emoji',
    icon: '🏆',
    title: 'Smart India Hackathon',
    tag: 'National Finalist',
    tagColor: '#f1fa8c',
    description: 'Selected as National Finalist among 44,000+ teams nationwide, organised by Ministry of Education (MHRD).',
    accentColor: '#f1fa8c',
  },
  {
    iconType: 'amazon',
    title: 'Amazon ML Summer School',
    tag: 'Mentee',
    tagColor: '#FF9900',
    description: 'Chosen by Amazon as an ML Summer Mentee from over 40,000+ applicants across India.',
    accentColor: '#FF9900',
  },
  {
    iconType: 'samsung',
    title: 'Samsung Solve for Tomorrow',
    tag: 'Top 50 India',
    tagColor: '#4a9eff',
    description: 'Ranked in the Top 50 teams across India out of 18,000+ competing teams.',
    accentColor: '#4a9eff',
  },
  {
    iconType: 'emoji',
    icon: '✍️',
    title: 'Technical Writing',
    tag: '90K+ Views',
    tagColor: '#50fa7b',
    description: 'Published 150+ technical articles across platforms accumulating over 90,000 views.',
    accentColor: '#50fa7b',
  },
];

const AchievementIcon = ({ a }) => {
  if (a.iconType === 'amazon') {
    return <i className="fab fa-amazon" style={{ color: '#FF9900', fontSize: '1.6rem' }} />;
  }
  if (a.iconType === 'samsung') {
    return (
      <svg width="44" height="22" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="110" height="36" rx="18" fill="#1428A0"/>
        <text
          x="55" y="25"
          textAnchor="middle"
          fill="white"
          fontFamily="Arial,Helvetica,sans-serif"
          fontWeight="bold"
          fontSize="17"
          letterSpacing="3"
        >SAMSUNG</text>
      </svg>
    );
  }
  return <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{a.icon}</span>;
};

const Achievements = () => (
  <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '10%', right: '4%', opacity: 0.08 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">achievements</h2>

      <div className="row">
        {achievements.map((a, i) => (
          <div key={i} className="col-lg-6 col-12 mb-4">
            <div
              className="anim"
              style={{ transitionDelay: `${i * 0.11}s`,
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderLeft: `4px solid ${a.accentColor}`,
                borderRadius: '0 10px 10px 0',
                padding: '22px 24px',
                height: '100%',
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 28px ${a.accentColor}18`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: `${a.accentColor}12`,
                border: `1px solid ${a.accentColor}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <AchievementIcon a={a} />
              </div>

              {/* content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
                    fontWeight: 600,
                    margin: 0,
                  }}>
                    {a.title}
                  </h3>
                  <span style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.7rem',
                    color: a.tagColor,
                    background: `${a.accentColor}12`,
                    border: `1px solid ${a.accentColor}35`,
                    padding: '2px 8px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                  }}>
                    {a.tag}
                  </span>
                </div>
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
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
