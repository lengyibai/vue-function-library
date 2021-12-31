/* 原生 */

//本地存储
const $lybPA1 = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  del(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

//返回数据类型
function $lybPA2(o) {
  return Object.prototype.toString
    .call(o)
    .substr(8)
    .replace(/]/g, '')
    .toLowerCase();
}

//开启全屏显示
function $lybPA3() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

//关闭全屏显示
function $lybPA4() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//随机数
function $lybPA5(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 功能 */

//获取图片路径
function $lybFA1(obj) {
  const { el, yes = null, no = null, format = '.jpeg.jpg.png' } = obj;
  el.addEventListener('change', () => {
    let strFilter = format;
    let p = el.value.lastIndexOf('.');
    let strPostfix = el.value.substring(p, el.value.length);
    strPostfix = strPostfix.toLowerCase();
    if (el.value.indexOf('.') > -1 && strFilter.indexOf(strPostfix) > -1) {
      yes(window.URL.createObjectURL(el.files[0]));
    } else {
      el.value = '';
      no();
    }
  });
}

//双击选中文字
function $lybFA2(el) {
  if (typeof el == 'string') {
    fn(el);
  } else if (el instanceof Array) {
    el.forEach(item => {
      fn(item);
    });
  }
  function fn(a) {
    document.querySelector(a).addEventListener('dblclick', function () {
      const selection = window.getSelection();
      window.getSelection().removeAllRanges();
      const range = document.createRange();
      range.selectNodeContents(this.firstChild);
      selection.addRange(range);
    });
  }
}

//防抖（延迟执行）
function $lybFA3(fn, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

//防抖（立即执行）
function $lybFA4(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    if (callNow) fn.apply(context, args);
  };
}

//节流（延迟执行）
function $lybFA5(fn, delay) {
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

//节流（立即执行）
function $lybFA6(fn, delay) {
  let previous = 0;
  return function () {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > delay) {
      fn.apply(context, args);
      previous = now;
    }
  };
}

// 记住用户名或包含密码
function $lybFA7(obj) {
  const { txt, pw, rem, key = 'user', isRem = false } = obj;
  function checked() {
    if (pw) {
      password = pw.value;
    } else {
      password = '';
    }
    if (rem) {
      remChecked = rem.checked;
    } else {
      remChecked = false;
    }
    if (remChecked || isRem) {
      const user = { username: txt.value, password };
      $lybPA1.set(key, user);
    } else {
      $lybPA1.del(key);
    }
  }
  if ($lybPA1.get(key)) {
    txt.value = $lybPA1.get(key).username;
    if (pw) {
      pw.value = $lybPA1.get(key).password;
    }
    if (rem) {
      rem.checked = true;
    }
  }
  if (rem) {
    rem.addEventListener('change', () => {
      checked();
    });
  }
  txt.addEventListener('blur', () => {
    checked();
  });
  if (pw) {
    pw.addEventListener('blur', () => {
      checked();
    });
  }
}

//浏览器版本提醒
function $lybFA8(obj) {
  const {
    v = 80,
    yes = version => {
      alert(`您的浏览器内核版本号：${version}`);
    },
    no = version => {
      alert(`您的浏览器内核版本为${version}，可能会影响体验!`);
    },
  } = obj;
  const arr = navigator.userAgent.split(' ');
  let chromeVersion = '';
  arr.forEach(item => {
    if (/chrome/i.test(item)) {
      chromeVersion = item;
    }
  });
  if (chromeVersion) {
    if (Number(chromeVersion.split('/')[1].split('.')[0])) {
      const version = Number(chromeVersion.split('/')[1].split('.')[0]);
      if (version > v) {
        yes(version);
      } else {
        no(version);
      }
    }
  }
}

//数字每三位加逗号
function $lybFA9(num) {
  const str = num.toString();
  const reg =
    str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, '$1,');
}

//复制到剪切板
function $lybFA10(text, fn = () => {}) {
  const tag = document.createElement('input');
  tag.setAttribute('id', 'lybFA10');
  tag.value = text;
  document.body.appendChild(tag);
  document.getElementById('lybFA10').select();
  document.execCommand('copy');
  document.getElementById('lybFA10').remove();
  fn(text);
}

//时间戳格式化
function $lybFA11(dates, fmt) {
  const date = new Date(dates);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length),
      );
    }
  }
  return fmt;
}

/* 样式 */

//自定义拖拽元素
function $lybSA1(el) {
  let newArr = [];
  el.forEach(item => {
    if (item.length != undefined) {
      item = Array.from(item);
      newArr.push(item);
    } else if (item.length == undefined) {
      newArr.push(item);
    }
  });
  el = newArr.flat(Infinity);
  el.forEach(item => {
    fn(item);
  });
  function fn(el) {
    let x = 0,
      y = 0,
      startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0;
    el.addEventListener('touchstart', e => {
      x = e.targetTouches[0].pageX;
      y = e.targetTouches[0].pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
    });
    el.addEventListener('touchmove', e => {
      moveX = e.targetTouches[0].pageX - x;
      moveY = e.targetTouches[0].pageY - y;
      el.style.left = `${moveX + startX}px`;
      el.style.top = `${moveY + startY}px`;
    });
    el.addEventListener('mousedown', e => {
      x = e.pageX;
      y = e.pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener('mousemove', fn);
      function fn(e) {
        moveX = e.pageX - x;
        moveY = e.pageY - y;
        el.style.left = `${moveX + startX}px`;
        el.style.top = `${moveY + startY}px`;
      }
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', fn);
      });
    });
  }
}

