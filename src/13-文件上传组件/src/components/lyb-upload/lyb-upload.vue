<template>
  <div class="Home">
    <transition-group class="Home" name="del">
      <!-- 图片列表 -->
      <div
        class="imgBox"
        v-for="(item, index) in fileList"
        @mouseenter="show(index)"
        @mouseleave="currrentIndex = null"
        @touchstart="show(index)"
        @touchend="currrentIndex = null"
        :key="item.id"
      >
        <!-- 进度蒙版 -->
        <div
          class="mask"
          v-show="!item.isFinish"
          :style="{ height: item.pre == 0 ? '100%' : item.pre }"
        >
          <span>
            {{
              item.pre == 0
                ? item.isUpload === true
                  ? '排队中'
                  : '待上传'
                : item.pre == '100%'
                ? '上传完毕'
                : item.pre
            }}</span
          >
          <marquee v-if="item.pre === 0">{{ item.name }}</marquee>
          <span
            v-if="item.pre !== 0"
            class="lyb-one-line"
            :class="{ failFc: item.isFail }"
            >{{
              item.pre == 0
                ? item.name
                : item.pre == '100%'
                ? item.isFail
                  ? '未成功'
                  : '等待响应'
                : '上传中'
            }}</span
          >
          <span class="lyb-one-line">{{
            item.pre === 0 ? item.size[2] : ''
          }}</span>
        </div>
        <!-- 右上角上传完成 -->
        <div
          class="finish"
          :class="{ failBgc: !item.isFinish }"
          v-show="item.isFinish || item.isFail"
        >
          <lyb-icon
            style="transform: rotate(-45deg)"
            :imgUrl="
              item.isFinish
                ? require('./img/finish.svg')
                : require('./img/fail.svg')
            "
            size="12px"
            bottom="3px"
          ></lyb-icon>
        </div>
        <!-- 图片 -->
        <img :src="item.url" />
        <!-- 删除按钮 -->
        <transition name="show">
          <div
            class="operation"
            v-if="currrentIndex == index"
            @click="delImg(index)"
          ></div>
        </transition>
      </div>

      <!-- 添加图片 -->
      <div class="box1" key="a">
        <input
          type="file"
          ref="file"
          id="select"
          style="display: none"
          @change="filePreview()"
          key="b"
          :multiple="multiple"
          accep="image"
        />
        <label for="select" v-show="select_show || multiple">
          <div
            class="select"
            @dragover="dragover"
            @drop="drop"
            @dragleave="dragleave"
          ></div>
        </label>
      </div>
    </transition-group>
  </div>
