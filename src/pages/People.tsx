import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import principalInvestigator from '../data/people/principalInvestigator.json';
import currentMembers from '../data/people/currentMembers.json';
import pastMembers from '../data/people/pastMembers.json';

import piImage from '../images/img-website_People/PI/1.png';
import currentImage1 from '../images/img-website_People/current/1.png';
import currentImage2 from '../images/img-website_People/current/2.png';
import currentImage3 from '../images/img-website_People/current/3.png';
import currentImage4 from '../images/img-website_People/current/4.png';
import currentImage5 from '../images/img-website_People/current/5.png';
import currentImage6 from '../images/img-website_People/current/6.png';
import currentImage7 from '../images/img-website_People/current/7.png';
import currentImage8 from '../images/img-website_People/current/8.png';
import currentImage9 from '../images/img-website_People/current/9.png';
import currentImage10 from '../images/img-website_People/current/10.png';
import currentImage11 from '../images/img-website_People/current/11.png';

import pastImage1 from '../images/img-website_People/past/1.png';
import pastImage2 from '../images/img-website_People/past/2.png';
import pastImage3 from '../images/img-website_People/past/3.png';
import pastImage4 from '../images/img-website_People/past/4.png';
import pastImage5 from '../images/img-website_People/past/5.png';
import pastImage6 from '../images/img-website_People/past/6.png';
import pastImage7 from '../images/img-website_People/past/7.png';
import pastImage8 from '../images/img-website_People/past/8.png';
import pastImage9 from '../images/img-website_People/past/9.png';
import pastImage10 from '../images/img-website_People/past/10.png';
import pastImage11 from '../images/img-website_People/past/11.png';
import pastImage12 from '../images/img-website_People/past/12.png';
import pastImage13 from '../images/img-website_People/past/13.png';
import pastImage14 from '../images/img-website_People/past/14.png';
import pastImage15 from '../images/img-website_People/past/15.png';
import pastImage16 from '../images/img-website_People/past/16.png';
import pastImage17 from '../images/img-website_People/past/17.png';
import pastImage18 from '../images/img-website_People/past/18.png';
import pastImage19 from '../images/img-website_People/past/19.png';
import pastImage20 from '../images/img-website_People/past/20.png';
import pastImage21 from '../images/img-website_People/past/21.png';
import pastImage22 from '../images/img-website_People/past/22.png';
import pastImage23 from '../images/img-website_People/past/23.png';

const People = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentImages = {
    1: currentImage1, 2: currentImage2, 3: currentImage3, 4: currentImage4,
    5: currentImage5, 6: currentImage6, 7: currentImage7, 8: currentImage8,
    9: currentImage9, 10: currentImage10, 11: currentImage11
  };

  const pastImages = {
    1: pastImage1, 2: pastImage2, 3: pastImage3, 4: pastImage4, 5: pastImage5,
    6: pastImage6, 7: pastImage7, 8: pastImage8, 9: pastImage9, 10: pastImage10,
    11: pastImage11, 12: pastImage12, 13: pastImage13, 14: pastImage14, 15: pastImage15,
    16: pastImage16, 17: pastImage17, 18: pastImage18, 19: pastImage19, 20: pastImage20,
    21: pastImage21, 22: pastImage22, 23: pastImage23
  };

  const getImageSrc = (type, index) => {
    if (type === 'PI') return piImage;
    if (type === 'current') return currentImages[index];
    if (type === 'past') return pastImages[index];
    return null;
  };

  return (
    <div>
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <h1>People</h1>
      <p>NRG Laboratory</p>
      
      <h2>Principal Investigator</h2>
      <div>
        <img src={piImage} alt={principalInvestigator.name} />
        <h3>{principalInvestigator.name}</h3>
        
        <h4>Education and Career</h4>
        {principalInvestigator.education.map((edu, index) => (
          <p key={index}>{edu}</p>
        ))}
        
        <h4>Awards</h4>
        {principalInvestigator.awards.map((award, index) => (
          <p key={index}>{award}</p>
        ))}
        
        <h4>Contact</h4>
        <button onClick={() => window.location.href = '/contact'}>
          Get in Touch - Click here to view contact information
        </button>
      </div>

      <h2>Current Lab Members</h2>
      {currentMembers.map((member, index) => (
        <div key={index}>
          <img src={getImageSrc('current', index + 1)} alt={member.name} />
          <h3>{member.name}</h3>
          <p><strong>Position:</strong> {member.position}</p>
          {member.duration && <p><strong>Duration:</strong> {member.duration}</p>}
          {member.education && <p><strong>Education:</strong> {member.education}</p>}
          
          {member.achievements && member.achievements.length > 0 && (
            <div>
              <h5>Achievements:</h5>
              {member.achievements.map((achievement, achIndex) => (
                <p key={achIndex}>{achievement}</p>
              ))}
            </div>
          )}
          
          <div>
            <h5>Contact:</h5>
            {member.contact.email && (
              <p><strong>Email:</strong> <a href={`mailto:${member.contact.email}`}>{member.contact.email}</a></p>
            )}
            {member.contact.phone && (
              <p><strong>Phone:</strong> {member.contact.phone}</p>
            )}
          </div>
        </div>
      ))}

      <h2>Past Members</h2>
      {pastMembers.map((member, index) => (
        <div key={index}>
          <img src={getImageSrc('past', index + 1)} alt={member.name} />
          <span>Alumni</span>
          <h3>{member.name}</h3>
          <p><strong>Position:</strong> {member.position}</p>
          {member.education && <p><strong>Education:</strong> {member.education}</p>}
          {member.currentStatus && <p><strong>Current Status:</strong> {member.currentStatus}</p>}
        </div>
      ))}
    </div>
  );
};

export default People;