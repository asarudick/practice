import uniquePaths from '../src/uniquePaths';
import { it, expect, describe } from '@jest/globals';

describe('uniquePaths', () => {
  it('should return 1', () => {
    const grid = [[0]];
    const expected = 1;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 1', () => {
    const grid = [[0, 0]];
    const expected = 1;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 1', () => {
    const grid = [[0, 0, 0]];
    const expected = 1;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 1', () => {
    const grid = [[0, 0, 0, 0, 0, 0]];
    const expected = 1;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 2', () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    const expected = 2;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 3', () => {
    const grid = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const expected = 3;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
  it('should return 4', () => {
    const grid = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const expected = 4;
    const result = uniquePaths(grid);
    expect(result).toEqual(expected);
  });
});
