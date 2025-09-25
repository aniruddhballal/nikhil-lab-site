import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import img1 from '../images/img-website_home/1.png';

interface ResearchImage {
  src: string;
  alt: string;
  caption: string;
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ResearchImage | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const imageData: ResearchImage = {
    src: img1,
    alt: "Diabetes research visualization - Pancreatic islet tissue analysis",
    caption: "Advanced visualization of pancreatic islet tissue"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageModal = (image: ResearchImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <main style={{ paddingTop: '60px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '4rem', margin: '0 0 10px 0' }}>Diabetes</h1>
          <h2 style={{ fontSize: '1.2rem', margin: '0 0 20px 0' }}>More than meets the eye</h2>
          <div style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '10px 20px', display: 'inline-block' }}>
            <p style={{ margin: 0 }}>NRG Laboratory</p>
          </div>
        </header>
        
        <section style={{ display: 'flex', gap: '40px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                The prevalence of diabetes is about <strong>10%</strong> for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will <strong>double by 2030</strong>.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <strong>pancreatic islet tissue</strong> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
              </p>
            </div>
          </div>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div 
              style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => openImageModal(imageData)}
            >
              <div>
                <img
                  src={imageData.src}
                  alt={imageData.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ padding: '15px' }}>
                <p style={{ margin: 0, textAlign: 'center' }}>
                  {imageData.caption}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}
          onClick={closeImageModal}
        >
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '10px', 
            maxWidth: '90vw', 
            maxHeight: '90vh',
            position: 'relative'
          }}>
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ×
            </button>
            
            <div style={{ padding: '10px' }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{ width: '100%', height: 'auto', maxHeight: '70vh', borderRadius: '5px' }}
              />
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <p style={{ margin: 0 }}>
                  {selectedImage.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}