export function powerSet(set: number[]) {
  const result: number[][] = [];

  recurse(0, []);

  function recurse(index: number, current: number[]) {
    result.push(current);

    for (let i = index; i < set.length; i++) {
      recurse(i + 1, current.concat([set[i]]));
    }
  }

  return result;
}
