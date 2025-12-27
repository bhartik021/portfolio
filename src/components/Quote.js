import React from 'react';

const Quote = () => {
  return (
    <section className="section quote-section" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <div className="quote-container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', padding: '0 20px' }}>
          <div className="quote-mark quote-mark-left" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'var(--accent-primary)', opacity: 0.3, position: 'absolute', left: 'clamp(-30px, -5vw, -50px)', top: '-20px' }}>
            "
          </div>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '500',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontStyle: 'italic',
            lineHeight: '1.4',
            letterSpacing: '-0.02em',
            padding: '0 clamp(10px, 5vw, 0)'
          }}>
            First, solve the problem. Then, write the code.
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            marginTop: '30px',
            fontWeight: '400',
            letterSpacing: '-0.01em'
          }}>
            - John Johnson
          </p>
          <div className="quote-mark quote-mark-right" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'var(--accent-primary)', opacity: 0.3, position: 'absolute', right: 'clamp(-30px, -5vw, -50px)', bottom: '-40px', transform: 'rotate(180deg)' }}>
            "
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;

