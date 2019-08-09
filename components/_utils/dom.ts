export function contains(container: HTMLElement, element: HTMLElement): boolean {
  if (element === container) return true;
  if (element.parentNode) return contains(container, element.parentNode as HTMLElement);
  return false;
}
