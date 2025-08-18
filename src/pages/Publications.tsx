import { useState, memo, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import publicationsData from '../data/pubcom/publications.json';
import bookChaptersData from '../data/pubcom/bookChapters.json';
import lecturesData from '../data/pubcom/lectures.json';
import linksData from '../data/pubcom/links.json';
import scholarData from '../data/pubcom/scholar.json';

import img1 from '../images/img-website_Publications and communications/1.png';
import img2 from '../images/img-website_Publications and communications/2.png';

interface PublicationsImage {
  src: string;
  alt: string;
  caption: string;
}

const Publications = memo(function Publications() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PublicationsImage | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const publicationsImages: PublicationsImage[] = [
    {
      src: img1,
      alt: "Publications Image 1",
      caption: "Publications Image 1"
    },
    {
      src: img2,
      alt: "Publications Image 2",
      caption: "Publications Image 2"
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        if (currentScrollY <= 50) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const openImageModal = (image: PublicationsImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Helper function to parse status from note field
  const parsePublicationStatus = (note: string | undefined) => {
    if (!note) return [];
    const statuses: { label: string; color: string }[] = [];
    const lowerNote = note.toLowerCase();
    
    if (lowerNote.includes('corresponding author')) statuses.push({ label: 'Corresponding Author', color: 'amber' });
    if (lowerNote.includes('equal contribution')) statuses.push({ label: 'Equal Contribution', color: 'purple' });
    if (lowerNote.includes('in the news')) statuses.push({ label: 'In the News', color: 'green' });
    
    return statuses;
  };

  // Helper function to parse book chapter status
  const parseBookChapterStatus = (note: string | undefined) => {
    if (!note) return [];
    const statuses: { label: string; color: string }[] = [];
    
    if (note.includes('#corresponding author')) statuses.push({ label: 'Corresponding Author', color: 'amber' });
    
    return statuses;
  };

  // Helper function to parse lecture type status
  const parseLectureStatus = (type: string | undefined) => {
    if (!type) return [];
    const statuses: { label: string; color: string }[] = [];
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('invited lecture during a conference')) statuses.push({ label: 'Invited Conference Lecture', color: 'emerald' });
    else if (lowerType.includes('invited lecture')) statuses.push({ label: 'Invited Lecture', color: 'emerald' });
    else if (lowerType.includes('early investigator award lecture')) statuses.push({ label: 'Early Investigator Award', color: 'gold' });
    else if (lowerType.includes('young investigator speaker')) statuses.push({ label: 'Young Investigator Speaker', color: 'blue' });
    else if (lowerType.includes('rising star award lecture')) statuses.push({ label: 'Rising Star Award', color: 'pink' });
    else if (lowerType.includes('lecture')) statuses.push({ label: 'Lecture', color: 'slate' });
    else if (lowerType.includes('poster')) statuses.push({ label: 'Poster', color: 'slate' });
    
    return statuses;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/8 via-transparent to-transparent opacity-50 transform translate-x-[-60%] translate-y-[-40%] scale-150"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-500/6 via-transparent to-transparent opacity-50 transform translate-x-[40%] translate-y-[30%] scale-150"></div>
      </div>
      
      {/* Floating particles for scientific feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-300/30 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Menu Button */}
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className={`
            fixed z-[1002] flex items-center justify-center cursor-pointer
            bg-blue-50/90 border border-blue-500/20 text-blue-900
            backdrop-blur-xl shadow-lg shadow-blue-900/12
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-xl hover:shadow-blue-900/16 hover:border-blue-500/30
            focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:scale-105
            active:scale-95 active:duration-75
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-blue-900/5 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none
            hover:before:opacity-100 focus:before:opacity-100
            group
            ${isScrolled ? 
              'w-12 h-12 left-4 top-4 rounded-xl before:rounded-xl animate-pulse' : 
              'w-12 h-12 sm:w-14 sm:h-14 left-4 sm:left-8 top-4 sm:top-8 rounded-xl sm:rounded-2xl before:rounded-xl sm:before:rounded-2xl'
            }
          `}
          aria-label="Open navigation menu"
        >
          <svg 
            width={isScrolled ? "20" : "20"} 
            height={isScrolled ? "20" : "20"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-blue-600 group-focus:scale-110 group-focus:text-blue-600 sm:w-6 sm:h-6"
          >
            <line x1="3" y1="6" x2="21" y2="6" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
            <line x1="3" y1="12" x2="21" y2="12" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
            <line x1="3" y1="18" x2="21" y2="18" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
          </svg>
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      {/* Page Header */}
      <header className={`text-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full animate-pulse"></div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin text-transparent bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text leading-[0.9] tracking-tight mb-4 sm:mb-6 drop-shadow-sm transition-all duration-700 hover:scale-105 hover:drop-shadow-md cursor-default">
          Publications
        </h1>
        
        <div className="inline-block px-4 sm:px-6 py-2 border border-blue-500/30 rounded-full backdrop-blur-md bg-blue-200/40 transition-all duration-300 hover:bg-blue-200/60 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/30 cursor-default group relative">
          <p className="text-xs sm:text-sm text-blue-900/70 font-light tracking-[0.2em] uppercase mb-0 transition-colors duration-300 group-hover:text-blue-900">
            NRG Laboratory
          </p>
          
          {/* Sleek expanding underline */}
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-blue-900/80 to-transparent w-0 animate-expand-underline"></div>
        </div>
      </header>
     
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        {/* Publications Gallery Section */}
        <section className={`mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Publications Gallery
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {publicationsImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 shadow-lg shadow-blue-200/20 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-blue-50/80 hover:border-blue-600/30 hover:scale-[1.02] cursor-pointer ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animationDelay: `${300 + index * 150}ms`,
                  animation: isLoaded ? `fadeInUp 0.8s ease-out ${300 + index * 150}ms both` : 'none'
                }}
                onClick={() => openImageModal(image)}
              >
                {/* Image container with aspect ratio */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-blue-50/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Scientific corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-300/60 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-300/60 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
                </div>
                
                {/* Caption */}
                <div className="p-6 relative">
                  <p className="text-blue-900/80 font-light text-center leading-relaxed transition-all duration-300 group-hover:text-blue-900">
                    {image.caption}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Publications Section */}
        <section className={`mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Research Publications
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="space-y-4 sm:space-y-6">
              {publicationsData.map((pub, index) => {
                const statuses = parsePublicationStatus(pub.note);
                return (
                  <div
                    key={pub.id}
                    className={`p-4 sm:p-6 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 hover:shadow-md group/item ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${500 + index * 100}ms`,
                      animation: isLoaded ? `fadeInUp 0.6s ease-out ${500 + index * 100}ms both` : 'none'
                    }}
                  >
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 group-hover/item:bg-blue-800 group-hover/item:scale-125"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base md:text-lg font-light text-blue-900/90 leading-relaxed transition-all duration-300 group-hover/item:text-blue-900 break-words">
                            <strong className="font-semibold text-blue-900">{pub.id}.</strong> {pub.authors} ({pub.year}). {pub.title} <em className="text-blue-800">{pub.journal}</em>, {pub.pages}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status indicators - moved below on mobile */}
                      {statuses.length > 0 && (
                        <div className="flex flex-wrap gap-2 pl-5 sm:pl-6">
                          {statuses.map((status, statusIndex) => (
                            <span
                              key={statusIndex}
                              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100/60 border border-blue-300/40 rounded-full transition-all duration-300 group-hover/item:bg-blue-200/80 group-hover/item:border-blue-400/60 group-hover/item:scale-105 whitespace-nowrap"
                            >
                              {status.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Book Chapters Section */}
        <section className={`mb-12 sm:mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Book Chapters
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="space-y-4 sm:space-y-6">
              {bookChaptersData.map((chapter, index) => {
                const statuses = parseBookChapterStatus(chapter.note);
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 hover:shadow-md group/item ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${600 + index * 100}ms`,
                      animation: isLoaded ? `fadeInUp 0.6s ease-out ${600 + index * 100}ms both` : 'none'
                    }}
                  >
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 group-hover/item:bg-blue-800 group-hover/item:scale-125"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base md:text-lg font-light text-blue-900/90 leading-relaxed transition-all duration-300 group-hover/item:text-blue-900 break-words">
                            {chapter.authors} ({chapter.year}). {chapter.title}, <em className="text-blue-800">{chapter.book}</em>
                          </p>
                        </div>
                      </div>
                      
                      {/* Status indicators - moved below on mobile */}
                      {statuses.length > 0 && (
                        <div className="flex flex-wrap gap-2 pl-5 sm:pl-6">
                          {statuses.map((status, statusIndex) => (
                            <span
                              key={statusIndex}
                              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100/60 border border-blue-300/40 rounded-full transition-all duration-300 group-hover/item:bg-blue-200/80 group-hover/item:border-blue-400/60 group-hover/item:scale-105 whitespace-nowrap"
                            >
                              {status.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Google Scholar Section */}
        <section className={`mb-12 sm:mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Google Scholar Profile
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default text-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="break-all">
              <a 
                href={scholarData?.googleScholar || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-500/50 hover:decoration-blue-800 transition-all duration-300 hover:scale-105 inline-block"
              >
                {scholarData?.googleScholar || 'Google Scholar Profile'}
              </a>
            </div>
          </div>
        </section>

        {/* Lectures and Posters Section */}
        <section className={`mb-12 sm:mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Lectures and Posters Presented
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="space-y-4 sm:space-y-6">
              {lecturesData.map((item, index) => {
                const statuses = parseLectureStatus(item.type);
                return (
                  <div
                    key={index}
                    className={`p-4 sm:p-6 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 hover:shadow-md group/item ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${1000 + index * 100}ms`,
                      animation: isLoaded ? `fadeInUp 0.6s ease-out ${1000 + index * 100}ms both` : 'none'
                    }}
                  >
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 group-hover/item:bg-blue-800 group-hover/item:scale-125"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base md:text-lg font-light text-blue-900/90 leading-relaxed transition-all duration-300 group-hover/item:text-blue-900 break-words">
                            <strong className="font-semibold text-blue-900">NR Gandasi</strong> ({item.year}) {item.title}, {item.location}
                          </p>
                        </div>
                      </div>
                      
                      {/* Status indicators - moved below on mobile */}
                      {statuses.length > 0 && (
                        <div className="flex flex-wrap gap-2 pl-5 sm:pl-6">
                          {statuses.map((status, statusIndex) => (
                            <span
                              key={statusIndex}
                              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100/60 border border-blue-300/40 rounded-full transition-all duration-300 group-hover/item:bg-blue-200/80 group-hover/item:border-blue-400/60 group-hover/item:scale-105 whitespace-nowrap"
                            >
                              {status.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className={`transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Links
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="space-y-4 sm:space-y-6">
              {linksData.map((link, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 hover:shadow-md group/item ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${1300 + index * 100}ms`,
                    animation: isLoaded ? `fadeInUp 0.6s ease-out ${1300 + index * 100}ms both` : 'none'
                  }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 group-hover/item:bg-blue-800 group-hover/item:scale-125"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-500/50 hover:decoration-blue-800 transition-all duration-300 hover:scale-102 inline-block transform-gpu origin-left break-words"
                      >
                        {link.title}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-blue-900/80 backdrop-blur-lg z-[2000] flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-blue-50/95 rounded-2xl shadow-2xl overflow-hidden animate-modalSlideIn">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-blue-900/80 text-white rounded-full p-2 hover:bg-blue-900 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal content */}
            <div className="p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="p-6 text-center">
                <p className="text-blue-900 font-light text-lg leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s ease-out;
        }
        @keyframes expandUnderline {
          from {
            width: 0;
          }
          to {
            width: 150px;
          }
        }
        .animate-expand-underline {
          animation: expandUnderline 1.5s ease-out 0.5s forwards;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        /* Mobile-specific responsive adjustments */
        @media (max-width: 640px) {
          .animate-expand-underline {
            animation: expandUnderline 1.5s ease-out 0.5s forwards;
          }
          @keyframes expandUnderline {
            from { width: 0; }
            to { width: 100px; }
          }
        }
      `}</style>
    </div>
  );
});

export default Publications;