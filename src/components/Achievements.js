import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon',
      description: 'Selected as a National Finalist, organized by MHRD among the 44,000+ teams',
      icon: '🏆'
    },
    {
      title: 'Amazon ML Summer Mentee',
      description: 'Selected by Amazon among the 40,000+ participants',
      icon: '🌟'
    },
    {
      title: 'Samsung Solve for Tomorrow',
      description: 'Selected in the top 50 teams in India among the 18,000+ teams',
      icon: '💡'
    },
    {
      title: 'Technical Writing',
      description: 'Published 150+ technical articles across platforms, with 90,000+ views',
      icon: '✍️'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-4 mb-3" style={{ 
              color: 'var(--accent-primary)',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              &lt;Achievements /&gt;
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'var(--accent-primary)',
              margin: '0 auto 30px',
              boxShadow: '0 0 10px var(--accent-primary)'
            }}></div>
          </div>
        </div>
        <div className="row">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className="card-custom">
                <div className="d-flex align-items-start">
                  <div style={{ fontSize: '3rem', marginRight: '20px', flexShrink: 0 }}>{achievement.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ 
                      color: 'var(--accent-primary)', 
                      marginBottom: '15px',
                      fontSize: '1.3rem',
                      wordBreak: 'break-word',
                      fontWeight: '600'
                    }}>
                      {achievement.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      lineHeight: '1.8',
                      fontSize: '1rem',
                      wordBreak: 'break-word'
                    }}>
                      {achievement.description}
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
};

export default Achievements;

