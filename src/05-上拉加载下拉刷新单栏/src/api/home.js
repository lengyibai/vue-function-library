import { getReq } from './network/request.js';

//#####··········GET请求··········#####//
//@········电影列表········@//
export const getData = page => {
  return getReq('/v1/filter/list', {
    catid: 1,
    size: 35,
    pageno: page,
  });
};

export class GetData {
  constructor(data) {
    try {
      // 用于存储tab栏的数据
      this.data = [];
      class Data {
        constructor(data) {
          this.name = data.title;
        }
      }
      // 没有this的data是后端的数据
      this.data = data.map(item => {
        // 将数据里面的对象传入类中，并将类通过数组下标设置进存储tab栏的数据数组中
        return new Data(item);
      });
      //返回tab栏数组数据
      return this.data;
    } catch (error) {}
  }
}
