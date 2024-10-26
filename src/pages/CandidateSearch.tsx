import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Initialize as an empty array
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub(); // Fetch candidates using the custom API function
        console.log('Fetched data:', data); // Log to verify the structure of `data`
        
        // Ensure the response data is an array, or set `candidates` to an empty array
        setCandidates(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch candidates:', err);
        setError('Failed to fetch candidates');
      }
    };

    fetchCandidates();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Candidate Search</h2>
      <div className="candidate-list">
        {candidates.length > 0 ? (
          candidates.map(candidate => (
            <div key={candidate.id} className="candidate-item">
              <img src={candidate.avatar_url} alt={`${candidate.login}'s Avatar`} className="candidate-avatar" />
              <div>
                <p>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    {candidate.login}
                  </a>
                </p>
                {/* Additional fields can be added here if available */}
              </div>
            </div>
          ))
        ) : (
          <p>No candidates found.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;