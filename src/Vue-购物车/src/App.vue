<template>
  <div class="shopCart">
    <!-- 顶部导航栏 -->
    <nav-bar :leftShow="false" bgColor="#f86128">
      <template #title>购物车</template>
    </nav-bar>
    <!-- 滚动插件 -->
    <scroll class="content">
      <!-- 商品卡片 -->
      <card
        v-for="(item, index) in list"
        :goods-list="item"
        :key="index"
        :typeSelectClick="typeSelectClick"
        :selectClick="selectClick"
        :sendNum="sendNum"
      >
        <template #type>{{ item.type }}</template>
      </card>
    </scroll>
    <!-- 底部导航栏 -->
    <tab-bar
      :box1="true"
      :fn="payment"
      :allSelectClick="allSelectClick"
      :isAllSelect="isAllSelect"
      :total="total"
    >
      <template #box3>支付</template>
    </tab-bar>
  </div>
</template>
<script>
  /* 公共组件 */
  //顶部栏
  import NavBar from '@/components/common/navbar/NavBar.vue';
  // 滚动组件
  import Scroll from '@/components/common/scroll/Scroll.vue';
  // 单选框组件
  import SelectButton from '@/components/common/selectButton/selectButton.vue';

  /* 业务组件 */
  //底部栏
  import TabBar from '@/components/content/tabBar/TabBar.vue';
  // 卡片
  import Card from '@/components/content/card/Card.vue';
  export default {
    name: '',
    components: { NavBar, Scroll, TabBar, Card, SelectButton },
    data() {
      return {
        list: [
          {
            type: '肉类',
            isTypeSelect: false,
            list: [
              {
                type: '肉类',
                id: 101,
                name: '牛肉',
                other: '冷弋白',
                price: 40,
                num: 1,
                isSelect: true,
              },
              {
                id: 102,
                name: '猪肉',
                other: '冷弋白',
                price: 20,
                num: 1,
                isSelect: false,
              },
              {
                id: 103,
                name: '鱼肉',
                other: '冷弋白',
                price: 10,
                num: 1,
                isSelect: false,
              },
            ],
          },
          {
            type: '蔬菜类',
            isTypeSelect: false,
            list: [
              {
                id: 201,
                name: '萝卜',
                other: '冷弋白',
                price: 4,
                num: 1,
                isSelect: false,
              },
              {
                id: 202,
                name: '菠菜',
                other: '冷弋白',
                price: 2,
                num: 1,
                isSelect: false,
              },
              {
                id: 203,
                name: '白菜',
                other: '冷弋白',
                price: 1,
                num: 1,
                isSelect: false,
              },
            ],
          },
        ],
        isAllSelect: false,
      };
    },
    computed: {
      // 计算价格
      total() {
        let total = 0;
        this.list.forEach(item => {
          item.list.forEach(item => {
            if (item.isSelect) {
              total += item.price * item.num;
            }
          });
        });
        return total;
      },
      getSelectData() {
        let good_id = [];
        this.list.forEach(item => {
          item.list.forEach(item => {
            if (item.isSelect) {
              good_id.push(item.id);
            }
          });
        });
        return good_id;
      },
    },
    methods: {
      sendNum(id, num) {
        console.log(id, num);
      },
      // 支付
      payment() {
        console.log(this.getSelectData);
      },

      /* 全选、单选按钮 */
      // 类别全选控制“所有全选”
      setAllSelect() {
        this.isAllSelect = this.list.every(item => {
          return item.isTypeSelect;
        });
      },
      //单选
      selectClick(type, id) {
        this.list.forEach(item => {
          //判断当前点击的类别
          if (item.type == type) {
            //控制单个选中
            item.list.forEach(item => {
              if (item.id == id) {
                item.isSelect = !item.isSelect;
              }
            });
            //单个选中控制类别全选按钮
            item.isTypeSelect = item.list.every(item => {
              return item.isSelect;
            });
          }
        });

        // 每次点击控制“所有全选按钮”的状态
        this.setAllSelect();
      },
      // 类别全选
      typeSelectClick(type, isAllSelect) {
        //获取被点击类别下面的数据
        let list = this.list.filter(item => {
          return item.type == type;
        })[0];

        // 所有全选控制类别全选
        if (isAllSelect != undefined) {
          list.isTypeSelect = isAllSelect;
          isAllSelect = undefined;
        } else {
          list.isTypeSelect = !list.isTypeSelect;
        }
        list.list.forEach(item => {
          item.isSelect = list.isTypeSelect;
        });

        // 每次点击判断并设置“所有全选按钮”的状态
        this.setAllSelect();
      },
      //所有全选
      allSelectClick() {
        this.isAllSelect = !this.isAllSelect;
        this.list.forEach(item => {
          item.isTypeSelect = this.isAllSelect;
          item.list.forEach(item => {
            item.isSelect = this.isAllSelect;
          });
        });
      },
    },
  };
</script>
<style scoped lang="less">
  .shopCart {
    .content {
      background-color: #fafcfc;
      bottom: 2.0267rem;
    }
  }
</style>
