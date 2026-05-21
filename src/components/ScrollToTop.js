import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '42px',
        height: '42px',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--accent-primary)',
        borderRadius: '8px',
        color: 'var(--accent-primary)',
        cursor: 'pointer',
        zIndex: 997,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.85rem',
        transition: 'all 0.25s ease',
        fontFamily: "'Fira Code', monospace",
        boxShadow: '0 4px 20px rgba(168,85,247,0.15)',
        animation: 'fadeInUp 0.3s ease both',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--accent-primary)';
        e.currentTarget.style.color = 'var(--bg-primary)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.5)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg-secondary)';
        e.currentTarget.style.color = 'var(--accent-primary)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
};

export default ScrollToTop;