</template>
<script>
import axios from 'axios';
import { $getFileSuf, $fmtByte, $urlFileType } from './lyb.js';
import lybIcon from './childComp/lyb-icon/lyb-icon.vue';
export default {
  name: 'lyb-upload',
  props: {
    name: {
      type: String,
      default: 'name',
    },
    url: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 0,
    },
    /* 只能上传什么类型的文件，可传递字符串和数组，字符串只能传递image或video，代表只能上传图片或视频，传递数组则只能上传只能后缀的文件，数组内为文件后缀名 */
    suffix: {
      default() {
        return false;
      },
    },
  },
  components: { lybIcon },
  data() {
    return {
      fileList: [], //文件列表
      currrentIndex: null,
      select_show: true, //显示选择文件
    };
  },
  computed: {
    //#####··········根据传入的文件后缀，匹配图标文件名··········#####//
    fileIcon() {
      return function (suffix) {
        let img = 'jpg,jpeg,png,gif',
          music = 'mp3,ogg',
          video = 'mp4',
          txt = 'txt',
          pdf = 'pdf',
          word = 'doc,docx',
          excel = 'xls,xlsx',
          ppt = 'ppt,pptx',
          compress = 'zip,7z',
          software = 'exe,apk';
        if (img.includes(suffix)) return 'img';
        if (compress.includes(suffix)) return 'compress';
        if (excel.includes(suffix)) return 'excel';
        if (music.includes(suffix)) return 'music';
        if (pdf.includes(suffix)) return 'pdf';
        if (ppt.includes(suffix)) return 'ppt';
        if (software.includes(suffix)) return 'software';
        if (txt.includes(suffix)) return 'txt';
        if (video.includes(suffix)) return 'video';
        if (word.includes(suffix)) return 'word';
        return 'unknown';
      };
    },

    //#####··········文件列表是否存在上传成功的文件··········#####//
    existFinish() {
      return this.fileList.some((item) => {
        return item.isFinish;
      });
    },
  },
  methods: {
    //#####··········拖拽进入··········#####//
    dragover(e) {
      console.log('进入拖拽范围');
      e.preventDefault();
    },

    //#####··········结束拖拽··········#####//
    drop(e) {
      e.preventDefault();
      let file = [...e.dataTransfer.items].map((item) => {
        if (item.kind === 'file') {
          return item.getAsFile();
        }
      });
      if (file.length > 1) {
        if (this.multiple) {
          this.filePreview(file);
        } else {
          alert('只能选择一个文件');
        }
      } else {
        this.filePreview(file);
      }
    },

    //#####··········拖拽离开··········#####//
    dragleave() {
      console.log('拖拽离开');
    },

    //#####··········显示对图片进行的操作··········#####//
    show(id) {
      this.currrentIndex = id;
    },

    //#####··········删除图片··········#####//
    delImg(index) {
      this.select_show = true;
      //取消上传请求
      this.fileList[index].isUploading && this.fileList[index].cancel();
      this.fileList.splice(index, 1); //删除文件
      this.currrentIndex = null; //标识符重置
    },

    //#####··········文件选择完成后触发··········#####//
    filePreview(file = false) {
      //获取文件列表
      const fileList = file || this.$refs.file.files;
      let failFiles_suffix = [];
      let failFiles_size = [];
      let failFiles_suffix_pass = [];

      /* 文件类型验证 */
      [...fileList].forEach((item) => {
        if (this.suffix) {
          if ($urlFileType(item.name, this.suffix)) {
            failFiles_suffix_pass.push(item);
          } else {
            failFiles_suffix.push(item.name);
          }
        } else {
          failFiles_suffix_pass.push(item);
        }
      });
      if (failFiles_suffix.length) {
        alert(
          `只能上传图片，以下文件上传失败：\n${failFiles_suffix.join('\n')}`
        );
        failFiles_suffix = [];
      }
      /* 文件大小验证 */
      [...failFiles_suffix_pass].forEach((item) => {
        if (item.size > this.size * 1024 * 1024 && this.size !== 0) {
          failFiles_size.push(item.name);
        }
      });
      if (failFiles_size.length) {
        alert(
          `只能上传小于等于${
            this.size
          }MB的文件，以下文件上传失败：\n${failFiles_size.join('\n')}`
        );
        failFiles_size = [];
        failFiles_suffix_pass = [];
      }
      //用于匹配图标
      let icon = {
        compress: require('./icon/compress.svg'),
        excel: require('./icon/excel.svg'),
        music: require('./icon/music.svg'),
        pdf: require('./icon/pdf.svg'),
        ppt: require('./icon/ppt.svg'),
        software: require('./icon/software.svg'),
        txt: require('./icon/txt.svg'),
        unknown: require('./icon/unknown.svg'),
        video: require('./icon/video.svg'),
        word: require('./icon/word.svg'),
      };
      //通过循环，给文件对象添加相应属性（当前fileList不是一个真实数组，通过扩展运算符转换）
      [...fileList].forEach((item) => {
        if (this.suffix) {
          if (
            (item.size > this.size * 1024 * 1024 && this.size !== 0) ||
            !$urlFileType(item.name, this.suffix)
          )
            return;
        }

        this.select_show = false;
        //通过获取文件后缀判断文件类型
        let type = this.fileIcon($getFileSuf(item.name));
        //将文件主要信息单独存储
        this.fileList.push({
          id: this.fileList.length + new Date().getTime(), //文件 id
          name: item.name, //文件名称
          size: $fmtByte(item.size), //文件大小
          url: type == 'img' ? window.URL.createObjectURL(item) : icon[type], //用于图标显示
          time: new Date().getTime(), //上传时间
          pre: 0, //上传进度
          isUpload: false, //是否加入了上传队列
          isUploading: false, //是否处于上传中
          isFinish: false, //是否已经上传完成
          isFail: false, //是否已传失败
          cancel: null, //取消请求
          file: item, //初始文件信息，用于传给后端，以上为预览文件及上传功能使用
        });
      });

      this.uploadClick();
      /* 文件上传后清除输入框值，可重复上传 */
      this.$refs.file.value = '';
    },

    //#####··········点击开始上传后触发··········#####//
    async uploadClick() {
      //加入上传队列 (只有还未上传过的才能上传)
      this.fileList.forEach((item) => {
        if (item.isUpload === false) item.isUpload = true;
      });

      //同时满足不是上传失败的、不是上传成功的、不是正在上传的文件才可以进行上传

      while (
        this.fileList.some((item) => {
          return item.isUpload !== 1;
        })
      ) {
        //查找符合条件的文件进行上传
        let file = this.fileList.find((item) => {
          return item.isUpload !== 1;
        });

        //调用处理上传的函数
        await this.uploadFile(file);
      }
    },

    //#####··········上传文件接口··········#####//
    uploadFile(file) {
      return new Promise((resolve) => {
        file.isUploading = true; //处于上传中
        //用于后端
        const data = new FormData();
        data.append('file', file.file);
        //#调用接口
        axios
          .post(
            this.url,
            //设置添加的数据
            data,
            {
              //获取上传进度
              onUploadProgress(pre) {
                file.pre = Math.round((pre.loaded / pre.total) * 100) + '%';
              },

              //设置取消请求
              cancelToken: new axios.CancelToken((c) => {
                //调用指定文件的 cancel 函数则取消那个文件的上传请求
                file.cancel = c;
              }),
            }
          )
          .then((res) => {
            this.$emit('finish', res);
            resolve(res);
            file.cancel = null; //删除取消请求函数
            file.isFinish = true; //上传成功
            file.isUpload = 1; //退出上传队列
            file.isUploading = false; //非上传中
            file.pre = '100%'; //上传完成
          })
          .catch((err) => {
            this.$emit('finish', '上传失败');
            resolve(err.message == undefined ? '取消上传' : '上传失败');
            file.cancel = null; //删除取消请求函数
            file.pre = '100%'; //上传完成
            file.isFail = true; //上传失败
            file.isUpload = 1; //退出上传队列
            file.isUploading = false; //非上传中
          });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.Home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .imgBox {
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    margin: 0 5px 5px 0;
    overflow: hidden;
    border: 2px solid #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mask {
      display: flex;
      flex-direction: column;
      position: absolute;
      inset: 0;
      top: 0%;
      background-color: rgba(0, 0, 0, 0.582);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      overflow: hidden;
      span {
        width: 90%;
        text-align: center;
        &:nth-of-type(1) {
          color: #fff;
          font-size: 20px;
        }
        &:nth-of-type(2) {
          color: #ccc;
          font-size: 14px;
        }
        &:nth-of-type(3) {
          color: #aaa;
          font-size: 12px;
        }
      }
    }
    .finish {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      right: -17px;
      top: -7px;
      width: 46px;
      height: 26px;
      background-color: #13ce66;
      transform: rotate(45deg);
    }
    .operation {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      inset: 0;
      background: no-repeat url('./img/del.svg') center;
      background-size: 50%;
      background-color: rgba(0, 0, 0, 0.75);
      padding: 30%;
    }
  }

  .box1 {
    flex-shrink: 0;
    .select {
      width: 100px;
      height: 100px;
      border: 2px dashed #ccc;
      background: no-repeat url('./img/add.svg') center;
      background-size: 25%;
      &:hover {
        background-color: #eee;
      }
      &:active {
        background-color: #ddd;
      }
    }
  }
  .box2 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 25px 0;
    .operate {
      width: 100px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      .btn {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        font-size: 16px;
        color: #fff;
      }
      .btn1 {
        .btn();
        background-color: #409eff;
        &:hover {
          background-color: #66b1ff;
        }
        &:active {
          background-color: #3a8ee6;
        }
      }
      .btn2 {
        .btn();
        background-color: #ffbc40;
        &:hover {
          background-color: #ffc966;
        }
        &:active {
          background-color: #e6be3a;
        }
      }
      .btn3 {
        .btn();
        background-color: #ff4040;
        &:hover {
          background-color: #ff6666;
        }
        &:active {
          background-color: #e63a3a;
        }
      }
    }
  }
}

.failFc {
  color: #ff4040 !important;
}
.failBgc {
  background-color: #ce1313 !important;
}

/* 列表进入和删除动画 */
.del-enter {
  transform: rotate(360deg) scale(0);
  opacity: 0;
}
.del-leave-active {
  margin: 0 !important;
  padding: 0 !important;
  width: 0 !important;
  transform: rotate(-360deg) scaleY(0);
  overflow: hidden;
}

.del-enter-active,
.del-leave-active {
  transition: all 0.5s;
}
</style>
