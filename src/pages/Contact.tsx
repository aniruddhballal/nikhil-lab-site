import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.contactContainer}>
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
        <h1>Contact</h1>
        <p className={styles['lab-name']}>NRG Laboratory</p>
      </header>

      <main className={styles['contact-content']}>
        <section className={styles['contact-info-section']}>
          <h2 className={styles.sectionTitle}>Principal Investigator</h2>
          <div className={styles.contactInvestigator}>
            <h3 className={styles.contactName}>Nikhil R. Gandasi (NRG)</h3>
            <div className={styles.contactSection}>
              <p className={styles.infoText}>Email: <a href="mailto:grnikhil@iisc.ac.in">grnikhil@iisc.ac.in</a></p>
              <p className={styles.infoText}>
                LinkedIn: <a href="https://www.linkedin.com/in/nikhil-gandasi-246743153/" target="_blank" rel="noopener noreferrer">
                  Visit Profile
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles['recruitment-section']}>
          <h2 className={styles.sectionTitle}>We Are Looking For</h2>
          <div className={styles.recruitmentCard}>
            <p className={styles.infoText}>
              We are looking for candidates from Interdisciplinary backgrounds - Biophysics, Optics, Machine learning and Biology backgrounds
            </p>
          </div>
        </section>

        <section className={styles['positions-section']}>
          <h2 className={styles.sectionTitle}>Join Us</h2>
          
          <div className={styles.positionCard}>
            <h3 className={styles.positionName}>Competitive Postdoc</h3>
            <div className={styles.positionInfo}>
              <p className={styles.infoText}>
                Individuals interested in pursuing a Competitive Postdoc: Please check 
                <a href="https://iisc.ac.in/post-docs/" target="_blank" rel="noopener noreferrer"> this link </a>
                for eligibility. If the prospective candidates meet the eligibility criteria and are interested in work we do, please write to Nikhil. Candidates are advised to attach a short motivation letter and a CV.
              </p>
            </div>
          </div>

          <div className={styles.positionCard}>
            <h3 className={styles.positionName}>Ph.D. Students</h3>
            <div className={styles.positionInfo}>
              <p className={styles.infoText}>
                We are looking for Ph.D. students: Please check 
                <a href="https://iisc.ac.in/ph-d-programs/" target="_blank" rel="noopener noreferrer"> this link </a>
                for eligibility, procedures and deadlines for the institute's Ph.D. program. If you are interviewing at the institute and considering joining the lab - check our lab’s interests in the Links section of Publications and Communications page and please write to Nikhil.
              </p>
            </div>
          </div>

          <div className={styles.positionCard}>
            <h3 className={styles.positionName}>Masters Thesis</h3>
            <div className={styles.positionInfo}>
              <p className={styles.infoText}>
                Look through the interests of the lab and see if it aligns with your plans. If it does, write to any of the current lab members. At least 4–6 months duration is a must for thesis projects/lab experience. Candidates are advised to attach a short motivation letter and a CV. Please write to us at least 4–6 months in advance. We are constantly looking for "motivated candidates".
              </p>
            </div>
          </div>
        </section>

        <section className={styles['welcome-section']}>
          <h2 className={styles.sectionTitle}>Welcome</h2>
          <div className={styles.welcomeCard}>
            <p className={styles.infoText}>
              Joining Us means you will receive complete support and mentorship to navigate through your science career! Welcome..
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
