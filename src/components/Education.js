import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: 'BTech in Electronics and Communication Engineering',
      institution: 'Rajasthan Technical University',
      location: 'Kota, Rajasthan, India',
      period: 'December 2021 – June 2024',
      grade: 'CGPA: 9.61 / 10.00'
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Government Polytechnic College',
      location: 'Kota, Rajasthan, India',
      period: 'August 2018 - September 2021',
      grade: 'Percentage: 75.89% (Honors)'
    }
  ];

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-4 mb-3" style={{ 
              color: 'var(--accent-primary)',
              marginBottom: '20px',
              fontWeight: '700'
            }}>
              &lt;Education /&gt;
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
          <div className="col-lg-10 mx-auto">
            {educations.map((edu, index) => (
              <div key={index} className="card-custom mb-4">
                <div className="code-block" style={{ background: 'rgba(0, 217, 255, 0.05)' }}>
                  <div className="code-line">
                    <span className="code-comment">// Education {index + 1}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span> education{index + 1} = {'{'}
                  </div>
                  <div className="code-line" style={{ paddingLeft: '20px', wordBreak: 'break-word' }}>
                    degree: <span style={{ color: '#4ecdc4' }}>'{edu.degree}'</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '20px', wordBreak: 'break-word' }}>
                    institution: <span style={{ color: '#4ecdc4' }}>'{edu.institution}'</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '20px', wordBreak: 'break-word' }}>
                    location: <span style={{ color: '#4ecdc4' }}>'{edu.location}'</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '20px', wordBreak: 'break-word' }}>
                    period: <span style={{ color: '#ffe66d' }}>'{edu.period}'</span>,
                  </div>
                  <div className="code-line" style={{ paddingLeft: '20px', wordBreak: 'break-word' }}>
                    grade: <span style={{ color: '#ff6b6b' }}>'{edu.grade}'</span>
                  </div>
                  <div className="code-line">{'};'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

