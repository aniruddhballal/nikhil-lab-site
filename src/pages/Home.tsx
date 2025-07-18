import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';
import heroImage from '../images/img-website_home/1.png'; // Add this import

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
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
    <div className={styles.homeContainer}>
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
     
      <main className={styles.heroSection}>
        <header className={styles.heroHeader}>
          <h1>Diabetes</h1>
          <h2>More than meets the eye</h2>
          <p className={styles.labName}>NRG Laboratory</p>
        </header>
        
        <section className={styles.heroContent}>
          <p>
            The prevalence of diabetes is about <strong>10%</strong> for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will <strong>double by 2030</strong>.
          </p>
         {/* Add the image here */}
        <img 
          src={heroImage} 
          alt="Diabetes research visualization" 
          className={styles.heroImage}
        />
          <p>
            Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <strong>pancreatic islet tissue</strong> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
          </p>
        </section>
      </main>
    </div>
  );
}