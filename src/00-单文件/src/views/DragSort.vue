<template>
  <div class="index">
    <transition-group class="Box" style="display: flex; flex-wrap: wrap">
      <div
        class="box"
        :class="{ active: currentIndex == index }"
        @dragstart="dragstart(index)"
        @dragover="dragover($event, index)"
        @drop="drop(index)"
        @dragleave="dragleave"
        v-for="(item, index) in users"
        :key="item"
      >
        <div class="move" draggable="true">
          {{ item }}
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      fromIndex: 0,
      currentIndex: null,
    };
  },
  methods: {
    exchange(arr, index, target) {
      if (index > target) {
        arr.splice(target, 0, arr[index]);
        arr.splice(index + 1, 1);
      } else {
        arr.splice(target + 1, 0, arr[index]);
        arr.splice(index, 1);
      }
    },

    dragstart(index) {
      this.fromIndex = index;
    },

    dragover(e, index) {
      e.preventDefault();
      this.currentIndex = index;
    },

    drop(index) {
      this.currentIndex = null;
      this.exchange(this.users, this.fromIndex, index);

      console.log(
        `${this.users.slice(0, 3).join(' ')}
${this.users.slice(3, 6).join(' ')}
${this.users.slice(6, 9).join(' ')}`
      );
    },

    dragleave() {
      this.currentIndex = null;
    },
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.index {
  .flex();
  .Box {
    .flex();
    width: 300px;
    height: 300px;
    flex-wrap: wrap;
    align-content: center;
    .box {
      position: relative;
      width: 75px;
      height: 75px;
      margin: 12.5px;
      transition: all 0.5s;
    }
  }

  .move {
    .flex();
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    font-size: 25px;
    color: #fff;
    z-index: 1;
    border-radius: 50%;
    overflow: hidden;
  }
}

.active {
  transform: scale(1.25);
  opacity: 0.25;
}
</style>
