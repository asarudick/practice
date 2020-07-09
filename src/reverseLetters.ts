const nonLetterPattern = /[^a-zA-Z]/;

export function reverseLetters (str: string) {
  if (!str) return str;
  let start = 0;
  let end = str.length - 1;
  const arr = str.split('');

  while (start < end) {

    // Skip all non-letters.
    while (start < end && nonLetterPattern.test(arr[start])) {
      start++;
    }

    while (start < end && nonLetterPattern.test(arr[end])) {
      end--;
    }

    // Swap.
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;

    // Done with the swapped letters.
    start++;
    end--;
  }

  return arr.join('');
}
