<!-- 单选多tab栏 -->
<template>
  <div class="SingleMultiple">
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
        ref="card"
        v-for="(item, index) in data[dataType[currentIndex]]"
        :key="index"
        @click="selectClick(item.id)"
      >
        <select-button :isSelect="item.isSelect" class="select"></select-button>
        <span>{{ item.name }}</span>
      </div>
    </div>

    <!-- 底部 -->
    <div
      class="getSelectData"
      :class="{ isSelect: !getSelectData.length }"
      @click="sendData"
    >
      {{ getSelectData.length ? '发送' : '无值' }}
    </div>
  </div>
</template>
<script>
  import selectButton from '@/components/selectButton/selectButton.vue';
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
      };
    },
    created() {
      // 获取第一tab栏标签数据
      // this.getGoodList('1', 0);
    },
    computed: {
      //获取所有tab栏数据
      getAllData() {
        let arr = [];
        let that = this;
        this.dataType.forEach(item => {
          arr.push(...that.data[item]);
        });
        return arr;
      },
      //获取被选中的数据
      getSelectData() {
        return this.getAllData.filter(item => {
          return item.isSelect;
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
        this.$refs.card.forEach((item, index) => {
          setTimeout(() => {
            item.style.transform = 'translateX(1.5625rem)';
            item.style.opacity = 0;
          }, index * 100);
        });
        setTimeout(() => {
          this.currentIndex = index;
          this.$refs.card.forEach((item, index) => {
            setTimeout(() => {
              item.style.transform = 'translateX(0rem)';
              item.style.opacity = 1;
            }, index * 100);
          });
        }, (this.$refs.card.length + 1) * 100);
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
        this.getAllData.forEach(item => {
          if (item.id == id) {
            this.$set(item, 'isSelect', !item.isSelect);
          } else {
            this.$set(item, 'isSelect', false);
          }
        });
      },

      //发送数据
      sendData() {
        Array.from(this.$el.children[1].children).forEach(item => {
          item.style.left = '1.9531rem';
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
        this.lyb(this.getSelectData[0].name);
      },
    },
  };
</script>
<style scoped lang="less">
  .active {
    background-color: #fff;
    color: #000;
  }
  .isSelect {
    pointer-events: none;
    opacity: 0.5;
  }
  .SingleMultiple {
    width: 2.008rem;
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 0.012rem solid #fff;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 0.16rem;
        border: 0.008rem solid #fff;
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
        .select {
          width: 0.2rem;
          height: 0.2rem;
          margin-right: 0.08rem;
        }
      }
    }
    .getSelectData {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.28rem;
      text-align: center;
      border: 0.016rem solid #fff;
      margin-top: 0.08rem;
      &:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
</style>
