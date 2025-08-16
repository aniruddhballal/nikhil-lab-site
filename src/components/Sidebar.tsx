import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Enhanced Overlay with sophisticated blur */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-[1000] transition-all duration-300 ease-out opacity-100"
          onClick={onClose}
          onTouchEnd={onClose}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar with sophisticated styling */}
      <nav 
        className={`
          fixed top-0 h-screen w-80 z-[1001] overflow-hidden
          bg-gradient-to-b from-blue-50 to-blue-100
          border-r border-blue-500/20
          backdrop-blur-xl shadow-2xl shadow-blue-900/10
          transition-all duration-300 ease-out
          flex flex-col
          ${isOpen ? 'left-0' : '-left-80'}
          before:absolute before:inset-0 before:pointer-events-none
          before:bg-gradient-to-br before:from-blue-900/5 before:via-transparent before:to-blue-500/3
          md:w-80 sm:w-72 xs:w-64
        `}
        style={{ 
          left: isOpen ? '0' : undefined,
          boxShadow: '4px 0 32px rgba(30, 58, 138, 0.1), inset -1px 0 0 rgba(30, 58, 138, 0.1)'
        }}
        aria-label="Main navigation"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial from-blue-900/5 via-transparent to-transparent transform -translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-blue-500/3 via-transparent to-transparent transform translate-x-12 translate-y-12"></div>
          
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/20 rounded-full animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Header */}
        <div className="relative z-10 p-6 pb-4 border-b border-blue-500/15 bg-blue-50/40 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-light text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text tracking-wider uppercase">
              NRG Laboratory
            </h3>
            <button 
              onClick={onClose}
              onTouchEnd={onClose}
              className="
                w-10 h-10 rounded-lg bg-blue-100/60 border border-blue-500/20 text-blue-900
                backdrop-blur-md transition-all duration-300 ease-out
                hover:scale-105 hover:bg-blue-100/80 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-300/30
                focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:scale-105
                active:scale-95 active:duration-75
                flex items-center justify-center group
                touch-manipulation
              "
              aria-label="Close navigation menu"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="transition-all duration-300 group-hover:rotate-90 group-hover:text-blue-700"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-60"></div>
        </div>

        {/* Content Area with enhanced scrolling */}
        <div className="flex-1 flex flex-col relative z-10 py-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300/30">
          {/* Navigation Links with sophisticated animations */}
          <ul className="flex-1 px-0 space-y-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/research', label: 'Research' },
              { path: '/support', label: 'Support' },
              { path: '/publications', label: 'Publications' },
              { path: '/people', label: 'People' },
              { path: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  onClick={onClose} 
                  onTouchEnd={onClose}
                  className={`
                    group flex items-center justify-between mx-4 px-6 py-4 rounded-r-3xl
                    font-light text-base letter-spacing-wider
                    transition-all duration-300 ease-out relative overflow-hidden
                    backdrop-blur-md touch-manipulation
                    ${isActive(item.path) 
                      ? 'bg-blue-100/60 text-blue-900 font-normal shadow-lg shadow-blue-200/20 border border-blue-500/20 mr-4' 
                      : 'text-blue-900/80 hover:bg-blue-50/40 hover:text-blue-900 mr-4'
                    }
                    hover:transform hover:translate-x-2 hover:shadow-md hover:shadow-blue-200/15
                    focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:transform focus:translate-x-2
                    active:scale-[0.98] active:duration-75
                    before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0
                    before:bg-gradient-to-r before:from-blue-900 before:to-blue-600 before:rounded-r-2xl
                    before:transition-all before:duration-300 before:ease-out
                    ${isActive(item.path) ? 'before:w-1' : 'hover:before:w-1'}
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? `slideInFromLeft 0.4s ease-out ${index * 50}ms both` : 'none'
                  }}
                >
                  <span className={`
                    transition-all duration-300 relative z-10
                    ${isActive(item.path) 
                      ? 'text-transparent bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text ml-2' 
                      : 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:ml-1'
                    }
                  `}>
                    {item.label}
                  </span>
                  
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`
                      transition-all duration-300 ease-out relative z-10
                      ${isActive(item.path) 
                        ? 'transform translate-x-1 text-blue-700 opacity-100' 
                        : 'opacity-60 group-hover:transform group-hover:translate-x-1 group-hover:text-blue-700 group-hover:opacity-100'
                      }
                    `}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12,5 19,12 12,19"></polyline>
                  </svg>
                  
                  {/* Subtle hover background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-r-3xl"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Enhanced Footer */}
          <div className="px-6 mt-6 flex-shrink-0">
            <div className="relative p-6 rounded-xl bg-blue-50/40 border border-blue-500/15 backdrop-blur-md overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-blue-300/15 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <p className="text-sm text-blue-900/70 leading-relaxed font-light text-center italic relative z-10">
                Advancing diabetes research through innovative pancreatic islet analysis.
              </p>
              
              {/* Decorative elements */}
              <div className="flex items-center justify-center space-x-1 mt-4 relative z-10">
                <div className="w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-1 h-1 bg-blue-600/50 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-1rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Custom scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thumb-blue-300\/30::-webkit-scrollbar-thumb {
          background: rgba(147, 197, 253, 0.3);
          border-radius: 4px;
        }
        
        .scrollbar-thumb-blue-300\/30::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 197, 253, 0.5);
        }
        
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        @media (max-width: 768px) {
          nav {
            width: 18rem; /* 288px */
          }
          
          nav.left-0 {
            left: 0;
          }
          
          nav:not(.left-0) {
            left: -18rem;
          }
        }
        
        @media (max-width: 480px) {
          nav {
            width: 16rem; /* 256px */
          }
          
          nav:not(.left-0) {
            left: -16rem;
          }
        }
      `}</style>
    </>
  );
}