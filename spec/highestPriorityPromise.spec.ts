import { getHighestPriorityUrl } from '../src/highestPriorityPromise';
import { it, expect, describe } from '@jest/globals';

const timeout = 100;
async function delay (duration: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, duration);
  });
}

async function mockFetch (url: any) {
  if (url.delay === timeout) return Promise.reject('Timed out.');
  await delay(url.delay);
  return url;
}

describe('getHighestPriorityUrl', () => {
  it(`should throw if empty`, async () => {
    const urls: any[] = [];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).rejects.toThrow('No urls specified.');
  });
  it(`should return first and only when successful`, async () => {
    const urls = [
      { url: 'a', delay: 0 }
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).resolves.toBe(urls[0]);
  });
  it(`should return second when first fails and second succeeds`, async () => {
    const urls = [
      { url: 'a', delay: timeout },
      { url: 'b', delay: 0 },
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).resolves.toBe(urls[1]);
  });
  it(`should return first when both succeed`, async () => {
    const urls = [
      { url: 'a', delay: 0 },
      { url: 'b', delay: 0 },
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).resolves.toBe(urls[0]);
  });
  it(`should return first when first succeeds and second fails`, async () => {
    const urls = [
      { url: 'a', delay: 0 },
      { url: 'b', delay: timeout },
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).resolves.toBe(urls[0]);
  });
  it(`should throw error when all requests fail`, async () => {
    const urls = [
      { url: 'a', delay: timeout },
      { url: 'b', delay: timeout },
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).rejects.toThrow();
  });
  it(`should return last when all others fail`, async () => {
    const urls = [
      { url: 'a', delay: timeout },
      { url: 'b', delay: timeout },
      { url: 'c', delay: timeout },
      { url: 'd', delay: timeout },
      { url: 'e', delay: timeout },
      { url: 'f', delay: timeout },
      { url: 'g', delay: timeout },
      { url: 'h', delay: 0 },
    ];
    return await expect(getHighestPriorityUrl(urls, mockFetch)).resolves.toBe(urls[7]);
  });
});
