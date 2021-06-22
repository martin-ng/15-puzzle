//=============================================================================
// Game Logic
//=============================================================================

// Global variables that points to the grid's empty space and the user's number of moves.
let boardSize = 4;
let emptyRow = boardSize - 1;
let emptyCol = boardSize - 1;
export let movesTaken = 0;

// A board size of 4 was hardcoded for the purpose of this project, but this function adapts to a dynamically sized board.
export function createBoard() {
  const board = [];
  let number = 1;

  for (let r = 0; r < boardSize; r++) {
    const row = [];
    for (let c = 0; c < boardSize; c++) {
      const element = document.createElement("div");
      element.dataset.row_coordinate = r;
      element.dataset.col_coordinate = c;
      element.innerHTML = number;
      if (r === boardSize - 1 && c === boardSize - 1) {
        element.innerHTML = null;
        element.style = "background-color: white";
        number = 0;
      }
      const tile = {
        number,
        element,
      };
      row.push(tile);
      number++;
    }
    board.push(row);
  }
  return board;
}

export function playGame(board, tile) {
  let sourceRow = getCoordinates(tile, "row_coordinate");
  let sourceCol = getCoordinates(tile, "col_coordinate");

  if (!checkSameRowCol(sourceRow, sourceCol)) return;
  moveRowOrCol(board, sourceRow, sourceCol);
}

//This function shuffles the board starting from the empty space to ensure it is solvable.
export function shuffleBoard(board) {
  // These numbers were arbitrarily chosen.
  const maxNum = 200;
  const minNum = 100;
  const neighbors = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  let maxShuffle = Math.floor(Math.random() * (maxNum - minNum) + minNum);

  while (maxShuffle) {
    const randomNeighbor = Math.floor(Math.random() * (4 - 0) + 0);
    let row = neighbors[randomNeighbor][0];
    let col = neighbors[randomNeighbor][1];
    let newRow = row + emptyRow;
    let newCol = col + emptyCol;

    if (
      newRow < 0 ||
      newRow > boardSize - 1 ||
      newCol < 0 ||
      newCol > boardSize - 1
    ) {
      continue;
    }

    moveRowOrCol(board, newRow, newCol);
    maxShuffle--;
  }

  movesTaken = 0;
}

function getCoordinates(tile, axis) {
  return parseInt(tile.dataset[axis]);
}

function checkSameRowCol(row, col) {
  return row === emptyRow || col === emptyCol;
}

function swapTiles(board, targetRow, targetCol) {
  let targetDiv = board[targetRow][targetCol];
  let emptyDiv = board[emptyRow][emptyCol];
  let targetNum = targetDiv.number;

  emptyDiv.number = targetNum;
  emptyDiv.element.innerHTML = targetNum;
  emptyDiv.element.removeAttribute("style");

  targetDiv.number = 0;
  targetDiv.element.innerHTML = "";
  targetDiv.element.style = "background-color: white";
  targetDiv.element.classList.add("transition");

  movesTaken++;
}

/*** This function allows the user to move an entire row to an empty space ***/
function moveRowOrCol(board, sourceRow, sourceCol) {
  let incrementor = 1;
  if (sourceRow > emptyRow || sourceCol > emptyCol) {
    incrementor = -1;
  }
  while (sourceRow != emptyRow) {
    swapTiles(board, emptyRow - incrementor, emptyCol);
    emptyRow = emptyRow - incrementor;
  }
  while (sourceCol != emptyCol) {
    swapTiles(board, emptyRow, emptyCol - incrementor);
    emptyCol = emptyCol - incrementor;
  }
}

//This function was intended to implement an alert if the user solved the puzzle. It is currently inactive but it can be implemented into the game logic as the user makes moves.
function isSolved(board) {
  let number = 1;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (number <= 15 && board[i][j].innerHTML !== number.toString()) {
        return;
      }
      number++;
    }
  }
  return true;
}
