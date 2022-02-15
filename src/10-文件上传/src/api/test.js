import { postReq } from './network/request';

//#####··········POST请求··········!//
//####········文件上传········####//
export const upload = (data, other) => {
  return postReq('/deal/identify/0', data, other);
};
