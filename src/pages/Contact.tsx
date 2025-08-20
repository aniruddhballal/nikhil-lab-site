import { useState, useEffect, memo } from 'react';
import Sidebar from '../components/Sidebar';

const Contact = memo(function Contact() {
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
    window.scrollTo(0, 0); // Add this line to scroll to top
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
          Contact
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
        {/* Principal Investigator Section */}
        <section className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Principal Investigator
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-light text-blue-900 mb-6 transition-all duration-300 group-hover:text-blue-800">
                Nikhil R. Gandasi (NRG)
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    <strong className="font-semibold text-blue-900">Primary Email:</strong>{' '}
                    <a 
                      href="mailto:grnikhil@iisc.ac.in" 
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      grnikhil@iisc.ac.in
                    </a>
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    <strong className="font-semibold text-blue-900">Secondary Email:</strong>{' '}
                    <a 
                      href="mailto:nikhil.gandasi@mcb.uu.se" 
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      nikhil.gandasi@mcb.uu.se
                    </a>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    <strong className="font-semibold text-blue-900">Phone:</strong>{' '}
                    <a 
                      href="tel:+91-80-22933460" 
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      +91-80-22933460
                    </a>
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    <strong className="font-semibold text-blue-900">LinkedIn:</strong>{' '}
                    <a 
                      href="https://www.linkedin.com/in/nikhil-gandasi-246743153/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      Visit Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Are Looking For Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              We Are Looking For
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
              We are looking for candidates from Interdisciplinary backgrounds - Biophysics, Optics, Machine learning and Biology backgrounds
            </p>
          </div>
        </section>

        {/* Join Us Section */}
        <section className={`mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Join Us
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {/* Competitive Postdoc */}
            <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-medium text-blue-900 transition-all duration-300 group-hover:text-blue-800">
                    Competitive Postdoc
                  </h3>
                </div>
                
                <div className="ml-7">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    Individuals interested in pursuing a Competitive Postdoc: Please check{' '}
                    <a 
                      href="https://iisc.ac.in/post-docs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      this link
                    </a>{' '}
                    for eligibility. If the prospective candidates meet the eligibility criteria and are interested in work we do, please write to Nikhil. Candidates are advised to attach a short motivation letter and a CV.
                  </p>
                </div>
              </div>
            </div>

            {/* Ph.D. Students */}
            <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-medium text-blue-900 transition-all duration-300 group-hover:text-blue-800">
                    Ph.D. Students
                  </h3>
                </div>
                
                <div className="ml-7">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    We are looking for Ph.D. students: Please check{' '}
                    <a 
                      href="https://iisc.ac.in/ph-d-programs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                      this link
                    </a>{' '}
                    for eligibility, procedures and deadlines for the institute's Ph.D. program. If you are interviewing at the institute and considering joining the lab - check our lab's interests in the Links section of Publications and Communications page and please write to Nikhil.
                  </p>
                </div>
              </div>
            </div>

            {/* Masters Thesis */}
            <div className="relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                  <h3 className="text-xl md:text-2xl font-medium text-blue-900 transition-all duration-300 group-hover:text-blue-800">
                    Masters Thesis
                  </h3>
                </div>
                
                <div className="ml-7">
                  <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                    Look through the interests of the lab and see if it aligns with your plans. If it does, write to any of the current lab members. At least 4–6 months duration is a must for thesis projects/lab experience. Candidates are advised to attach a short motivation letter and a CV. Please write to us at least 4–6 months in advance. We are constantly looking for "motivated candidates".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className={`transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Welcome
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative p-8 backdrop-blur-xl bg-gradient-to-br from-blue-50/70 to-blue-100/50 border border-blue-500/30 rounded-2xl shadow-lg shadow-blue-200/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/20 hover:bg-gradient-to-br hover:from-blue-100/80 hover:to-blue-200/60 hover:border-blue-600/40 hover:translate-y-[-2px] group cursor-default">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
            
            <div className="text-center">
              <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">
                Joining Us means you will receive complete support and mentorship to navigate through your science career! Welcome..
              </p>
              <div className="mt-6 inline-flex items-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
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
});

export default Contact;