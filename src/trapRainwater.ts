export default function (heights: number[]) {
    const water = [];

    for (let i = 0; i < heights.length; i++) {
        let maxLeft = heights[i], maxRight = heights[i];
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