import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Research.module.css';

export default function Research() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        if (currentScrollY <= 50) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={styles['research-page']}>
    {!sidebarOpen && (
      <button
        onClick={toggleSidebar}
        className={`${styles.menuButton} ${isScrolled ? styles.menuButtonMinimized : ''}`}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      <header className={styles['page-header']}>
        <h1>Research</h1>
        <p className={styles['lab-name']}>NRG Laboratory</p>
      </header>
     
      <main className={styles['research-content']}>
        <section className={styles['focus-areas']}>
          <h2>Our Focus Areas</h2>
          <div className={styles['focus-content']}>
            <p>
              <strong>Type-2-diabetes</strong> is characterized by high-blood sugar levels. Understanding and developing treatment strategies have been focused on blood sugar lowering hormone insulin. Apart from there are other factors that influence islet environment which are crucial for islet functioning and secretion of islet hormones. Islet cells bring about their biological actions at different time scales. Therefore the challenge is to investigate both short-duration and long-duration events within single cells. Advancements in microscopy techniques have made this possible to understand variable spatiotemporal scales in cell biology to navigate complex and heterogenic environments in an islet.
            </p>
           
            <p>
              The focus areas of this lab to work on the areas that impact <strong>islet-environment and cell survival</strong> using primarily high-resolution imaging techniques combined with basic cell biology and molecular biology techniques. This will allow us to develop approaches to preserve islet functioning and survival during diabetes.
            </p>
          </div>
        </section>
       
        <section className={styles['methods-section']}>
          <h2>Methods Used to Address the Research Questions</h2>
          <ul className={styles['methods-list']}>
            {methods.map((method, index) => (
              <li key={index} className={styles['method-item']}>
                {method}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}