<template>
  <div class="index">
    <lyb-search
      class="search"
      :data="data"
      :keyWord="['name', 'type']"
      @search="search"
      placeholder="支持名字、职业、拼音、简写"
      align="center"
      fontSize="20px"
      v-model="value"
    />
    <transition-group name="fade" appear class="list" ref="list">
      <h2 class="hero" v-for="item in result" :key="item">{{ item.name }}：{{ item.type }}</h2>
    </transition-group>
  </div>
</template>
<script>
import LybSearch from '@/components/LybSearch/LybSearch.vue';
export default {
  name: 'Home',
  props: {},
  data() {
    return {
      data: [
        {
          name: '廉颇',
          type: '坦克',
        },
        {
          name: '小乔',
          type: '法师',
        },
        {
          name: '赵云',
          type: '战士',
        },
        {
          name: '墨子',
          type: '法师',
        },
        {
          name: '妲己',
          type: '法师',
        },
        {
          name: '嬴政',
          type: '法师',
        },
        {
          name: '孙尚香',
          type: '射手',
        },
        {
          name: '鲁班七号',
          type: '射手',
        },
        {
          name: '庄周',
          type: '辅助',
        },
        {
          name: '刘禅',
          type: '辅助',
        },
        {
          name: '高渐离',
          type: '法师',
        },
        {
          name: '阿轲',
          type: '刺客',
        },
        {
          name: '钟无艳',
          type: '战士',
        },
        {
          name: '孙膑',
          type: '辅助',
        },
        {
          name: '扁鹊',
          type: '法师',
        },
        {
          name: '白起',
          type: '坦克',
        },
        {
          name: '芈月',
          type: '法师',
        },
        {
          name: '吕布',
          type: '战士',
        },
        {
          name: '周瑜',
          type: '法师',
        },
        {
          name: '夏侯惇',
          type: '坦克',
        },
        {
          name: '甄姬',
          type: '法师',
        },
        {
          name: '曹操',
          type: '战士',
        },
        {
          name: '典韦',
          type: '战士',
        },
        {
          name: '宫本武藏',
          type: '战士',
        },
        {
          name: '李白',
          type: '刺客',
        },
        {
          name: '马可波罗',
          type: '射手',
        },
        {
          name: '狄仁杰',
          type: '射手',
        },
        {
          name: '达摩',
          type: '战士',
        },
        {
          name: '项羽',
          type: '坦克',
        },
        {
          name: '武则天',
          type: '法师',
        },
        {
          name: '老夫子',
          type: '战士',
        },
        {
          name: '关羽',
          type: '战士',
        },
        {
          name: '貂蝉',
          type: '法师',
        },
        {
          name: '安琪拉',
          type: '法师',
        },
        {
          name: '程咬金',
          type: '坦克',
        },
        {
          name: '露娜',
          type: '战士',
        },
        {
          name: '姜子牙',
          type: '法师',
        },
        {
          name: '刘邦',
          type: '坦克',
        },
        {
          name: '韩信',
          type: '刺客',
        },
        {
          name: '王昭君',
          type: '法师',
        },
        {
          name: '兰陵王',
          type: '刺客',
        },
        {
          name: '花木兰',
          type: '战士',
        },
        {
          name: '张良',
          type: '法师',
        },
        {
          name: '不知火舞',
          type: '法师',
        },
        {
          name: '娜可露露',
          type: '刺客',
        },
        {
          name: '橘右京',
          type: '刺客',
        },
        {
          name: '亚瑟',
          type: '战士',
        },
        {
          name: '孙悟空',
          type: '刺客',
        },
        {
          name: '牛魔',
          type: '辅助',
        },
        {
          name: '后羿',
          type: '射手',
        },
        {
          name: '刘备',
          type: '战士',
        },
        {
          name: '张飞',
          type: '坦克',
        },
        {
          name: '李元芳',
          type: '射手',
        },
        {
          name: '虞姬',
          type: '射手',
        },
        {
          name: '钟馗',
          type: '辅助',
        },
        {
          name: '成吉思汗',
          type: '射手',
        },
        {
          name: '杨戬',
          type: '战士',
        },
        {
          name: '雅典娜',
          type: '战士',
        },
        {
          name: '蔡文姬',
          type: '辅助',
        },
        {
          name: '太乙真人',
          type: '辅助',
        },
        {
          name: '哪吒',
          type: '战士',
        },
        {
          name: '诸葛亮',
          type: '法师',
        },
        {
          name: '黄忠',
          type: '射手',
        },
        {
          name: '大乔',
          type: '辅助',
        },
        {
          name: '东皇太一',
          type: '辅助',
        },
        {
          name: '干将莫邪',
          type: '法师',
        },
        {
          name: '鬼谷子',
          type: '辅助',
        },
        {
          name: '铠',
          type: '战士',
        },
        {
          name: '百里守约',
          type: '射手',
        },
        {
          name: '百里玄策',
          type: '刺客',
        },
        {
          name: '苏烈',
          type: '坦克',
        },
        {
          name: '梦奇',
          type: '战士',
        },
        {
          name: '女娲',
          type: '法师',
        },
        {
          name: '明世隐',
          type: '辅助',
        },
        {
          name: '公孙离',
          type: '射手',
        },
        {
          name: '杨玉环',
          type: '法师',
        },
        {
          name: '裴擒虎',
          type: '刺客',
        },
        {
          name: '弈星',
          type: '法师',
        },
        {
          name: '狂铁',
          type: '战士',
        },
        {
          name: '米莱狄',
          type: '法师',
        },
        {
          name: '元歌',
          type: '刺客',
        },
        {
          name: '孙策',
          type: '坦克',
        },
        {
          name: '司马懿',
          type: '刺客',
        },
        {
          name: '盾山',
          type: '辅助',
        },
        {
          name: '伽罗',
          type: '射手',
        },
        {
          name: '沈梦溪',
          type: '法师',
        },
        {
          name: '李信',
          type: '战士',
        },
        {
          name: '上官婉儿',
          type: '法师',
        },
        {
          name: '嫦娥',
          type: '法师',
        },
        {
          name: '猪八戒',
          type: '坦克',
        },
        {
          name: '盘古',
          type: '战士',
        },
        {
          name: '瑶',
          type: '辅助',
        },
        {
          name: '云中君',
          type: '刺客',
        },
        {
          name: '曜',
          type: '战士',
        },
        {
          name: '马超',
          type: '战士',
        },
        {
          name: '西施',
          type: '法师',
        },
        {
          name: '鲁班大师',
          type: '辅助',
        },
        {
          name: '蒙犽',
          type: '射手',
        },
        {
          name: '镜',
          type: '刺客',
        },
        {
          name: '蒙恬',
          type: '战士',
        },
        {
          name: '阿古朵',
          type: '坦克',
        },
        {
          name: '夏洛特',
          type: '战士',
        },
        {
          name: '澜',
          type: '刺客',
        },
        {
          name: '司空震',
          type: '战士',
        },
        {
          name: '艾琳',
          type: '射手',
        },
        {
          name: '云缨',
          type: '战士',
        },
        {
          name: '金蝉',
          type: '法师',
        },
        {
          name: '暃',
          type: '刺客',
        },
      ],
      result: [],
      value: '',
    };
  },
  components: { LybSearch },
  created() {
    this.result = this.data;
  },
  watch: {
    value() {
      this.$refs.list.$el.scrollTop = 0;
    },
  },
  methods: {
    fn() {
      console.log(666);
    },
    search(result) {
      this.result = result;
    },
  },
};
</script>
<style scoped lang="less">
* {
  transition: all 0.5s;
}
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .search {
    position: fixed;
    width: 100%;
    max-width: 500px;
    padding: 0 25px;
    margin-bottom: 5px;
    background-color: #fff;
    z-index: 2;
  }
  .list {
    position: absolute;
    inset: 0;
    top: 50px;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow-x: hidden;
    .hero {
      width: calc(16.66% - 20px);
      height: 35px;
      margin: 10px;
      text-align: center;
      @media screen and (max-width: 1170px) {
        width: calc(20% - 20px);
      }
      @media screen and (max-width: 1000px) {
        width: calc(25% - 20px);
      }
      @media screen and (max-width: 768px) {
        width: calc(33.33% - 20px);
      }
      @media screen and (max-width: 580px) {
        width: calc(50% - 20px);
      }
      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
  }
}

/* 进入前状态 */
.fade-enter {
  transform: translateX(200%);
  opacity: 0;
}
.fade-leave-active {
  display: none;
}
/* 进入/离开动画属性 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0, 1.28, 0.27, 1.08);
}
</style>
