import React, { useState } from 'react';

import '../styles/square.css';

function Square({ marker, index, onClickSquare }) {
  // Highlight the square if a marker exists (remember we have history too)
  const activeClass = (marker ? 'active' : '');

  return (
    <div className={`square ${activeClass}`} onClick={() => onClickSquare(index)}>
      {marker}
    </div>
  );
}

export default Square;