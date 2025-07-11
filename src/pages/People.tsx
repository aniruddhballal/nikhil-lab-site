// Import the JSON data files
import principalInvestigator from '../data/people/principalInvestigator.json';
import currentMembers from '../data/people/currentMembers.json';
import pastMembers from '../data/people/pastMembers.json';
import { Link } from 'react-router-dom';
import styles from '../styles/People.module.css';

const People = () => {
  return (
    <div className={styles.peopleContainer}>
      <Link to="/" className={styles['back-link']}>← Back to Home</Link>
      <h1 className={styles.pageTitle}>People</h1>
     
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

      <div className={styles.currentMembersSection}>
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
      </div>

      <div className={styles.pastMembersSection}>
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
      </div>
    </div>
  );
};

export default People;