import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
      }
    };

    // Lock body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: '#home' },
    { id: 'projects', label: '#projects' },
    { id: 'skills', label: '#skills' },
    { id: 'experience', label: '#experience' },
    { id: 'about', label: '#about-me' },
    { id: 'contact', label: '#contacts' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: scrolled ? 'rgba(13, 17, 23, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      padding: '20px 0',
      zIndex: 1000
    }}>
      <div className="container">
        <div className="navbar-container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: '20px'
        }}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
            style={{ 
              color: 'var(--text-primary)', 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
              fontWeight: '500',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap'
            }}
          >
            Bharti Kumari
          </a>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav" style={{ 
            display: 'flex', 
            gap: '30px', 
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  style={{
                    color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: activeSection === link.id ? '500' : '400',
                    transition: 'all 0.3s ease',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginLeft: '20px', 
              paddingLeft: '20px', 
              borderLeft: '1px solid var(--border-color)'
            }}>
              <a href="https://github.com/bhartik021" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/bhartik021/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                <i className="fas fa-code"></i>
              </a>
              <a href="https://medium.com/@bhartik021" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: mobileMenuOpen ? 'var(--bg-secondary)' : 'transparent',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              padding: '10px 14px',
              cursor: 'pointer',
              fontSize: '1.3rem',
              transition: 'all 0.3s ease',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
              flexShrink: 0
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
          style={{
            display: mobileMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '0',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderTop: '1px solid var(--border-color)',
            marginTop: '20px',
            background: 'var(--bg-primary)',
            borderRadius: '8px',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className="mobile-menu-link"
              style={{
                color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: activeSection === link.id ? '500' : '400',
                transition: 'all 0.3s ease',
                padding: '16px 20px',
                letterSpacing: '-0.01em',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="mobile-menu-social" style={{ 
            display: 'flex', 
            gap: '20px', 
            padding: '20px',
            justifyContent: 'center',
            borderTop: '1px solid var(--border-color)',
            marginTop: '10px'
          }}>
            <a 
              href="https://github.com/bhartik021" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.8rem',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/bhartik021/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.8rem',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://leetcode.com/u/bhartik021/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.8rem',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fas fa-code"></i>
            </a>
            <a 
              href="https://medium.com/@bhartik021" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.8rem',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
