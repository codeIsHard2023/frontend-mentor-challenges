import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/homepage/Button.css";
import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
function ButtonChallenge({ challenge }) {
  const [challengeChoice, setChallengeChoice] = useState(null);
  const navigate = useNavigate();

  const handleChallengeSelection = () => {
    setChallengeChoice(challenge);
  };

  const changeFormatChallengeChoice = (challengeStringtoFormat) => {
    return challengeStringtoFormat.toLowerCase().split(" ").join("-");
  };

  useEffect(() => {
    if (challengeChoice) {
      navigate(`/challenge-${changeFormatChallengeChoice(challengeChoice)}`);
    }
  }, [challengeChoice, navigate]);

  const handleClick = () => {
    handleChallengeSelection();
  };

  return (
    <Button size="sm" variant="secondary" type="button" onClick={handleClick}>
      {challenge}
    </Button>
  );
}

export default ButtonChallenge;
