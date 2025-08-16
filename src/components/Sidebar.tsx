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
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] transition-all duration-500 ease-out opacity-100"
          onClick={onClose}
          onTouchEnd={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <nav 
        className={`
          fixed top-0 left-0 h-full w-80 z-[1001] 
          backdrop-blur-2xl bg-gradient-to-br from-blue-50/95 to-blue-100/90
          border-r border-blue-500/30 shadow-2xl shadow-blue-900/20
          transform transition-all duration-500 ease-out
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
        style={{ 
          left: isOpen ? '0' : undefined
        }}
        aria-label="Main navigation"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative p-8 border-b border-blue-500/20 bg-gradient-to-r from-blue-900/10 to-blue-600/5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-blue-900 tracking-wide">
              NRG Laboratory
            </h3>
            <button 
              onClick={onClose}
              onTouchEnd={onClose}
              className="
                p-2 rounded-xl bg-blue-50/60 border border-blue-500/20 text-blue-900
                transition-all duration-300 ease-out
                hover:scale-110 hover:bg-blue-100/80 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-300/30
                focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:scale-110
                active:scale-95 active:duration-75
                group
              "
              aria-label="Close navigation menu"
            >
              <svg 
                width="20" 
                height="20" 
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
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full pt-8 pb-8 relative">
          {/* Navigation Links */}
          <ul className="flex-1 px-6 space-y-2">
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
                    group flex items-center justify-between p-4 rounded-xl
                    transition-all duration-300 ease-out relative overflow-hidden
                    ${isActive(item.path) 
                      ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/30 text-blue-900 shadow-lg shadow-blue-300/20' 
                      : 'text-blue-900/80 hover:bg-blue-50/60 hover:border hover:border-blue-500/20 hover:text-blue-900 hover:shadow-lg hover:shadow-blue-200/20'
                    }
                    hover:translate-x-1 hover:scale-[1.02]
                    focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:translate-x-1 focus:scale-[1.02]
                    active:scale-[0.98] active:duration-75
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? `slideInFromLeft 0.6s ease-out ${index * 100}ms both` : 'none'
                  }}
                >
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-r-full"></div>
                  )}
                  
                  <span className={`font-medium transition-all duration-300 ${isActive(item.path) ? 'ml-4' : 'ml-1 group-hover:ml-2'}`}>
                    {item.label}
                  </span>
                  
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`
                      transition-all duration-300 ease-out
                      ${isActive(item.path) 
                        ? 'transform translate-x-1 text-blue-700' 
                        : 'group-hover:transform group-hover:translate-x-1 group-hover:text-blue-700'
                      }
                    `}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12,5 19,12 12,19"></polyline>
                  </svg>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="px-6 mt-8">
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50/60 to-blue-100/40 border border-blue-500/20 backdrop-blur-sm overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-blue-300/20 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              
              <p className="text-sm text-blue-900/80 leading-relaxed font-light relative z-10">
                Advancing diabetes research through innovative pancreatic islet analysis.
              </p>
              
              {/* Animated dots */}
              <div className="flex items-center justify-center space-x-1 mt-4 relative z-10">
                <div className="w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-1.5 h-1.5 bg-blue-600/60 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}