<template>
  <div class="app">
    <!-- tab栏 -->
    <div class="tab">
      <div class="tab-item">多选单栏</div>
    </div>

    <!-- 列表 -->
    <div class="content">
      <div
        class="card"
        :ref="item.isSelect ? 'card' : ''"
        v-for="(item, index) in data"
        :key="index"
        @click="selectClick(item.id, index)"
      >
        <select-button :isSelect="item.isSelect" class="select"></select-button>
        <span>{{ item.name }}</span>
      </div>
    </div>

    <!-- 底部 -->
    <div class="foot">
      <!-- 全选 -->
      <div class="selectAll" @click="selectAll">
        <select-button class="select" :isSelect="isSelectAll"></select-button>
        <span>全选</span>
      </div>

      <!-- 发送数据 -->
      <div
        class="getData"
        @click="sendData"
        :class="{ isSelect: !getSelectData.length }"
      >
        {{ getSelectData.length ? '发送' : '无值' }}
      </div>
    </div>
  </div>
</template>
<script>
  import selectButton from '@/components/common/selectButton/selectButton.vue';
  export default {
    props: {
      lyb: {
        type: Function,
        default() {},
      },
    },
    components: { selectButton },
    data() {
      return {
        currentIndex: 0,
        data: [
          {
            id: 101,
            name: '鼠',
            isSelect: false,
          },
          {
            id: 102,
            name: '牛',
            isSelect: false,
          },
          {
            id: 103,
            name: '虎',
            isSelect: false,
          },
          {
            id: 104,
            name: '兔',
            isSelect: false,
          },
        ],
        isSelectAll: false,
      };
    },
    created() {
      // 获取tab栏标签数据
      // this.getGoodList('1', 0);
    },
    computed: {
      //获取被选中的值
      getSelectData() {
        return this.data
          .filter(item => {
            return item.isSelect;
          })
          .map(item => {
            return item.name;
          });
      },
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index;
      },
      //控制单选
      selectClick(id) {
        this.data.forEach(item => {
          if (item.id == id) {
            this.$set(item, 'isSelect', !item.isSelect);
          }
        });

        //单个选中控制全选按钮
        this.isSelectAll = this.data.every(item => {
          return item.isSelect;
        });
      },
      //全选
      selectAll() {
        this.isSelectAll = !this.isSelectAll;
        this.data.forEach(item => {
          this.$set(item, 'isSelect', this.isSelectAll);
        });
      },
      //提交选中的值
      sendData() {
        this.$refs.card.forEach(item => {
          item.style.left = '-0.3906rem';
          item.style.top = -item.offsetTop + 75 + 'px';
          setTimeout(() => {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.transition = 'all 0s';
              item.style.left = '0';
              item.style.top = '0';
              setTimeout(() => {
                item.style.transition = 'all 0.75s';
                item.style.opacity = '1';
              }, 10);
            }, 750);
          }, 750);
        });
        this.lyb(this.getSelectData);
      },
    },
  };
</script>
<style scoped lang="less">
  * {
    user-select: none;
  }
  .isSelect {
    pointer-events: none;
    opacity: 0.5;
  }
  .select {
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.04rem;
  }
  .app {
    width: 2.008rem;
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 0.016rem solid #fff;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 0.16rem;
        padding: 0.08rem 0;
      }
    }
    .content {
      margin-top: 0.08rem;
      border: 0.016rem solid #fff;
      .card {
        position: relative;
        transition: all 0.75s;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.2rem;
        &:hover {
          transition: all 0s !important;
          color: #000;
          background-color: #fff;
        }
      }
    }
    .foot {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 0.28rem;
      margin-top: 0.08rem;
      span {
        margin-right: 0.16rem;
        color: #aaa;
      }
      .selectAll {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .getData {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        line-height: 0.28rem;
        text-align: center;
        border: 0.016rem solid #fff;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
</style>
