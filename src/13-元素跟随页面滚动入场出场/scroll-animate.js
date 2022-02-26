// 只执行一次
function scrollOnce(obj) {
  let { el, father = document.documentElement, into = 0.5, time = 0.5 } = obj;
  function fn(el) {
    el.style.transition = `all ${time}s`;
    let a =
      father.clientHeight -
      el.clientHeight * into -
      el.getBoundingClientRect().top;
    if (a > 0) {
      el.style.transform = null;
      el.style.opacity = 1;
    }
  }
  if (el instanceof Array) {
    el.forEach((item) => {
      fn(item);
    });
  } else {
    fn(el);
  }
}
function animate(el, animate, fade = 0) {
  if (el instanceof Array) {
    el.forEach((item) => {
      item.style.opacity = fade;
      animate(item);
    });
  } else {
    el.style.opacity = fade;
    animate(el);
  }
}

// 重复执行
function scrollRepeat(obj) {
  let {
    el,
    father = document.documentElement,
    into = 0.5,
    time = 0.5,
    animate = () => {
      el.style.transform = "scale(0)";
    },
  } = obj;
  function fn(el) {
    let a =
      father.clientHeight -
      el.clientHeight * into -
      el.getBoundingClientRect().top;
    el.style.transition = `all ${time}s`;
    if (a > 0) {
      el.style.transform = null;
      el.style.opacity = 1;
    } else if (a < -el.clientHeight * into) {
      el.style.transition = `all 0s`;
      el.style.opacity = 0;
      animate(el);
    }
  }
  if (el instanceof Array) {
    el.forEach((item) => {
      fn(item);
    });
  } else {
    fn(el);
  }
}

function translate1(el) {
  el.style.transform = `translateY(-200%)`;
}
function translate2(el) {
  el.style.transform = "translateY(200%)";
}
function translate3(el) {
  el.style.transform = "translateX(-200%)";
}
function translate4(el) {
  el.style.transform = "translateX(200%)";
}
function rotate1(el) {
  el.style.transform = "rotateX(180deg)";
}
function rotate2(el) {
  el.style.transform = "rotateY(-180deg)";
}
function scale1(el) {
  el.style.transform = "scale(0.1)";
}
function scale2(el) {
  el.style.transform = "scale(2)";
}
function scale3(el) {
  el.style.transform = "scale3d(2,1,1)";
}
function mixedT1(el) {
  el.style.transform = "translateX(-200%) translateY(200%)";
}
function mixedT2(el) {
  el.style.transform = "translateX(-200%) translateY(-200%)";
}
function mixedT3(el) {
  el.style.transform = "translateX(200%) translateY(-200%)";
}
function mixedT4(el) {
  el.style.transform = "translateX(200%) translateY(200%)";
}
function mixedTR1(el) {
  el.style.transform = "translateY(-200%) rotateX(180deg)";
}
function mixedTR2(el) {
  el.style.transform = "translateY(200%) rotateX(-180deg)";
}
function mixedTR3(el) {
  el.style.transform = "translateX(-200%) rotateY(180deg)";
}
function mixedTR4(el) {
  el.style.transform = "translateX(200%) rotateY(-180deg)";
}
function mixedTR5(el) {
  el.style.transform = "translateX(-200%) rotateZ(-180deg)";
}
function mixedTR6(el) {
  el.style.transform = "translateX(200%) rotateZ(180deg)";
}
function mixedTS1(el) {
  el.style.transform = "translateX(-200%) scale(0.1)";
}
function mixedTS2(el) {
  el.style.transform = "translateX(200%) scale(0.1)";
}
function mixedTS3(el) {
  el.style.transform = "translateX(200%) scale(2)";
}
function mixedTS4(el) {
  el.style.transform = "translateX(-200%) scale(2)";
}
function mixedTS5(el) {
  el.style.transform = "translateY(-200%) scale(2)";
}
function mixedTS6(el) {
  el.style.transform = "translateY(200%) scale(0.1)";
}
function mixedTS7(el) {
  el.style.transform = "translateY(200%) scale(2)";
}
function mixedRS1(el) {
  el.style.transform = "rotateZ(180deg) scale(0.1)";
}
function mixedRS2(el) {
  el.style.transform = "rotateZ(-180deg) scale(2)";
}
function opacity(el) {
  el.style.opacity = 0;
}
