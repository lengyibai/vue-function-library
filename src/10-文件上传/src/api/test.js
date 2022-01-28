import { getReq, postReq } from './network/request';

//#####··········POST请求··········!//
//####········文件上传········####//
export const upload = (data, other) => {
  return postReq('upload', '/deal/identify/0', data, other);
};

//#####··········GET请求··········!//
//####········电影列表········####//
export const getMovie = (page, other) => {
  return getReq(
    'movie',
    '/v1/filter/list',
    {
      catid: 1,
      rank: 'rankhot',
      cat: '',
      year: '',
      area: '',
      act: '',
      size: 35,
      pageno: page,
      callback: '',
    },
    other
  );
};
