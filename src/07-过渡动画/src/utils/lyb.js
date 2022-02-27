//节流（延迟执行）
export function $throttle(fn, delay) {
  let valid = true;
  return () => {
    if (!valid) {
      return false;
    }
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
}
