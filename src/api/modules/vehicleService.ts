// eslint-disable-next-line
import { AxiosRequestConfig } from 'axios';
import service from '../axios';
import qs from 'qs';
const prefix = process.env.VUE_APP_API_VERSION; //  = /gmp/admin/api/v1/
const VHICLE_GET = (url: string, params = {}, config?: AxiosRequestConfig): any =>
  service.get(prefix + url, { params }, config);
const VHICLE_POST = (url: string, params = {}, config?: AxiosRequestConfig): any =>
  service.post(prefix + url, params, config);
const VHICLE_PUT = (url: string, params = {}, config?: AxiosRequestConfig): any =>
  service.put(prefix + url, params, config);
const VHICLE_DELETE = (url: string, params = {}, config?: AxiosRequestConfig): any =>
  service.delete(prefix + url, { params }, config);

export function access_getUserAc_menu_api(params = {}, config = {}) {
  return VHICLE_POST('access/getUserAc', params, config);
}

export function highlightsList(params = {}, config = {}) {
  return VHICLE_GET('vehicle/highlights/list', params, config);
}
export function highlightsEdit(params = {}, config = {}) {
  return VHICLE_PUT('vehicle/highlights/edit', params, config);
}
export function highlightsDelete(id: string) {
  return VHICLE_DELETE(`vehicle/highlights/${id}`);
}
