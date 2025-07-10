import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <header className="site-header">
        <div className="header-content">
          <h1 className="site-title">NRG Laboratory</h1>
          <p className="site-tagline">Diabetes Research & Innovation</p>
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="site-footer">
        <p>&copy; 2025 NRG Laboratory. All rights reserved.</p>
      </footer>
    </div>
  );
}