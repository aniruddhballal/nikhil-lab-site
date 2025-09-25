interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const currentPath = window.location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1000
          }}
          onClick={onClose}
        />
      )}

      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-300px',
          height: '100vh',
          width: '300px',
          zIndex: 1001,
          backgroundColor: 'white',
          borderRight: '1px solid #ddd',
          display: 'flex',
          flexDirection: 'column',
          transition: 'left 0.3s ease'
        }}
      >
        <div style={{ 
          padding: '20px', 
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>NRG Laboratory</h3>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div style={{ flex: 1, padding: '10px 0' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { path: '/', label: 'Home' },
              { path: '/research', label: 'Research' },
              { path: '/support', label: 'Support' },
              { path: '/publications', label: 'Publications' },
              { path: '/people', label: 'People' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.path}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '15px 20px',
                    textAlign: 'left',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    color: isActive(item.path) ? '#000' : '#666',
                    backgroundColor: isActive(item.path) ? '#f0f0f0' : 'transparent',
                    borderLeft: isActive(item.path) ? '3px solid #333' : 'none'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ padding: '20px', marginTop: '20px' }}>
            <div style={{ 
              padding: '15px', 
              backgroundColor: '#f9f9f9', 
              borderRadius: '8px',
              border: '1px solid #eee'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.9rem', 
                color: '#666', 
                textAlign: 'center',
                lineHeight: '1.4'
              }}>
                Advancing diabetes research through innovative pancreatic islet analysis.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}