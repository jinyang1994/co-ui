import * as is from './is';

export function runCallback(func: any, ...args: any[]) {
  if (is.func(func)) {
    func(...args);
  }
}
