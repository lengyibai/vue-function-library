export function translate1(el) {
  el.style.transform = `translateY(-200%)`;
}
export function translate2(el) {
  el.style.transform = 'translateY(200%)';
}
export function translate3(el) {
  el.style.transform = 'translateX(-200%)';
}
export function translate4(el) {
  el.style.transform = 'translateX(200%)';
}
export function rotate1(el) {
  el.style.transform = 'rotateX(180deg)';
}
export function rotate2(el) {
  el.style.transform = 'rotateY(-180deg)';
}
export function scale1(el) {
  el.style.transform = 'scale(0.1)';
}
export function scale2(el) {
  el.style.transform = 'scale(2)';
}
export function scale3(el) {
  el.style.transform = 'scale3d(2,1,1)';
}
export function mixedT1(el) {
  el.style.transform = 'translateX(-200%) translateY(200%)';
}
export function mixedT2(el) {
  el.style.transform = 'translateX(-200%) translateY(-200%)';
}
export function mixedT3(el) {
  el.style.transform = 'translateX(200%) translateY(-200%)';
}
export function mixedT4(el) {
  el.style.transform = 'translateX(200%) translateY(200%)';
}
export function mixedTR1(el) {
  el.style.transform = 'translateY(-200%) rotateX(180deg)';
}
export function mixedTR2(el) {
  el.style.transform = 'translateY(200%) rotateX(-180deg)';
}
export function mixedTR3(el) {
  el.style.transform = 'translateX(-200%) rotateY(180deg)';
}
export function mixedTR4(el) {
  el.style.transform = 'translateX(200%) rotateY(-180deg)';
}
export function mixedTR5(el) {
  el.style.transform = 'translateX(-200%) rotateZ(-180deg)';
}
export function mixedTR6(el) {
  el.style.transform = 'translateX(200%) rotateZ(180deg)';
}
export function mixedTS1(el) {
  el.style.transform = 'translateX(-200%) scale(0.1)';
}
export function mixedTS2(el) {
  el.style.transform = 'translateX(200%) scale(0.1)';
}
export function mixedTS3(el) {
  el.style.transform = 'translateX(200%) scale(2)';
}
export function mixedTS4(el) {
  el.style.transform = 'translateX(-200%) scale(2)';
}
export function mixedTS5(el) {
  el.style.transform = 'translateY(-200%) scale(2)';
}
export function mixedTS6(el) {
  el.style.transform = 'translateY(200%) scale(0.1)';
}
export function mixedTS7(el) {
  el.style.transform = 'translateY(200%) scale(2)';
}
export function mixedRS1(el) {
  el.style.transform = 'rotateZ(180deg) scale(0.1)';
}
export function mixedRS2(el) {
  el.style.transform = 'rotateZ(-180deg) scale(2)';
}
export function opacity(el) {
  el.style.opacity = 0;
}

export function Animats(el, obj = {}, percentage = null) {
  let { x = 0, y = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1 } = obj;
  x = x.toString();
  y = y.toString();
  if (percentage == null) {
    el.style.transform = `translateX(${x}) translateY(${y}) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scaleX(${sx}) scaleY(${sy})`;
  } else {
    if (typeof x == 'string' || typeof y == 'string') {
      if (x.includes('px') || y.includes('px')) {
        x = x.replace('px', '');
        y = y.replace('px', '');
        el.style.transform = `translateX(${x - percentage * x}%) translateY(${
          y - percentage * y
        }%)`;
      } else if (x.includes('%') || y.includes('%')) {
        x = x.replace('%', '');
        y = y.replace('%', '');
        el.style.transform = `translateX(${x - percentage * x}%) translateY(${
          y - percentage * y
        }%)`;
      }
    } else {
      el.style.transform = `translateX(${x}) translateY(${y}) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scaleX(${sx}) scaleY(${sy})`;
    }
  }
}

export function $lybS2(obj, animats) {
  let {
    el,
    animate = Animats,
    time = 0.5,
    playY = '50%',
    scrollFllow = false,
    PLAYY = '100%',
    fade = 0,
    father = document.documentElement,
  } = obj;
  function lyb(item, animate, time) {
    // 触发时机高度转为数字
    playY =
      typeof playY == 'number'
        ? playY
        : item.offsetHeight * (playY.replace('%', '') / 100);
    // 获取元素进入可视区的距离
    let entryHeight =
      father.clientHeight - item.getBoundingClientRect().top - playY;
    // 判断是否进入达到触发动画的范围
    if (entryHeight + father.offsetTop >= 0) {
      // 判断是否开启了跟随滚动
      if (scrollFllow) {
        let percentage =
          entryHeight /
          (typeof PLAYY == 'number'
            ? PLAYY
            : item.offsetHeight * (PLAYY.replace('%', '') / 100));
        percentage > 1 && (percentage = 1);
        // 进入后播放动画归位
        item.style.transition = 'all 0s';
        fade || (item.style.opacity = percentage);
        animate(item, animats, percentage);
        return;
      }
      // 进入后播放动画归位
      item.style.transition = `all ${time}s`;
      item.style.opacity = 1;
      item.style.transform = null;
      // 如果离开了可视区，回到进入前的位置
    } else if (entryHeight + playY + father.offsetTop < 0) {
      item.style.transition = `all 0s`;
      item.style.opacity = fade;
      animate(item, animats);
    }
  }
  el.forEach((item) => {
    try {
      if (item.length) {
        item.forEach((item) => {
          lyb(item, animate, time);
        });
      } else {
        lyb(item, animate, time);
      }
    } catch (error) {
      console.error(error);
    }
  });
}
