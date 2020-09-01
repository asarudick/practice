/**
 * Note: y/row is first coordinate, and x/col is second coordinate.
 */
const directionMap = new Map<string, number[]>([
  ['U', [-1, 0]],
  ['D', [1, 0]],
  ['R', [0, 1]],
  ['L', [0, -1]],
]);

export default function (word: string, layout: string[][]) {
  const letters = word.split('');

  let position = [0, 0];
  const result = [];

  function findLetter(letter: string) {
    for (let i = 0; i < layout.length; i++) {
      for (let j = 0; j < layout[i].length; j++) {
        if (layout[i][j] === letter) {
          return [i, j];
        }
      }
    }
    throw new Error('Letter not found.');
  }

  function nextDirection(start: number[], end: number[]) {
    let [y, x] = start;
    let [y2, x2] = end;

    let ydiff = y2 - y;
    let xdiff = x2 - x;

    let xdir = xdiff > 0 ? 1 : xdiff < 0 ? -1 : 0;
    let ydir = ydiff > 0 ? 1 : ydiff < 0 ? -1 : 0;

    // Test for whether we need to, and can, move horizontally.
    if (xdir && layout[y] && layout[y][x + xdir]) {
      return xdir > 0 ? 'R' : 'L';
    }

    // Test for whether we need to, and can, move vertically.
    if (ydir && layout[y + ydir] && layout[y + ydir][x]) {
      return ydir > 0 ? 'D' : 'U';
    }

    // We're at the target.
    return null;
  }

  for (const letter of letters) {
    const nextCoords = findLetter(letter);
    let direction = nextDirection(position, nextCoords);

    while (direction) {
      result.push(direction);

      const move = directionMap.get(direction);

      if (!move) throw new Error('Unknown move.');

      position = [position[0] + move[0], position[1] + move[1]];
      direction = nextDirection(position, nextCoords);
    }

    result.push('X');
  }

  return result.join('');
}
