export function is(func: any): boolean {
  return func && typeof func === 'function';
}

export function runCallback(func: any, ...args: any[]) {
  if (is(func)) {
    func(...args);
  }
}
