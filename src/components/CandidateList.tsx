import type React from 'react';
// TODO: Uncomment when Film interface is added
import type {Candidate} from '../interfaces/Candidate.interface';
import _CandidateCard from './CandidateCard';

interface CandidateListProps {
  candidateWatch: Candidate[];
  removeFromStorage: (title: string) => void;
}

// TODO: Destructure filmsToWatch from props
const CandidatesList: React.FC<CandidateListProps> = ({ candidateWatch, removeFromStorage }) => {
  console.log(candidateWatch);
  return (
    <>
      <ul>
        {/* {candidateWatch.map((candidate) => (
          // <CandidateCard
          // candidate={candidate}
          // key={candidate.username}   //!!!!!!!!!!!!!!!!!!!! I am not sure if username is correct
          // addToCanidateList={true}
          // addToWatchList={() => {}}
          // removeFromStorage={() => removeFromStorage(candidate.username)}
          />
        ))} */}
      </ul>
    </>
  );
};

export default CandidatesList;
