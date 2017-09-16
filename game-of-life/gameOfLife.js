const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1]
];

let newBoard = board.map((row, i) => {
  return row.map((col, j) => {
    // return newCell(board, i, j);
  });
});

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    // console.log("hey");
  }
}

for (let i = 0; i < board.length; i++) {
  // console.log(board[i]);
}

// Get new result of a cell
function generateNewCell(board, i, j) {
  const neighborCells = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
  ];

  // Calculate the number of surrounding cells
  const totalNeighbors = neighborCells.reduce((sum, cell) => {
    const x = j + cell[0];
    const y = i + cell[1];
    console.log(x, y);
    if (board[x] && board[x][y]) {
      return sum + 1;
    }
    return sum;
  }, 0);

  // Return the cell based on rules
  console.log("total neighbors:", totalNeighbors);
}

generateNewCell(board, 3, 4);
console.log("board height:", board.length);
