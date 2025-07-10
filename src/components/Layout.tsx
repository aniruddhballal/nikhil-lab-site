import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.appLayout}>
      {!isHomePage && (
        <header className={styles.siteHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.siteTitle}>NRG Laboratory</h1>
            <p className={styles.siteTagline}>Diabetes Research & Innovation</p>
          </div>
        </header>
      )}
     
      <main className={styles.mainContent}>
        {children}
      </main>
     
      <footer className={styles.siteFooter}>
        <p>&copy; 2025 NRG Laboratory. All rights reserved.</p>
      </footer>
    </div>
  );
}