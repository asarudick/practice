export function largestSubArray(arr?: number[]): number {
  if (!arr) return 0;
  if (!arr.length) return 0;
  let localMax = 0;
  let largestSoFar = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + largestSoFar);
    largestSoFar = Math.max(largestSoFar, localMax);
  }

  return largestSoFar;
}
