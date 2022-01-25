//节流（延迟执行）
export function $lybF5(fn, delay) {
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
