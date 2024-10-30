import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts'; // Adjust the path as needed
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

interface CandidateCardProps {
  candidate: Candidate;
  addToCanidateList: () => void;
  removeFromCanidates?: () => void;
  onCandidateList: boolean;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, addToCanidateList, removeFromCanidates, onCandidateList }) => {
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

      {/* //This add's or removes a candidate */}
      <div className="candidate-actions">
        {onCandidateList ? (
          <aside className='icons'>
            <ImCross
              style={{ fontSize: '40px', cursor: 'pointer' }}
              onClick={removeFromCanidates}  // Use removeFromStorage here if available
            />
          </aside>
        ) : (
          <aside className='icons'>
            <CgPlayListAdd
              style={{ fontSize: '50px', cursor: 'pointer' }}
              onClick={addToCanidateList}
            />
          </aside>
        )}

        <button className="remove">-</button>
        <button className="add">+</button>
        
      </div>
    </div>
  );
};

export default CandidateCard;