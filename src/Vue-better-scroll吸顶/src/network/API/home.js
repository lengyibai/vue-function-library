import { server } from './request';
/* Post请求 */
export const 修改年龄 = (id, age) => {
  return server({
    method: 'POST',
    url: '/api/v1/manager/member/auditMember',
    data: {
      id,
      age,
    },
  });
};

/* Get请求 */
export const 获取用户 = (id, page) => {
  return server({
    method: 'GET',
    url: '/api/v1/manager/member/memberList',
    params: {
      id,
      page,
    },
  });
};
