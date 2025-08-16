import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import heroImage from '../images/img-website_home/1.png';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
 
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/8 via-transparent to-transparent opacity-50 transform translate-x-[-60%] translate-y-[-40%] scale-150"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-500/6 via-transparent to-transparent opacity-50 transform translate-x-[40%] translate-y-[30%] scale-150"></div>
      </div>
      
      {/* Floating particles for scientific feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            ${isScrolled ? 'md:left-5 md:top-5' : 'md:left-8 md:top-8'}
            ${isScrolled ? 'sm:w-11 sm:h-11 sm:left-3 sm:top-3' : 'sm:w-13 sm:h-13 sm:left-6 sm:top-6'}
            ${isScrolled ? 'max-sm:w-10 max-sm:h-10 max-sm:left-2 max-sm:top-2' : 'max-sm:w-12 max-sm:h-12 max-sm:left-4 max-sm:top-4'}
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
     
      <main className="flex flex-col items-center justify-center min-h-screen px-8 py-8 relative z-10">
        {/* Hero Header */}
        <header className={`text-center mb-16 relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative line */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full animate-pulse"></div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-transparent bg-gradient-to-br from-blue-900 to-blue-600 bg-clip-text leading-[0.9] tracking-tight mb-4 drop-shadow-sm transition-all duration-700 hover:scale-105 hover:drop-shadow-md cursor-default">
            Diabetes
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight text-blue-900/80 tracking-[0.1em] uppercase mb-8 transition-all duration-500 hover:text-blue-700 hover:tracking-[0.15em] cursor-default">
            More than meets the eye
          </h2>
          
          <div className="inline-block px-8 py-3 border border-blue-500/30 rounded-full backdrop-blur-md bg-blue-200/40 transition-all duration-300 hover:bg-blue-200/60 hover:border-blue-500/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/30 cursor-default group">
            <p className="text-sm text-blue-900/70 font-light tracking-[0.2em] uppercase mb-0 transition-colors duration-300 group-hover:text-blue-900">
              NRG Laboratory
            </p>
          </div>
        </header>
       
        {/* Hero Content */}
        <section className={`flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <div className="relative p-12 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-3xl shadow-xl shadow-blue-200/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:bg-blue-50/70 hover:border-blue-500/30 hover:scale-[1.02] group cursor-default">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-500/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl leading-relaxed text-blue-900/90 mb-8 font-light transition-all duration-300 group-hover:text-blue-900">
                  The prevalence of diabetes is about <strong className="text-blue-900 font-normal bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-800 hover:to-blue-500">10%</strong> for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will <strong className="text-blue-900 font-normal bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-800 hover:to-blue-500">double by 2030</strong>.
                </p>
               
                <p className="text-2xl md:text-3xl leading-relaxed text-blue-900/90 font-light transition-all duration-300 group-hover:text-blue-900">
                  Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <strong className="text-blue-900 font-normal bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-800 hover:to-blue-500">pancreatic islet tissue</strong> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
                </p>
              </div>
            </div>
          </div>
         
          <div className={`flex-1 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative group">
              <img
                src={heroImage}
                alt="Diabetes research visualization"
                className="w-full max-w-2xl h-auto rounded-2xl shadow-xl shadow-blue-200/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:scale-105 hover:-rotate-1 cursor-pointer"
              />
              
              {/* Image overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform group-hover:scale-110"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform group-hover:scale-110"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-225 transform group-hover:scale-110"></div>
            </div>
          </div>
        </section>
      </main>
      
      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
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