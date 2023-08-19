import CardContainer from "../Card/Card";
import ScoreBoard from "../Scoreboard/Scoreboard";
import { useState } from "react";
import { useRouter } from "next/router";

export default function GameBoard() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const router = useRouter();
  const numberOfPlayers = router.query.players || "1";
  const gridSize = router.query.gridSize || "4x4";

  const handlePairFound = () => {
    if (currentPlayer === 1) {
      setPlayer1Score(player1Score + 1);
    } else if (numberOfPlayers === "2") {
      setPlayer2Score(player2Score + 1);
    }
    if (numberOfPlayers === "2") {
      togglePlayer();
    }
  };

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div>
      <ScoreBoard
        player1Score={player1Score}
        player2Score={player2Score}
        numberOfPlayers={numberOfPlayers}
      />
      <CardContainer onPairFound={handlePairFound} gridSize={gridSize} />
    </div>
  );
}
