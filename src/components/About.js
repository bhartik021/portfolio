import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="decorative-shape shape-square" style={{ width: '180px', height: '180px', top: '20%', right: '8%', opacity: 0.08 }}></div>
      <div className="dotted-pattern" style={{ width: '250px', height: '250px', top: '60%', right: '2%', opacity: 0.2 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">about-me</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.95rem, 2vw, 1rem)', 
              lineHeight: '1.6',
              marginBottom: '20px',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              Hello, I'm Bharti Kumari! I'm a Software Engineer currently working at <strong style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>miniorange</strong> in Pune, Maharashtra. 
              I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.95rem, 2vw, 1rem)', 
              lineHeight: '1.6',
              marginBottom: '20px',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              Transforming my creativity and knowledge into websites has been my passion. I specialize in building secure, scalable solutions 
              using React.js, Django, and database technologies. I'm passionate about writing clean, maintainable code and solving complex 
              technical challenges.
            </p>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'clamp(0.95rem, 2vw, 1rem)', 
              lineHeight: '1.6',
              marginBottom: '30px',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              Beyond coding, I'm an active contributor to technical communities, having published 150+ articles with 90,000+ views. 
              I always strive to learn about the newest technologies and frameworks.
            </p>
            <a href="#contact" className="btn-secondary" style={{ display: 'inline-block' }}>
              Read more <span style={{ marginLeft: '5px' }}>→</span>
            </a>
          </div>
          <div className="col-lg-6 col-12" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '320px',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              {/* Main circular image container with gradient border */}
              <div className="about-image-container" style={{
                position: 'relative',
                width: 'clamp(220px, 40vw, 300px)',
                height: 'clamp(220px, 40vw, 300px)',
                borderRadius: '50%',
                padding: '6px',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 15px 40px rgba(168, 85, 247, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                zIndex: 1,
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(168, 85, 247, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(168, 85, 247, 0.3)';
                }
              }}
              >
                {/* Inner circular container */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  border: '3px solid var(--bg-secondary)',
                  position: 'relative'
                }}>
                  {/* Decorative shapes behind image */}
                  <div className="decorative-shape shape-circle" style={{ 
                    width: '200px', 
                    height: '200px', 
                    top: '-80px', 
                    right: '-80px', 
                    opacity: 0.15, 
                    zIndex: 0,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                  }}></div>
                  <div className="decorative-shape shape-circle" style={{ 
                    width: '120px', 
                    height: '120px', 
                    bottom: '-40px', 
                    left: '-40px', 
                    opacity: 0.12, 
                    zIndex: 0,
                    background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))'
                  }}></div>
                  
                  {/* Circular image */}
                  <img 
                    src='../../public/images/bharti.jpeg'
                    alt="Bharti Kumari"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      position: 'relative',
                      zIndex: 1,
                      display: 'block',
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
