import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts'; // Adjust the path as needed

interface CandidateCardProps {
    candidate: Candidate;
  }
  
  const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    return (
      <div className="candidate-card">
        <img src={candidate.avatar_url} alt={`${candidate.login}'s Avatar`} className="candidate-avatar" />
        <div className="candidate-details">
          <p className="candidate-name">
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              {candidate.login}
            </a>
          </p>
          {candidate.location && <p>Location: {candidate.location}</p>}
          {candidate.company && <p>Company: {candidate.company}</p>}
          {candidate.bio && <p>Bio: {candidate.bio}</p>}
        </div>
        <div className="candidate-actions">
          <button className="remove">-</button>
          <button className="add">+</button>
        </div>
      </div>
    );
  };
  
  export default CandidateCard;