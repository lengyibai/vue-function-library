<template>
  <div class="SingleSingle">
    <!-- tab栏 -->
    <div class="tab">
      <div class="tab-item">单选单栏</div>
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
    <div
      class="getData"
      @click="sendData"
      :class="{ isSelect: !getData.length }"
    >
      {{ getData.length ? '发送' : '无值' }}
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
    };
  },
  created() {
    // 获取tab栏标签数据
    // this.getGoodList('1', 0);
  },
  computed: {
    //获取被选中的数据
    getData() {
      return this.data.filter((item) => {
        return item.isSelect;
      });
    },
  },

  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
    //控制单选
    selectClick(id) {
      this.data.forEach((item) => {
        if (item.id == id) {
          this.$set(item, 'isSelect', !item.isSelect);
        } else {
          this.$set(item, 'isSelect', false);
        }
      });
    },
    //发送数据
    sendData() {
      this.$refs.card[0].style.left = '4.4271rem';
      this.$refs.card[0].style.top = -this.$refs.card[0].offsetTop + 75 + 'px';
      setTimeout(() => {
        this.$refs.card[0].style.opacity = '0';
        setTimeout(() => {
          this.$refs.card[0].style.transition = 'all 0s';
          this.$refs.card[0].style.left = '0';
          this.$refs.card[0].style.top = '0';
          setTimeout(() => {
            this.$refs.card[0].style.transition = 'all 0.75s';
            this.$refs.card[0].style.opacity = '1';
          }, 10);
        }, 750);
      }, 750);
      this.lyb(this.getData[0].name);
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
.SingleSingle {
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
        background-color: #fff;
        color: #000;
      }
      .select {
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.08rem;
      }
    }
  }
  .getData {
    height: 0.28rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
