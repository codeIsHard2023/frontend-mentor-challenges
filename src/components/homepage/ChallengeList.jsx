import { listOfChallenges } from "../../modules/challenges.js";
import ButtonChallenge from "./ButtonChallenge";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/homepage/ChallengeList.css";

function ChallengeList() {
  return (
    <ListGroup as="ul">
      {listOfChallenges.map((elem, index) => (
        <ButtonChallenge key={index} challenge={elem} />
      ))}
    </ListGroup>
  );
}

export default ChallengeList;
