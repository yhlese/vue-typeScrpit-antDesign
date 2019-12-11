// eslint-disable-next-line
import { AxiosRequestConfig } from 'axios';
import service from '../axios';
import qs from 'qs';
// mock
const prefix = process.env.VUE_APP_API_PREFIX;

const USER_GET = (url: string, params = {}, config?: AxiosRequestConfig) =>
  service.get(`${prefix}${url}`, { params, ...config });
const USER_POST = (url: string, param = {}, config?: AxiosRequestConfig) =>
  service.post(`${prefix}${url}`, param, config);
const USER_PUT = (url: string, params = {}, config?: AxiosRequestConfig): any =>
  service.put(prefix + url, params, config);

/**
 * @description 登录相关接口
 */
/**
 * @description 请求验证码
 * @params img 没有img 生成二维码，有 img 获取图片地址
 * */
export function get_login_code_api(img?: number | string) {
  let url = img ? `${prefix}common/vercode/imgs/${img}` : USER_POST(`common/vercode/imgs`);
  return url;
}
