export function flatten(value: any): any {
  if (Array.isArray(value)) {
    return value.reduce((a, b) => a.concat(flatten(b)), []);
  }

  return value;
}

export function flattenStack(arr: any[]): any {
  const stack: any[] = [...arr];
  let result: any[] = [];

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}
