<template>
  <div class="shopCart">
    <!-- 顶部导航栏 -->
    <nav-bar
      :leftShow="false"
      :rightShow="true"
      :prop_right="handleDelGoods"
      bgColor="#000"
    >
      <template #title>购物车</template>
      <template #btn>删除</template>
    </nav-bar>
    <!-- 滚动插件 -->
    <scroll class="content" top="50px" bottom="75px" ref="scroll">
      <div
        class="empty"
        style="
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(248, 248, 248);
        "
        v-if="list.length == 0"
      >
        <img style="width: 100%" src="./img/empty.gif" alt="" />
      </div>

      <transition-group name="del" appear>
        <!-- 商品卡片 -->
        <card
          v-for="item in list"
          :goods-list="item"
          :typeSelectClick="typeSelectClick"
          :selectClick="selectClick"
          :sendNum="sendNum"
          :key="item.type"
        >
          <template #type>{{ item.type }}</template>
        </card>
      </transition-group>
    </scroll>
    <!-- 底部导航栏 -->
    <tab-bar
      :box1="true"
      :fn="payment"
      :allSelectClick="allSelectClick"
      :isAllSelect="isAllSelect"
      :total="total"
    >
      <template #box2>支付</template>
    </tab-bar>
  </div>
</template>
<script>
/* 公共组件 */
//顶部栏
import NavBar from '@/components/common/navbar/NavBar.vue';
//滚动组件
import Scroll from '@/components/common/lyb-scroll/lyb-scroll.vue';

/* 业务组件 */
//底部栏
import TabBar from '@/components/content/tabBar/TabBar.vue';
//卡片
import Card from '@/components/content/card/Card.vue';
export default {
  name: '',
  components: { NavBar, Scroll, TabBar, Card },
  data() {
    return {
      value: 0,
      list: [
        {
          type: '肉类',
          isTypeSelect: false,
          list: [
            {
              id: 101,
              name: '牛肉',
              price: 40,
              num: 10,
              img: require('./img/beef.png'),
              isSelect: true,
            },
            {
              id: 102,
              name: '猪肉',
              price: 20,
              num: 1,
              img: require('./img/pork.png'),
              isSelect: false,
            },
            {
              id: 103,
              name: '鱼肉',
              price: 10,
              num: 1,
              img: require('./img/fish.png'),
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
              price: 4,
              num: 1,
              img: require('./img/radish.png'),
              isSelect: false,
            },
            {
              id: 202,
              name: '菠菜',
              price: 2,
              num: 1,
              img: require('./img/spinach.png'),
              isSelect: false,
            },
            {
              id: 203,
              name: '白菜',
              price: 1,
              num: 1,
              img: require('./img/cabbage.png'),
              isSelect: false,
            },
          ],
        },
      ],
      isAllSelect: false,
    };
  },
  computed: {
    //计算价格
    total() {
      let total = 0;
      this.list.forEach((item) => {
        item.list.forEach((item) => {
          if (item.isSelect) {
            total += item.price * item.num;
          }
        });
      });
      return total;
    },

    //获取所有被选中的商品id，可用于删除购物车商品和支付
    getSelectData() {
      let good_ids = [];
      let good_names = [];
      this.list.forEach((item) => {
        item.list.forEach((item) => {
          if (item.isSelect) {
            good_ids.push(item.id);
            good_names.push(item.name);
          }
        });
      });
      return [good_ids, good_names];
    },
  },
  methods: {
    //获取被增减的商品id及数量
    sendNum(id, num) {
      console.log(id, num);
    },

    //支付
    payment() {
      if (this.getSelectData[0].length == 0) {
        this.$toast.fail('您还未选择任何商品');
        return;
      }
      this.$dialog({
        message: '购物车仅供展示，您选择了：【' + this.getSelectData[1] + '】',
      });
    },

    //删除商品
    handleDelGoods() {
      // 循环被选中的商品id
      this.getSelectData[0].forEach((id) => {
        // 循环商品分类
        this.list.forEach((_item, _index) => {
          // 循环商品列表查找并返回找到的商品下标
          let index = _item.list.findIndex((__item) => {
            return __item.id == id;
          });
          // 如果查找到商品
          if (index != -1) {
            // 从商品列表中删除
            _item.list.splice(index, 1);
            // 如果商品分类的商品列表为空，则将这个分类从分类数组中删除
            if (_item.list.length == 0) {
              this.list.splice(_index, 1);
              this.isAllSelect = false;
            }
          }
        });
      });
      this.$toast.success('删除成功');
    },

    /* 全选、单选按钮 */
    //'全部全选框' 是否选中取决于类别全选框是否全部选中
    setAllSelect() {
      this.isAllSelect = this.list.every((item) => {
        return item.isTypeSelect;
      });
    },

    //单选
    selectClick(type, id) {
      this.list.forEach((item) => {
        //判断当前点击的类别
        if (item.type == type) {
          //控制单个选中
          item.list.forEach((item) => {
            //判断当前点击的商品
            if (item.id == id) {
              item.isSelect = !item.isSelect;
            }
          });
          //单个选中控制 '类别全选框'
          item.isTypeSelect = item.list.every((item) => {
            return item.isSelect;
          });
        }
      });
      //单个选中控制 '全部全选框'
      this.setAllSelect();
    },

    //类别全选框
    typeSelectClick(type) {
      //获取被点击类别下面的数据
      let list = this.list.filter((item) => {
        return item.type == type;
      })[0];
      // 类别全选框取反
      list.isTypeSelect = !list.isTypeSelect;
      // 当前类别的所有商品是否选中取决于当前类别全选框的状态
      list.list.forEach((item) => {
        item.isSelect = list.isTypeSelect;
      });

      //每次点击，'全部全选框' 会进行判断
      this.setAllSelect();
    },

    //全部全选框
    allSelectClick() {
      // 全部全选框处于选中状态
      this.isAllSelect = !this.isAllSelect;
      this.list.forEach((item) => {
        //所有类别全选框处于选中状态
        item.isTypeSelect = this.isAllSelect;
        //所有商品处于选中状态
        item.list.forEach((item) => {
          item.isSelect = this.isAllSelect;
        });
      });
    },
  },
};
</script>
<style scoped lang="less">
.shopCart {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100%;
  .content {
    position: relative;
  }
}
</style>
