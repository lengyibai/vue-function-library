<template>
  <div class="CountDown">
    <span>
      <b>{{ h }}:</b>
      <b>{{ m }}:</b>
      <b>{{ s }}</b>
    </span>
    <span style="user-select: none; cursor: pointer" @click="doStart">
      {{ timeStatus }}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: {
        h: 1,
        m: 0,
        s: 1,
      },
      timer: null,
      sumTime: 0,
      h: '00',
      m: '00',
      s: '00',
      timeStatus: '开始',
    };
  },
  created() {
    this.sumTime = this.time.h * 60 * 60 + this.time.m * 60 + this.time.s;
    this.format();
  },
  methods: {
    format() {
      this.h = Math.floor(this.sumTime / (60 * 60));
      this.m = Math.floor(this.sumTime / 60) - this.h * 60;
      this.s = Math.floor(this.sumTime) - this.h * 60 * 60 - this.m * 60;
      if (this.h <= 9) this.h = '0' + this.h;
      if (this.m <= 9) this.m = '0' + this.m;
      if (this.s <= 9) this.s = '0' + this.s;
    },
    doStart() {
      if (this.timeStatus == '开始') {
        this.sumTime = this.time.h * 60 * 60 + this.time.m * 60 + this.time.s;
        this.timeStatus = '暂停';
        this.format();
        this.onTimer();
      } else if (this.timeStatus == '暂停') {
        clearInterval(this.timer);
        this.timer = null;
        this.timeStatus = '继续';
      } else if (this.timeStatus == '继续') {
        this.onTimer();
        this.timeStatus = '暂停';
      }
    },
    onTimer() {
      this.timer = setInterval(() => {
        this.start();
      }, 1000);
    },
    start() {
      if (this.sumTime === -1) {
        clearInterval(this.timer);
        this.timer = null;
        this.timeStatus = '定时结束';
      } else {
        this.format();
        this.sumTime--;
      }
    },
  },
};
</script>
<style scoped lang="less">
.CountDown {
  display: flex;
  align-items: center;
}
</style>
