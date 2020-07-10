import { powerSet } from '../src/powerSet';
import { it, expect, describe } from '@jest/globals';

describe('powerSet', () => {
  it('should return only the empty set', () => {
    const expected: number[][] = [
      []
    ];
    const result = powerSet([]);
    expect(result).toStrictEqual(expected);
  });
  it('should return only empty set and [1]', () => {
    const expected: number[][] = [
      [],
      [1]
    ];
    const result = powerSet([1]);
    expect(result).toStrictEqual(expected);
  });
  it('should return all subsets of [1,2]', () => {
    const expected: number[][] = [
      [],
      [1],
      [1, 2],
      [2]
    ];
    const result = powerSet([1,2]);
    expect(result).toStrictEqual(expected);
  });
  it('should return all subsets of [1,2,3]', () => {
    const expected: number[][] = [
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3]
    ];
    const result = powerSet([1,2,3]);
    expect(result).toStrictEqual(expected);
  });
});
