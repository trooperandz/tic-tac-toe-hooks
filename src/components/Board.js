import React from 'react';

import Square from './Square';
import '../styles/board.css';

function Board({ gameArr, onClickSquare }) {
  const renderSquare = (i) => {
    return (
      <Square 
        marker={gameArr[i]}
        onClickSquare={onClickSquare}
        index={i}
      />
    );
  }

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;