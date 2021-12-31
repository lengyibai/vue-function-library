// 列表出场动画
export const appear_animat = {
  methods: {
    lyb(item, animat) {
      if (
        document.documentElement.clientHeight -
          item.getBoundingClientRect().top >=
        -item.offsetHeight
      ) {
        item.style.opacity = 1;
        item.style.transform = 'translateX(0%) rotate(0deg) scale(1)';
      } else {
        item.style.transition = 'all 0.5s';
        item.style.transitionDelay = '0s';
        if (animat == undefined) {
          item.style.opacity = 0;
          item.style.transform = 'translateX(-100%) rotate(-180deg) scale(0)';
        } else {
          item.style.opacity = 0;
          animat(item);
        }
      }
    },
    appear_animat(el, animat) {
      if (this.$refs[el] instanceof Array) {
        this.$refs[el].forEach(item => {
          this.lyb(item, animat);
        });
      } else {
        this.lyb(this.$refs[el], animat);
      }
    },
  },
};
