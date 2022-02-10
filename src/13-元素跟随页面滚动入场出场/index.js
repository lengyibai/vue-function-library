function scroll(obj) {
  let {
    el,
    from = 0,
    to = 0,
    stop = 0,
    delay = 0,
    map,
    leaveY = 0,
    father = document.documentElement,
  } = obj;
  el.style.top = stop + "px";
  let y = 0; //开始滚动后记录坐标，需要减去from
  let height = 0; //可滚动高度
  let progress = 0; //当前滚动百分比
  function fn(el, from, to, stop, delay, leaveY, father) {
    // 从 y 处开启计算
    y = father.scrollTop - from;
    /**
     * 如果滚动距离小于 0，则暂停计算
     * 如果已经走完滚动的距离，则停留结束计算位置
     */
    if (y < 0) {
      y = 0;
    } else if (y > to - from) {
      y = to - from;
    }
    //可滚动高度 = 滚动盒子高度 - 滚动盒子可视区 - 开启计算的坐标
    let canScroll = father.scrollHeight - father.clientHeight;
    height = canScroll - from;

    // 判断 to 是否赋值，是则获取计算距离
    let scrollHeight = to ? to - from : height;
    // 滚动完成进度 = 已走距离 / 剩下距离
    progress = Number((y / scrollHeight).toFixed(4));
    //获取相对元素的滚动坐标
    let leftOver = el.offsetTop - (to || canScroll) - stop;
    //从出场开始从零计算滚动
    let init = leftOver > delay ? leftOver - delay : 0;
    // 出场进度 0-1
    let leave = 0;
    init > 0 && (leave = Number((init / leaveY).toFixed(4)));
    return [progress, init, leave];
  }
  function lyb() {
    let [aprogress, init, leave] = fn(
      el,
      from,
      to,
      stop,
      delay,
      leaveY,
      father
    );
    map(aprogress, init, leave);
  }
  father.addEventListener("scroll", lyb);
}
