import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './Publications.module.css';

// Import data from JSON files
import publicationsData from '../data/pubcom/publications.json';
import bookChaptersData from '../data/pubcom/bookChapters.json';
import lecturesData from '../data/pubcom/lectures.json';
import linksData from '../data/pubcom/links.json';
import scholarData from '../data/pubcom/scholar.json';

const Publications = memo(function Publications() {
  return (
    <div className={styles['publications-page']}>
      <nav className={styles['breadcrumb-nav']}>
        <Link to="/" className={styles['back-link']}>← Back to Home</Link>
      </nav>
      
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