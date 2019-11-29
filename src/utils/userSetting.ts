import { userRoleConfig } from '@/config';
import store from '@/store';
import router from '@/router';
// const $cookies = require('vue-cookies');

/**
 * @description 用于处理不同角色存入不同的值
 */
function filterUser(role: number | string = store.state.userInfo.role): any {
  let _userItem: any = {};
  for (let key in userRoleConfig) {
    if (userRoleConfig[key].value === role) {
      _userItem = userRoleConfig[key];
      break;
    }
  }
  return _userItem;
}

// 截取code
function GetUrlParame(parameName: string) {
  // 获取地址栏指定参数的值
  const arr = location.href.match(new RegExp(`${parameName}=(.{1,50})(&[a-zA-Z]{1,})?`, 'i'));
  if (arr && arr.length > 1) {
    return arr[1].split('&')[0];
  }
  return '';
}

/**
 * @description 根据不同角色取不同 localStorage 的值
 */
function getLocalStorageInfo(userKey: string): any {
  return (userKey && localStorage[userKey] && JSON.parse(localStorage[userKey])) || {};
}

/**
 * @description 角色操作 主要是用于路由操作和获取登录状态的角色
 */
class roleInfoSetting {
  /**
   * @description 获取目前登录状态的角色
   */
  public static getRole(): number | string {
    return store.state.userInfo.role;
  }
  /**
   * @description 根据路由来设置角色
   * @param 如果有多个角色 请用特殊标识来判断
   * @returns 是否有token
   */
  public static setRole(role: number | string): Boolean {
    // 存入全局角色
    store.commit('user/setRole', role);
    let userKey: any = filterUser(role);
    return this.hasToken(userKey.key);
  }
  /**
   * @description 根据不同角色 获取不同token
   * @param  cookies 中存储的字段名
   * @returns 返回是否 cookies 中是否有该值
   */
  public static hasToken(key: number | string): Boolean {
    // return String($cookies.get(key)) !== 'null';
    return String(sessionStorage.getItem(String(key))) !== 'null';
  }
}

/**
 * @description 用户操作 主要是用于设置 获取
 */
class storeInfoSetting {
  /**
   * @description 设置用户信息
   * @param data
   * @param key
   */
  public static setInfo(data: any, key?: string): void {
    let userKey: string = filterUser().key;
    let info = getLocalStorageInfo(userKey);
    key
      ? typeof info[key] !== 'object'
        ? (info[key] = data)
        : (info[key] = { ...info[key], ...data })
      : (info = data);
    // 写入vuex
    store.commit('user/setInfo', info);
    // 写入localstorage
    localStorage.setItem(userKey, JSON.stringify(info));
  }
  /**
   * @description 获取用户信息
   */
  public static getInfo(): any {
    let userKey: string = filterUser().key;
    return getLocalStorageInfo(userKey);
  }
  /**
   * @description 设置 cookies
   */
  public static setCookies(token: string, role?: string | number): void {
    let userKey: string = filterUser(role).key;
    // $cookies.set(userKey, token);
    sessionStorage.setItem(userKey, token);
  }
  /**
   * @description 获取 cookies token
   */
  public static getCookies() {
    let userKey: string = filterUser().key;
    // return $cookies.get(userKey);
    return sessionStorage.getItem(userKey);
  }
  /**
   * @description 清除数据 cookies localStorages值
   */
  public static clearInfo(): void {
    let userKey = filterUser();
    localStorage[`${GetUrlParame('sysPlat')}-storeIndexPath`] = '';
    localStorage[`${GetUrlParame('sysPlat')}-seriecode`] = '';
    store.commit('user/setInfo', {});
    store.commit('user/setRole', userRoleConfig.companyUser.value);
    // $cookies.remove(userKey.key);
    sessionStorage.removeItem(userKey.key);
    router.replace(userKey.routerLoginName);
    localStorage.removeItem(userKey.key);
  }
}

/**
 * @description 退出登录
 */
function logOut(): void {
  // 删除cookie
  storeInfoSetting.clearInfo();
}
export { roleInfoSetting, storeInfoSetting, logOut, filterUser };
