<template>
  <div class="TaskView">
    <transition name="TaskView">
      <div class="close" @click="close" v-show="show_close">
        <LybIcon :imgUrl="require('./img/close.png')" size="20px" />
      </div>
    </transition>
    <div class="grid-box">
      <LybGrid gap="100px" :count="3" :eqhMultiple="1.7777">
        <div
          class="box"
          :class="{
            zIndex: currentIndex_click === index,
            opacity: currentIndex_click !== index && currentIndex_click !== null,
          }"
          @click="open(index)"
          @mouseenter="hover(index)"
          @mouseleave="currentIndex_enter = null"
          v-for="(item, index) in links"
          :key="item.name"
        >
          <transition name="close">
            <LybIcon
              @click.native.stop="del(index)"
              v-show="currentIndex_enter === index"
              class="icon-del"
              :imgUrl="require('./img/close.png')"
              size="15px"
            />
          </transition>
          <transition name="mask">
            <div class="mask" v-show="currentIndex_click !== index"></div>
          </transition>
          <LybIframe :link="item.link" :name="item.name" :gap="60" :scale="currentIndex_click === index" />
        </div>
      </LybGrid>
    </div>
  </div>
</template>

<script>
import LybIframe from "./childComps/lyb-iframe";
import LybGrid from "./childComps/lyb-grid-layout";
import LybIcon from "./childComps/lyb-icon";
export default {
  name: "TaskView",

  data() {
    return {
      show_close: false,
      currentIndex_click: null,
      currentIndex_enter: null, //鼠标移入卡片显示左上角关闭
      is_rest: false, //在关闭动画播放时为true，避免动画还没结束卡片被再次点击，导致坐标计算出错
      links: [],
    };
  },
  components: { LybIframe, LybGrid, LybIcon },
  created() {
    this.$bus.$on("add-link", (v) => {
      // 判断是否点击了重复的链接，如果重复点击，则直接秒开现有的
      let is_exist = this.links.findIndex((item) => {
        return item.link === v.href;
      });
      if (is_exist === -1) {
        this.links.push({
          name: v.name,
          link: v.href,
        });
        is_exist = this.links.length - 1;
        setTimeout(() => {
          this.open(is_exist);
        }, 1000);
      } else {
        this.open(is_exist);
      }
    });
  },
  beforeDestroy() {
    //组件一销毁就需要关闭监听，防止重复监听
    this.$bus.$off("add-link");
  },
  methods: {
    open(index) {
      if (this.is_rest) return;
      this.currentIndex_click = index;
      this.show_close = true;
      this.currentIndex_enter = null;
      console.log(this.links[index].link);
    },
    close() {
      let timer = null;
      clearTimeout(timer);
      this.currentIndex_click = null;
      this.show_close = false;
      this.is_rest = true;
      timer = setTimeout(() => {
        this.is_rest = false;
      }, 1000);
    },

    //#####··········鼠标移入卡片··········#####//
    hover(index) {
      if (this.show_close) return;
      this.currentIndex_enter = index;
    },

    //#####··········删除卡片··········#####//
    del(index) {
      this.links.splice(index, 1);
    },
  },
};
</script>
<style scoped lang="less">
.TaskView {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 100px;
  overflow: auto;
  height: calc(100vh - 135px);
  .close {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
  .grid-box {
    width: 68%;
    .box {
      transition: all 0.5s 0.25s;
      position: relative;
      .icon-del {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 2;
      }
      .mask {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.25);
        z-index: 1;
      }
    }
  }
}
.zIndex {
  z-index: 2;
}
.opacity {
  opacity: 0;
}

/* 进入前状态 */
.TaskView-enter,
.TaskView-leave-active,
.close-enter,
.close-leave-active,
.mask-enter,
.mask-leave-active {
  opacity: 0;
}

/* 进入和离开动画属性 */
.TaskView-enter-active {
  transition: all 0.5s 0.5s;
}

/* 进入和离开动画属性 */
.close-enter-active {
  transition: all 0.25s 0.1s;
}

/* 进入和离开动画属性 */
.mask-enter-active {
  transition: all 0.25s 0.5s;
}
</style>
