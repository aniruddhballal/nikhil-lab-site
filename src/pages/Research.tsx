import { useState, useEffect } from 'react';

export default function Research() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMethod, setActiveMethod] = useState<number | null>(null);

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

  const methods = [
    "TIRF microscopy",
    "Confocal microscopy",
    "Multi-photon imaging",
    "Single molecule microscopy/PALM superresolution",
    "Image analysis",
    "Plate reader with fluidics (fluorescence, luminescence)",
    "Patch clamp electrophysiology",
    "Molecular biology - plasmid DNA and adenoviral constructions",
    "Cell culture - primary culture and cell lines"
  ];

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
      top: '15%',
      left: '15%',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '1px solid rgba(219, 234, 254, 0.2)',
      opacity: 0.2,
      transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
      transition: 'transform 0.6s ease-out',
    },
    circle2: {
      position: 'absolute' as const,
      top: '60%',
      right: '10%',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      border: '1px solid rgba(199, 210, 254, 0.15)',
      opacity: 0.15,
      transform: `translate(${mousePosition.x * -6}px, ${mousePosition.y * 6}px)`,
      transition: 'transform 0.4s ease-out',
    },
    hexagon: {
      position: 'absolute' as const,
      top: '30%',
      right: '20%',
      width: '80px',
      height: '80px',
      backgroundColor: 'rgba(59, 130, 246, 0.05)',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      transform: `rotate(${mousePosition.x * 15}deg) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
      transition: 'transform 0.5s ease-out',
    },
    mainContent: {
      position: 'relative' as const,
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 24px',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '64px',
      transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
      transition: 'transform 0.3s ease-out',
    },
    mainTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: 300,
      color: '#1e293b',
      lineHeight: 1.2,
      marginBottom: '16px',
      transition: 'all 0.3s ease',
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: '#64748b',
      letterSpacing: '0.05em',
    },
    section: {
      marginBottom: '48px',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 400,
      color: '#1e40af',
      marginBottom: '24px',
      textAlign: 'center' as const,
    },
    contentCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: 'clamp(32px, 6vw, 48px)',
      transition: 'all 0.5s ease',
      transform: `translateY(${mousePosition.y * -3}px)`,
    },
    paragraph: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#334155',
      marginBottom: '24px',
      fontWeight: 300,
      textAlign: 'justify' as const,
    },
    highlight: {
      fontWeight: 500,
      color: '#1e40af',
    },
    methodsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '16px',
      marginTop: '32px',
    },
    methodCard: (index: number) => ({
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(4px)',
      borderRadius: '12px',
      padding: '16px 20px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid rgba(219, 234, 254, 0.3)',
      transform: `translateY(${mousePosition.y * (index % 2 === 0 ? -2 : 2)}px)`,
      ...(activeMethod === index && {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        transform: `translateY(${mousePosition.y * (index % 2 === 0 ? -2 : 2)}px) scale(1.02)`,
      }),
    }),
    methodText: {
      fontSize: '1rem',
      color: '#334155',
      fontWeight: 400,
      margin: 0,
    },
    methodBullet: {
      display: 'inline-block',
      width: '6px',
      height: '6px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      marginRight: '12px',
      opacity: 0.7,
    },
    particles: {
      position: 'absolute' as const,
      inset: 0,
      pointerEvents: 'none' as const,
    },
    particle: (i: number) => ({
      position: 'absolute' as const,
      width: '4px',
      height: '4px',
      backgroundColor: '#93c5fd',
      borderRadius: '50%',
      opacity: 0.3,
      left: `${15 + i * 20}%`,
      top: `${20 + i * 15}%`,
      transform: `translate(${mousePosition.x * (i + 1) * 5}px, ${mousePosition.y * (i + 1) * 5}px)`,
      transition: 'transform 0.4s ease-out',
    }),
    backButton: {
      position: 'absolute' as const,
      top: '32px',
      left: '32px',
      padding: '12px 24px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#1e40af',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    backButtonHover: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      transform: 'translateY(-2px)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundGradient} />
      
      <div style={styles.geometricElements}>
        <div style={styles.circle1} />
        <div style={styles.circle2} />
        <div style={styles.hexagon} />
      </div>

      <a 
        href="/"
        style={styles.backButton}
        onMouseEnter={(e) => {
          Object.assign((e.target as HTMLElement).style, styles.backButtonHover);
        }}
        onMouseLeave={(e) => {
          Object.assign((e.target as HTMLElement).style, styles.backButton);
        }}
      >
        ← Back to Home
      </a>

      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.mainTitle}>Research</h1>
          <p style={styles.subtitle}>NRG Laboratory</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Focus Areas</h2>
          <div style={styles.contentCard}>
            <p style={styles.paragraph}>
              <span style={styles.highlight}>Type-2-diabetes</span> is characterized by high-blood sugar levels. Understanding and developing treatment strategies have been focused on blood sugar lowering hormone insulin. Apart from there are other factors that influence islet environment which are crucial for islet functioning and secretion of islet hormones. Islet cells bring about their biological actions at different time scales. Therefore the challenge is to investigate both short-duration and long-duration events within single cells. Advancements in microscopy techniques have made this possible to understand variable spatiotemporal scales in cell biology to navigate complex and heterogenic environments in an islet.
            </p>
            
            <p style={styles.paragraph}>
              The focus areas of this lab to work on the areas that impact <span style={styles.highlight}>islet-environment and cell survival</span> using primarily high-resolution imaging techniques combined with basic cell biology and molecular biology techniques. This will allow us to develop approaches to preserve islet functioning and survival during diabetes.
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Methods Used to Address the Research Questions</h2>
          <div style={styles.contentCard}>
            <div style={styles.methodsGrid}>
              {methods.map((method, index) => (
                <div
                  key={index}
                  style={styles.methodCard(index)}
                  onMouseEnter={() => setActiveMethod(index)}
                  onMouseLeave={() => setActiveMethod(null)}
                >
                  <div style={styles.methodBullet} />
                  <span style={styles.methodText}>{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.particles}>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} style={styles.particle(i)} />
        ))}
      </div>
    </div>
  );
}