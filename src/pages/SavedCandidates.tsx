import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const handleSaveCandidate = (candidate: Candidate) => {
    const updatedCandidates = [...savedCandidates, candidate];
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  const handleRemoveCandidate = (id: string) => {
    const updatedCandidates = savedCandidates.filter(c => c.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  // Adding a sample candidate to demonstrate the save functionality
  const sampleCandidate: Candidate = {
    id: '12345',
    name: 'John Doe',
    username: 'johndoe',
    avatar_url: 'https://example.com/avatar.jpg', // Placeholder URL
    login: '',
    html_url:'',

    // Include other properties that match your Candidate interface
  };

  return (
    <div>
      <h2>Saved Candidates</h2>
      <button onClick={() => handleSaveCandidate(sampleCandidate)}>
        Save Sample Candidate
      </button>
      <ul>
        {savedCandidates.map(candidate => (
          <li key={candidate.id}>
            {candidate.name} 
            <button onClick={() => handleRemoveCandidate(candidate.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCandidates;