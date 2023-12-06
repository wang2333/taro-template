import { request } from '@/utils/request';

export const add = () => {
  return request({
    url: '/api/user',
    method: 'get',
  });
};
