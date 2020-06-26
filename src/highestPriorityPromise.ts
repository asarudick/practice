export async function getHighestPriorityUrl(urls: any, fetch: Function) {
  // Store the state of each promise.
  const completed = Array(urls.length).fill(null);

  // Manage the state of each request in an encompassing promise,
  // and trigger resolve and reject accordingly.
  for (let i = 0; i < urls.length; i++) {
    try {
        const result = await fetch(urls[i]);

        completed[i] = result;
        // If every request before it completed with an error (a timeout usually), resolve.
        if (completed.slice(0, i).every(i => i == -1)) return result;
      }
      catch (e) {
        completed[i] = -1;

        const result = completed.reduce((memo, val) => {
          // Indicates prior pending request.
          if (!memo || !val) return null;

          if (memo && memo !== -1) return memo;
          if (val && val !== -1) return val;

          return -1;
        }, -1);

        if (result && result === -1) throw new Error('All failed.');
        if (result && result !== -1) return result;
      }
  }
}
