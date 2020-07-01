export async function getHighestPriorityUrl(urls: any, fetch: Function) {
  if (!urls.length) throw new Error('No urls specified.');

  const promises = [];

  for (const url of urls) {
    try {
      promises.push(fetch(url));
    } catch (e) {
    }
  }

  for (const promise of promises) {
    try {
      const result = await promise;
      return result;
    } catch (e) {
    }
  }

  throw new Error('All failed.');
};
