import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.homeContainer}>
      <button 
        onClick={toggleSidebar}
        className={styles.menuButton}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {sidebarOpen && (
        <div 
          className={styles.sidebarOverlay}
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <nav 
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}
        aria-label="Main navigation"
      >
        <div className={styles.sidebarHeader}>
          <h3>NRG Laboratory</h3>
          <button 
            onClick={closeSidebar}
            className={styles.closeSidebar}
            aria-label="Close navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.sidebarContent}>
          <ul className={styles.sidebarNav}>
            <li>
              <Link to="/research" onClick={closeSidebar} className={styles.sidebarLink}>
                <span>Research</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={closeSidebar} className={styles.sidebarLink}>
                <span>Support</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/publications" onClick={closeSidebar} className={styles.sidebarLink}>
                <span>Publications</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/people" onClick={closeSidebar} className={styles.sidebarLink}>
                <span>People</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeSidebar} className={styles.sidebarLink}>
                <span>Contact</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
          </ul>

          <div className={styles.sidebarFooter}>
            <p>Advancing diabetes research through innovative pancreatic islet analysis.</p>
          </div>
        </div>
      </nav>
     
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
         
          <p>
            Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <strong>pancreatic islet tissue</strong> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
          </p>
        </section>
      </main>
    </div>
  );
}