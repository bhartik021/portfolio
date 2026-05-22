import React from 'react';

const About = () => (
  <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="decorative-shape shape-square" style={{ width: '180px', height: '180px', top: '20%', right: '8%', opacity: 0.06 }} />
    <div className="dotted-pattern" style={{ width: '250px', height: '250px', top: '60%', right: '2%', opacity: 0.12 }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <h2 className="section-title">about-me</h2>
      <div className="row align-items-center">

        {/* Left: bio + stats */}
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '18px' }}>
            Hello, I'm{' '}
            <strong
              className="glitch-name"
              data-text="Bharti Kumari"
              style={{ color: 'var(--accent-primary)', fontWeight: 600 }}
            >Bharti Kumari</strong>
            ! I'm a Software Engineer currently working at{' '}
            <strong style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>miniOrange</strong>{' '}
            in Pune, Maharashtra. I can develop responsive websites from scratch and raise them into
            modern user-friendly web experiences.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '18px' }}>
            I specialize in building secure, scalable solutions using React.js, Django, and database
            technologies. Passionate about writing clean, maintainable code and solving complex
            technical challenges.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.92rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '28px' }}>
            Beyond coding, I'm an active contributor to technical communities —&nbsp;
            publishing 150+ articles with 90,000+ views. I always strive to learn the
            newest technologies and frameworks.
          </p>

          <a href="#contact" className="btn-secondary" style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.88rem' }}>
            get in touch&nbsp;<span style={{ color: 'var(--accent-primary)' }}>→</span>
          </a>
        </div>

        {/* Right: profile image */}
        <div className="col-lg-6 col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
            <div
              className="about-image-container about-float"
              style={{
                position: 'relative',
                width: 'clamp(220px, 40vw, 300px)',
                height: 'clamp(220px, 40vw, 300px)',
                borderRadius: '50%',
                padding: '5px',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 15px 40px rgba(168, 85, 247, 0.35)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                margin: '0 auto',
              }}
              onMouseEnter={e => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
                  e.currentTarget.style.boxShadow = '0 22px 55px rgba(168, 85, 247, 0.45)';
                }
              }}
              onMouseLeave={e => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(168, 85, 247, 0.35)';
                }
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '3px solid var(--bg-secondary)',
              }}>
                <img
                  src="/images/bharti.jpeg"
                  alt="Bharti Kumari"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Tech stack line below image */}
            <div style={{
              marginTop: '24px',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              letterSpacing: 0,
            }}>
              <span style={{ color: 'var(--accent-secondary)' }}>const</span>
              {' stack = ['}
              <span style={{ color: '#f1fa8c' }}>"React"</span>
              {', '}
              <span style={{ color: '#f1fa8c' }}>"Django"</span>
              {'];'}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
