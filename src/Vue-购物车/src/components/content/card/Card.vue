<template>
  <div class="cardD">
    <!-- 类别 -->
    <div class="type" @click="typeSelectClick(goodsList.type)">
      <select-button class="select" :isSelect="goodsList.isTypeSelect" />
      <img src="./img/ic_sp .png" alt="" />
      <span><slot name="type"></slot></span>
    </div>
    <!-- 商品卡片 -->
    <div class="goods" v-for="(item, index) in goodsList.list" :key="index">
      <select-button
        class="select"
        @click.native="selectClick(goodsList.type, item.id)"
        :isSelect="item.isSelect"
      />
      <img src="@/assets/img/head.jpg" alt="" />
      <!-- 商品信息 -->
      <div class="message">
        <div class="name">{{ item.name }}</div>
        <div class="other">{{ item.other }}</div>
        <div class="box">
          <div class="price">
            <span>$</span>
            <span>{{ item.price }}</span>
          </div>
          <van-stepper
            @change="sendNum(item.id, item.num)"
            v-model="item.num"
            theme="round"
            button-size="0.5333rem"
            disable-input
            input-width="0.64rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* 公共组件 */
  // 单选框组件
  import SelectButton from '@/components/common/selectButton/selectButton.vue';
  export default {
    props: {
      goodsList: {
        default() {
          return [];
        },
      },
      //类别全选函数
      typeSelectClick: {
        type: Function,
        default() {},
      },
      //单选函数
      selectClick: {
        type: Function,
        default() {},
      },
      //添加购物车商品数量
      sendNum: {
        type: Function,
        default() {},
      },
    },
    components: { SelectButton },
  };
</script>
<style scoped lang="less">
  .cardD {
    padding: 0.4267rem;
    background-color: #fff;
    margin-bottom: 0.2667rem;
    .type {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5733rem;
      .select {
        width: 0.4267rem;
        height: 0.4267rem;
        margin-right: 0.32rem;
      }
      img {
        width: 0.4267rem;
        height: 0.4267rem;
        margin-right: 0.1733rem;
      }
      span {
        font-size: 0.3733rem;
        font-family: PingFang SC;
        font-weight: bold;
      }
    }
    .goods {
      display: flex;
      align-items: center;
      margin-bottom: 0.5467rem;
      .select {
        width: 0.4267rem;
        height: 0.4267rem;
        margin-right: 0.32rem;
      }
      img {
        width: 2.4rem;
        height: 2.4rem;
        object-fit: cover;
        margin-right: 0.3067rem;
        border-radius: 0.1333rem;
      }
      .message {
        flex: 1;
        .name {
          font-size: 0.3733rem;
          font-family: PingFang SC;
          font-weight: 400;
          margin-bottom: 0.2133rem;
        }
        .other {
          font-size: 0.2667rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #b2b2b2;
          margin-bottom: 0.4133rem;
        }
        .box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .price {
            span {
              font-size: 0.4267rem;
              font-family: DINOT;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
