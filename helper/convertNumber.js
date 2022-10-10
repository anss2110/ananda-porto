export function vhToPx(vh) {
  if (typeof window !== 'undefined') {
    return document.documentElement.clientHeight * Number(vh) / 100;
  }
}