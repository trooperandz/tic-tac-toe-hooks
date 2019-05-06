import React, { useState } from 'react';

import Board from './Board';
import { checkWinner } from '../util';
import '../styles/game.css';
import '../styles/square.css';
import '../styles/board.css';

function Game() {
  const [gameArr, updateGameArr] = useState(Array(9).fill(null));
  const [shouldShowX, updateMarker] = useState(true);
  const [winner, updateWinnerStatus] = useState(false);
  const [gameHistoryArr, updateGameHistory] = useState([{ gameArr }]);
  const [isViewingHistory, updateHistoryViewStatus] = useState(false);
  
  const winnerMarkup = winner
    ? <div className="heading-win">{`Player ${winner} won!`}</div>
    : null;

  const playerStatus = shouldShowX ? 'X' : 'O';

  // Update the game index so that the square can reflect the updated value
  const handleSquareClick = (i) => {
    if (winner || isViewingHistory) return null;

    const newArr = gameArr.slice();
    const marker = (shouldShowX ? 'X' : 'O');

    newArr[i] = marker;
    updateGameArr(newArr);
    updateMarker(!shouldShowX);
    updateWinnerStatus(checkWinner(newArr));
    updateGameHistory(gameHistoryArr.concat([{ gameArr: newArr }]));
  };

  const jumpToMove = (moveArr, moveNumber) => {
    const isViewingHistory = (moveNumber < (gameHistoryArr.length - 1));
    updateHistoryViewStatus(isViewingHistory);
    updateGameArr(moveArr);
  };

  const renderHistory = () => {
    return gameHistoryArr.map(({ gameArr }, moveNumber) => {
      return (
        <li>
          <button onClick={() => jumpToMove(gameArr, moveNumber)}>
            {`Go to move ${moveNumber}`}
          </button>
        </li>
      );
    });
  };

  const renderPlayerHeading = () => {
    if (!winner) {
      return <h3 className="heading-player">{`Next Player: ${playerStatus}`}</h3>;
    }
    
    return null;
  };

  return (
    <div className="game">
      {winnerMarkup}
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        {renderPlayerHeading()}
        <Board
          gameArr={gameArr}
          onClickSquare={handleSquareClick}
        />
        <div className="history-wrapper">
          <h5 className="history-heading">Move History</h5>
          <ol className="history-list">
            {renderHistory()}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Game;