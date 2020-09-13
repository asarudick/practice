export default function (molecule: string, length: number): string[] {
  const map = new Map<string, number>();
  let i = 0;

  while (i + length < molecule.length) {
    let sequence: string = molecule.substr(i, length);

    if (!map.has(sequence)) map.set(sequence, 1);
    else map.set(sequence, map.get(sequence)! + 1);

    i++;
  }

  const result = [];

  for (const [k, v] of map.entries()) {
    if (v > 1) result.push(k);
  }

  return result;
}
