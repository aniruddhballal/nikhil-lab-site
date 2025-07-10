import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h1>Get in Touch!</h1>
      
      <div>
        <h2>Nikhil R. Gandasi (NRG)</h2>
        <p>Email: grnikhil@iisc.ac.in</p>
        <p>Linkedin: https://www.linkedin.com/in/nikhil-gandasi-246743153/</p>
      </div>

      <div>
        <p>We are looking for candidates from Interdisciplinary backgrounds - Biophysics, Optics, Machine learning and Biology backgrounds</p>
      </div>

      <div>
        <h2>Join Us</h2>
        
        <div>
          <h3>Competitive Postdoc</h3>
          <p>Individuals interested in pursuing a Competitive Postdoc: Please check this link for eligibility. If the prospective candidates meet the eligibility criteria and are interested in work we do, please write to Nikhil. Candidates are advised to attach a short motivation letter and a CV.</p>
        </div>

        <div>
          <h3>Ph.D. Students</h3>
          <p>We are looking for Ph.D. students: Please check this link for eligibility, procedures and deadlines for the institute's Ph.D. program. If you are interviewing at the institute and considering joining the lab - check our labs interests in Links section of Publications and Communications page and please write to Nikhil.</p>
        </div>

        <div>
          <h3>Masters Thesis</h3>
          <p>Look through the interests of the lab and see if it aligns with your plans. If it does write to any of the current lab members. At least 4-6 months duration is a must for thesis projects/lab experience. Candidates are advised to attach a short motivation letter and a CV. Please write to us at least 4-6 months in advance. We are constantly looking for "motivated candidates".</p>
        </div>
      </div>

      <div>
        <p>Joining Us means you will receive complete support and mentorship to navigate through your science career! Welcome..</p>
      </div>
    </div>
  );
};