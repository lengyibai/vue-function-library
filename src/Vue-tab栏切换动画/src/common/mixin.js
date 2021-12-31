/**
 * 记录tab栏标签上次滑动的坐标
 * 配置：
 * 给滚动组件设置属性
  @scroll="contentScroll"
  :probe-type="3"
  ref="scroll"
 * 给点击文字的样式设置 pointer-events: none;，避免重复点击造成滚动到上一次位置
 *写入method
  //实时监听坐标
    contentScroll(position) {
      this.lyb.scrollHeight = -position.y;
    },
 *
 */
export const rememberPosition = {
  data() {
    return {
      currentIndex: 0,
      //设置点击下一个Tab栏后，滚动到上一次的坐标的滚动动画时长，一般为为0，即无动画
      animatTime: 0,
      //设置点击下一个tab栏标签后，等待多久滚动到上一次位置
      waitTime: 0,
      //如果使用了动画函数，可省略以下对象（记录）
      lyb: { scrollHeight: 0 },
      //需要记录坐标的tab栏个数,至少为2
      positionCount: 7,
      //记录临时坐标
      position: [
        {
          y: 0,
          // 记录坐标是否可被修改(请勿修改)
          writable: true,
        },
      ],
    };
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  mounted() {
    for (let i = 0; i < this.positionCount - 2; i++) {
      this.position.push({
        y: 0,
        writable: false,
      });
    }
  },
  methods: {
    contentScroll(position) {
      //设置临时坐标（记录tab栏标签上次滑动的坐标）
      this.position.forEach((item, i) => {
        if (item.writable) {
          //从上一个tab栏离开后，此时只有它可以修改坐标
          item.y = this.lyb.scrollHeight;
        }
      });
      //获取当前滚动坐标
      this.lyb.scrollHeight = position.y;
      //当第二tab栏滚动到顶部导航栏，显示第一tab栏
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    tabClick(index) {
      this.currentIndex = index;
      this.position.forEach((item, i) => {
        // 获取当前tab栏信息
        if (i == index) {
          setTimeout(() => {
            this.$refs.scroll.scrollTo(0, this.position[i].y, this.animatTime);
          }, this.waitTime);
          //允许离开时修改坐标（延迟修改原因：瞬间修改会受waitTime的影响会在上一个tab栏的位置停留，此时当前tab栏标签的坐标被瞬间修改，从而无法滚动到指定位置）
          setTimeout(() => {
            this.position[i].writable = true;
          }, this.waitTime);
        } else if (item.writable) {
          item.y = this.lyb.scrollHeight;
          item.writable = false;
        }
      });
    },
  },
};

/**
 * 动画函数
 * 配置：
 * 给滚动组件设置属性 @scroll="contentScroll" 和 :probe-type="3" 和 ref="scroll"
 * 卡片父盒子设置属性隐藏 :class="{ hidden: currentIndex != 0 }"
 * 给卡片设置ref="card"，如果名字与其他ref冲突，则去下面手动修改源码
 * 给卡片的页面加上updated() { this.$refs.scroll.refresh(); },
 * 设置css .hidden { position: absolute; display: none; }
 * mounted()内获取所有卡片 this.$refs.card.forEach(item => { this.lyb.card.push(item.$el); });
 */

import { mixedTR5 } from '@/common/lyb.js';
export const animatMixin = {
  data() {
    return {
      lyb: {
        count: 0,
        time: 0,
        delay: 0,
        scroll: null,
        htmlHeight: 0,
        scrollHeight: 0,
        //需要添加动画的卡片
        card: [],
        //动画持续时间
        duration: 250,
        //内置动画
        animats: mixedTR5,
      },
    };
  },
  updated() {
    this.lyb.scroll = this.$refs.scroll1.$el;
    this.lyb.htmlHeight = this.lyb.scroll.clientHeight;
  },
  methods: {
    //真实滚动
    contentScroll(position) {
      this.lyb.scrollHeight = position;
      this.$refs.card.slice(-68).forEach(item => {
        if (
          item.offsetTop <=
          this.lyb.scrollHeight + this.lyb.htmlHeight - item.offsetHeight / 5
        ) {
          item.style.transitionDelay = `${this.lyb.time}s`;
          this.lyb.time += this.lyb.delay / 1000;
          item.style.transitionDuration = `${this.lyb.duration / 1000}s`;
          item.style.transform = '';
          item.style.opacity = 1;
          if (
            parseFloat(this.lyb.time.toFixed(1)) >
            (this.lyb.count * this.lyb.delay - this.lyb.delay) / 1000
          ) {
            this.lyb.time = 0;
          }
        } else if (
          item.offsetTop - this.lyb.htmlHeight >=
          this.lyb.scrollHeight
        ) {
          if (this.lyb.animats) {
            this.lyb.animats(item);
          } else if (this.lyb.AnimatStyle) {
            Animats(item, this.lyb.AnimatStyle);
          }
          item.style.transitionDelay = '0s';
          item.style.transitionDuration = '0s';
          item.style.opacity = 0;
        }
      });
    },
  },
};

//vant组件tab栏标签切换样式
export const vantTab = {
  methods: {
    //设置tab栏标签被点击后的样式
    tabStyle(index) {
      let a = `
      font-weight:bold;
      `;
      let b =
        this.currentIndex == index
          ? 'font-size:0.4267rem'
          : 'font-size:0.32rem;color:#B2B2B2';
      return a + b;
    },
  },
};
