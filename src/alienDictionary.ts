export function wordComparator(
  w1: string,
  w2: string,
  alphabet: number[]
): -1 | 0 | 1 {
  const min = Math.min(w1.length, w2.length);

  for (let i = 0; i < min; i++) {
    const [c1, c2] = [
      alphabet[w1.charCodeAt(i) - 'a'.charCodeAt(0)],
      alphabet[w2.charCodeAt(i) - 'a'.charCodeAt(0)],
    ];

    if (c1 > c2) return 1;
    if (c2 > c1) return -1;
  }

  return w1.length <= w2.length ? 0 : 1;
}

export default function (words: string[], order: string): boolean {
  const chars: string[] = order.split('');
  const alphabet: number[] = new Array(26).fill(0);

  for (const [i, char] of chars.entries()) {
    alphabet[char.charCodeAt(0) - 'a'.charCodeAt(0)] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    const [w1, w2] = [words[i], words[i + 1]];
    const compare = wordComparator(w1, w2, alphabet);
    if (compare === 1) return false;
  }

  return true;
}
