import { it, expect, describe } from '@jest/globals';
import bstLevelAverage from '../src/btLevelAverage';
import { Node } from '../src/Node';

describe('bstLevelAverage', () => {
  it('should return empty array for empty input', () => {
    const expected: number[] = [];
    const result = bstLevelAverage();
    expect(result).toEqual(expected);
  });
  it('should return an array of only the root\'s value', () => {
    const expected: number[] = [1];
    const result = bstLevelAverage(new Node(1));
    expect(result).toEqual(expected);
  });
  it('should return an array of [1, 1]', () => {
    const expected: number[] = [1, 1];
    const result = bstLevelAverage(new Node(1, new Node(1)));
    expect(result).toEqual(expected);
  });
  it('should return an array of [1, 1]', () => {
    const expected: number[] = [1, 1];
    const result = bstLevelAverage(new Node(1, new Node(1), new Node(1)));
    expect(result).toEqual(expected);
  });
  it('should return an array of [1, 2]', () => {
    const expected: number[] = [1, 2];
    const result = bstLevelAverage(new Node(1, new Node(1), new Node(3)));
    expect(result).toEqual(expected);
  });
  it('should return an array of [1, 2, 3]', () => {
    const expected: number[] = [1, 2, 3];
    const root = new Node(1, new Node(1, new Node(3)), new Node(3));
    const result = bstLevelAverage(root);
    expect(result).toEqual(expected);
  });
  it('should return an array of [1, 2, 3]', () => {
    const expected: number[] = [1, 2, 3];
    const root = new Node(1, new Node(1, new Node(3)), new Node(3, new Node(3)));
    const result = bstLevelAverage(root);
    expect(result).toEqual(expected);
  });
});
