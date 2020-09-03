import flatten from '../src/flatten';
import { it, expect, describe } from '@jest/globals';

describe('flatten', () => {
  it('should return [] for []', () => {
    const expected: any = [];
    const result = flatten([]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [0]', () => {
    const expected: any = [0];
    const result = flatten([0]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [[0]]', () => {
    const expected: any = [0];
    const result = flatten([[0]]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [[[0]]]', () => {
    const expected: any = [0];
    const result = flatten([[[0]]]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 0] for [[0], 0]', () => {
    const expected: any = [0, 0];
    const result = flatten([[0], 0]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 0] for [[0], [0]]', () => {
    const expected: any = [0, 0];
    const result = flatten([[0], [0]]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 0] for [[[0]], [0]]', () => {
    const expected: any = [0, 0];
    const result = flatten([[[0]], [0]]);
    expect(result).toEqual(expected);
  });
});
