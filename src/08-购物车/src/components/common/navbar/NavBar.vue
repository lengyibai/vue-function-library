<template>
  <div class="navbar" :style="{ backgroundColor: bgColor }">
    <!-- 左边内容 -->
    <div v-show="leftShow" class="back" @click="left">
      <slot name="leftImg">
        <img :src="imgLeftColor == 'white' ? imgUrl.white : imgUrl.black" />
      </slot>
      <span :style="{ color: textLeftColor }" v-show="textLeftShow">
        <slot name="leftText"></slot>
      </span>
    </div>
    <!-- 标题 -->
    <div class="title" :style="{ color: titleColor }">
      <slot name="title"></slot>
    </div>
    <!-- 右边内容 -->
    <div class="btn" v-show="rightShow" @click="prop_right">
      <slot name="rightImg"></slot>
      <span :style="{ color: textRightColor }">
        <slot name="btn"></slot>
      </span>
    </div>
  </div>
</template>
<!--
插槽使用：
#title 中间标题内容
#leftImg 左边图标
#leftText 左边文字
#rightImg 右边图标
#btn 右边文字
 -->
<script>
  export default {
    props: {
      //背景色
      bgColor: {
        type: String,
        default: '#fff',
      },

      /* 左边 */
      //是否显示左边内容
      leftShow: {
        type: Boolean,
        default: true,
      },
      //显示左边文字
      textLeftShow: {
        type: Boolean,
        default: false,
      },
      //左边文字颜色
      textLeftColor: {
        type: Boolean,
        default: false,
      },
      //左边图标颜色
      imgLeftColor: {
        type: String,
        default: 'white',
      },
      //传入左边按钮的跳转路径，默认后退
      pathLeft: {
        default: '',
      },

      /* 中间 */
      // 中间文字颜色
      titleColor: {
        type: String,
        default: '#fff',
      },

      /* 右边 */
      //是否显示右边内容
      rightShow: {
        type: Boolean,
        default: false,
      },
      //右边文字颜色
      textRightColor: {
        type: String,
        default: 'white',
      },
      //传入右边按钮的跳转路径
      prop_right: {
        type: Function,
        required: true,
        default() {},
      },
    },
    data() {
      return {
        imgUrl: {
          white: require('./img/arrowW.png'),
          black: require('./img/arrowB.png'),
        },
      };
    },
    methods: {
      left() {
        if (this.pathLeft == '') {
          this.$router.back();
        } else {
          this.$router.push(this.pathLeft);
        }
      },
    },
  };
</script>
<style scoped lang="less">
  .navbar {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    .title {
      font-size: 26px;
      font-weight: bold;
    }
    .btn {
      position: absolute;
      right: 25px;
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 20px;
    }
  }
</style>
