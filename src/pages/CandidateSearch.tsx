import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/styles.css';


const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Initialize empty array
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const allCandidates = await searchGithub(); // Fetch candidates using the initial API function
        console.log('Fetch for all candidate data:', allCandidates);

        // Fetch detailed data for each candidate
        const detailedCandidates = await Promise.all(
          allCandidates.map(async (allCandidates) => {
            // Fetch detailed data for each candidate by username
            const detailedData = await searchGithubUser(allCandidates.login);
            return detailedData;
          })
        );

        console.log('Fetched detailed candidate data:', detailedCandidates); // Log to verify structure of detailed data

        // Set candidates with detailed data
        setCandidates(detailedCandidates);

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

  console.log("Candidate data in Candidate Search:", candidates);

  //This is where the Object array and tags are getting returned 
  return (


    // <div>
    //   <div className="candidate-list">
    //     {candidates.length > 0 ? (
    //       candidates.map(candidate => (
    //         <div key={candidate.id} className="candidate-item">
    //           <img src={candidate.avatar_url} alt={`${candidate.login}'s Avatar`} className="candidate-avatar" />
    //           <div>

    //             <p>
    //               <a>Location: {candidate.location}</a>
    //             </p>
           
    //             <p>
    //               <a href={`:${candidate.email}`}>Email: {candidate.email}</a>
    //             </p>
      

    //             <p>
    //               <a>Company: {candidate.company}</a>
    //             </p>

    //             <p>
    //               <a>Bio: {candidate.bio}</a>
    //             </p>

    //             <p>
    //               <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
    //                 {candidate.login}
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No candidates found.</p>
    //     )}
    //   </div>
    // </div>


<div className="carousel-container">
  <div className="candidate-list">
    {candidates.length > 0 ? (
      candidates.map((candidate) => (
        <div key={candidate.id} className="candidate-item">
          <div className="row avitar">
            <div className="col-12 d-flex justify-content-center">
              <img
                src={candidate.avatar_url}
                alt={`${candidate.login}'s Avatar`}
                className="candidate-avatar"
              />
            </div>
          </div>
          <div className="candidate-details">
            <p>
              <a>Location: {candidate.location}</a>
            </p>

            <p className="candidate-email">
              <a href={`mailto:${candidate.email}`}>Email: {candidate.email}</a>
            </p>

            <p>
              <a>Company: {candidate.company}</a>
            </p>

            <p>
              <a>Bio: {candidate.bio}</a>
            </p>

            <p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                {candidate.login}
              </a>
            </p>
          </div>
        </div>
      ))
    ) : (
      <p>No candidates found.</p>
    )}
  </div>
</div>




    // <Swiper
    // modules={[Navigation, Pagination]} // Register modules directly in Swiper component
    // navigation
    // pagination={{ clickable: true }}
    // spaceBetween={50}
    // slidesPerView={1}
    // >
    // {candidates.map((candidate) => (
    //   <SwiperSlide key={candidate.id}>
    //     <div className="candidate-item">
    //       {/* Your candidate content here */}
    //     </div>
    //   </SwiperSlide>
    // ))}
    // </Swiper>






  );
};

export default CandidateSearch;