import { useState, memo } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Publications.module.css';
import publicationsData from '../data/pubcom/publications.json';
import bookChaptersData from '../data/pubcom/bookChapters.json';
import lecturesData from '../data/pubcom/lectures.json';
import linksData from '../data/pubcom/links.json';
import scholarData from '../data/pubcom/scholar.json';

const Publications = memo(function Publications() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles['publications-page']}>
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
      
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      <header className={styles['page-header']}>
        <h1>Publications</h1>
      </header>
     
      <main className={styles['publications-content']}>
        <section className={styles['publications-section']}>
          <h2>Research Publications</h2>
          <div className={styles['publications-list']}>
            {publicationsData.map((pub) => (
              <div key={pub.id} className={styles['publication-item']}>
                <p>
                  <strong>{pub.id}.</strong> {pub.authors} ({pub.year}). {pub.title} <em>{pub.journal}</em>, {pub.pages}
                  {pub.note && <span> - {pub.note}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>
       
        <section className={styles['publications-section']}>
          <h2>Book Chapters</h2>
          <div className={styles['publications-list']}>
            {bookChaptersData.map((chapter, index) => (
              <div key={index} className={styles['publication-item']}>
                <p>
                  {chapter.authors} ({chapter.year}). {chapter.title}, <em>{chapter.book}</em>
                  {chapter.note && <span> - {chapter.note}</span>}
                </p>
              </div>
            ))}
          </div>
        </section>
       
        <section className={`${styles['publications-section']} ${styles['scholar-section']}`}>
          <h2>Google Scholar Profile</h2>
          <p>
            <a href={scholarData.googleScholar} target="_blank" rel="noopener noreferrer">
              {scholarData.googleScholar}
            </a>
          </p>
        </section>
       
        <section className={styles['publications-section']}>
          <h2>Lectures and Posters Presented</h2>
          <div className={styles['publications-list']}>
            {lecturesData.map((item, index) => (
              <div key={index} className={styles['publication-item']}>
                <p>
                  NR Gandasi ({item.year}) {item.title}, {item.location} - {item.type}
                </p>
              </div>
            ))}
          </div>
        </section>
       
        <section className={`${styles['publications-section']} ${styles['links-section']}`}>
          <h2>Links</h2>
          <div className={styles['links-list']}>
            {linksData.map((link, index) => (
              <div key={index} className={styles['link-item']}>
                <p>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
});

export default Publications;