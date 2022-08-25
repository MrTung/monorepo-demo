/* eslint-disable */

import { http } from '@packages/utils';

// 获取信息
export const getData = () =>
  http({
    url: 'http://fenhaola.com/fhl/mine/account/get',
    method: 'POST',
  });