function translate1(el, y = -500) {
  el.style.transform = `translateY(${y}px)`;
}
function translate2(el) {
  el.style.transform = 'translateY(500px)';
}
function translate3(el) {
  el.style.transform = 'translateX(-500px)';
}
function translate4(el) {
  el.style.transform = 'translateX(500px)';
}
function rotate1(el) {
  el.style.transform = 'rotateX(180deg)';
}
function rotate2(el) {
  el.style.transform = 'rotateY(-180deg)';
}
function scale1(el) {
  el.style.transform = 'scale(0)';
}
function scale2(el) {
  el.style.transform = 'scale(2)';
}
function scale3(el) {
  el.style.transform = 'scale3d(2,1,1)';
}
function mixedT1(el) {
  el.style.transform = 'translateX(-500px) translateY(500px)';
}
function mixedT2(el) {
  el.style.transform = 'translateX(-500px) translateY(-500px)';
}
function mixedT3(el) {
  el.style.transform = 'translateX(500px) translateY(-500px)';
}
function mixedT4(el) {
  el.style.transform = 'translateX(500px) translateY(500px)';
}
function mixedTR1(el) {
  el.style.transform = 'translateY(-500px) rotateX(180deg)';
}
function mixedTR2(el) {
  el.style.transform = 'translateY(500px) rotateX(-180deg)';
}
function mixedTR3(el) {
  el.style.transform = 'translateX(-500px) rotateY(180deg)';
}
function mixedTR4(el) {
  el.style.transform = 'translateX(500px) rotateY(-180deg)';
}
function mixedTR5(el) {
  el.style.transform = 'translateX(-500px) rotateZ(-180deg)';
}
function mixedTR6(el) {
  el.style.transform = 'translateX(500px) rotateZ(180deg)';
}
function mixedTS1(el) {
  el.style.transform = 'translateX(-500px) scale(0)';
}
function mixedTS2(el) {
  el.style.transform = 'translateX(500px) scale(0)';
}
function mixedTS3(el) {
  el.style.transform = 'translateX(500px) scale(2)';
}
function mixedTS4(el) {
  el.style.transform = 'translateX(-500px) scale(2)';
}
function mixedTS5(el) {
  el.style.transform = 'translateY(-500px) scale(2)';
}
function mixedTS6(el) {
  el.style.transform = 'translateY(500px) scale(0)';
}
function mixedTS7(el) {
  el.style.transform = 'translateY(500px) scale(2)';
}
function mixedRS1(el) {
  el.style.transform = 'rotateZ(180deg) scale(0)';
}
function mixedRS2(el) {
  el.style.transform = 'rotateZ(-180deg) scale(2)';
}
function opacity(el) {
  el.style.opacity = 0;
}

function Animats(el, obj) {
  let { x = 0, y = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1 } = obj;
  el.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${rx}deg)  rotateY(${ry}deg)  rotateZ(${rz}deg) scaleX(${sx}) scaleY(${sy})`;
}

//页面滚动元素动画入场
function $lybSA2(obj, animats) {
  let {
    el,
    count,
    animat = opacity,
    duration = 500,
    delay = 100,
    Animats,
  } = obj;
  let htmlHeight, scrollHeight, time;
  let html = document.documentElement;
  let newArr = [];
  el.forEach(item => {
    if (item.length != undefined) {
      item = Array.from(item);
      newArr.push(item);
    } else if (item.length == undefined) {
      newArr.push(item);
    }
  });
  el = newArr.flat(Infinity);
  window.onscroll = () => {
    htmlHeight = html.clientHeight;
    scrollHeight = html.scrollTop;
    time = 0;
    el.forEach(item => {
      if (item.offsetTop <= scrollHeight + htmlHeight - item.offsetHeight / 5) {
        item.style.transitionDelay = `${time}s`;
        time += delay / 1000;
        item.style.transitionDuration = `${duration / 1000}s`;
        item.style.transform = '';
        item.style.opacity = 1;
        if (parseFloat(time.toFixed(1)) > (count * delay - delay) / 1000) {
          time = 0;
        }
      } else if (item.offsetTop - htmlHeight >= scrollHeight) {
        if (animat != opacity) {
          animat(item);
        } else if (Animats) {
          Animats(item, animats);
        } else {
          animat(item);
        }
        item.style.transitionDelay = '0s';
        item.style.transitionDuration = '0s';
        item.style.opacity = 0;
      }
    });
  };
}

//返回顶部
function $lybSA3(obj) {
  let {
    el,
    y = 300,
    fn1 = () => {
      el.style.right = `${document.body.offsetWidth / 10}px`;
      el.style.bottom = `${document.body.offsetHeight / -5}px`;
    },
    fn2 = () => {
      el.style.bottom = `${document.body.offsetHeight / 7.5}px`;
    },
  } = obj;
  fn1();
  const d = document.documentElement;
  const b = document.body;
  el.style.transition = 'all 0.25s';
  el.style.position = 'fixed';
  window.onscroll = $lybFA5(set, 250);
  el.onclick = function () {
    window.onscroll = null;
    this.timer = setInterval(() => {
      d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
      if (d.scrollTop + b.scrollTop == 0)
        clearInterval(el.timer, (window.onscroll = set));
    }, 10);
  };
  function set() {
    el.style.display = d.scrollTop + b.scrollTop > y ? fn2() : fn1();
  }
}
