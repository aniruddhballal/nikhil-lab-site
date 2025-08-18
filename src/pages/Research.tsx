import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

interface ResearchImage {
  src: string;
  alt: string;
  caption: string;
}

export default function Research() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ResearchImage | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const methods = [
    "TIRF microscopy",
    "Confocal microscopy", 
    "Multi-photon imaging",
    "Single molecule microscopy/PALM superresolution",
    "Image analysis",
    "Plate reader with fluidics (fluorescence, luminescence)",
    "Patch clamp electrophysiology",
    "Molecular biology - plasmid DNA and adenoviral constructions",
    "Cell culture - primary culture and cell lines"
  ];

  const researchImages: ResearchImage[] = [
    {
      src: "src/images/img-website_Research/islet-cell-ldcv-min.jpg",
      alt: "Research Image 1 - Islet Cell LDCVs",
      caption: "Islet cell LDCVs (Large Dense-Core Vesicles)"
    },
    {
      src: "src/images/img-website_Research/3.png",
      alt: "Research Image 3",
      caption: "Research Image 3"
    },
    {
      src: "src/images/img-website_Research/4.png",
      alt: "Research Image 4",
      caption: "Research Image 4"
    },
    {
      src: "src/images/img-website_Research/5.png",
      alt: "Research Image 5",
      caption: "Research Image 5"
    }
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

  const openImageModal = (image: ResearchImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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
              'w-14 h-14 left-8 top-8 rounded-2xl before:rounded-2xl'
            }
          `}
          aria-label="Open navigation menu"
        >
          <svg 
            width={isScrolled ? "20" : "24"} 
            height={isScrolled ? "20" : "24"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-blue-600 group-focus:scale-110 group-focus:text-blue-600"
          >
            <line x1="3" y1="6" x2="21" y2="6" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
            <line x1="3" y1="12" x2="21" y2="12" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
            <line x1="3" y1="18" x2="21" y2="18" className="transition-all duration-300 group-hover:stroke-[2.5]"></line>
          </svg>
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      {/* Page Header */}
      <header className={`text-center pt-24 pb-16 relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full animate-pulse"></div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-transparent bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text leading-[0.9] tracking-tight mb-6 drop-shadow-sm transition-all duration-700 hover:scale-105 hover:drop-shadow-md cursor-default">
          Research
        </h1>
        
        <div className="inline-block px-6 py-2 border border-blue-500/30 rounded-full backdrop-blur-md bg-blue-200/40 transition-all duration-300 hover:bg-blue-200/60 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/30 cursor-default group relative">
          <p className="text-sm text-blue-900/70 font-light tracking-[0.2em] uppercase mb-0 transition-colors duration-300 group-hover:text-blue-900">
            NRG Laboratory
          </p>
          
          {/* Sleek expanding underline */}
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-blue-900/80 to-transparent w-0 animate-expand-underline"></div>
        </div>
      </header>
     
      <main className="max-w-6xl mx-auto px-8 pb-16 relative z-10">
        {/* Focus Areas Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Our Focus Areas
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="relative z-10 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-blue-900/90 font-light transition-all duration-300 group-hover:text-blue-900/95">
                <strong className="text-blue-900 font-semibold transition-all duration-300 group-hover:text-blue-800 px-1 py-0.5 rounded hover:bg-blue-100/50">Type-2-diabetes</strong> is characterized by high-blood sugar levels. Understanding and developing treatment strategies have been focused on blood sugar lowering hormone insulin. Apart from there are other factors that influence islet environment which are crucial for islet functioning and secretion of islet hormones. Islet cells bring about their biological actions at different time scales. Therefore the challenge is to investigate both short-duration and long-duration events within single cells. Advancements in microscopy techniques have made this possible to understand variable spatiotemporal scales in cell biology to navigate complex and heterogenic environments in an islet.
              </p>
             
              <p className="text-lg md:text-xl leading-relaxed text-blue-900/90 font-light transition-all duration-300 group-hover:text-blue-900/95">
                The focus areas of this lab to work on the areas that impact <strong className="text-blue-900 font-semibold transition-all duration-300 group-hover:text-blue-800 px-1 py-0.5 rounded hover:bg-blue-100/50">islet-environment and cell survival</strong> using primarily high-resolution imaging techniques combined with basic cell biology and molecular biology techniques. This will allow us to develop approaches to preserve islet functioning and survival during diabetes.
              </p>
            </div>
            
            {/* Corporate side accent line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
          </div>
        </section>

        {/* Research Gallery Section */}
        <section className={`mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Research Gallery
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {researchImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 shadow-lg shadow-blue-200/20 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-blue-50/80 hover:border-blue-600/30 hover:scale-[1.02] cursor-pointer ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animationDelay: `${700 + index * 150}ms`,
                  animation: isLoaded ? `fadeInUp 0.8s ease-out ${700 + index * 150}ms both` : 'none'
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
       
        {/* Methods Section */}
        <section className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Methods Used to Address the Research Questions
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            {/* Corporate side accent line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods.map((method, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100/30 group/item ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${900 + index * 80}ms`,
                    animation: isLoaded ? `fadeInUp 0.6s ease-out ${900 + index * 80}ms both` : 'none'
                  }}
                >
                  {/* Scientific bullet point */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 group-hover/item:bg-blue-800 group-hover/item:scale-125"></div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed transition-all duration-300 group-hover/item:text-blue-900">
                      {method}
                    </p>
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
            width: 300px;
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
      `}</style>
    </div>
  );
}