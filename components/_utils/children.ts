import { ReactChild } from 'react';

export function isReactText(child: ReactChild): boolean {
  const type = typeof child;

  return type === 'string' || type === 'number';
}
