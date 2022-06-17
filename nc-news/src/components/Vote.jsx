import { useState, useEffect } from "react";
import { changeVotes } from "../utils/api";
import ToggleButton from "react-bootstrap/ToggleButton";

const Vote = ({articleID, articleVotes}) => {

    const [voteInc, setVoteInc] = useState(0)


    const handleUpVote = (ID) => {
        if(voteInc === 0){
            setVoteInc(1)
            changeVotes(ID, 1)
        } else if (voteInc === -1) {
            setVoteInc(0)
            changeVotes(ID, 1)
        }
        
      }

      const handleDownVote = (ID) => {
        if(voteInc === 0) {
           setVoteInc(-1)  
            changeVotes(ID, -1)
        } else if (voteInc === 1){
            setVoteInc(0)
            changeVotes(ID, -1)
        }
       
      }

 return (
    <section className="vote-btn">
    <ToggleButton onClick={() => handleUpVote(articleID)} variant="success">
      <span className="material-symbols-outlined">thumb_up</span>
    </ToggleButton>
    <h3 className={(articleVotes + voteInc) > 0 ? "green-txt" : (articleVotes + voteInc)
    < 0 ? "red-txt" : "txt"}>
      <span className="material-symbols-outlined">
        thumbs_up_down
      </span>{" "}
      ( {articleVotes + voteInc} votes)
    </h3>
    <ToggleButton onClick={() => handleDownVote(articleID)} variant="danger">
      <span className="material-symbols-outlined">
        thumb_down
      </span>
    </ToggleButton>
  </section>
 )
}

export default Vote;