import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('user');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }

  }, []);

  const removeFromCanidates = (id: string) => {
    const updatedCandidates = savedCandidates.filter(c => c.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  // Adding a sample candidate to demonstrate the save functionality
  return (
    <div>
      <ul>
        {savedCandidates.map(candidate => (
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
            <button onClick={()=>removeFromCanidates(candidate.id)} className="remove">-</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SavedCandidates;