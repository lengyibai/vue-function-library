<template>
  <div class="LybIframe" ref="LybIframe">
    <iframe
      class="iframe"
      ref="iframe"
      :src="link"
      marginheight="0"
      marginwidth="0"
      frameborder="0"
      scrolling="yes"
    ></iframe>
    <transition name="LybIframe">
      <div class="name" v-show="!scale" :class="{ opacity: scale }">{{ name }}</div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    scale: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: Number,
      default: 0,
    },
  },
  name: "LybIframe",
  data() {
    return {
      is_first: true,
    };
  },
  components: {},
  watch: {
    scale: {
      deep: true,
      immediate: true, //立即调用
      handler(v) {
        this.$nextTick(() => {
          if (v) {
            this.active();
          } else {
            this.active();
          }
        });
      },
    },
  },
  mounted() {
    this.initScale();
    window.addEventListener(
      "resize",
      function () {
        // 实时更新高度
        this.updateSize.call(this);
      }.bind(this),
    );
  },
  methods: {
    //#####··········初始化缩放大小··········#####//
    initScale() {
      const width = this.$refs.LybIframe.offsetWidth;
      const scale = width / 1280;
      this.$refs.iframe.style.transform = `scale(${scale}`;
    },
    //#####··········实时更新大小··········#####//
    updateSize() {
      if (!this.$refs.iframe) return;
      // 如果处于放大状态
      if (this.scale) {
        this.active(true);
      } else {
        // 处于缩小状态则
        this.$refs.iframe && (this.$refs.iframe.style.transition = "all 0.5s");
        this.initScale();
      }
    },
    //#####··········放大与缩小··········#####//
    active(is_update) {
      const scale = this.scale;
      if (scale) {
        if (is_update) {
          this.$refs.iframe.style.width = document.documentElement.clientWidth + "px";
          this.$refs.iframe.style.height = document.documentElement.clientHeight + "px";
          return;
        }
        const father = this.$refs.LybIframe.getBoundingClientRect();
        this.$refs.iframe.style.transition = "all 0s";
        this.$refs.iframe.style.position = "fixed";
        this.$refs.iframe.style.top = father.top + "px";
        this.$refs.iframe.style.left = father.left + "px";
        setTimeout(() => {
          this.$refs.iframe.style.transition = "all 0.5s";
          this.$refs.iframe.style.top = "0";
          this.$refs.iframe.style.left = "0";
          this.$refs.iframe.style.transform = "scale(1)";
          /* 动画结束后拉伸到屏幕大小 */
          setTimeout(() => {
            this.$refs.iframe.style.width = document.documentElement.clientWidth + "px";
            this.$refs.iframe.style.height = document.documentElement.clientHeight + "px";
          }, 500);
        });
      } else if (!this.is_first) {
        const father = this.$refs.LybIframe.getBoundingClientRect();
        this.$refs.iframe.style.top = father.top + "px";
        this.$refs.iframe.style.left = father.left + "px";
        const scale = this.$refs.LybIframe.offsetWidth / 1280;
        this.$refs.iframe.style.transform = `scale(${scale})`;
        setTimeout(() => {
          this.$refs.iframe.style.width = "1280px";
          this.$refs.iframe.style.height = "720px";
          setTimeout(() => {
            this.$refs.iframe.style.transition = "all 0s";
            this.$refs.iframe.style.top = "0px";
            this.$refs.iframe.style.left = "0px";
            this.$refs.iframe.style.position = "absolute";
          }, 500);
        }, 500);
      } else {
        this.is_first = false;
      }
    },
  },
};
</script>
<style scoped lang="less">
.LybIframe {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .iframe {
    position: absolute;
    left: 0px;
    top: 0px;
    transform-origin: left top;
    width: 1280px;
    height: 720px;
    transition: all 0s;
  }
  .name {
    position: absolute;
    bottom: 0;
    color: #fff;
    text-align: center;
    transform: translateY(100%);
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

/* 进入前状态 */
.LybIframe-enter {
  opacity: 0;
}

/* 进入和离开动画属性 */
.LybIframe-enter-active {
  transition: all 0.5s 0.5s;
}

.opacity {
  opacity: 0;
}
</style>
