import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

import img1 from '../images/img-website_Research/islet-cell-ldcv-min.jpg';
import img2 from '../images/img-website_Research/beta-cell-glucose-uptake-t2d.jpg';
import img3 from '../images/img-website_Research/cell-glucose-transporter.jpg';
import img4 from '../images/img-website_Research/pancreas-changes-cancer.jpg';
import img5 from '../images/img-website_Research/mvb-beta-cells.jpg';
import img6 from '../images/img-website_Research/mvb-imaging-beta-cells.jpg';
import img7 from '../images/img-website_Research/mvb-secretion-dysregulation-t2d.jpg';

interface ResearchImage {
  src: string;
  alt: string;
  caption: string;
}

export default function Research() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const allResearchImages: ResearchImage[] = [
    {
      src: img1,
      alt: "Research Image 1 - islet-cell-ldcv-min",
      caption: "Islet cell LDCVs (Large Dense-Core Vesicles)"
    },
    {
      src: img2,
      alt: "Research Image 2 - beta-cell-glucose-uptake-t2d",
      caption: "Glucose uptake in pancreatic beta cells and how it is disrupted during type-2-diabetes"
    },
    {
      src: img3,
      alt: "Research Image 3 - cell-glucose-transporter",
      caption: "Cell image with glucose transporter"
    },
    {
      src: img4,
      alt: "Research Image 4 - pancreas-changes-cancer",
      caption: "Changes in pancreas during pancreatic cancer"
    },
    {
      src: img5,
      alt: "Research Image 5 - mvb-beta-cells",
      caption: "Visualizing multi-vesicular bodies in pancreatic beta cells"
    },
    {
      src: img6,
      alt: "Research Image 6 - mvb-imaging-beta-cells",
      caption: "Multivesicular bodies imaging in pancreatic beta cells"
    },
    {
      src: img7,
      alt: "Research Image 7 - mvb-secretion-dysregulation-t2d",
      caption: "Multivesicular bodies secretion dysregulation in type-2-diabetes"
    }
  ];



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
     
      <h1>Research</h1>
      <p>NRG Laboratory</p>
     
      <h2>Our Focus Areas</h2>
      <p>
        Type-2-diabetes is characterized by high-blood sugar levels. Understanding and developing treatment strategies have been focused on blood sugar lowering hormone insulin. Apart from there are other factors that influence islet environment which are crucial for islet functioning and secretion of islet hormones. Islet cells bring about their biological actions at different time scales. Therefore the challenge is to investigate both short-duration and long-duration events within single cells. Advancements in microscopy techniques have made this possible to understand variable spatiotemporal scales in cell biology to navigate complex and heterogenic environments in an islet.
      </p>
      <p>
        The focus areas of this lab to work on the areas that impact islet-environment and cell survival using primarily high-resolution imaging techniques combined with basic cell biology and molecular biology techniques. This will allow us to develop approaches to preserve islet functioning and survival during diabetes.
      </p>

      <h2>Research Gallery</h2>
      <p>All {allResearchImages.length} images</p>
      
      {allResearchImages.map((image, index) => (
        <div key={index} onClick={() => openImageModal(image)}>
          <img src={image.src} alt={image.alt} />
          <p>{image.caption}</p>
        </div>
      ))}
       
      <h2>Methods Used to Address the Research Questions</h2>
      {methods.map((method, index) => (
        <p key={index}>{method}</p>
      ))}

      {selectedImage && (
        <div onClick={closeImageModal}>
          <button onClick={closeImageModal}>X</button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <p>{selectedImage.caption}</p>
        </div>
      )}
    </div>
  );
}