import { it, expect, describe } from '@jest/globals';
import decoder from '../src/decoder';

describe('decoder', () => {
  it('should return a', () => {
    const expected: string = 'a';
    const result = decoder([['a']]);
    expect(result).toEqual(expected);
  });
  it('should return ab', () => {
    const expected: string = 'ab';
    const result = decoder([
      ['a', 'i'],
      ['j', 'b'],
    ]);
    expect(result).toEqual(expected);
  });
  it('should return abc', () => {
    const expected: string = 'abc';
    const result = decoder([
      ['a', 'i', 'c'],
      ['j', 'b', 'k'],
    ]);
    expect(result).toEqual(expected);
  });
  it('should return abcd', () => {
    const expected: string = 'abcd';
    const result = decoder([
      ['a', 'i', 'c', 'm'],
      ['j', 'b', 'k', 'd'],
    ]);
    expect(result).toEqual(expected);
  });
  it('should return abcd', () => {
    const expected: string = 'abcde';
    const result = decoder([
      ['a', 'i', 'c', 'm', 'e'],
      ['j', 'b', 'k', 'd', 'x'],
    ]);
    expect(result).toEqual(expected);
  });
});
