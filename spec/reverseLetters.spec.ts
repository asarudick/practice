import { reverseLetters } from '../src/reverseLetters';
import { it, expect, describe } from '@jest/globals';

describe('reverseLetters', () => {
  it('should return if string is empty', () => {
    const expected = '';
    const result = reverseLetters('');
    expect(result).toBe(expected);
  });
  it('should return same string if only 1 letter', () => {
    const expected = 'a';
    const result = reverseLetters('a');
    expect(result).toBe(expected);
  });
  it('should return same string if only 1 non-letter', () => {
    const expected = '-';
    const result = reverseLetters('-');
    expect(result).toBe(expected);
  });
  it('should swap ab for ba', () => {
    debugger;
    const expected = 'ba';
    const result = reverseLetters('ab');
    expect(result).toBe(expected);
  });
  it('should return -a for -a', () => {
    const expected = '-a';
    const result = reverseLetters('-a');
    expect(result).toBe(expected);
  });
  it('should return b- for b-', () => {
    const expected = 'b-';
    const result = reverseLetters('b-');
    expect(result).toBe(expected);
  });
  it('should return -b- for -b-', () => {
    const expected = '-b-';
    const result = reverseLetters('-b-');
    expect(result).toBe(expected);
  });
  it('should return ababa for ababa', () => {
    const expected = 'ababa';
    const result = reverseLetters('ababa');
    expect(result).toBe(expected);
  });
  it('should return abcde-- for edcba--', () => {
    const expected = 'edcba--';
    const result = reverseLetters('abcde--');
    expect(result).toBe(expected);
  });
});
