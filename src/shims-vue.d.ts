/**
 * @description 第三方 js 让 ts 识别
 */

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'echarts';
