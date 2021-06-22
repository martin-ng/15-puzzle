//=============================================================================
// UI Logic
//=============================================================================

import { createBoard, playGame, shuffleBoard, movesTaken } from "./puzzle.js";

const board = createBoard();
const boardElement = document.querySelector(".board");
const shuffleElement = document.querySelector(".shuffle");
const moves = document.querySelector("[moves-count]");

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
  });
});

boardElement.addEventListener("click", (e) => {
  playGame(board, e.target);
  moves.textContent = movesTaken;
});

shuffleElement.addEventListener("click", () => {
  shuffleBoard(board);
  moves.textContent = movesTaken;
});
