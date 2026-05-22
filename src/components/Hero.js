import React, { useState, useEffect, useRef } from 'react';

/*
  BHARTI  — figlet standard
   ____   _   _      _    ____   _____  ___
  | __ ) | | | |   / \  |  _ \ |_   _||_ _|
  |  _ \ | |_| |  / _ \ | |_) |  | |   | |
  | |_) ||  _  | / ___ \|  _ <   | |   | |
  |____/ |_| |_|/_/   \_\|_| \_\ |_|  |___|

  KUMARI  — figlet standard
   _  __  _   _   __  __    _    ____   ___
  | |/ / | | | | |  \/  |  / \  |  _ \ |_ _|
  | ' /  | | | | | |\/| | / _ \ | |_) | | |
  | . \  | |_| | | |  | |/ ___ \|  _ <  | |
  |_|\_\  \___/  |_|  |_/_/   \_\_| \_\|___|
*/

const BOOT_LINES = [
  { text: '$ ssh bharti@portfolio.dev',                                              type: 'cmd',     delay: 0    },
  { text: '  Connecting... [████████████████████████] 100%',                        type: 'info',    delay: 400  },
  { text: '  ✓  Authentication successful  ·  Welcome back, Bharti',                type: 'ok',      delay: 820  },
  { text: '',                                                                        type: 'empty',   delay: 980  },
  { text: '  ────────────────────────────────────────────────────────────────────────────', type: 'dim',    delay: 1060 },
  { text: '   ____   _   _      _    ____   _____  ___    _  __  _   _   __  __     _    ____   ___ ',                                    type: 'name1',  delay: 1110 },
  { text: '  | __ ) | | | |   / \\  |  _ \\ |_   _||_ _| | |/ / | | | | |  \\/  |   / \\  |  _ \\ |_ _|',                               type: 'name1',  delay: 1150 },
  { text: "  |  _ \\ | |_| |  / _ \\ | |_) |  | |   | |  | ' /  | | | | | |\\/| |  / _ \\ | |_) | | | ", type: 'name2',  delay: 1190 },
  { text: '  | |_) ||  _  | / ___ \\|  _ <   | |   | |  | . \\  | |_| | | |  | | / ___ \\|  _ <  | | ', type: 'name2',  delay: 1230 },
  { text: '  |____/ |_| |_|/_/   \\_\\|_| \\_\\  |_|  |___| |_|\\_\\  \\___/  |_|  |_|/_/   \\_\\_| \\_\\|___|', type: 'name2',  delay: 1270 },
  { text: '  ────────────────────────────────────────────────────────────────────────────', type: 'dim',    delay: 1310 },
  { text: '  Software Engineer  ·  Full Stack Developer  ·  Pune, India',            type: 'sub',     delay: 1370 },
  { text: '',                                                                        type: 'empty',   delay: 1680 },
  { text: '$ git log --oneline -3',                                                  type: 'cmd',     delay: 1880 },
  { text: '  a3f8c21 (HEAD → main)  feat: Software Engineer @ miniOrange',          type: 'git',     delay: 2230 },
  { text: '',                                                                        type: 'empty',   delay: 2380 },
  { text: '$ cat stack.sh',                                                          type: 'cmd',     delay: 2580 },
  { text: '  React  ·  Django  ·  PostgreSQL  ·  Redis  ·  Python  ·  C++',         type: 'out',     delay: 2930 },
];

const LINE_COLOR = {
  cmd:   '#a855f7',
  info:  '#6272a4',
  ok:    '#50fa7b',
  name1: '#a855f7',
  name2: '#ec4899',
  dim:   '#30363d',
  sub:   '#8be9fd',
  git:   '#f1fa8c',
  out:   '#bd93f9',
  empty: 'transparent',
};

