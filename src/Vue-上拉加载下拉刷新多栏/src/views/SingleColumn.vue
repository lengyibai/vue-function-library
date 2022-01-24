<template>
  <div class="SingleColumn">
    <lyb-pdr-pul
      class="scroll"
      @refreshing="refreshData1"
      @loading="addData1"
      :status="status"
      ref="scroll1"
      top="50px"
    >
      <div class="content">
        <li v-for="(item, index) in data1.list" :key="index" ref="card">
          {{ item.name }}
        </li>
      </div>
    </lyb-pdr-pul>
  </div>
</template>
<script>
  import { getData, GetData } from '@/api/home.js';
  import lybPdrPul from '@/components/lyb-pdr-pul/lyb-pdr-pul.vue';
  export default {
    name: 'SingleColumn',
    data() {
      return {
        //#####··········整体结构数据··········#####//
        //####········tab栏相关········####//
        currentIndex: 0,

        data1: { page: 1, list: [] },
        // 第一次请求状态，显示空状态或者请求错误
        status: '',
      };
    },
    components: { lybPdrPul },
    methods: {
      //####········请求封装········####//
      getDataReq(page) {
        return new Promise((reslove, reject) => {
          getData(page)
            .then(res => {
              if (res.data.data != null) {
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
      //####········下拉刷新········####//
      refreshData1() {
        this.data1.page = 1;
        this.data1.list = [];
        this.getDataReq(1)
          .then(res => {
            // 刷新成功回调
            this.$refs.scroll1.refreshSuccess(res);
          })
          .catch(err => {
            // 刷新失败回调
            this.$refs.scroll1.refreshSuccess(err);
          });
      },
      //####········上拉加载········####//
      addData1() {
        let page = this.data1.page;
        this.getDataReq(page)
          .then(status => {
            // 上拉加载成功回调
            this.$refs.scroll1.loadSuccess(status);
            this.data1.page++;
            if (this.data1.page == 3) this.data1.page = 20;
          })
          .catch(err => {
            // 上拉加载失败回调
            this.$refs.scroll1.loadSuccess(err);
          });
      },
    },
  };
</script>
<style scoped lang="less">
  .SingleColumn {
    width: 100%;
    flex-shrink: 0;
    .scroll {
      .content {
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
          background-color: #fff;
          color: #000;
          list-style: none;
          font-size: 25px;
        }
      }
    }
  }
</style>
