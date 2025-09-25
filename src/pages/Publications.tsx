import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import publicationsData from '../data/pubcom/publications.json';
import bookChaptersData from '../data/pubcom/bookChapters.json';
import lecturesData from '../data/pubcom/lectures.json';
import linksData from '../data/pubcom/links.json';
import scholarData from '../data/pubcom/scholar.json';
import img1 from '../images/img-website_Publications and communications/1.png';
import img2 from '../images/img-website_Publications and communications/2.png';

const Publications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const publicationsImages = [
    { src: img1, alt: "Publications Image 1", caption: "Publications Image 1" },
    { src: img2, alt: "Publications Image 2", caption: "Publications Image 2" },
  ];

  const parsePublicationStatus = (note) => {
    if (!note) return [];
    const statuses = [];
    const lowerNote = note.toLowerCase();
    if (lowerNote.includes('corresponding author')) statuses.push({ label: 'Corresponding Author' });
    if (lowerNote.includes('equal contribution')) statuses.push({ label: 'Equal Contribution' });
    if (lowerNote.includes('in the news')) statuses.push({ label: 'In the News' });
    return statuses;
  };

  const parseBookChapterStatus = (note) => {
    if (!note) return [];
    const statuses = [];
    if (note.includes('#corresponding author')) statuses.push({ label: 'Corresponding Author' });
    return statuses;
  };

  const parseLectureStatus = (type) => {
    if (!type) return [];
    const statuses = [];
    const lowerType = type.toLowerCase();
    if (lowerType.includes('invited lecture during a conference')) statuses.push({ label: 'Invited Conference Lecture' });
    else if (lowerType.includes('invited lecture')) statuses.push({ label: 'Invited Lecture' });
    else if (lowerType.includes('early investigator award lecture')) statuses.push({ label: 'Early Investigator Award' });
    else if (lowerType.includes('young investigator speaker')) statuses.push({ label: 'Young Investigator Speaker' });
    else if (lowerType.includes('rising star award lecture')) statuses.push({ label: 'Rising Star Award' });
    else if (lowerType.includes('lecture')) statuses.push({ label: 'Lecture' });
    else if (lowerType.includes('poster')) statuses.push({ label: 'Poster' });
    return statuses;
  };

  return (
    <div>
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <h1>Publications</h1>
      <p>NRG Laboratory</p>
      
      <h2>Publications Gallery</h2>
      {publicationsImages.map((image, index) => (
        <div key={index} onClick={() => setSelectedImage(image)}>
          <img src={image.src} alt={image.alt} />
          <p>{image.caption}</p>
        </div>
      ))}

      <h2>Research Publications</h2>
      {publicationsData.map((pub) => (
        <div key={pub.id}>
          <p><strong>{pub.id}.</strong> {pub.authors} ({pub.year}). {pub.title} <em>{pub.journal}</em>, {pub.pages}</p>
          {parsePublicationStatus(pub.note).map((status, i) => (
            <span key={i}>{status.label} </span>
          ))}
        </div>
      ))}

      <h2>Book Chapters</h2>
      {bookChaptersData.map((chapter, index) => (
        <div key={index}>
          <p>{chapter.authors} ({chapter.year}). {chapter.title}, <em>{chapter.book}</em></p>
          {parseBookChapterStatus(chapter.note).map((status, i) => (
            <span key={i}>{status.label} </span>
          ))}
        </div>
      ))}

      <h2>Google Scholar Profile</h2>
      <a href={scholarData?.googleScholar || '#'} target="_blank" rel="noopener noreferrer">
        {scholarData?.googleScholar || 'Google Scholar Profile'}
      </a>

      <h2>Lectures and Posters Presented</h2>
      {lecturesData.map((item, index) => (
        <div key={index}>
          <p><strong>NR Gandasi</strong> ({item.year}) {item.title}, {item.location}</p>
          {parseLectureStatus(item.type).map((status, i) => (
            <span key={i}>{status.label} </span>
          ))}
        </div>
      ))}

      <h2>Links</h2>
      {linksData.map((link, index) => (
        <div key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
        </div>
      ))}

      {selectedImage && (
        <div onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <p>{selectedImage.caption}</p>
        </div>
      )}
    </div>
  );
};

export default Publications;