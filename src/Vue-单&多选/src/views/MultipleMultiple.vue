<template>
  <div class="MultipleMultiple">
    <!-- tab栏 -->
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: currentIndex == index }"
        @click="tabClick(index)"
        v-for="(item, index) in 3"
        :key="index"
      >
        标签{{ item }}
      </div>
    </div>

    <!-- 列表 -->
    <div class="content">
      <div
        class="card"
        v-for="(item, index) in data[dataType[currentIndex]]"
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
        <select-button
          class="select"
          :isSelect="animalAllSelect[currentIndex]"
        ></select-button>
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
        // 数据
        data: {
          one: [
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
          two: [
            {
              id: 201,
              name: '龙',
              isSelect: false,
            },
            {
              id: 202,
              name: '蛇',
              isSelect: false,
            },
            {
              id: 203,
              name: '马',
              isSelect: false,
            },
            {
              id: 204,
              name: '羊',
              isSelect: false,
            },
          ],
          three: [
            {
              id: 301,
              name: '猴',
              isSelect: false,
            },
            {
              id: 302,
              name: '鸡',
              isSelect: false,
            },
            {
              id: 303,
              name: '狗',
              isSelect: false,
            },
            {
              id: 304,
              name: '猪',
              isSelect: false,
            },
          ],
        },
        dataType: ['one', 'two', 'three'],
        //每个tab栏标签的全选按钮状态
        animalAllSelect: [false, false, false],
      };
    },
    created() {
      // 获取第一tab栏标签数据
      // this.getGoodList('1', 0);
    },
    computed: {
      // 获取当前标签数据
      getSelectBtn() {
        return this.data[this.dataType[this.currentIndex]];
      },
      //获取被选中的值
      getSelectData() {
        return this.getSelectBtn
          .filter(item => {
            return item.isSelect;
          })
          .map(item => {
            return item.name;
          });
      },
    },
    methods: {
      // 封装请求
      /* getGoodList(type, index) {
        goodList(type).then(res => {
          this.$set(this.data, this.dataType[index], res.data.data.data);
          this.data[this.dataType[index]].forEach(item => {
            this.$set(item, 'isSelect', false);
          });
        });
      }, */
      tabClick(index) {
        this.currentIndex = index;
        /* //设置请求指定tab栏
        let type = '';
        type = (index + 1).toString();
        // 如果当前tab栏数据为空，则发送请求
        if (this.data[this.dataType[index]].length == 0) {
          this.getGoodList(type, index);
        } */
      },
      //控制单选
      selectClick(id) {
        this.getSelectBtn.forEach(item => {
          if (item.id == id) {
            this.$set(item, 'isSelect', !item.isSelect);
          }
        });

        //单个选中控制全选按钮
        this.$set(
          this.animalAllSelect,
          this.currentIndex,
          this.getSelectBtn.every(item => {
            return item.isSelect;
          }),
        );
      },

      //全选
      selectAll() {
        this.$set(
          this.animalAllSelect,
          this.currentIndex,
          !this.animalAllSelect[this.currentIndex],
        );
        this.getSelectBtn.forEach(item => {
          this.$set(item, 'isSelect', this.animalAllSelect[this.currentIndex]);
        });
      },

      //发送数据
      sendData() {
        this.lyb(this.getSelectData);
      },
    },
  };
</script>
<style scoped lang="less">
  .active {
    background-color: #fff;
    color: #000;
  }
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
  .MultipleMultiple {
    width: 2.008rem;
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 0.008rem solid #fff;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 0.16rem;
        border: 0.012rem solid #fff;
        padding: 0.08rem 0;
        &:hover {
          color: #000;
          background-color: #fff;
        }
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
