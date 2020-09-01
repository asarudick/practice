import wordPath from '../src/wordPath';
import { it, expect, describe } from '@jest/globals';

function toLayout(block: string) {
  return [
    ...block
      .split('\n')
      .map((i) =>
        i
          .trim()
          .split('')
          .filter((i) => i !== '')
      )
      .filter((i) => i.length),
  ];
}
describe('wordPath', () => {
  it('should return X', () => {
    const layout = toLayout('a');
    const expected = 'X';
    const result = wordPath('a', layout);
    expect(result).toEqual(expected);
  });
  it('should return RX', () => {
    const layout = toLayout('ab');
    const expected = 'RX';
    const result = wordPath('b', layout);
    expect(result).toEqual(expected);
  });
  it('should return RRX', () => {
    const layout = toLayout('abc');
    const expected = 'RRX';
    const result = wordPath('c', layout);
    expect(result).toEqual(expected);
  });
  it('should return RRRX', () => {
    const layout = toLayout('abcd');
    const expected = 'RRRX';
    const result = wordPath('d', layout);
    expect(result).toEqual(expected);
  });
  it('should return DX', () => {
    const layout = toLayout(
      `a
       b
      `
    );
    const expected = 'DX';
    const result = wordPath('b', layout);
    expect(result).toEqual(expected);
  });
  it('should return DDX', () => {
    const layout = toLayout(
      `a
       b
       c
      `
    );
    const expected = 'DDX';
    const result = wordPath('c', layout);
    expect(result).toEqual(expected);
  });
  it('should return DRX', () => {
    const layout = toLayout(`
      a
      cd
    `);

    const expected = 'DRX';
    const result = wordPath('d', layout);
    expect(result).toEqual(expected);
  });
  it('should return DDX', () => {
    const layout = toLayout(`
      a
      cd
      e
    `);

    const expected = 'DDX';
    const result = wordPath('e', layout);
    expect(result).toEqual(expected);
  });
  it('should return DRRRX', () => {
    const layout = toLayout(`
      a
      cdij
      e
    `);

    const expected = 'DRRRX';
    const result = wordPath('j', layout);
    expect(result).toEqual(expected);
  });
  it('should return DXUX', () => {
    const layout = toLayout(`
      a
      e
    `);

    const expected = 'DXUX';
    const result = wordPath('ea', layout);
    expect(result).toEqual(expected);
  });
  it('should return RXLX', () => {
    const layout = toLayout('ab');

    const expected = 'RXLX';
    const result = wordPath('ba', layout);
    expect(result).toEqual(expected);
  });
  it('should return DDXURRRX', () => {
    const layout = toLayout(`
      a
      bijk
      c
    `);

    const expected = 'DDXURRRX';
    const result = wordPath('ck', layout);
    expect(result).toEqual(expected);
  });

  it('should return DDDDDXURRRRX', () => {
    const layout = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q', 'r', 's', 't'],
      ['u', 'v', 'w', 'x', 'y'],
      ['z'],
    ];

    const expected = 'DDDDDXURRRRX';
    const result = wordPath('zy', layout);
    expect(result).toEqual(expected);
  });

  it('should return DDDDDXURRRUUUXLLLDDX', () => {
    const layout = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q', 'r', 's', 't'],
      ['u', 'v', 'w', 'x', 'y'],
      ['z'],
    ];

    const expected = 'DDDDDXURRRUUUXLLLDDX';
    const result = wordPath('zip', layout);
    expect(result).toEqual(expected);
  });
});
