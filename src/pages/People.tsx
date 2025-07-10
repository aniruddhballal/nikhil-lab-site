// Import the JSON data files
import principalInvestigator from '../data/principalInvestigator.json';
import currentMembers from '../data/currentMembers.json';
import pastMembers from '../data/pastMembers.json';
import { Link } from 'react-router-dom';

const People = () => {
  return (
    <div>
      <Link to="/">← Back to Home</Link>
      <h1>People</h1>
      
      <h2>Principal Investigator</h2>
      <div>
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
        <p>Email: {principalInvestigator.contact.email.join(", ")}</p>
        <p>Phone: {principalInvestigator.contact.phone}</p>
      </div>

      <h2>Current Lab Members</h2>
      {currentMembers.map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p><strong>Position:</strong> {member.position}</p>
          {member.duration && <p><strong>Duration:</strong> {member.duration}</p>}
          {member.education && <p><strong>Education:</strong> {member.education}</p>}
          {member.achievements && member.achievements.length > 0 && (
            <div>
              <strong>Achievements:</strong>
              {member.achievements.map((achievement, achIndex) => (
                <p key={achIndex}>{achievement}</p>
              ))}
            </div>
          )}
          <div>
            <strong>Contact:</strong>
            {member.contact.email && <p>Email: {member.contact.email}</p>}
            {member.contact.phone && <p>Phone: {member.contact.phone}</p>}
          </div>
        </div>
      ))}

      <h2>Past Members</h2>
      {pastMembers.map((member, index) => (
        <div key={index}>
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