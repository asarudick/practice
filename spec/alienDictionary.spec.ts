import { it, expect, describe } from '@jest/globals';
import alienDictionary from '../src/alienDictionary';

describe('alienDictionary', () => {
  it('should return true for ["app", "apple"], "abcdefghijklmnopqrstuvwxyz"', () => {
    const expected: boolean = true;
    const result = alienDictionary(
      ['app', 'apple'],
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(result).toEqual(expected);
  });
  it('should return true for ["apple", "app"], "abcdefghijklmnopqrstuvwxyz"', () => {
    const expected: boolean = false;
    const result = alienDictionary(
      ['apple', 'app'],
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(result).toEqual(expected);
  });
  it('should return true for ["app", "app"], "abcdefghijklmnopqrstuvwxyz"', () => {
    const expected: boolean = true;
    const result = alienDictionary(
      ['app', 'app'],
      'abcdefghijklmnopqrstuvwxyz'
    );
    expect(result).toEqual(expected);
  });
  it('should return true for ["word", "world"], "worldabcefghijkmnpqstuvxyz"', () => {
    const expected: boolean = false;
    const result = alienDictionary(
      ['word', 'world', 'row'],
      'worldabcefghijkmnpqstuvxyz'
    );
    expect(result).toEqual(expected);
  });
  it('should return true for ["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"', () => {
    const expected: boolean = false;
    const result = alienDictionary(
      ['word', 'world', 'row'],
      'hlabcdefgijkmnopqrstuvwxyz'
    );
    expect(result).toEqual(expected);
  });
});
