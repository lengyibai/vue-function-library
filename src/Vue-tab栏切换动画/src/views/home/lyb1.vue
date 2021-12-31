<template>
  <div class="lyb">
    <lyb-pdr-pul
      class="scroll"
      @refreshing="refreshData1"
      @loading="addData1"
      :status="status"
      ref="scroll1"
    >
      <div class="content">
        <li v-for="(item, index) in data1.list" :key="index" ref="card">
          {{ item.name }}
        </li>
      </div></lyb-pdr-pul
    >
  </div>
</template>
<script>
  import { getData, GetData } from '@/network/API/home.js';
  export default {
    name: 'lyb',
    data() {
      return {
        //!··········整体结构数据··········!//
        //@········tab栏相关········@//
        currentIndex: 0,

        data1: { page: 1, list: [] },
        // 第一次请求状态，显示空状态或者请求错误
        status: '',
        temp: [],
      };
    },
    methods: {
      fn() {},
      //@请求封装
      getDataReq(page) {
        // 使用 promise 发送向外传递请求状态
        return new Promise((reslove, reject) => {
          getData(page)
            .then(res => {
              if (res.data.data != null) {
                this.temp = new GetData(res.data.data.movies);
                this.data1.list.push(...new GetData(res.data.data.movies));
                // 向外传递请求成功
                reslove(true);
              } else {
                // 向外传递暂无更多
                reslove(null);
              }
            })
            .catch(() => {
              // 向外传递请求失败，多为网络或请求验证问题
              reject(false);
            });
        });
      },
      //下拉刷新
      refreshData1() {
        this.data1.page = 1;
        this.data1.list = [];
        this.getDataReq(1)
          .then(res => {
            console.log(res);
            this.$refs.scroll1.refreshSuccess(res);
          })
          .catch(err => {
            console.log(err);
            this.$refs.scroll1.refreshSuccess(err);
          });
      },
      //上拉加载
      addData1() {
        let page = this.data1.page;
        this.getDataReq(page)
          .then(status => {
            this.$refs.scroll1.loadSuccess(status);
            this.data1.page++;
            if (this.data1.page == 20) this.data1.page = 20;
          })
          .catch(err => {
            this.$refs.scroll1.loadSuccess(err);
          });
      },
    },
  };
</script>
<style scoped lang="less">
  .lyb {
    width: 100vw;
    display: flex;
    justify-content: center;
    width: 100%;
    .scroll {
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          word-break: break-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 100px;
          padding: 0 35px;
          background-color: #000;
          color: #fff;
          list-style: none;
          line-height: 1;
          font-size: 25px;
        }
      }
    }
  }
</style>
