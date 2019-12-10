// eslint-disable-next-line
import { AxiosRequestConfig } from 'axios';
import service from '../axios';

const prefix = process.env.VUE_APP_API_INFRASTRUCTURE;

const INFRASTRUCTURE_GET = (url: string, params = {}, config?: AxiosRequestConfig) =>
  service.get(`${prefix}${url}`, { params, ...config });
const INFRASTRUCTURE_POST = (url: string, param = {}, config?: AxiosRequestConfig) =>
  service.post(`${prefix}${url}`, param, config);

// 上传临时文件 上传OSS 获取配置
export function upload_token() {
  return INFRASTRUCTURE_GET('file/upload_token');
}
// 短信验证码验证
export function sms_check_api(params = {}, config = {}) {
  return INFRASTRUCTURE_POST('sms/check', params, config);
}
// 短信验证码发送
export function sms_send_api(params = {}, config = {}) {
  return INFRASTRUCTURE_POST('sms/send', params, config);
}
