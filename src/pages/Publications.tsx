import { Link } from 'react-router-dom';
import { memo } from 'react';

// Import data from JSON files
import publicationsData from '../data/publications.json';
import bookChaptersData from '../data/bookChapters.json';
import lecturesData from '../data/lectures.json';
import linksData from '../data/links.json';
import scholarData from '../data/scholar.json';

const Publications = memo(function Publications() {
  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h1>Publications</h1>
      
      <h2>Research Publications</h2>
      {publicationsData.map((pub) => (
        <div key={pub.id}>
          <p>
            <strong>{pub.id}.</strong> {pub.authors} ({pub.year}). {pub.title} <em>{pub.journal}</em>, {pub.pages}
            {pub.note && <span> - {pub.note}</span>}
          </p>
        </div>
      ))}

      <h2>Book Chapters</h2>
      {bookChaptersData.map((chapter, index) => (
        <div key={index}>
          <p>
            {chapter.authors} ({chapter.year}). {chapter.title}, <em>{chapter.book}</em>
            {chapter.note && <span> - {chapter.note}</span>}
          </p>
        </div>
      ))}

      <h2>Google Scholar Profile</h2>
      <p>
        <a href={scholarData.googleScholar} target="_blank" rel="noopener noreferrer">
          {scholarData.googleScholar}
        </a>
      </p>

      <h2>Lectures and Posters Presented</h2>
      {lecturesData.map((item, index) => (
        <div key={index}>
          <p>
            NR Gandasi ({item.year}) {item.title}, {item.location} - {item.type}
          </p>
        </div>
      ))}

      <h2>Links</h2>
      {linksData.map((link, index) => (
        <div key={index}>
          <p>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
});

export default Publications;