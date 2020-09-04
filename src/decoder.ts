export default function (message: string[][]): string {
  let ydir = 1;
  let y = 0;
  let x = 0;
  const result = [];

  while (x < message[0].length) {
    if (y + ydir >= message.length) ydir = -1;
    if (y + ydir < 0) ydir = 1;
    result.push(message[y][x]);
    y += ydir;
    x++;
  }

  return result.join('');
}
