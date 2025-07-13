import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {isOpen && (
        <div 
          className={styles.sidebarOverlay}
          onClick={onClose}
          onTouchEnd={onClose} // Add touch support
          aria-hidden="true"
        />
      )}

      <nav 
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        style={{ 
          left: isOpen ? '0' : undefined // Force inline style as fallback
        }}
        aria-label="Main navigation"
      >
        <div className={styles.sidebarHeader}>
          <h3>NRG Laboratory</h3>
          <button 
            onClick={onClose}
            onTouchEnd={onClose} // Add touch support
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
              <Link 
                to="/" 
                onClick={onClose} 
                onTouchEnd={onClose} // Add touch support
                className={`${styles.sidebarLink} ${isActive('/') ? styles.sidebarLinkActive : ''}`}
              >
                <span>Home</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/research" 
                onClick={onClose} 
                onTouchEnd={onClose}
                className={`${styles.sidebarLink} ${isActive('/research') ? styles.sidebarLinkActive : ''}`}
              >
                <span>Research</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/support" 
                onClick={onClose} 
                onTouchEnd={onClose}
                className={`${styles.sidebarLink} ${isActive('/support') ? styles.sidebarLinkActive : ''}`}
              >
                <span>Support</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/publications" 
                onClick={onClose} 
                onTouchEnd={onClose}
                className={`${styles.sidebarLink} ${isActive('/publications') ? styles.sidebarLinkActive : ''}`}
              >
                <span>Publications</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/people" 
                onClick={onClose} 
                onTouchEnd={onClose}
                className={`${styles.sidebarLink} ${isActive('/people') ? styles.sidebarLinkActive : ''}`}
              >
                <span>People</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={onClose} 
                onTouchEnd={onClose}
                className={`${styles.sidebarLink} ${isActive('/contact') ? styles.sidebarLinkActive : ''}`}
              >
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