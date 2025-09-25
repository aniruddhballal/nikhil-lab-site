import { useState } from 'react';

// Simple Sidebar component
const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>×</button>
        <nav>
          <a href="/">Home</a>
          <a href="/people">People</a>
          <a href="/research">Research</a>
          <a href="/publications">Publications</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

const Contact = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <h1>Contact</h1>
      <p>NRG Laboratory</p>

      <h2>Principal Investigator</h2>
      <div>
        <h3>Nikhil R. Gandasi (NRG)</h3>
        
        <p><strong>Primary Email:</strong> <a href="mailto:grnikhil@iisc.ac.in">grnikhil@iisc.ac.in</a></p>
        <p><strong>Secondary Email:</strong> <a href="mailto:nikhil.gandasi@mcb.uu.se">nikhil.gandasi@mcb.uu.se</a></p>
        <p><strong>Phone:</strong> <a href="tel:+91-80-22933460">+91-80-22933460</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikhil-gandasi-246743153/" target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
      </div>

      <h2>We Are Looking For</h2>
      <p>We are looking for candidates from Interdisciplinary backgrounds - Biophysics, Optics, Machine learning and Biology backgrounds</p>

      <h2>Join Us</h2>
      
      <h3>Competitive Postdoc</h3>
      <p>
        Individuals interested in pursuing a Competitive Postdoc: Please check{' '}
        <a href="https://iisc.ac.in/post-docs/" target="_blank" rel="noopener noreferrer">this link</a>{' '}
        for eligibility. If the prospective candidates meet the eligibility criteria and are interested in work we do, please write to Nikhil. Candidates are advised to attach a short motivation letter and a CV.
      </p>

      <h3>Ph.D. Students</h3>
      <p>
        We are looking for Ph.D. students: Please check{' '}
        <a href="https://iisc.ac.in/ph-d-programs/" target="_blank" rel="noopener noreferrer">this link</a>{' '}
        for eligibility, procedures and deadlines for the institute's Ph.D. program. If you are interviewing at the institute and considering joining the lab - check our lab's interests in the Links section of Publications and Communications page and please write to Nikhil.
      </p>

      <h3>Masters Thesis</h3>
      <p>
        Look through the interests of the lab and see if it aligns with your plans. If it does, write to any of the current lab members. At least 4–6 months duration is a must for thesis projects/lab experience. Candidates are advised to attach a short motivation letter and a CV. Please write to us at least 4–6 months in advance. We are constantly looking for "motivated candidates".
      </p>

      <h2>Welcome</h2>
      <p>Joining Us means you will receive complete support and mentorship to navigate through your science career! Welcome..</p>
    </div>
  );
};

export default Contact;