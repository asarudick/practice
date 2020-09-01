enum Direction {
  Up,
  Right,
  Down,
  Left,
}

const forwardMoves = new Map<Direction, number[]>([
  [Direction.Down, [0, -1]],
  [Direction.Right, [1, 0]],
]);

const backwardMoves = new Map<Direction, number[]>([
  [Direction.Up, [0, 1]],
  [Direction.Left, [-1, 0]],
]);

export default function uniquePaths(grid: number[][]) {
  const rowSize = grid.length;
  const colSize = grid[0].length;

  const paths = grid.map(() => new Array(rowSize + 1).fill(0));

  paths[rowSize - 1][colSize - 1] = 1;

  for (let row = rowSize - 1; row >= 0; row--) {
    for (let col = colSize - 1; col >= 0; col--) {
      let sum = 0;
      if (paths[row + 1] && paths[row + 1][col]) sum += paths[row + 1][col];
      if (paths[row] && paths[row][col + 1]) sum += paths[row][col + 1];

      paths[row][col] = paths[row][col] || sum;
    }
  }

  return paths[0][0];
}
