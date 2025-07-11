import { Link } from 'react-router-dom';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Link to="/" className={styles['back-link']}>← Back to Home</Link>
      <h1 className={styles.mainTitle}>Get in Touch!</h1>
     
      <div className={styles.contactInfo}>
        <h2>Nikhil R. Gandasi (NRG)</h2>
        <p>Email: grnikhil@iisc.ac.in</p>
        <p>Linkedin: https://www.linkedin.com/in/nikhil-gandasi-246743153/</p>
      </div>
      
      <div className={styles.recruitmentInfo}>
        <p>We are looking for candidates from Interdisciplinary backgrounds - Biophysics, Optics, Machine learning and Biology backgrounds</p>
      </div>
      
      <div className={styles.joinSection}>
        <h2>Join Us</h2>
       
        <div className={styles.positionCard}>
          <h3>Competitive Postdoc</h3>
          <p>Individuals interested in pursuing a Competitive Postdoc: Please check this link for eligibility. If the prospective candidates meet the eligibility criteria and are interested in work we do, please write to Nikhil. Candidates are advised to attach a short motivation letter and a CV.</p>
        </div>
        
        <div className={styles.positionCard}>
          <h3>Ph.D. Students</h3>
          <p>We are looking for Ph.D. students: Please check this link for eligibility, procedures and deadlines for the institute's Ph.D. program. If you are interviewing at the institute and considering joining the lab - check our labs interests in Links section of Publications and Communications page and please write to Nikhil.</p>
        </div>
        
        <div className={styles.positionCard}>
          <h3>Masters Thesis</h3>
          <p>Look through the interests of the lab and see if it aligns with your plans. If it does write to any of the current lab members. At least 4-6 months duration is a must for thesis projects/lab experience. Candidates are advised to attach a short motivation letter and a CV. Please write to us at least 4-6 months in advance. We are constantly looking for "motivated candidates".</p>
        </div>
      </div>
      
      <div className={styles.welcomeMessage}>
        <p>Joining Us means you will receive complete support and mentorship to navigate through your science career! Welcome..</p>
      </div>
    </div>
  );
};