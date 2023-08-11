import CardContainer from "../Card/Card"
import ScoreBoard from "../Scoreboard/Scoreboard"
import { useState } from "react";

export default function GameBoard() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handlePairFound = () => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + 1);
    } else {
      setPlayer2Score(player2Score + 1);
    }
    togglePlayer();
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div>
      <ScoreBoard player1Score={player1Score} player2Score={player2Score} />
      <CardContainer onPairFound={handlePairFound} />
    </div>
  );
}
