//获取文件后缀名
export function $getFileSuf(str) {
  return str.replace(/.+\./, '').toLowerCase();
}

// 字节格式化
export function $fmtByte(bytes) {
  if (bytes == 0) return [0, 'B', '0 B'];
  let k = 1024,
    size = 0,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  size = (bytes / k ** i).toFixed(2) ? (bytes / k ** i).toFixed(2) : 0;
  return [size, sizes[i], `${size} ${sizes[i]}`];
}
