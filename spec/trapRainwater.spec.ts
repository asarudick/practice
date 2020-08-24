import trapRainwater from '../src/trapRainwater';
import { it, expect, describe } from '@jest/globals';

describe('', () => {
  it('should return []', () => {
    const expected = [];
    const result = trapRainwater([]);
    expect(result).toEqual(result);
  });
  it('should return [0]', () => {
    const expected = [0];
    const result = trapRainwater([0]);
    expect(result).toEqual(result);
  });
  it('should return [0, 1]', () => {
    const expected = [0, 1];
    const result = trapRainwater([1, 0]);
    expect(result).toEqual(result);
  });
  it('should return [1, 0]', () => {
    const expected = [1, 0];
    const result = trapRainwater([0, 1]);
    expect(result).toEqual(result);
  });
  it('should return [0, 1, 0]', () => {
    const expected = [0, 1, 0];
    const result = trapRainwater([1, 0, 1]);
    expect(result).toEqual(result);
  });
  it('should return [0, 1, 0]', () => {
    const expected = [0, 1, 0];
    const result = trapRainwater([2, 0, 1]);
    expect(result).toEqual(result);
  });
  it('should return [0, 1, 0]', () => {
    const expected = [0, 1, 0];
    const result = trapRainwater([1, 0, 2]);
    expect(result).toEqual(result);
  });
  it('should return [1, 0, 1, 0]', () => {
    const expected = [1, 0, 1, 0];
    const result = trapRainwater([0, 1, 0, 2]);
    expect(result).toEqual(result);
  });
  it('should return [0, 1, 0, 1]', () => {
    const expected = [0, 1, 0, 1];
    const result = trapRainwater([1, 0, 2, 0]);
    expect(result).toEqual(result);
  });
  it('should return [0, 2, 0, 1, 1, 0]', () => {
    const expected = [0, 2, 0, 1, 1, 0];
    const result = trapRainwater([3, 0, 2, 0, 0, 1]);
    expect(result).toEqual(result);
  });
});
