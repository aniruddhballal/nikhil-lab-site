import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <nav className={styles.mainNavigation} aria-label="Main navigation">
        <ul>
          <li><Link to="/research">Research →</Link></li>
          <li><Link to="/support">Support →</Link></li>
          <li><Link to="/publications">Publications →</Link></li>
          <li><Link to="/people">People →</Link></li>
          <li><Link to="/contact">Contact →</Link></li>
        </ul>
      </nav>
     
      <main className={styles.heroSection}>
        <header className={styles.heroHeader}>
          <h1>Diabetes</h1>
          <h2>More than meets the eye</h2>
          <p className={styles.labName}>NRG Laboratory</p>
        </header>
       
        <section className={styles.heroContent}>
          <p>
            The prevalence of diabetes is about <strong>10%</strong> for people aged above 25 in most parts of the world. World Health Organization projects that the diabetes related deaths will <strong>double by 2030</strong>.
          </p>
         
          <p>
            Diabetes is a life-long disease caused by the body's inability to metabolize glucose. The focus of our work is to look in to <strong>pancreatic islet tissue</strong> in subcellular resolution to find treatment strategies, diagnostic and prognostic tools to fight diabetes.
          </p>
        </section>
      </main>
    </div>
  );
}