export const EMPTY_BOARD = Array(7)
  .fill("_")
  .map((_) =>
    Array(6)
      .fill("|")
      .map((_) => null),
  );
// [ [ null , ID ,ID ,ID... ]  , [...]]
export function checkWinner(board) {
  const directions = [
    { dr: 0, dc: 1 }, // Horizontal
    { dr: 1, dc: 0 }, // Vertical
    { dr: 1, dc: 1 }, // Diagonal bottom-left to top-right
    { dr: -1, dc: 1 }, // Diagonal top-left to bottom-right
  ];

  function isWinningLine(r, c, dr, dc) {
    const player = board[r][c];
    if (player === null) return false;
    return Array.from({ length: 4 }, (_, i) => board[r + i * dr]?.[c + i * dc]).every((cell) => cell === player);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      for (let { dr, dc } of directions) {
        if (isWinningLine(r, c, dr, dc)) {
          return { message: ``, player: board[r][c], row: r, column: c };
        }
      }
    }
  }

  return null; // No winner
}
