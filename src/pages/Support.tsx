import { useState, memo } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Support.module.css';

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
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles['support-page']}>
      <button
        onClick={toggleSidebar}
        className={styles.menuButton}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
     
      <header className={styles['page-header']}>
        <h1>Support</h1>
      </header>
     
      <main className={styles['support-content']}>
        <section className={styles['funding-section']}>
          <h2>Funding</h2>
          <ul className={styles['funding-list']}>
            {fundingItems.map((item, index) => (
              <li key={index} className={styles['funding-item']}>
                {item}
              </li>
            ))}
          </ul>
        </section>
       
        <section className={styles['donate-section']}>
          <h2>Donate</h2>
          <div className={styles['donate-content']}>
            <p>
              Only research has answers to cure people from diabetes. Donations through trusts, or foundations or individuals
              will help us propel innovative research with a goal of finding a cure for diabetes and develop tools to manage
              diabetes.
            </p>
            <p>
              The lives we change and the progress we make could not be done without people like you. Thanks for your interest
              and contribution.
            </p>
            <p>
              If you are interested to contribute, please contact <strong>Dr. Nikhil Gandasi</strong>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
});

export default Support;