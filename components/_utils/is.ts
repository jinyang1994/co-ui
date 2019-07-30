export function func(value: any): boolean {
  return value && typeof value === 'function';
}

export function array(value: any): boolean {
  return Array.isArray(value);
}
