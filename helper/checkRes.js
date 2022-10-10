export function getScreen() {
  if (typeof window !== 'undefined') {
    return {
      width: window.screen.width,
      height: window.screen.height
    }
  }
}