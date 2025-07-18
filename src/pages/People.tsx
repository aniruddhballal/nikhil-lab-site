// Import the JSON data files
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import principalInvestigator from '../data/people/principalInvestigator.json';
import currentMembers from '../data/people/currentMembers.json';
import pastMembers from '../data/people/pastMembers.json';
import styles from '../styles/People.module.css';

const People = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        if (currentScrollY <= 50) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={styles.peopleContainer}>
    {!sidebarOpen && (
      <button
        onClick={toggleSidebar}
        className={`${styles.menuButton} ${isScrolled ? styles.menuButtonMinimized : ''}`}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    )}
      
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <header className={styles['page-header']}>
        <h1>People</h1>
        <p className={styles['lab-name']}>NRG Laboratory</p>
      </header>

      <main className={styles['people-content']}>
        <section className={styles['pi-section']}>
          <h2 className={styles.sectionTitle}>Principal Investigator</h2>
          <div className={styles.principalInvestigator}>
            <h3 className={styles.piName}>{principalInvestigator.name}</h3>
            <h4 className={styles.subsectionTitle}>Education and Career</h4>
            {principalInvestigator.education.map((edu, index) => (
              <p key={index} className={styles.infoText}>{edu}</p>
            ))}
           
            <h4 className={styles.subsectionTitle}>Awards</h4>
            {principalInvestigator.awards.map((award, index) => (
              <p key={index} className={styles.infoText}>{award}</p>
            ))}
           
            <h4 className={styles.subsectionTitle}>Contact</h4>
            <div className={styles.contactSection}>
              <p className={styles.infoText}>Email: {principalInvestigator.contact.email.join(", ")}</p>
              <p className={styles.infoText}>Phone: {principalInvestigator.contact.phone}</p>
            </div>
          </div>
        </section>

        <section className={styles['current-members-section']}>
          <h2 className={styles.sectionTitle}>Current Lab Members</h2>
          {currentMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <div className={styles.memberInfo}>
                <p className={styles.infoText}><strong>Position:</strong> {member.position}</p>
                {member.duration && <p className={styles.infoText}><strong>Duration:</strong> {member.duration}</p>}
                {member.education && <p className={styles.infoText}><strong>Education:</strong> {member.education}</p>}
                {member.achievements && member.achievements.length > 0 && (
                  <div className={styles.achievementsList}>
                    <strong className={styles.subsectionTitle}>Achievements:</strong>
                    {member.achievements.map((achievement, achIndex) => (
                      <p key={achIndex} className={styles.infoText}>{achievement}</p>
                    ))}
                  </div>
                )}
                <div className={styles.contactSection}>
                  <strong className={styles.subsectionTitle}>Contact:</strong>
                  {member.contact.email && <p className={styles.infoText}>Email: {member.contact.email}</p>}
                  {member.contact.phone && <p className={styles.infoText}>Phone: {member.contact.phone}</p>}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles['past-members-section']}>
          <h2 className={styles.sectionTitle}>Past Members</h2>
          {pastMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <div className={styles.memberInfo}>
                <p className={styles.infoText}><strong>Position:</strong> {member.position}</p>
                {member.education && <p className={styles.infoText}><strong>Education:</strong> {member.education}</p>}
                {member.currentStatus && <p className={styles.infoText}><strong>Current Status:</strong> {member.currentStatus}</p>}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default People;