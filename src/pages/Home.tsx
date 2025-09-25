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
    <div>
      <button onClick={toggleSidebar}>
        Menu
      </button>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <h1>Diabetes</h1>
      <h2>More than meets the eye</h2>
      <p>NRG Laboratory</p>
        
      <p>
        The prevalence of diabetes is about 10% for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will double by 2030.
      </p>
      <p>
        Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to pancreatic islet tissue in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
      </p>
          
      <div onClick={() => openImageModal(imageData)}>
        <img
          src={imageData.src}
          alt={imageData.alt}
        />
        <p>
          {imageData.caption}
        </p>
      </div>

      {selectedImage && (
        <div onClick={closeImageModal}>
          <button onClick={closeImageModal}>
            ×
          </button>
          
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <p>
            {selectedImage.caption}
          </p>
        </div>
      )}
    </div>
  );
}