import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { get, merge } from 'lodash-es';

/** 退出登录并强制刷新页面（会重定向到登录页） */
function logout() {}

/** 创建请求实例 */
function createService() {
  // 创建一个 axios 实例命名为 service
  const service = axios.create();
  // 请求拦截
  service.interceptors.request.use(
    (config) => config,
    // 发送失败
    (error) => Promise.reject(error),
  );
  // 响应拦截（可根据具体业务作出相应的调整）
  service.interceptors.response.use(
    (response) => {
      const apiData = response.data;
      // 二进制数据则直接返回
      const responseType = response.request?.responseType;
      if (responseType === 'blob' || responseType === 'arraybuffer')
        return apiData;
      return apiData.data;
      // // 这个 code 是和后端约定的业务 code
      // const code = apiData.code
      // // 如果没有 code, 代表这不是项目后端开发的 api
      // if (code === undefined) {
      //   return Promise.reject(new Error('非本系统的接口'))
      // }
      // switch (code) {
      //   case 0:
      //     // 本系统采用 code === 0 来表示没有业务错误
      //     return apiData
      //   case 401:
      //     // Token 过期时
      //     return logout()
      //   default:
      //     // 不是正确的 code
      //     // ElMessage.error(apiData.message || 'Error')
      //     return Promise.reject(new Error('Error'))
      // }
    },
    (error) => {
      const status = get(error, 'response.status');
      switch (status) {
        case 400:
          error.message = '请求错误';
          break;
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
  return service;
}

/** 创建请求方法 */
function createRequest(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const token = '1212';
    const defaultConfig = {
      headers: {
        // 携带 Token
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
      },
      timeout: 5000,
      baseURL: '/',
      data: {},
    };
    console.log('👻 ~ defaultConfig:', defaultConfig);
    // 将默认配置 defaultConfig 和传入的自定义配置 config 进行合并成为 mergeConfig
    const mergeConfig = merge(defaultConfig, config);
    return service(mergeConfig);
  };
}

/** 用于网络请求的实例 */
const service = createService();
/** 用于网络请求的方法 */
export const request = createRequest(service);
