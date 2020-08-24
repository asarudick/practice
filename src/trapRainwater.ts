export function trapRainwater(heights: number[]) {
  const water: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    let maxLeft = heights[i],
      maxRight = heights[i];
    for (let j = i; j < heights.length; j++) {
      maxRight = Math.max(heights[j], maxRight);
    }
    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(heights[j], maxLeft);
    }

    const min = Math.min(maxLeft, maxRight);
    water.push(min - heights[i]);
  }

  return water;
}

export function trapRainwaterDp(heights: number[]) {
  const water: number[] = [];
  const left: number[] = [];
  const right: number[] = [];

  let maxSoFar = 0;

  for (let i = 0; i < heights.length; i++) {
    maxSoFar = Math.max(maxSoFar, heights[i]);
    left.push(maxSoFar);
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    maxSoFar = Math.max(maxSoFar, heights[i]);
    right.push(maxSoFar);
  }

  for (let i = 0; i < heights.length; i++) {
    water.push(Math.max(left[i], right[i]) - heights[i]);
  }

  return water;
}
