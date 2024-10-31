import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts'; // Adjust the path as needed


interface CandidateCardProps {
  candidate: Candidate;
  addToCanidateList: () => void | undefined;
  removeFromCanidates: () => void | undefined;
}


const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, addToCanidateList, removeFromCanidates }) => {
  return (
    <div className="candidate-card">
      <figure>
        <img src={candidate.avatar_url} alt={`${candidate.login}'s Avatar`} className="candidate-avatar" />
      </figure>
      <article className="candidate-details">
        <p className="candidate-name">
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            {candidate.login}
          </a>
        </p>
        {candidate.location && <p>Location: {candidate.location}</p>}
        {candidate.company && <p>Company: {candidate.company}</p>}
        {candidate.bio && <p>Bio: {candidate.bio}</p>}
      </article>

      <button onClick={()=>removeFromCanidates()} className="remove">-</button>
      <button onClick={()=>addToCanidateList()} className="add">+</button>
    </div>

  );
};

export default CandidateCard;