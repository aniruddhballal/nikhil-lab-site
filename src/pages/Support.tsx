import { useState, memo, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import fundingImg from '../images/img-website_Support/funding.png';

interface SupportImage {
  src: string;
  alt: string;
  caption: string;
}

const fundingItems = [
  "Science and Engineering Research Board - Start-up grant - 2024",
  "Indian Council of Medical Research - Grant in Aid Scheme - 2023",
  "Indian Institute of Science - Startup grant - 2021",
  "DBT-Ramalingaswami Fellowship - 2021",
  "O. E. och Edla Johanssons Foundation - 2019 - Utilized",
  "Swedish Strategic Foundation for collaboration between industry and academia - 2018 - Utilized",
  "European Council for Study of Diabetes (EFSD) Rising Star Award Programme grant - 2018 - Utilized",
  "NovoNordisk Foundation - Young Investigator Award grant - 2017",
  "Swedish Society for Medical Research Foundation (SSMF) - 2016 - Utilized",
  "European Council for Study of Diabetes (EFSD)/Lilly (Also known as EFSD Young Investigator Award grant) - 2015 - Utilized"
];

const Support = memo(function Support() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SupportImage | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const imageData: SupportImage = {
    src: fundingImg,
    alt: "Funding visualization - Research support and grants",
    caption: "Research funding and grant support visualization"
  };

  const openImageModal = (image: SupportImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <button onClick={toggleSidebar}>
        Menu
      </button>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      <h1>Support</h1>
      <p>NRG Laboratory</p>
     
      <h2>Funding</h2>
      
      <div onClick={() => openImageModal(imageData)}>
        <img
          src={imageData.src}
          alt={imageData.alt}
        />
        <p>
          {imageData.caption}
        </p>
      </div>

      {fundingItems.map((item, index) => (
        <p key={index}>
          {item}
        </p>
      ))}
       
      <h2>Donate</h2>
      
      <p>
        Only research has answers to cure people from diabetes. Donations through trusts, or foundations or individuals will help us propel innovative research with a goal of finding a cure for diabetes and develop tools to manage diabetes.
      </p>
     
      <p>
        The lives we change and the progress we make could not be done without people like you. Thanks for your interest and contribution.
      </p>
      
      <p>
        If you are interested to contribute, please contact Dr. Nikhil Gandasi.
      </p>

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
});

export default Support;