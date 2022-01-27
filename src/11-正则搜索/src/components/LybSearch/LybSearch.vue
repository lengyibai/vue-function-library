<template>
  <div class="search">
    <input
      ref="input"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="focus"
      @blur="blur"
      :style="{ fontSize: fontSize, paddingRight: 'calc(' + fontSize + ' + 5px)', textAlign: align }"
    />
    <div class="clear" @mousedown="clear" :style="{ right: 'calc(' + fontSize + ' + 5px)' }">
      <img src="./img/clear.svg" :style="{ width: fontSize, height: fontSize }" v-show="isShow" />
    </div>
  </div>
</template>

<script>
//防抖函数
import { $debounce, $search } from './js/lyb.js';
export default {
  name: 'LybSearch',
  props: {
    //传入存着对象的数组
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    //以什么关键词搜索
    keyWord: {
      type: Array,
      default() {
        return [];
      },
    },
    //防抖时间
    time: {
      type: Number,
      default: 100,
    },
    // 自定义样式
    inputStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 输入框描述
    placeholder: {
      type: String,
      default: '请输入',
    },
    // 文字大小
    fontSize: {
      type: String,
      default: '20px',
    },
    // 对齐方式
    align: {
      type: String,
      default: 'left',
    },
    //输入框高度
    height: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // 输入框值
      value: '',
      // 搜索结果
      result: [],
      // 是否显示清空图标
      isShow: false,
      // 防抖
      debounce: null,
    };
  },
  created() {
    // 设置防抖
    this.debounce = $debounce(function () {
      // 搜索结果
      this.result = $search(this.data, this.value, this.keyWord);
      // 发送搜索结果给父组件
      this.$emit('search', this.result);
    }, this.time);
  },
  watch: {
    value(v) {
      // 实时发送输入框内容给父组件
      this.$emit('input', v);
    },
  },
  methods: {
    //#####··········输入时触发··········#####//
    handleInput() {
      if (this.$refs.input.value == '') {
        //如果传过来的数据为空，则发送完整数据给父组件
        this.$emit('search', this.data);
      } else {
        // 开始搜索
        this.debounce();
      }
      //如果为空，隐藏清空图标
      if (this.value == '') {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },

    //#####··········清空输入框··········#####//
    clear() {
      this.value = '';
      //清空后聚焦
      this.$refs.input.focus();
      //清空后发送完整数据给父组件
      this.$emit('search', this.data);
    },

    //#失去焦点隐藏清空图标
    blur() {
      setTimeout(() => {
        this.isShow = false;
      });
    },

    //#获取焦点如果输入框不为空，则显示清空图标
    focus() {
      //如果不为空，显示清空图标
      if (this.value != '') {
        this.isShow = true;
      }
    },
  },
};
</script>
<style scoped lang="less">
.search {
  position: relative;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    text-align: left;
  }
  .clear {
    position: absolute;
    right: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
