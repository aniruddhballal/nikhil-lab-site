import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className={styles.sidebarOverlay}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <nav 
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        aria-label="Main navigation"
      >
        <div className={styles.sidebarHeader}>
          <h3>NRG Laboratory</h3>
          <button 
            onClick={onClose}
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
              <Link to="/" onClick={onClose} className={styles.sidebarLink}>
                <span>Home</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/research" onClick={onClose} className={styles.sidebarLink}>
                <span>Research</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/support" onClick={onClose} className={styles.sidebarLink}>
                <span>Support</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/publications" onClick={onClose} className={styles.sidebarLink}>
                <span>Publications</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/people" onClick={onClose} className={styles.sidebarLink}>
                <span>People</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={onClose} className={styles.sidebarLink}>
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
    </>
  );
}