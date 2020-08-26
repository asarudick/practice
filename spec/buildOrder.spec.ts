import { it, expect, describe } from '@jest/globals';
import buildOrder from '../src/buildOrder';
import { Node } from '../src/Node';

describe('buildOrder', () => {
  it('should return empty array for empty input', () => {
    const expected: string[] = [];
    const result = buildOrder([], []);
    expect(result).toEqual(expected);
  });
  it('should return empty array for empty input', () => {
    const expected: string[] = [];
    const result = buildOrder([], ['a']);
    expect(result).toEqual(expected);
  });
  it(`should return ['a']`, () => {
    const expected: string[] = ['a'];
    const result = buildOrder(['a'], []);
    expect(result).toEqual(expected);
  });
  it(`should return ['a', 'b']`, () => {
    const expected: string[] = ['a', 'b'];
    const result = buildOrder(['a', 'b'], [['a', 'b']]);
    expect(result).toEqual(expected);
  });
  it(`should return ['a', 'b', 'c']`, () => {
    const expected: string[] = ['a', 'b', 'c'];
    const result = buildOrder(
      ['a', 'b', 'c'],
      [
        ['a', 'b'],
        ['a', 'c'],
      ]
    );
    expect(result).toEqual(expected);
  });
  it(`should return ['a', 'b', 'c', 'd']`, () => {
    const expected: string[] = ['a', 'b', 'c', 'd'];
    const result = buildOrder(
      ['a', 'b', 'c', 'd'],
      [
        ['a', 'b'],
        ['a', 'c'],
        ['c', 'd'],
      ]
    );
    expect(result).toEqual(expected);
  });
  it(`should throw an error`, () => {
    const fn = () => buildOrder(['a', 'e'], [['e', 'e']]);
    expect(fn).toThrow();
  });
});
