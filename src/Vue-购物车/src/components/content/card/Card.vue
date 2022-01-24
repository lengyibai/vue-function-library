<template>
  <div class="card">
    <!-- 类别 -->
    <div class="type" @click="typeSelectClick(goodsList.type)">
      <select-button class="select" :isSelect="goodsList.isTypeSelect" />
      <img src="./img/ic_sp.png" alt="" />
      <span><slot name="type"></slot></span>
    </div>
    <!-- 商品卡片 -->

    <transition-group name="del" appear>
      <div class="goods" v-for="item in goodsList.list" :key="item.id">
        <select-button
          class="select"
          @click.native="selectClick(goodsList.type, item.id)"
          :isSelect="item.isSelect"
        />
        <img :src="item.img" alt="" />
        <!-- 商品信息 -->
        <div class="message">
          <div class="name">{{ item.name }}</div>
          <div class="box">
            <div class="price">
              <span>￥</span>
              <span>{{ item.price }}</span>
            </div>
            <div class="stepper">
              <div class="sub" @click="sub(item)"></div>
              <span class="count">{{ item.num }}</span>
              <div class="add" @click="add(item)"></div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
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
    methods: {
      // 商品数量--
      sub(item) {
        if (item.num <= 0) return;
        item.num--;
        // 发送被改变的商品数据
        this.sendNum(item.id, Number(item.num));
      },
      // 商品数量++
      add(item) {
        item.num++;
        // 发送被改变的商品数据
        this.sendNum(item.id, Number(item.num));
      },
    },
  };
</script>
<style scoped lang="less">
  @size1: 25px;
  @size2: 20px;
  @marpad: 20px;
  .card {
    padding: @marpad 10px;
    background-color: #fff;
    margin-bottom: @marpad;
    .type {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: @marpad;
      .select {
        width: @size1;
        height: @size1;
        margin-right: 15px;
      }
      img {
        width: @size1;
        height: @size1;
        margin-right: 15px;
      }
      span {
        font-size: @size1;
        font-weight: bold;
      }
    }
    .goods {
      display: flex;
      align-items: center;
      margin-bottom: @marpad;
      height: 75px;
      &:last-child {
        margin-bottom: 0px;
      }
      .select {
        width: @size1;
        height: @size1;
        margin-right: 15px;
      }
      img {
        height: 100%;
        object-fit: cover;
        margin-right: 15px;
        border-radius: 10px;
      }
      .message {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .name {
          font-size: @size2;
          font-family: PingFang SC;
          font-weight: 400;
          margin-bottom: 15px;
        }
        .box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .price {
            span {
              font-size: @size2;
              font-weight: bold;
            }
          }
          .stepper {
            display: flex;
            align-items: center;
            .sub,
            .add {
              position: relative;
              width: @size2;
              height: @size2;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
            }
            .sub {
              border: 2px solid #000;
              &::before {
                position: absolute;
                width: 50%;
                height: 2px;
                background-color: #000;
                content: '';
              }
            }
            .add {
              background-color: #000;
              .style {
                position: absolute;
                width: 50%;
                height: 2px;
                background-color: #fff;
                content: '';
              }
              &::before {
                .style();
              }
              &::after {
                .style();
                transform: rotate(90deg);
              }
            }
            .count {
              width: @size2;
              font-size: @size2;
              margin: 0 10px;
              border: none;
              text-align: center;
              &:focus {
                border: 1px solid #333;
              }
            }
          }
        }
      }
    }
  }
</style>