const Hero = () => {
  const canvasRef               = useRef(null);
  const [lines, setLines]       = useState([]);
  const [showCTAs, setShowCTAs] = useState(false);

  /* ── Matrix rain ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();

    const ctx   = canvas.getContext('2d');
    const CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk@#$%^&*(){}[]<>/|;:.!?~`';
    const FS    = 13;
    const cols  = Math.floor(canvas.width / FS);
    const drops = Array.from({ length: cols }, () => Math.random() * -120);

    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const draw = () => {
      ctx.fillStyle = 'rgba(13,17,23,0.055)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FS}px "Fira Code", monospace`;
      drops.forEach((y, i) => {
        const ch   = CHARS[Math.floor(Math.random() * CHARS.length)];
        const glow = Math.random() > 0.96;
        ctx.fillStyle = glow ? 'rgba(168,85,247,0.95)' : 'rgba(168,85,247,0.18)';
        ctx.fillText(ch, i * FS, y * FS);
        if (y * FS > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.7;
      });
    };

    const id = setInterval(draw, 50);
    window.addEventListener('resize', resize);
    return () => { clearInterval(id); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Boot sequence ── */
  useEffect(() => {
    const timers   = BOOT_LINES.map(l => setTimeout(() => setLines(prev => [...prev, l]), l.delay));
    const ctaTimer = setTimeout(() => setShowCTAs(true), 3400);
    return () => { timers.forEach(clearTimeout); clearTimeout(ctaTimer); };
  }, []);

  const skipIntro = () => { setLines(BOOT_LINES); setShowCTAs(true); };

  const isBanner = t => t === 'name1' || t === 'name2';

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '48px',
        background: 'var(--bg-primary)',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 0%, rgba(13,17,23,0.75) 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div
          className="terminal-boot-window"
          style={{ width: '100%', maxWidth: '800px', animation: 'fadeInUp 0.55s ease both' }}
        >
          {/* Chrome bar */}
          <div style={{
            background: 'rgba(22,27,34,0.97)',
            padding: '10px 18px',
            borderRadius: '12px 12px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            borderBottom: '1px solid rgba(168,85,247,0.22)',
          }}>
            <span className="editor-dot dot-red"    />
            <span className="editor-dot dot-yellow" />
            <span className="editor-dot dot-green"  />
            <span style={{ flex: 1, textAlign: 'center', fontFamily: "'Fira Code', monospace", fontSize: '0.77rem', color: 'var(--text-muted)' }}>
              bharti@portfolio: ~
            </span>
            {lines.length < BOOT_LINES.length && (
              <button
                onClick={skipIntro}
                style={{
                  background: 'none', border: '1px solid var(--border-color)', borderRadius: '4px',
                  color: 'var(--text-muted)', fontFamily: "'Fira Code', monospace",
                  fontSize: '0.68rem', padding: '2px 8px', cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)';     e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                skip
              </button>
            )}
          </div>

          {/* Output */}
          <div className="hero-terminal-output" style={{
            padding: '20px 28px 24px',
            fontFamily: "'Fira Code', monospace",
            lineHeight: 1.9,
            minHeight: 'clamp(240px, 48vw, 500px)',
            overflowX: 'auto',
          }}>
            {/* Mobile name fallback — shown only when ASCII art is hidden */}
            <div className="hero-name-mobile">
              <span style={{ color: '#a855f7', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Bharti</span>
              {' '}
              <span style={{ color: '#ec4899', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Kumari</span>
            </div>

            {lines.map((line, i) => (
              <div
                key={i}
                className={isBanner(line.type) ? 'ascii-banner-line' : ''}
                style={{
                  color: LINE_COLOR[line.type],
                  fontSize: isBanner(line.type)
                    ? 'clamp(0.48rem, 0.9vw, 0.62rem)'
                    : 'clamp(0.75rem, 1.6vw, 0.87rem)',
                  lineHeight: isBanner(line.type) ? 1.5 : 1.9,
                  fontWeight: isBanner(line.type) ? 600 : 400,
                  opacity: line.type === 'dim' ? 0.3 : 1,
                  minHeight: line.type === 'empty' ? '0.5em' : 'auto',
                  whiteSpace: 'pre',
                  animation: 'fadeInUp 0.15s ease both',
                  letterSpacing: isBanner(line.type) ? '0.01em' : 0,
                }}
              >
                {line.text}
              </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px', fontSize: 'clamp(0.75rem, 1.6vw, 0.87rem)' }}>
              <span style={{ color: 'var(--accent-primary)' }}>$&nbsp;</span>
              <span className="typing-cursor" />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '16px', marginTop: '32px',
          flexWrap: 'wrap', justifyContent: 'center',
          opacity: showCTAs ? 1 : 0,
          transform: showCTAs ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ minHeight: '44px' }}
          >
            <span style={{ color: 'var(--accent-secondary)' }}>$</span>&nbsp;./contact-me.sh
          </button>
          <a
            href="https://github.com/bhartik021"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}
          >
            <i className="fab fa-github" />
            github.com/bhartik021
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
