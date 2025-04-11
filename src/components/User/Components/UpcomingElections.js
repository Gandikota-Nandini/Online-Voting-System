import { useEffect, React, useRef} from 'react';
import ScrollReveal from "scrollreveal";
import { useNavigate } from 'react-router-dom';

import "../CSS/upcomingElections.css"
const UpcomingElections = ({voteStatus})=>{
    const navigate = useNavigate();
   
    // const handleButtonClick = () => {
    //     if (voteStatus) {
    //         alert("You Have Already Voted");
    //     } else {
    //         navigate('/Vote')
    //     }
    //   };
    
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);  
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);
  
    useEffect(() => {
    
      // Initialize ScrollReveal
      ScrollReveal().reveal(revealRefBottom.current, {
        // You can configure options here
        duration: 1000,
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease',
        reset: 'true',
      });
    }, []);
    useEffect(() => {
    
      // Initialize ScrollReveal
      ScrollReveal().reveal(revealRefRight.current, {
        // You can configure options here
        duration: 1000,
        delay: 200,
        distance: '50px',
        origin: 'right',
        easing: 'ease',
        reset: 'true',
      });
    }, []);  useEffect(() => {
    
      // Initialize ScrollReveal
      ScrollReveal().reveal(revealRefLeft.current, {
        // You can configure options here
        duration: 1000,
        delay: 200,
        distance: '50px',
        origin: 'left',
        easing: 'ease',
        reset: 'true',
      });
    }, []);  useEffect(() => {
    
      // Initialize ScrollReveal
      ScrollReveal().reveal(revealRefTop.current, {
        // You can configure options here
        duration: 1000,
        delay: 200,
        distance: '50px',
        origin: 'top',
        easing: 'ease',
        reset: 'true',
      });
    }, []); 
    return(
        <div className="upcomingElections">
            <h2 ref={revealRefTop}>Upcoming Elections</h2>
 
            <div className="upcomingElectionsCardContainer">
                <div className="upcomingElectionCard" ref={revealRefLeft}>
                    <h3>Bihar Assembly Elections 2025</h3><br/>
                    <p>The bihar assembly Elections are expected to be mutlicornered contest with ruling National Democratic Alliance(NDA),led by the Janata Dal(United)(JD(U)) and BJP,facing off against the Mahagathbandan(Grand Alliance) comprising the Rashtriya Janata Dal(RJD),the INC and other parties.</p><br/>
                    <button><a href='/Vote'>Participate/Vote</a></button>
                </div>
                <div className="upcomingElectionCard" ref={revealRefBottom}>
                    <h3>Tamil Nadu Legislative Assembly Elections 2026</h3><br/>
                    <p>The Next Tamil Nadu legislative assembly election is expected to be held in April–May 2026 to elect all 234 members of the Tamil Nadu Legislative Assembly. M. K. Stalin is the incumbent Chief Minister of Tamil Nadu..</p><br/>
                    <button><a href='/Vote'>Participate/Vote</a></button>
                </div>
                <div className="upcomingElectionCard" ref={revealRefRight}>
                    <h3>2026 Assam Legislative Assembly election</h3><br/>
                    <p>Legislative Assembly elections will be held in Assam in month of March to April 2026 to elect 126 members of the Assam Legislative Assembly. The term of current assembly elected in 2021 will expire on May 2, 2026. Himanta Biswa Sharma currently plans to continue in his role as chief minister for the elections</p><br/>
                    <button><a href='/Vote'>Participate/Vote</a></button>
                </div>

            </div>
        </div>
    )
}
export default UpcomingElections;