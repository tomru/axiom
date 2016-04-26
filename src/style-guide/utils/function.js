export function debounce(fn, time = 500) {
  let timeout;

  return function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn(...args);
    }, time);
  };
}
