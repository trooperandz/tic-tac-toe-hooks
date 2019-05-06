// Check every possible winning sequence against the game array on every move
function checkWinner(moveArr) {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winArr.length; i++) {
    const [a, b, c] = winArr[i];

    if (moveArr[a] 
      && moveArr[a] === moveArr[b] 
      && moveArr[a] === moveArr[c]
    ) return moveArr[a];
  }

  return null;
}

export {
  checkWinner,
};