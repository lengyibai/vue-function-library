<template>
  <div class="app">
    <div class="top">
      <button
        :class="{ active: item == currentIndex }"
        v-for="(item, index) in title"
        :key="index"
        @click="handleBtnClick(index, item)"
      >
        {{ item }}
      </button>
    </div>
    <div class="main">
      <div v-for="(item, index) in title" :key="index" :ref="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ],

        themeTopYs: [],
        currentIndex: 'A',
      };
    },
    /**
     * 目前采用的是：方案2，推荐方案2
     * 方案1：滚动到指定位置，按钮样式跟随改变，地址栏也会跟随改变，点击按钮也会滚动到指定位置，但修改地址栏不会跳转，修改地址栏后需要手动刷新页面才会跳转
     * 方案2：除了滚动不会修改地址栏，需要点击按钮才会修改地址栏，其他功能与方案一一致，因为修改地址栏会触发实时监听地址栏，出现滚动错误，如果想自动修改地址栏，可以采用上面的方案
     * 解开79行-89行注释，注释119行到124行，Vue官网、gitee浏览md文件大纲等，就是采用的此方案
     * 但此方案唯一不足的是，用户需要点击按钮才会修改地址栏，这样影响用户收藏网站，可以根据项目需求考虑
     */

    /* 方案一注释范围 Start */
    beforeRouteUpdate(to, from, next) {
      // 获取下一个路由的地址栏参数，在坐标数组 themeTopYs 查找，获取它的坐标
      let y = this.themeTopYs.find((item, i) => {
        return item.name == to.params.page;
      }).y;
      // 修改按钮文字颜色
      this.currentIndex = to.params.page;
      // 将获取到的坐标用于滚动
      window.scrollTo({ behavior: 'smooth', top: y });
      next();
    },
    /* 方案一注释范围 End */

    mounted() {
      this.start();
    },
    methods: {
      // 防抖函数
      $debounce(fn, delay) {
        let timer = null;
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(fn, delay);
        };
      },

      start() {
        this.params = this.$route.params.page;
        // 页面加载完成直接显示按钮状态
        this.currentIndex = this.$route.params.page;

        //将每页的坐标插入到数组
        this.title.forEach(item => {
          this.themeTopYs.push({
            y: this.$refs[item][0].offsetTop,
            name: item,
          });
        });
        this.themeTopYs.push(Number.MAX_VALUE);
        window.onscroll = this.$debounce(() => {
          this.themeTopYs.forEach(item => {
            if (document.documentElement.scrollTop >= item.y) {
              this.currentIndex = item.name;

              /* 方案一解开注释范围 Start */
              // 滚动修改地址栏事件
              /* this.$router.replace({
                name: 'lyb',
                params: {
                  page: item.name,
                },
              }); */
              /* 方案一解开注释范围 End */
            }
          });
        }, 100);

        window.scrollTo({
          behavior: 'smooth',
          top: this.themeTopYs.find(
            item => item.name == this.$route.params.page,
          ).y,
        });
      },

      // 点击按钮
      handleBtnClick(index, item) {
        this.currentIndex = item;
        // 修改地址栏
        this.$router.push({
          name: 'lyb',
          params: {
            page: item,
          },
        });
        // 滚动到指定坐标
        window.scrollTo({ behavior: 'smooth', top: this.themeTopYs[index].y });
      },
    },
  };
</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    transition: all 1s;
  }
  .active {
    color: #000 !important;
    background-color: #fff !important;
    transition: all 0s;
  }
  body {
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    background-color: #000;
  }
  .app {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      position: sticky;
      width: 100%;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 999;
      background-color: #000;
      button {
        font-size: 25px;
        padding: 5px 15px;
        background-color: #000;
        border: 3px solid #fff;
        color: #fff;
      }
    }
    .main {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 100px;
      margin-bottom: 1000px;
      div {
        min-width: 100px;
        width: 75%;
        height: 500px;
        margin-bottom: 50px;
        color: #fff;
        text-align: center;
        border: 5px solid #fff;
      }
    }
  }
</style>
