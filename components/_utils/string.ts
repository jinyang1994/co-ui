export function toString(value: any): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  return value.toString();
}
