import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './Support.module.css';

// Move static data outside component to prevent re-creation on every render
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
  return (
    <div className={styles['support-page']}>
      <nav className={styles['breadcrumb-nav']}>
        <Link to="/" className={styles['back-link']}>← Back to Home</Link>
      </nav>
      
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