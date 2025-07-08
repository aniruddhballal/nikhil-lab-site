import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = (e.clientX - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    backgroundGradient: {
      position: 'absolute' as const,
      inset: 0,
      background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
        rgba(59, 130, 246, 0.03) 0%, 
        rgba(99, 102, 241, 0.02) 50%, 
        rgba(139, 69, 19, 0.01) 100%)`,
      transition: 'all 1s ease-out',
    },
    geometricElements: {
      position: 'absolute' as const,
      inset: 0,
      pointerEvents: 'none' as const,
    },
    circle1: {
      position: 'absolute' as const,
      top: '25%',
      left: '25%',
      width: '384px',
      height: '384px',
      borderRadius: '50%',
      border: '1px solid rgba(219, 234, 254, 0.2)',
      opacity: 0.2,
      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
      transition: 'transform 0.7s ease-out',
    },
    circle2: {
      position: 'absolute' as const,
      bottom: '25%',
      right: '25%',
      width: '256px',
      height: '256px',
      borderRadius: '50%',
      border: '1px solid rgba(199, 210, 254, 0.15)',
      opacity: 0.15,
      transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
      transition: 'transform 0.5s ease-out',
    },
    square: {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '128px',
      height: '128px',
      border: '1px solid rgba(226, 232, 240, 0.1)',
      opacity: 0.1,
      transform: `translate(-50%, -50%) rotate(${45 + mousePosition.x * 10}deg) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
      transition: 'transform 0.3s ease-out',
    },
    mainContent: {
      position: 'relative' as const,
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 24px',
    },
    contentWrapper: {
      maxWidth: '1024px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '64px',
      transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
      transition: 'transform 0.3s ease-out',
    },
    mainTitle: {
      fontSize: 'clamp(3rem, 8vw, 4rem)',
      fontWeight: 300,
      color: isHovered ? '#1e40af' : '#1e293b',
      lineHeight: 1.2,
      marginBottom: '24px',
      transition: 'all 0.5s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
    subtitleContainer: {
      position: 'relative' as const,
    },
    subtitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 200,
      color: '#475569',
      fontStyle: 'italic',
      marginBottom: '16px',
    },
    underline: {
      position: 'absolute' as const,
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '96px',
      height: '2px',
      background: 'linear-gradient(to right, #60a5fa, #6366f1)',
      opacity: 0.6,
    },
    labName: {
      fontSize: '1.125rem',
      color: '#64748b',
      marginTop: '32px',
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    mainCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: 'clamp(32px, 6vw, 48px)',
      transition: 'all 0.5s ease',
      transform: `translateY(${mousePosition.y * -5}px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
    },
    mainCardHover: {
      boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.35)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    paragraph: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#334155',
      marginBottom: '24px',
      fontWeight: 300,
    },
    highlight: {
      fontWeight: 500,
    },
    blueHighlight: {
      color: '#1e40af',
    },
    redHighlight: {
      color: '#b91c1c',
    },
    indigoHighlight: {
      color: '#3730a3',
    },
    accentLine: {
      marginTop: '32px',
      display: 'flex',
      justifyContent: 'center',
    },
    accentLineBar: {
      height: '4px',
      background: 'linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6)',
      borderRadius: '2px',
      width: `${100 + mousePosition.x * 50}px`,
      opacity: 0.6 + Math.abs(mousePosition.x * 0.2),
      transition: 'all 0.7s ease',
    },
    focusGrid: {
      marginTop: '64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
    },
    focusCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center' as const,
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      border: '1px solid rgba(219, 234, 254, 0.3)',
    },
    focusCardHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      transform: 'scale(1.05)',
    },
    focusIcon: {
      width: '48px',
      height: '48px',
      margin: '0 auto 16px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    focusIconInner: {
      width: '24px',
      height: '24px',
      backgroundColor: 'white',
      borderRadius: '50%',
      opacity: 0.8,
    },
    focusTitle: {
      color: '#334155',
      fontWeight: 500,
      margin: 0,
    },
    particles: {
      position: 'absolute' as const,
      inset: 0,
      pointerEvents: 'none' as const,
    },
    particle: (i: number) => ({
      position: 'absolute' as const,
      width: '8px',
      height: '8px',
      backgroundColor: '#93c5fd',
      borderRadius: '50%',
      opacity: 0.2,
      left: `${20 + i * 15}%`,
      top: `${30 + i * 10}%`,
      transform: `translate(${mousePosition.x * (i + 1) * 8}px, ${mousePosition.y * (i + 1) * 8}px)`,
      transition: 'transform 0.3s ease-out',
    }),
  };

  const focusAreas = [
    { title: "Treatment Strategies", color: "#3b82f6" },
    { title: "Diagnostic Tools", color: "#6366f1" },
    { title: "Prognostic Analysis", color: "#8b5cf6" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGradient} />
      
      <div style={styles.geometricElements}>
        <div style={styles.circle1} />
        <div style={styles.circle2} />
        <div style={styles.square} />
      </div>

      <div style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          <div 
            style={styles.header}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 style={styles.mainTitle}>
              Diabetes
            </h1>
            <div style={styles.subtitleContainer}>
              <h2 style={styles.subtitle}>
                More than meets the eye
              </h2>
              <div style={styles.underline} />
            </div>
            <p style={styles.labName}>
              NRG Laboratory
            </p>
          </div>

          <div style={styles.mainCard}>
            <div>
              <p style={styles.paragraph}>
                The prevalence of diabetes is about <span style={{...styles.highlight, ...styles.blueHighlight}}>10%</span> for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will <span style={{...styles.highlight, ...styles.redHighlight}}>double by 2030</span>.
              </p>
              
              <p style={styles.paragraph}>
                Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <span style={{...styles.highlight, ...styles.indigoHighlight}}>pancreatic islet tissue</span> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
              </p>
            </div>

            <div style={styles.accentLine}>
              <div style={styles.accentLineBar} />
            </div>
          </div>

          <div style={styles.focusGrid}>
            {focusAreas.map((item, index) => (
              <div 
                key={index}
                style={{
                  ...styles.focusCard,
                  transform: `translateY(${mousePosition.y * (index + 1) * -2}px)`,
                  transitionDelay: `${index * 100}ms`,
                  borderColor: `${item.color}33`,
                }}
              >
                <div style={{
                  ...styles.focusIcon,
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                }}>
                  <div style={styles.focusIconInner} />
                </div>
                <h3 style={styles.focusTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.particles}>
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            style={styles.particle(i)}
          />
        ))}
      </div>
    </div>
  );
}