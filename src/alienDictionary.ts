export function wordComparator(
  w1: string,
  w2: string,
  alphabet: number[]
): -1 | 0 | 1 {
  const min = Math.min(w1.length, w2.length);

  for (let i = 0; i < min; i++) {
    const [c1, c2] = [alphabet[w1.charCodeAt(i)], alphabet[w2.charCodeAt(i)]];
    if (c1 > c2) return 1;
    if (c2 > c1) return -1;
  }

  return w1.length <= w2.length ? 0 : 1;
}

export default function (words: string[], order: string): boolean {
  const chars: string[] = order.split('');
  const alphabet: number[] = chars.map(
    (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)
  );

  for (let i = 0; i < words.length - 1; i++) {
    const [w1, w2] = [words[i], words[i + 1]];
    const compare = wordComparator(w1, w2, alphabet);
    if (compare === 1) return false;
  }

  return true;
}
