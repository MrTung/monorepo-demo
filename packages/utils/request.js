/* eslint-disable */
/**
 * 业务请求
 * @param url: 请求地址
 * @param params: 业务请求的参数
 * @param options: 配置项
 * @param method: 请求方式
 */
export const request = ({ url, method }) => {
  return new Promise((resolve, reject) => {
    console.log(url, method);
    resolve({
      code: 1,
      data: {},
      msg: '请求成功11',
    });
  });
};

export default request;
