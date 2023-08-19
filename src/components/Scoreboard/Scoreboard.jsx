import PropTypes from 'prop-types';

function ScoreBoard({ player1Score, player2Score, numberOfPlayers }) {
  return (
    <div className="scoreboard-container">
      <div className="player-score">
        Player 1: <span>{player1Score}</span>
      </div>
      {numberOfPlayers === "2" && (
        <div className="player-score">
          Player 2: <span>{player2Score}</span>
        </div>
      )}
    </div>
  );
}

ScoreBoard.propTypes = {
  player1Score: PropTypes.number.isRequired,
  player2Score: PropTypes.number,
  numberOfPlayers: PropTypes.string.isRequired,
};

export default ScoreBoard;
