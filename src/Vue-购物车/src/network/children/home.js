import { lyb } from './request';
//post请求
export const 修改年龄 = (id, age) => {
  return lyb({
    method: 'POST',
    url: '/api/v1/manager/member/auditMember',
    data: {
      id,
      age,
    },
  });
};

// get请求
export const 获取用户 = (id, page) => {
  return lyb({
    method: 'GET',
    url: '/api/v1/manager/member/memberList',
    params: {
      id,
      page,
    },
  });
};
