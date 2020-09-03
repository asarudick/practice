export default function flatten(value: any): any {
  if (Array.isArray(value)) {
    return value.reduce((a, b) => a.concat(flatten(b)), []);
  }

  return value;
}
