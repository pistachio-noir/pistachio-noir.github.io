// Svelte action: sets data-seen the first time the element scrolls into view, so CSS can animate it in.
// With reduced motion (or no IntersectionObserver) it is set at once, and nothing is hidden.
export function reveal(node) {
  const show = () => node.setAttribute('data-seen', '');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    show();
    return;
  }
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      show();
      io.disconnect();
    }
  }, { threshold: 0.15 });
  io.observe(node);
  return { destroy: () => io.disconnect() };
}
