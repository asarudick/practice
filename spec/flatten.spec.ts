import { flatten, flattenStack } from '../src/flatten';
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
  it('should return [0, 1] for [[0], 1]', () => {
    const expected: any = [0, 1];
    const result = flatten([[0], 1]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 1] for [[0], [1]]', () => {
    const expected: any = [0, 1];
    const result = flatten([[0], [1]]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 1] for [[[0]], [1]]', () => {
    const expected: any = [0, 1];
    const result = flatten([[[0]], [1]]);
    expect(result).toEqual(expected);
  });
});
describe('flattenStack', () => {
  it('should return [] for []', () => {
    const expected: any = [];
    const result = flattenStack([]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [0]', () => {
    const expected: any = [0];
    const result = flattenStack([0]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [[0]]', () => {
    const expected: any = [0];
    const result = flattenStack([[0]]);
    expect(result).toEqual(expected);
  });
  it('should return [0] for [[[0]]]', () => {
    const expected: any = [0];
    const result = flattenStack([[[0]]]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 1] for [[0], 1]', () => {
    const expected: any = [0, 1];
    const result = flattenStack([[0], 1]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 1] for [[0], [1]]', () => {
    const expected: any = [0, 1];
    const result = flattenStack([[0], [1]]);
    expect(result).toEqual(expected);
  });
  it('should return [0, 1] for [[[0]], [1]]', () => {
    const expected: any = [0, 1];
    const result = flattenStack([[[0]], [1]]);
    expect(result).toEqual(expected);
  });
});
