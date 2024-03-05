function isValidSudoku(board: string[][]): boolean {
  let rows = {};
  let columns = {};
  let squares = {};

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      let currentCell = board[r][c];
      let currentBox = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;
      if (currentCell == ".") continue;

      if (!rows[r]) rows[r] = new Set();
      if (!columns[c]) columns[c] = new Set();
      if (!squares[currentBox]) squares[currentBox] = new Set();

      if (
        rows[r].has(currentCell) ||
        columns[c].has(currentCell) ||
        squares[currentBox].has(currentCell)
      )
        return false;

      rows[r].add(currentCell);
      columns[c].add(currentCell);
      squares[currentBox].add(currentCell);
    }
  }

  return true;
}
