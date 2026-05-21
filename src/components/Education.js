import React from 'react';

const educations = [
  {
    filename: 'btech.json',
    degree: 'BTech — Electronics & Communication Engineering',
    institution: 'Rajasthan Technical University',
    location: 'Kota, Rajasthan',
    period: 'Dec 2021 – Jun 2024',
    grade: '9.61 / 10.00',
    gradeLabel: 'CGPA',
    highlight: true,
  },
  {
    filename: 'diploma.json',
    degree: 'Diploma — Computer Science & Engineering',
    institution: 'Government Polytechnic College',
    location: 'Kota, Rajasthan',
    period: 'Aug 2018 – Sep 2021',
    grade: '75.89%',
    gradeLabel: 'Percentage (Honors)',
    highlight: false,
  },
];

const Education = () => (
  <section id="education" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="dotted-pattern" style={{ width: '220px', height: '220px', top: '20%', left: '3%', opacity: 0.08 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">education</h2>

      {/* breadcrumb */}
      <div style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <i className="fas fa-graduation-cap" style={{ color: 'var(--accent-primary)' }} />
        <span style={{ color: 'var(--accent-primary)' }}>cat</span>
        <span>~/education/*.json</span>
      </div>

      <div className="row">
        {educations.map((edu, i) => (
          <div key={i} className="col-lg-6 col-12 mb-4">
            <div className="editor-window" style={{ height: 'auto' }}>
              <div className="editor-header">
                <span className="editor-dot dot-red"   />
                <span className="editor-dot dot-yellow"/>
                <span className="editor-dot dot-green" />
                <span className="editor-filename">{edu.filename}</span>
              </div>

              {/* JSON-style content */}
              <div className="editor-body" style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(0.78rem, 1.5vw, 0.85rem)', lineHeight: 1.9 }}>
                <div className="code-row"><span className="t-ln">1</span><span className="t-punc">{'{'}</span></div>
                <div className="code-row"><span className="t-ln">2</span><span style={{ paddingLeft: '14px' }}><span className="t-key">"degree"</span><span className="t-punc">: </span><span className="t-str">"{edu.degree}"</span><span className="t-punc">,</span></span></div>
                <div className="code-row"><span className="t-ln">3</span><span style={{ paddingLeft: '14px' }}><span className="t-key">"institution"</span><span className="t-punc">: </span><span className="t-str">"{edu.institution}"</span><span className="t-punc">,</span></span></div>
                <div className="code-row"><span className="t-ln">4</span><span style={{ paddingLeft: '14px' }}><span className="t-key">"location"</span><span className="t-punc">: </span><span className="t-str">"{edu.location}"</span><span className="t-punc">,</span></span></div>
                <div className="code-row"><span className="t-ln">5</span><span style={{ paddingLeft: '14px' }}><span className="t-key">"period"</span><span className="t-punc">: </span><span className="t-str">"{edu.period}"</span><span className="t-punc">,</span></span></div>
                <div className="code-row">
                  <span className="t-ln">6</span>
                  <span style={{ paddingLeft: '14px' }}>
                    <span className="t-key">"{edu.gradeLabel}"</span>
                    <span className="t-punc">: </span>
                    <span style={{ color: edu.highlight ? '#f1fa8c' : '#50fa7b', fontWeight: 600 }}>"{edu.grade}"</span>
                  </span>
                </div>
                <div className="code-row"><span className="t-ln">7</span><span className="t-punc">{'}'}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
