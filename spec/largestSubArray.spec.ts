import { largestSubArray } from '../src/largestSubArray';
import { it, expect, describe } from '@jest/globals';

describe('largestSubArray', () => {
  it('should return 0 for empty params', () => {
    const expected = 0;
    const result = largestSubArray();
    expect(result).toBe(expected);
  });
  it('should return 0 for empty array', () => {
    const expected = 0;
    const result = largestSubArray([]);
    expect(result).toBe(expected);
  });
  it('should return only element if array length is 1', () => {
    const arr = [1];
    const expected = 1;
    const result = largestSubArray(arr);
    expect(result).toBe(expected);
  });
  it('should return 3 for [1, 2]', () => {
    const arr = [1, 2];
    const expected = 3;
    const result = largestSubArray(arr);
    expect(result).toBe(expected);
  });
  it('should return 6 for [1, 2, 3]', () => {
    const arr = [1, 2, 3];
    const expected = 6;
    const result = largestSubArray(arr);
    expect(result).toBe(expected);
  });
  it('should return 7 for [1, 2, 3, 0, 0, 0, 1]', () => {
    const arr = [1, 2, 3, 0, 0, 0, 1];
    const expected = 7;
    const result = largestSubArray(arr);
    expect(result).toBe(expected);
  });
  it('should return 6 for [1, 2, 3, -1]', () => {
    const arr = [1, 2, 3, -1];
    const expected = 6;
    const result = largestSubArray(arr);
    expect(result).toBe(expected);
  });
});
