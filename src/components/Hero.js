import React from 'react';
import bhartiImage from '../assets/bharti.jpeg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section hero-section" style={{ paddingTop: 'clamp(80px, 15vw, 120px)', minHeight: 'clamp(500px, 90vh, 90vh)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div className="decorative-shape shape-circle" style={{ width: '300px', height: '300px', top: '10%', left: '-100px', opacity: 0.1 }}></div>
      <div className="decorative-shape shape-square" style={{ width: '150px', height: '150px', top: '60%', right: '5%', opacity: 0.08 }}></div>
      <div className="dotted-pattern" style={{ width: '200px', height: '200px', top: '30%', right: '15%', opacity: 0.2 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 hero-text">
            <h1 className="hero-title" style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '500',
              lineHeight: '1.1',
              marginBottom: '25px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              textAlign: 'left'
            }}>
              Bharti Kumari is a{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Software Engineer</span>{' '}
              and{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</span>
            </h1>
            <p className="hero-description" style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--text-secondary)',
              marginBottom: '35px',
              lineHeight: '1.6',
              fontWeight: '400',
              letterSpacing: '-0.01em',
              textAlign: 'left'
            }}>
              She crafts responsive websites where technologies meet creativity.
            </p>
            <div className="hero-button-container" style={{ textAlign: 'left' }}>
              <button 
                className="btn-primary hero-cta-button"
                onClick={scrollToContact}
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: 'clamp(12px, 3vw, 12px) clamp(25px, 6vw, 30px)', minHeight: '48px', minWidth: '140px' }}
              >
                Contact me !!
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 hero-image" style={{ position: 'relative', paddingTop: 'clamp(20px, 5vw, 50px)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
              <div className="hero-image-container" style={{
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
                    src={bhartiImage}
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
              
              {/* Status badge - positioned below circle */}
              <div className="status-badge" style={{
                marginTop: 'clamp(20px, 4vw, 30px)',
                background: 'rgba(22, 27, 34, 0.95)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '12px',
                padding: 'clamp(10px, 2vw, 12px) clamp(15px, 4vw, 24px)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 2vw, 12px)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                zIndex: 2,
                width: 'fit-content',
                maxWidth: 'calc(100% - 20px)',
                boxSizing: 'border-box'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  boxShadow: '0 0 10px var(--accent-primary)',
                  animation: 'pulse 2s ease-in-out infinite',
                  flexShrink: 0
                }}></div>
                <span className="status-text" style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', fontWeight: '500', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
