import { useState, useEffect, memo } from 'react';
import Sidebar from '../components/Sidebar';
import principalInvestigator from '../data/people/principalInvestigator.json';
import currentMembers from '../data/people/currentMembers.json';
import pastMembers from '../data/people/pastMembers.json';

const People = memo(function People() {
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
          People
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
                {principalInvestigator.name}
              </h3>
              
              {/* Education and Career */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-blue-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Education and Career
                </h4>
                <div className="ml-5 space-y-3">
                  {principalInvestigator.education.map((edu: string, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        animationDelay: `${400 + index * 100}ms`,
                        animation: isLoaded ? `fadeInUp 0.6s ease-out ${400 + index * 100}ms both` : 'none'
                      }}
                    >
                      <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Awards */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-blue-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Awards
                </h4>
                <div className="ml-5 space-y-3">
                  {principalInvestigator.awards.map((award: string, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        animationDelay: `${600 + index * 100}ms`,
                        animation: isLoaded ? `fadeInUp 0.6s ease-out ${600 + index * 100}ms both` : 'none'
                      }}
                    >
                      <p className="text-base md:text-lg font-light text-blue-900/90 leading-relaxed">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-blue-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Contact
                </h4>
                <div className="ml-5 p-6 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50 hover:border-blue-500/25">
                  <div className="space-y-3">
                    <p className="text-base md:text-lg font-light text-blue-900/90">
                      <strong className="font-semibold text-blue-900">Email:</strong> {principalInvestigator.contact.email.join(", ")}
                    </p>
                    <p className="text-base md:text-lg font-light text-blue-900/90">
                      <strong className="font-semibold text-blue-900">Phone:</strong> {principalInvestigator.contact.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Lab Members Section */}
        <section className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Current Lab Members
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {currentMembers.map((member: any, index: number) => (
              <div
                key={index}
                className={`relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animationDelay: `${800 + index * 150}ms`,
                  animation: isLoaded ? `fadeInUp 0.6s ease-out ${800 + index * 150}ms both` : 'none'
                }}
              >
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                    <h3 className="text-xl md:text-2xl font-medium text-blue-900 transition-all duration-300 group-hover:text-blue-800">
                      {member.name}
                    </h3>
                  </div>
                  
                  <div className="ml-7 space-y-4">
                    <p className="text-base md:text-lg font-light text-blue-900/90">
                      <strong className="font-semibold text-blue-900">Position:</strong> {member.position}
                    </p>
                    
                    {member.duration && (
                      <p className="text-base md:text-lg font-light text-blue-900/90">
                        <strong className="font-semibold text-blue-900">Duration:</strong> {member.duration}
                      </p>
                    )}
                    
                    {member.education && (
                      <p className="text-base md:text-lg font-light text-blue-900/90">
                        <strong className="font-semibold text-blue-900">Education:</strong> {member.education}
                      </p>
                    )}
                    
                    {member.achievements && member.achievements.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="font-semibold text-blue-900 text-lg">Achievements:</h5>
                        <div className="space-y-2 pl-4">
                          {member.achievements.map((achievement: string, achIndex: number) => (
                            <div key={achIndex} className="p-3 rounded-lg bg-blue-50/40 border border-blue-500/15 transition-all duration-300 hover:bg-blue-100/50">
                              <p className="text-base font-light text-blue-900/90">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <h5 className="font-semibold text-blue-900 text-lg">Contact:</h5>
                      <div className="pl-4 space-y-2">
                        {member.contact.email && (
                          <p className="text-base md:text-lg font-light text-blue-900/90">
                            <strong className="font-semibold text-blue-900">Email:</strong> {member.contact.email}
                          </p>
                        )}
                        {member.contact.phone && (
                          <p className="text-base md:text-lg font-light text-blue-900/90">
                            <strong className="font-semibold text-blue-900">Phone:</strong> {member.contact.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Members Section */}
        <section className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 transition-all duration-500 hover:text-blue-700 cursor-default">
              Past Members
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {pastMembers.map((member: any, index: number) => (
              <div
                key={index}
                className={`relative p-8 backdrop-blur-xl bg-blue-50/60 border border-blue-500/20 rounded-2xl shadow-lg shadow-blue-200/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/15 hover:bg-blue-50/80 hover:border-blue-600/30 hover:translate-y-[-2px] group cursor-default ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  animationDelay: `${1000 + index * 150}ms`,
                  animation: isLoaded ? `fadeInUp 0.6s ease-out ${1000 + index * 150}ms both` : 'none'
                }}
              >
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-900 to-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 group-hover:h-20 transition-all duration-500"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full"></div>
                    <h3 className="text-xl md:text-2xl font-medium text-blue-900 transition-all duration-300 group-hover:text-blue-800">
                      {member.name}
                    </h3>
                  </div>
                  
                  <div className="ml-7 space-y-4">
                    <p className="text-base md:text-lg font-light text-blue-900/90">
                      <strong className="font-semibold text-blue-900">Position:</strong> {member.position}
                    </p>
                    
                    {member.education && (
                      <p className="text-base md:text-lg font-light text-blue-900/90">
                        <strong className="font-semibold text-blue-900">Education:</strong> {member.education}
                      </p>
                    )}
                    
                    {member.currentStatus && (
                      <div className="flex items-start space-x-4">
                        <p className="text-base md:text-lg font-light text-blue-900/90 flex-1">
                          <strong className="font-semibold text-blue-900">Current Status:</strong> {member.currentStatus}
                        </p>
                        <div className="flex-shrink-0">
                          <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100/60 rounded-full border border-blue-300/40 transition-all duration-300 group-hover:bg-blue-200/80 group-hover:border-blue-400/60 group-hover:scale-105">
                            Alumni
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

export default People;