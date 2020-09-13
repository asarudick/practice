import repeatedDnaSequence from '../src/repeatedDnaSequence';
import { it, expect, describe } from '@jest/globals';

describe('repeatedDnaSequence', () => {
  it('should return 1 for "agcgc", 2', () => {
    const expected = 1;
    const data = 'agcgca';
    const result = repeatedDnaSequence(data, 2);
    expect(result.length).toBe(expected);
  });
  it('should return 2 for "agcgcgc", 2', () => {
    const expected = 2;
    const data = 'agcgcgc';
    const result = repeatedDnaSequence(data, 2);
    expect(result.length).toBe(expected);
  });
  it('should return 2 for "agcgcgcg", 2', () => {
    const expected = 2;
    const data = 'agcgcgcg';
    const result = repeatedDnaSequence(data, 2);
    expect(result.length).toBe(expected);
  });
  it('should return 2 for "agcgcgcg", 3', () => {
    const expected = 2;
    const data = 'agcgcgcg';
    const result = repeatedDnaSequence(data, 3);
    expect(result.length).toBe(expected);
  });
  it('should return 0 for "gattaca", 2', () => {
    const expected = 0;
    const data = 'gattaca';
    const result = repeatedDnaSequence(data, 2);
    expect(result.length).toBe(expected);
  });
});
